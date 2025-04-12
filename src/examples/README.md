## 基本用法範例 Basic usage examples

基本對話範例可以在這裡查看：https://github.com/marshal604/react-game-dialogue/tree/demo/src/pages/Basic

Basic dialogue examples can be found here: https://github.com/marshal604/react-game-dialogue/tree/demo/src/pages/Basic

## 最簡使用方式 Simplest Usage

```jsx
// 1. 引入元件和CSS (最重要!)
import { ReactGameDialogue } from '@marshal604/react-game-dialogue';
import '@marshal604/react-game-dialogue/dist/styles.css'; // 這非常重要！CSS樣式是必需的！

// 2. 配置並使用元件
function App() {
  return (
    <ReactGameDialogue 
      characters={characters}  // 角色配置
      dialogue={dialogue}      // 對話內容
      startScene="start"       // 起始場景
    />
  );
}
```

## CSS 主題樣式 CSS Theme Styles
CSS主題樣式可在此查看：https://github.com/marshal604/react-game-dialogue/blob/main/src/styles/theme.css

CSS theme styles can be viewed here: https://github.com/marshal604/react-game-dialogue/blob/main/src/styles/theme.css