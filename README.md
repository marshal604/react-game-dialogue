# React-Game-Dialogue

<p align="center">
  <img src="https://img.shields.io/badge/version-1.x.x-blue.svg" alt="version">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="license">
</p>

<p align="center">
  一個專為 React 應用開發的對話系統 UI 套件，提供類遊戲風格的對話介面<br>
  A dialogue system UI kit for React applications with game-style interface
</p>

---

## 介紹 Introduction

React-Game-Dialogue 是一個功能完整的 React 對話系統元件庫，專為建立互動式對話體驗而設計。無論是視覺小說、游戲對話、教學引導還是角色驅動的用戶界面，本套件都能提供令人印象深刻的對話流程。

React-Game-Dialogue is a comprehensive React dialogue system component library designed for creating interactive dialogue experiences. Whether for visual novels, game dialogues, onboarding tutorials, or character-driven interfaces, this library provides engaging conversation flows.

[📺 Live Demo](https://marshal604.github.io/react-game-dialogue/)

<p align="center">
  <img src="https://github.com/user-attachments/assets/a83847fe-1b9e-4274-8a46-fd8c9542d94f" alt="React-Game-Dialogue - 展示對話框、角色和選項介面" width="80%">
</p>

## ✨ 主要特性 Key Features

### 🖥️ 沉浸式顯示系統 Immersive Display System
- 組件初始化時自動佔滿整個視窗/容器 | Components automatically fill the entire container
- 響應式設計，適配不同屏幕尺寸 | Responsive design for all screen sizes

### 👥 角色配置系統 Character Configuration
- 支援設定角色信息（名稱、圖片、顏色等）| Support for character settings (name, images, colors)
- 多個表情/狀態的圖片管理 | Multiple emotion/state image management 
- 角色在對話中的位置控制 | Character positioning control

### 💬 對話框系統 Dialogue Box System
- 打字機效果逐字顯示文本 | Typewriter effect for text display
- 可調整文字顯示速度 | Adjustable text display speed
- 支援文字特效和停頓 | Support for text effects and pauses

### 🔄 選項系統 Choice System
- 支援對話選項分支 | Support for dialogue branching options
- 選項結果影響後續對話流程 | Choices affecting dialogue flow
- 條件性選項顯示 | Conditional option display

### 🎨 主題系統 Theme System
- 支援自定義主題配置 | Support for custom theme configuration

### 🏞️ 背景管理 Background Management
- 自定義背景圖片或顏色 | Custom background images or colors
- 背景轉場效果 | Background transition effects

### 🔌 事件鉤子系統 Event Hook System
- 完整的事件處理機制 | Comprehensive event handling
- 自定義事件處理和遊戲邏輯整合 | Custom game logic integration

---

## 📦 安裝 Installation

```bash
npm install react-game-dialogue
# 或/or
yarn add react-game-dialogue
```

## 📝 使用範例 Usage Examples

### 最簡使用方式 Simplest Usage
```jsx
// 1. 引入元件和CSS (最重要!)
import { ReactDialogic } from '@marshal604/react-game-dialogue';
import '@marshal604/react-game-dialogue/dist/styles.css'; // 這非常重要！CSS樣式是必需的！

// 2. 配置並使用元件
function App() {
  return (
    <ReactDialogic 
      characters={characters}  // 角色配置
      dialogue={dialogue}      // 對話內容
      startScene="start"       // 起始場景
    />
  );
}
```

### 程式碼範例 Code Examples
詳細範例代碼可在此查看：https://github.com/marshal604/react-game-dialogue/tree/main/src/examples

Detailed example code can be found here: https://github.com/marshal604/react-game-dialogue/tree/main/src/examples

### CSS 主題樣式 CSS Theme Styles
CSS主題樣式可在此查看：https://github.com/marshal604/react-game-dialogue/blob/main/src/styles/theme.css

CSS theme styles can be viewed here: https://github.com/marshal604/react-game-dialogue/blob/main/src/styles/theme.css

---

<details open>
<summary>🇬🇧 English Usage Guide</summary>

## Use Cases

React-Game-Dialogue is particularly well-suited for:

- **Visual novels and interactive games**: Create character dialogues and storyline branches
- **Tutorials and user onboarding**: Guide users through product features with character-driven tutorials
- **Interactive storytelling**: Create engaging story experiences
- **Character-driven user interfaces**: Personify your application interfaces
- **Educational applications**: Build interactive learning content
- **Customer service chat interfaces**: Develop personalized service chat interfaces
- **Product showcases**: Present product features through dialogue

## Support and Contribution

- **Issue reporting**: Submit issues on the GitHub Issues page
- **Feature requests**: Suggest new features
- **Code contributions**: Submit Pull Requests following contribution guidelines
- **Documentation improvements**: Help improve documentation

</details>

<details open>
<summary>🇹🇼 繁體中文使用指南</summary>

## 應用場景

React-Game-Dialogue 特別適合以下應用場景：

- **視覺小說和互動式遊戲**：建立角色對話和情節分支
- **教學引導和使用者導覽**：透過角色引導用戶了解產品功能
- **互動式故事敘述**：創建引人入勝的故事體驗
- **角色驅動的用戶介面**：將應用程式介面擬人化
- **教育應用**：建立互動式教學內容
- **客戶服務聊天界面**：開發有個性的客服對話介面
- **產品展示**：透過對話方式介紹產品特點

## 支援與貢獻

- **問題報告**：如發現問題，請在 GitHub Issues 頁面提交
- **功能請求**：歡迎提出新功能建議
- **代碼貢獻**：請參閱貢獻指南提交 Pull Request
- **文檔改進**：幫助我們完善文檔

</details>


---

## 相關連結 Links

- [NPM Package](https://www.npmjs.com/package/react-game-dialogue)
- [GitHub Repository](https://github.com/marshal604/react-game-dialogue)
- [Bug Report](https://github.com/marshal604/react-game-dialogue/issues)
- [Documentation](https://marshal604.github.io/react-game-dialogue/docs)
