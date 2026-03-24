# AboutSection 组件

## 架构说明
- 组件目录：app/components/AboutSection
- 功能：展示关于我信息的卡片片区
- 响应式布局：桌面2x2网格，移动端单列

## 文件说明
- AboutSection.vue：组件主文件，包含模板、脚本和样式引入
- AboutSection.less：组件单独样式文件
- AboutSection.md：组件说明文档

## 技术实现方案
- 通过 props 接收卡片标题、正文、兴趣标签与联系方式数组
- 使用 CSS grid 实现响应式布局
- 卡片 hover 效果： translateY + box-shadow
- 单独的 less 样式文件，组件内引入