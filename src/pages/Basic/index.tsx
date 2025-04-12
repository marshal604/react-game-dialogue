import { useState } from 'react';
import { ReactGameDialogue, SequenceItem, CharacterConfig, DialogueConfig } from '@marshal604/react-game-dialogue';
import { characters, dialogue } from './config';

function BasicExample() {
  const [currentCharacter, setCurrentCharacter] = useState<Record<string, CharacterConfig>>(characters);
  const [currentDialogue, setCurrentDialogue] = useState<DialogueConfig>(dialogue);

  // 事件處理函數
  const handleMessageStart = (item: SequenceItem) => {
    console.log('對話開始:', item);
  };
  
  const handleMessageEnd = (item: SequenceItem) => {
    console.log('對話結束:', item);
  };

  const handleSceneEnd = (item: SequenceItem) => {
    console.log('場景結束:', item);
  };

  const handleDialogueEnd = () => {
    alert('全部對話結束 / 重置對話');
    setCurrentCharacter({ ...characters });
    setCurrentDialogue({ ...dialogue });
  };

  return (
    <div className="app">
      <ReactGameDialogue 
        characters={currentCharacter}
        dialogue={currentDialogue}
        startScene="mountain"
        onMessageStart={handleMessageStart}
        onMessageEnd={handleMessageEnd}
        onSceneEnd={handleSceneEnd}
        onAllDialogueEnd={handleDialogueEnd}
      />
    </div>
  );
}

export default BasicExample; 