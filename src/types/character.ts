/**
 * 角色圖片配置
 */
export interface CharacterImages {
  /**
   * 默認狀態圖片
   */
  default: string;
  /**
   * 其他情緒/表情狀態圖片
   */
  [key: string]: string;
}

/**
 * 角色音頻配置
 */
export interface CharacterSounds {
  /**
   * 默認語音
   */
  default?: string;
  /**
   * 特定情緒/動作的音效
   */
  [key: string]: string | undefined;
}

/**
 * 角色配置
 */
export interface CharacterConfig {
  /**
   * 角色名稱
   */
  name: string;
  /**
   * 角色圖片集
   */
  images: CharacterImages;
  /**
   * 角色語音/音效（可選）
   */
  sounds?: CharacterSounds;
  /**
   * 角色對話文字顏色
   */
  textColor?: string;
  /**
   * 默認位置
   */
  defaultPosition?: 'left' | 'right' | 'center';
  /**
   * 文字顯示速度（毫秒/字符）
   */
  textSpeed?: number;
} 