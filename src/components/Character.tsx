import React, { useMemo } from 'react';
import { CharacterConfig } from '../types';
import styles from '../styles/Character.module.css';

interface CharacterProps {
  /**
   * 角色配置
   */
  config: CharacterConfig;
  /**
   * 情緒/表情
   */
  emotion?: string;
  /**
   * 位置
   */
  position?: 'left' | 'right' | 'center';
  /**
   * 是否活躍（說話中）
   */
  active?: boolean;
}

/**
 * 角色顯示組件
 */
export const Character: React.FC<CharacterProps> = ({
  config,
  emotion = 'default',
  position = 'center',
  active = true
}) => {
  // 根據情緒獲取圖片URL
  const imageUrl = useMemo(() => {
    return config.images[emotion] || config.images.default;
  }, [config.images, emotion]);

  // 根據位置設置樣式
  const positionStyle = useMemo(() => {
    switch (position) {
      case 'left':
        return {
          left: 'var(--dialogic-character-side-margin, 1rem)',
          right: 'auto',
          transform: 'translateX(0)',
        };
      case 'right':
        return {
          left: 'auto',
          right: 'var(--dialogic-character-side-margin, 1rem)',
          transform: 'translateX(0)',
        };
      default:
        return {
          left: '0',
          right: '0',
          margin: 'auto'
        };
    }
  }, [position]);

  // 根據活躍狀態設置樣式
  const activeClass = active ? 'opacity-100' : 'opacity-50';
  
  // 動畫類名
  const animationClass = active 
    ? styles.characterEnter 
    : styles.characterExit;

  return (
    <div
      className={`${styles.character} ${activeClass} ${animationClass} pointer-events-auto`}
      style={{
        position: 'absolute',
        height: position === 'center' ? 'auto' : '100%',
        display: 'flex',
        alignItems: 'flex-end',
        ...positionStyle
      }}
    >
      <img 
        src={imageUrl} 
        alt={config.name} 
        className={position === 'center' ? "w-full h-auto object-contain" : undefined }
      />
    </div>
  );
}; 