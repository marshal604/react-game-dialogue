import React from 'react';
import { Character } from './Character';
import { DialogBox } from './DialogBox';
import { ChoiceMenu } from './ChoiceMenu';
import { Background } from './Background';
import { useDialog } from '../context/DialogContext';
import styles from '../styles/DialogicContainer.module.css';

/**
 * 對話系統主組件
 */
export const DialogSystem: React.FC = () => {
  const {
    scene,
    item,
    character,
    background,
    handleNext,
    handleChoiceSelect,
    handleTypingComplete
  } = useDialog();

  // 如果沒有當前場景或對話項，則不渲染
  if (!scene || !item) {
    return null;
  }

  const onNext = () => {
    handleNext();
  };

  return (
    <div className={`${styles.container} flex flex-col`} style={{ userSelect: 'none' }}>
      {/* 背景 */}
      <Background src={background || undefined} />

      {/* 角色顯示區域 */}
      <div className={styles.charactersContainer}>
        {character && (
          <Character
            config={character}
            emotion={item.emotion}
            position={item.position || character.defaultPosition}
            active={true}
          />
        )}
      </div>

      {/* 選項 */}
      {item.choices && (
        <ChoiceMenu
          choices={item.choices}
          onSelect={handleChoiceSelect}
        />
      )}

      {/* 底部區域：對話框 */}
      <div className={styles.dialogArea}>
        <div className="w-full max-w-5xl mx-auto px-4 mb-4">
          <DialogBox
            name={character?.name}
            text={item.text}
            textColor={character?.textColor}
            onNext={onNext}
            onTypingComplete={handleTypingComplete}
          />
        </div>
      </div>
    </div>
  );
}; 