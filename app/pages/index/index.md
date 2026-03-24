# Index 页面

## 架构说明
- 页面目录：app/pages/index
- 功能：首页，拼装 Navbar、Hero、AboutSection、ChatSection 和 Footer
- 布局：垂直排列的单页应用结构

## 文件说明
- index.vue：页面主文件，包含模板、脚本和样式引入
- index.less：页面单独样式文件
- index.md：页面说明文档

## 技术实现方案
- 使用 `script setup` 维护页面所需数据
- 按顺序渲染各个组件：Navbar -> Hero -> AboutSection -> ChatSection -> Footer
- 将 socialLinks 通过 props 传递给 AboutSection 组件
- 单独的 less 样式文件，页面内引入