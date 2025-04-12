import React from 'react';
import { DialogContextProvider } from '../context/DialogContext';
import { DialogSystem } from './DialogSystem';
import { DialogueConfig, CharacterConfig, SequenceItem } from '../types';

export interface ReactGameDialogueProps {
  /**
   * 角色配置集合
   */
  characters: Record<string, CharacterConfig>;
  /**
   * 對話配置
   */
  dialogue: DialogueConfig;
  /**
   * 起始場景
   */
  startScene: string;
  /**
   * 對話開始的回調
   */
  onMessageStart?: (item: SequenceItem) => void;
  /**
   * 對話結束的回調
   */
  onMessageEnd?: (item: SequenceItem) => void;
  /**
   * 場景結束的回調
   */
  onSceneEnd?: (item: SequenceItem) => void;
  /**
   * 全部對話結束的回調
   */
  onAllDialogueEnd?: () => void;
}

/**
 * React Dialogic 統一入口組件
 * 將 DialogContextProvider 和 DialogSystem 封裝在一起，提供更簡單的使用方式
 */
export const ReactGameDialogue: React.FC<ReactGameDialogueProps> = ({
  characters,
  dialogue,
  startScene,
  onMessageStart,
  onMessageEnd,
  onSceneEnd,
  onAllDialogueEnd
}) => {
  return (
    <DialogContextProvider
      characters={characters}
      dialogue={dialogue}
      startScene={startScene}
      onMessageStart={onMessageStart}
      onMessageEnd={onMessageEnd}
      onSceneEnd={onSceneEnd}
      onAllDialogueEnd={onAllDialogueEnd}
    >
      <DialogSystem />
    </DialogContextProvider>
  );
};
