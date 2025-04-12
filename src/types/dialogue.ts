/**
 * 選項類型定義
 */
export interface Choice {
  /**
   * 選項顯示文本
   */
  text: string;
  /**
   * 選項圖標（可選）
   */
  icon?: string;
  /**
   * 選擇後跳轉的場景ID
   */
  next?: string;
}

/**
 * 序列中的單個項目
 */
export interface SequenceItem {
  /**
   * 對話文本內容
   */
  text: string;
  /**
   * 說話角色的ID（不設置則為旁白）
   */
  speaker?: string;
  /**
   * 角色情緒/表情
   */
  emotion?: string;
  /**
   * 角色在畫面中的位置（左/右/中）
   */
  position?: 'left' | 'right' | 'center';
  /**
   * 背景圖片路徑（可在序列中途變更）
   */
  background?: string;
  /**
   * 對話選項列表
   */
  choices?: Choice[];
  /**
   * 音效路徑
   */
  sound?: string;
  /**
   * 對話框樣式覆蓋
   */
  style?: Record<string, any>;
  /**
   * 對話結束後跳轉的場景ID
   */
  next?: string;
}

/**
 * 場景定義
 */
export interface Scene {
  /**
   * 場景背景圖片
   */
  background: string;
  /**
   * 對話序列
   */
  sequence: SequenceItem[];
}

/**
 * 對話系統配置
 */
export interface DialogueConfig {
  /**
   * 所有場景的集合
   */
  [key: string]: Scene;
}