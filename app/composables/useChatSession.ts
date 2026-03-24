// input: none（由 ChatSection 通过传入文本/监听事件触发发送）
// output: 会话状态（messages/draft/isAssistantTyping）与 send 方法
// description: v1.0 离线关键词匹配聊天会话管理
import { ref } from 'vue'
import { matchQuestion } from './useChatKeywords'

export type ChatRole = 'user' | 'assistant'

export interface ChatMessage {
  id: string
  role: ChatRole
  content: string
  createdAt: number
}

function uid() {
  // browser/edge safe
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return (crypto as Crypto).randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function useChatSession() {
  const messages = ref<ChatMessage[]>([
    {
      id: uid(),
      role: 'assistant',
      content: '你好！我是林安的数字分身。你可以问：现在在做什么？有什么作品？怎么联系你？',
      createdAt: Date.now(),
    },
  ])

  const draft = ref('')
  const isAssistantTyping = ref(false)
  const isSending = ref(false)

  function push(role: ChatRole, content: string) {
    messages.value.push({
      id: uid(),
      role,
      content,
      createdAt: Date.now(),
    })
  }

  function send(raw?: string) {
    if (isSending.value) return

    const text = (raw ?? draft.value).trim()
    if (!text) return

    // 发送锁
    isSending.value = true
    draft.value = ''

    // 用户消息入场
    push('user', text)

    // 打字指示器开
    isAssistantTyping.value = true

    const delayMs = 700 + Math.floor(Math.random() * 700)
    window.setTimeout(() => {
      const { answer } = matchQuestion(text)
      push('assistant', answer)
      isAssistantTyping.value = false
      isSending.value = false
    }, delayMs)
  }

  return {
    messages,
    draft,
    isAssistantTyping,
    isSending,
    send,
  }
}

