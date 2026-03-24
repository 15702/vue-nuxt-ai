useChatSession：聊天会话状态管理（消息、输入、打字指示器、发送流程）。
功能：对外提供 `messages`/`draft`/`isAssistantTyping`/`send` 等能力，配合 UI 渲染。
内部使用 useChatKeywords 完成离线关键词回答。

技术实现方案：
- 状态：`messages`（带 id/role/content/createdAt）+ `draft` + `isAssistantTyping` + `isSending`。
- 发送流程：用户消息 push -> 打字指示器打开 -> setTimeout 模拟思考 -> `matchQuestion` 生成 assistant 文本后写入消息并关闭指示器。
