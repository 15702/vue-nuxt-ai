`app/composables`：可复用的业务逻辑。
`useChatKeywords.ts`：关键词问答匹配引擎（返回分类与答案）。
`useChatSession.ts`：会话状态管理（messages/draft/typing/sending）并调用 `useChatKeywords` 生成回复。
