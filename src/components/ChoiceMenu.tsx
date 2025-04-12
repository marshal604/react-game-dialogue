import React from 'react';
import { Choice } from '../types';
import styles from '../styles/ChoiceMenu.module.css';

interface ChoiceMenuProps {
  /**
   * 選項列表
   */
  choices: Choice[];
  /**
   * 選擇選項的回調
   */
  onSelect: (next?: string) => void;
}

/**
 * 選項菜單組件
 */
export const ChoiceMenu: React.FC<ChoiceMenuProps> = ({ choices, onSelect }) => {
  return (
    <div className={styles.choices}>
      {choices.map((choice, index) => (
        <button
          key={`choice-${index}`}
          className={styles.choiceItem}
          onClick={() => onSelect(choice.next)}
        >
          {choice.icon && (
            <span className="mr-2">{choice.icon}</span>
          )}
          <span>{choice.text}</span>
        </button>
      ))}
    </div>
  );
}; 