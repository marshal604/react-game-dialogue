import { useState, useEffect, useCallback } from 'react';

interface TypewriterOptions {
  /**
   * 打字速度（毫秒/字符）
   */
  speed?: number;
  /**
   * 是否開始打字
   */
  startTyping?: boolean;
  /**
   * 打字完成時的回調
   */
  onComplete?: () => void;
  /**
   * 標點符號停頓時間（毫秒）
   */
  punctuationDelay?: Record<string, number>;
}

/**
 * 打字機效果鉤子
 * @param text 要顯示的文本
 * @param options 選項
 */
export function useTypewriter(text: string, options: TypewriterOptions = {}) {
  const {
    speed = 30,
    startTyping = true,
    onComplete,
    punctuationDelay = {
      ',': 150,
      '.': 300,
      '!': 300,
      '?': 300,
      ';': 200,
      ':': 200
    }
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 立即完成打字
  const complete = useCallback(() => {
    setDisplayText(text);
    setCurrentIndex(text.length);
    setIsComplete(true);
    onComplete?.();
  }, [text, onComplete]);

  // 打字效果的核心邏輯
  useEffect(() => {
    if (!startTyping || isComplete) return;
    
    // 如果文本為空，直接標記為完成
    if (text.length === 0) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    // 如果當前索引已經到達文本末尾，標記為完成
    if (currentIndex >= text.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    // 獲取當前要顯示的字符
    const char = text[currentIndex];
    
    // 獲取字符的延遲時間（標點符號可能有特殊延遲）
    const delay = punctuationDelay[char] || speed;

    // 設置定時器顯示下一個字符
    const timeout = setTimeout(() => {
      setDisplayText(text.substring(0, currentIndex + 1));
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [
    text,
    currentIndex,
    speed,
    startTyping,
    isComplete,
    onComplete,
    punctuationDelay
  ]);

  // 重置打字效果
  const reset = useCallback(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
  }, []);

  // 當文本變化時，重置打字效果
  useEffect(() => {
    reset();
  }, [text, reset]);

  return {
    displayText,
    isComplete,
    complete,
    reset
  };
} 