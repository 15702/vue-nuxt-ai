// input: user input string
// output: matched category + answer text (offline keyword matching)
// description: 关键词问答匹配引擎（v1.0）
export type ChatCategory =
  | 'doing'
  | 'works'
  | 'contact'
  | 'strengths'
  | 'interests'
  | 'background'
  | 'ai'
  | 'greeting'
  | 'about'

export interface MatchResult {
  category: ChatCategory | null
  answer: string
}

type CategoryDefinition = {
  category: ChatCategory
  keywords: string[]
  answer: string
}

const persona = {
  name: '林安',
  avatarLetter: '林',
}

const categories: CategoryDefinition[] = [
  {
    category: 'doing',
    keywords: ['做什么', '在做', '最近', '忙', '工作', '现在在做什么'],
    answer:
      '我正在搭建这个个人主页，整理作品集、梳理写作方向；同时也在学习用 AI 做产品，把想法落到可交付的内容与体验里。',
  },
  {
    category: 'works',
    keywords: ['作品', '项目', '案例', '做过', '做过的', '有哪些'],
    answer:
      '目前我正在把“个人主页 + 内容整理”这类作品继续完善。你也可以告诉我你想看的方向（内容表达/AI应用/知识整理），我再按主题给你补充更贴近的案例。',
  },
  {
    category: 'contact',
    keywords: ['联系', '邮箱', '微信', '方式', '怎么联系', '怎么找你'],
    answer:
      '你可以通过页面底部“联系方式”卡片里的链接联系我（目前占位信息，后续可替换成真实邮箱/微信/站点）。如果你愿意，也可以直接告诉我你的问题，我再帮你组织回复要点。',
  },
  {
    category: 'strengths',
    keywords: ['擅长', '优势', '强项', '技能', '我有什么', '能做什么'],
    answer:
      '我擅长内容表达、AI 应用和知识整理，喜欢把复杂问题讲成人话，并用清晰的结构把想法变成可理解、可行动的方案。',
  },
  {
    category: 'interests',
    keywords: ['兴趣', '爱好', '喜欢', '想做', '方向', '感兴趣'],
    answer:
      '我对 AI 应用、写作、旅行和内容策划都很感兴趣。更具体点，我喜欢把“学习中的东西”变成“能被别人快速理解的内容”。',
  },
  {
    category: 'background',
    keywords: ['背景', '经历', '学历', '履历', '之前', '学过'],
    answer:
      '我目前的公开信息以“内容策划 + 持续学习 AI/产品”为主。你如果想了解更详细的经历，可以直接联系我，我可以按你的关注点补充具体项目与时间线。',
  },
  {
    category: 'ai',
    keywords: ['AI', '人工智能', '大模型', '模型', '通义', 'kimi'],
    answer:
      '我在学习如何把大模型用在真实产品里：从“需求->结构->表达->可用性”一步步把 AI 能力变成用户体验。你也可以直接问你关心的场景，我会用人话解释怎么做。',
  },
  {
    category: 'greeting',
    keywords: ['你好', 'hi', 'hello', '在吗', 'hey', '嗨'],
    answer: `你好！我是${persona.name}的数字分身。你想先了解我现在在做什么、作品，还是怎么联系我？`,
  },
  {
    category: 'about',
    keywords: ['谁', '是谁', '介绍', '什么人', '你是谁', '你是谁呢', '关于你'],
    answer:
      '我是林安：内容策划，同时正在学习用 AI 做产品。我的目标是把复杂的思考整理成清晰、好读、能落地的内容与方案。',
  },
]

function normalizeInput(input: string) {
  // 轻量预处理：去空白 + 英文小写（中文不受影响）
  return input.trim().toLowerCase()
}

export function matchQuestion(input: string): MatchResult {
  const text = normalizeInput(input)
  if (!text) {
    return {
      category: null,
      answer: '先跟我打个招呼也行。你可以问：你现在在做什么？有什么作品？怎么联系你？',
    }
  }

  let best: CategoryDefinition | null = null
  let bestScore = 0

  for (const c of categories) {
    let score = 0
    for (const kw of c.keywords) {
      if (kw && text.includes(kw.toLowerCase())) score += 1
    }

    if (score > bestScore) {
      bestScore = score
      best = c
    }
  }

  if (!best || bestScore === 0) {
    return {
      category: null,
      answer:
        '我目前主要基于“个人主页信息”做离线关键词回答。你可以试试问：现在在做什么/有哪些作品/怎么联系我。如果你想了解更细节，建议直接联系林安本人。',
    }
  }

  return {
    category: best.category,
    answer: best.answer,
  }
}

