import React, { useEffect, useState } from 'react';
import styles from '../styles/DialogicContainer.module.css';

interface BackgroundProps {
  /**
   * 背景圖片URL
   */
  src?: string;
  /**
   * 背景顏色（無圖片時使用）
   */
  color?: string;
  /**
   * 淡入淡出的過渡時間（毫秒）
   */
  transitionDuration?: number;
}

/**
 * 背景組件
 */
export const Background: React.FC<BackgroundProps> = ({
  src,
  color = 'transparent',
  transitionDuration = 500
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [previousSrc, setPreviousSrc] = useState<string | undefined>(undefined);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // 當背景變化時觸發過渡效果
  useEffect(() => {
    if (src !== currentSrc) {
      setPreviousSrc(currentSrc);
      setCurrentSrc(src);
      setIsTransitioning(true);
      
      // 過渡結束後清除舊背景
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setPreviousSrc(undefined);
      }, transitionDuration);
      
      return () => clearTimeout(timer);
    }
  }, [src, currentSrc, transitionDuration]);

  // 背景樣式
  const backgroundStyle = (imageSrc?: string) => ({
    position: 'absolute' as const,
    inset: 0,
    backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
    backgroundColor: !imageSrc ? color : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: `opacity ${transitionDuration}ms ease-in-out`,
    zIndex: -1
  });

  return (
    <>
      {/* 當前背景 */}
      <div
        className={styles.background}
        style={{
          ...backgroundStyle(currentSrc),
          opacity: 1
        }}
      />
      
      {/* 過渡中的舊背景 */}
      {isTransitioning && previousSrc && (
        <div
          className={styles.background}
          style={{
            ...backgroundStyle(previousSrc),
            opacity: 0
          }}
        />
      )}
    </>
  );
}; 