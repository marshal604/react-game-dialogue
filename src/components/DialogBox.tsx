import React, { useEffect } from 'react';
import { useTypewriter } from '../hooks';
import styles from '../styles/DialogBox.module.css';

interface DialogBoxProps {
  /**
   * 角色名稱
   */
  name?: string;
  /**
   * 對話文本
   */
  text: string;
  /**
   * 文字顏色
   */
  textColor?: string;
  /**
   * 是否顯示打字效果
   */
  isTyping?: boolean;
  /**
   * 打字速度（毫秒/字符）
   */
  typingSpeed?: number;
  /**
   * 打字完成的回調
   */
  onTypingComplete?: () => void;
  /**
   * 點擊下一步的回調
   */
  onNext?: () => void;
}

/**
 * 對話框組件
 */
export const DialogBox: React.FC<DialogBoxProps> = ({
  name,
  text,
  textColor,
  isTyping = true,
  typingSpeed,
  onTypingComplete,
  onNext
}) => {
  const { displayText, isComplete, complete } = useTypewriter(text, {
    speed: typingSpeed || 40, // 預設值，CSS變量會在樣式中生效
    startTyping: isTyping,
    onComplete: onTypingComplete
  });

  // 如果不需要打字效果，則直接顯示全部文本
  useEffect(() => {
    if (!isTyping) {
      complete();
    }
  }, [isTyping, complete]);

  // 處理點擊事件
  const handleClick = () => {
    if (!isComplete) {
      complete();
    } else {
      onNext?.();
    }
  };

  // 處理按鍵事件
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  };

  return (
    <div
      className={styles.dialogBox}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label="繼續對話"
    >
      {name && (
        <div
          className={styles.characterName}
          style={textColor ? { color: textColor } : undefined}
        >
          {name}
        </div>
      )}
      <div className={styles.dialogText}>
        {displayText}
      </div>
      {isComplete && (
        <div className={styles.continueIndicator}>
          ▼
        </div>
      )}
    </div>
  );
}; 