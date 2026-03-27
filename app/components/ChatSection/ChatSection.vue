<!-- input: 聊天会话（messages/draft/typing/sending）来自 useChatSession -->
<!-- output: 数字分身离线关键词聊天 UI -->
<!-- description: 展示消息气泡、打字指示器、快捷提问与输入发送（v1.0） -->
<template>
  <section class="chat">
    <div class="inner">
      <div class="chat-card">
        <header class="chat-header">
          <div class="chat-title">
            刘豪的数字分身
            <span class="ai-badge">AI</span>
          </div>
          <div class="chat-subtitle">可以问我关于刘豪的问题</div>
        </header>

        <div ref="messagesRef" class="messages" aria-live="polite">
          <div
            v-for="m in messages"
            :key="m.id"
            class="row"
            :class="m.role === 'user' ? 'row-user' : 'row-assistant'"
          >
            <div class="bubble" :class="m.role === 'user' ? 'bubble-user' : 'bubble-assistant'">
              {{ m.content }}
            </div>
          </div>

          <div v-if="isAssistantTyping" class="row row-assistant">
            <div class="bubble bubble-assistant typing-bubble">
              <div class="typing">
                <span class="dot" />
                <span class="dot" />
                <span class="dot" />
              </div>
            </div>
          </div>

          <div v-if="isAILoading" class="row row-assistant">
            <div class="bubble bubble-assistant">
              <span class="loading-text">AI正在思考...</span>
            </div>
          </div>

          <div ref="endRef" class="end" />
        </div>

        <div class="quick">
          <button
            v-for="q in quickQuestions"
            :key="q"
            class="quick-btn"
            type="button"
            :disabled="isAssistantTyping || isSending || isAILoading"
            @click="send(q)"
          >
            {{ q }}
          </button>
        </div>

        <div class="composer">
          <input
            v-model="draft"
            class="input"
            type="text"
            placeholder="输入你的问题，按 Enter 发送..."
            :disabled="isAssistantTyping || isSending || isAILoading"
            @keydown.enter.prevent="send()"
          />
          <button
            class="send-btn"
            type="button"
            :disabled="isAssistantTyping || isSending || isAILoading || !draft.trim()"
            @click="send()"
          >
            发送
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { useChatSession } from '../../composables/useChatSession'

const { apiMessage } = useApi()
const { messages, draft, isAssistantTyping, isSending, isAILoading, send } = useChatSession()

const endRef = ref<HTMLElement | null>(null)
const messagesRef = ref<HTMLElement | null>(null)

const quickQuestions = ['你现在在做什么？', '你有哪些作品？', '怎么联系你？']

async function scrollToEnd() {
  await nextTick()
  if (messagesRef.value) {
    messagesRef.value.scrollTop = messagesRef.value.scrollHeight
  }
}

watch(
  () => messages.value.length,
  () => {
    scrollToEnd()
  },
)

watch(
  () => isAssistantTyping.value,
  (v) => {
    if (v) scrollToEnd()
  },
)
</script>

<style lang="less" scoped>
@import './ChatSection.less';
</style>