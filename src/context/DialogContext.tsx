import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect, useMemo } from 'react';
import { SequenceItem, DialogueConfig, CharacterConfig, Scene } from '../types';
import { imagePreloader } from '../utils/imagePreloader';

interface DialogContextType {
  // 已處理好的當前場景
  scene: Scene | null;
  // 已處理好的當前對話項
  item: SequenceItem | null;
  // 當前顯示的角色（如果有）
  character: CharacterConfig | null;
  // 當前背景
  background: string | null;
  // 處理下一步
  handleNext: () => void;
  // 處理選項選擇
  handleChoiceSelect: (next?: string) => void;
  // 處理打字完成
  handleTypingComplete: () => void;
}

const defaultContext: DialogContextType = {
  scene: null,
  item: null,
  character: null,
  background: null,
  handleNext: () => {},
  handleChoiceSelect: () => {},
  handleTypingComplete: () => {}
};

const DialogContext = createContext<DialogContextType>(defaultContext);

interface DialogProviderProps {
  children: ReactNode;
  dialogue: DialogueConfig;
  characters: Record<string, CharacterConfig>;
  startScene?: string;
  onMessageStart?: (item: SequenceItem) => void;
  onMessageEnd?: (item: SequenceItem) => void;
  onSceneEnd?: (item: SequenceItem) => void;
  onAllDialogueEnd?: () => void;
}

/**
 * 對話系統上下文提供者
 */
export const DialogContextProvider: React.FC<DialogProviderProps> = ({
  children,
  dialogue,
  characters,
  startScene,
  onMessageStart,
  onMessageEnd,
  onSceneEnd,
  onAllDialogueEnd
}) => {
  const [currentScene, setCurrentScene] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
  
  // 獲取當前場景
  const scene = useMemo(() => {
    if (!currentScene || !dialogue[currentScene]) return null;
    return dialogue[currentScene];
  }, [currentScene, dialogue]);
  
  // 獲取當前對話項
  const item = useMemo(() => {
    if (!scene || !scene.sequence || currentIndex >= scene.sequence.length) return null;
    return scene.sequence[currentIndex];
  }, [scene, currentIndex]);
  
  // 獲取當前角色
  const character = useMemo(() => {
    if (!item || !item.speaker || !characters[item.speaker]) return null;
    return characters[item.speaker];
  }, [item, characters]);
  
  // 獲取背景圖片
  const background = useMemo(() => {
    if (!scene) return null;
    // 優先使用當前對話項的背景，其次使用場景背景
    return (item && item.background) || scene.background || null;
  }, [scene, item]);

  /**
   * 預載場景中的所有圖片
   */
  const preloadSceneImages = (
    sceneId: string, 
    dialogue: DialogueConfig, 
    characters: Record<string, CharacterConfig>
  ) => {
    const scene = dialogue[sceneId];
    if (!scene) return;

    const imagesToPreload: string[] = [];
    
    // 添加場景背景
    if (scene.background) {
      imagesToPreload.push(scene.background);
    }
    
    // 添加所有對話項中的背景和角色圖片
    scene.sequence.forEach(item => {
      // 背景圖片
      if (item.background) {
        imagesToPreload.push(item.background);
      }
      
      // 角色圖片
      if (item.speaker && characters[item.speaker]) {
        const character = characters[item.speaker];
        const emotion = item.emotion || 'default';
        
        // 添加角色當前情緒的圖片
        if (character.images[emotion]) {
          imagesToPreload.push(character.images[emotion]);
        }
        
        // 如果情緒不是default，同時預載default圖片作為備用
        if (emotion !== 'default' && character.images.default) {
          imagesToPreload.push(character.images.default);
        }
      }
    });
    
    // 預載下一個可能的場景
    scene.sequence.forEach(item => {
      if (item.next && dialogue[item.next]) {
        // 只預載下一個場景的背景圖片
        const nextScene = dialogue[item.next];
        if (nextScene.background) {
          imagesToPreload.push(nextScene.background);
        }
      }

      // 預載選項可能跳轉的場景背景
      if (item.choices) {
        item.choices.forEach(choice => {
          if (choice.next && dialogue[choice.next]) {
            const nextScene = dialogue[choice.next];
            if (nextScene.background) {
              imagesToPreload.push(nextScene.background);
            }
          }
        });
      }
    });
    
    // 執行圖片預載
    imagePreloader.preloadImages(imagesToPreload)
      .catch(error => console.error('Failed to preload images:', error));
  };

  // 當對話項變化時觸發onMessageStart
  const handleSequenceChange = useCallback((sceneId: string, index: number) => {
    // 預載當前場景圖片
    preloadSceneImages(sceneId, dialogue, characters);
    
    setCurrentScene(sceneId);
    setCurrentIndex(index);
    setIsTypingComplete(false);
    
    const scene = dialogue[sceneId];
    if (scene && scene.sequence && scene.sequence[index] && onMessageStart) {
      onMessageStart(scene.sequence[index]);
    }
  }, [dialogue, characters, onMessageStart]);

  // 完成打字效果時觸發onMessage
  const handleTypingComplete = useCallback(() => {
    setIsTypingComplete(true);
    if (item && onMessageEnd) {
      onMessageEnd(item);
    }
  }, [item, onMessageEnd]);

  // 前進到下一個對話項
  const handleNext = useCallback(() => {
    if (!scene || !item) return;

    // 如果打字效果未完成，則完成打字效果
    if (!isTypingComplete) {
      handleTypingComplete();
      return;
    }

    // 檢查是否有選項
    if (item.choices) {
      // 有選項則等待用戶選擇，不自動前進
      return;
    }

    // 檢查是否是序列中的最後一項
    if (currentIndex < scene.sequence.length - 1) {
      // 移動到序列中的下一項
      handleSequenceChange(currentScene!, currentIndex + 1);
    } 
    // 如果是序列的最後一項且沒有選項，則對話結束
    else {
      if (onSceneEnd) {
        onSceneEnd(item);
      }

      if (item.next) {
        handleSequenceChange(item.next, 0);
      } else {        
        // 重置當前場景和索引，使對話框消失
        setCurrentScene(null);
        setCurrentIndex(0);
        setIsTypingComplete(false);
        // 如果沒有下一個場景，則整個對話結束
        if (onAllDialogueEnd) {
          onAllDialogueEnd();
        }
      }
    }
  }, [currentScene, currentIndex, scene, item, isTypingComplete, handleTypingComplete, handleSequenceChange, onSceneEnd, onAllDialogueEnd]);

  // 選擇對話選項
  const handleChoiceSelect = useCallback((next?: string) => {
    // 跳轉到指定的場景
    if (next) {
      handleSequenceChange(next, 0);
      return;
    }
    
    handleSequenceChange(currentScene!, currentIndex + 1);
  }, [handleSequenceChange, currentScene, currentIndex]);


  // 初始化時設置起始場景
  useEffect(() => {
    if (startScene) {
      handleSequenceChange(startScene, 0)
    }
  }, [startScene, dialogue, handleSequenceChange]);

  return (
    <DialogContext.Provider
      value={{
        scene,
        item,
        character,
        background,
        handleNext,
        handleChoiceSelect,
        handleTypingComplete
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

/**
 * 使用對話系統的Hook
 */
export const useDialog = () => useContext(DialogContext); 