# ChatSection 组件

## 架构说明
- 组件目录：app/components/ChatSection
- 功能：数字分身离线关键词聊天界面
- 主要特性：消息气泡展示、打字指示器、快捷提问、输入发送

## 文件说明
- ChatSection.vue：组件主文件，包含模板、脚本和样式引入
- ChatSection.less：组件单独样式文件
- ChatSection.md：组件说明文档

## 技术实现方案
- 使用 useChatSession 组合式函数管理聊天状态
- 消息气泡左右对齐（用户右对齐，助手左对齐）
- 新气泡使用 bubbleIn 动画效果
- 打字指示器使用 CSS 三点跳动动画
- 发送消息后自动滚动到底部
- 单独的 less 样式文件，组件内引入