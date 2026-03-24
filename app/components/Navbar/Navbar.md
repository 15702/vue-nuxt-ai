# Navbar 组件

## 架构说明
- 组件目录：app/components/Navbar
- 功能：顶部导航栏，具有粘性和毛玻璃效果
- 设计特点：品牌区展示，左侧圆点与文字使用特殊字体

## 文件说明
- Navbar.vue：组件主文件，包含模板、脚本和样式引入
- Navbar.less：组件单独样式文件
- Navbar.md：组件说明文档

## 技术实现方案
- 使用 `<header>` 作为粘性容器
- CSS 通过 `backdrop-filter: blur(...)` 实现毛玻璃效果
- 内部品牌区用 flex 排版
- 左侧圆点与文字使用 JetBrains Mono 字体以增强辨识度
- 单独的 less 样式文件，组件内引入