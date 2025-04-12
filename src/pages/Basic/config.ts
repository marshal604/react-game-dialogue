import { CharacterConfig, DialogueConfig } from '@marshal604/react-game-dialogue';
import 楊過 from './images/楊過.png'
import 小龍女 from './images/小龍女.png'
import 矇眼的小龍女 from './images/矇眼的小龍女.png'
import 歐陽鋒 from './images/歐陽鋒.png'
import 尹志平 from './images/尹志平.png'
import 草原背景 from './images/草原背景.png'
import 石洞背景 from './images/石洞背景.png'

// 定義位置常量
const Position = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center'
} as const;

// 角色配置
export const characters: Record<string, CharacterConfig> = {
  yangGuo: {
    name: '楊過',
    images: {
      default: 楊過
    },
    textColor: '#3a86ff',
    defaultPosition: Position.LEFT
  },
  xiaoLongNv: {
    name: '小龍女',
    images: {
      default: 小龍女,
      blindfolded: 矇眼的小龍女
    },
    textColor: '#8338ec',
    defaultPosition: Position.RIGHT
  },
  ouYangFeng: {
    name: '歐陽鋒',
    images: {
      default: 歐陽鋒
    },
    textColor: '#fb5607',
    defaultPosition: Position.LEFT
  },
  yinZhiPing: {
    name: '尹志平',
    images: {
      default: 尹志平
    },
    textColor: '#38b000',
    defaultPosition: Position.LEFT
  }
};

// 新格式的對話配置
export const dialogue: DialogueConfig = {
  // 場景一：鐘南山修練
  mountain: {
    background: 草原背景,
    sequence: [
      // 楊過和歐陽鋒的對話
      { 
        speaker: 'ouYangFeng', 
        text: '楊過，我們去鐘南山練武功吧，我可以教你蛤蟆功。', 
        position: Position.LEFT 
      },
      { 
        speaker: 'yangGuo', 
        text: '好的，歐陽前輩。', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'xiaoLongNv', 
        text: '楊過，我跟你一起去。', 
        position: Position.LEFT 
      },
      
      // 到達鐘南山
      { 
        text: '（一行人到達了鐘南山）' 
      },
      { 
        speaker: 'ouYangFeng', 
        text: '楊過，專心練功！', 
        position: Position.LEFT 
      },
      { 
        speaker: 'xiaoLongNv', 
        text: '（小龍女在一旁觀看）', 
        position: Position.RIGHT 
      },
      
      // 歐陽鋒偷襲小龍女
      { 
        speaker: 'ouYangFeng',
        text: '（突然間，歐陽鋒偷襲小龍女並點了她的穴道）',
        position: Position.CENTER
      },
      { 
        speaker: 'xiaoLongNv', 
        text: '我...我動不了...', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yangGuo', 
        text: '剛剛發生了什麼事？', 
        position: Position.LEFT 
      },
      { 
        speaker: 'ouYangFeng', 
        text: '楊過，專心練功！不要分心！', 
        position: Position.RIGHT 
      },
      
      // 尹志平出現
      { 
        speaker: 'yinZhiPing',
        text: '（尹志平出現在場景中）',
        position: Position.CENTER
      },
      { 
        speaker: 'yinZhiPing',
        text: '（尹志平趁機將小龍女的眼睛蒙上）' ,
        position: Position.RIGHT
      },
      { 
        speaker: 'xiaoLongNv', 
        text: '誰...是誰？放開我！', 
        emotion: 'blindfolded', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yinZhiPing',
        text: '（尹志平將小龍女帶到了偏僻的山洞）',
        position: Position.CENTER,
        next: 'cave'
      }
    ]
  },
  
  // 場景二：山洞
  cave: {
    background: 石洞背景,
    sequence: [
      { 
        speaker: 'yinZhiPing', 
        text: '古墓派的小龍女，我早就仰慕你的美貌...', 
        position: Position.LEFT 
      },
      { 
        speaker: 'xiaoLongNv', 
        text: '過兒是你嗎?', 
        emotion: 'blindfolded', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yinZhiPing',
        text: '（尹志平得逞了，小龍女被玷污）',
        position: Position.CENTER
      },
      { 
        speaker: 'xiaoLongNv', 
        text: '（過兒會對我負責的...）', 
        emotion: 'blindfolded', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yangGuo',
        text: '（楊過發現小龍女失蹤，追蹤找到山洞）',
        position: Position.CENTER
      },
      { 
        speaker: 'yangGuo', 
        text: '（楊過解開小龍女的蒙眼布，並為她解開穴道）姑姑，你沒事吧？', 
        position: Position.RIGHT
      },
      { 
        speaker: 'xiaoLongNv', 
        text: '過兒...你還叫我姑姑嗎...', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yangGuo', 
        text: '姑姑就是姑姑啊', 
        position: Position.LEFT 
      },
      { 
        speaker: 'xiaoLongNv', 
        text: '過兒...你為什麼還叫我姑姑', 
        position: Position.RIGHT,
        choices: [
          { text: '姑姑就是姑姑啊，不然要叫你什麼' }
        ]
      },
      {
        text: '(小龍女哭著跑了出去...)',
        next: 'ending'
      }
    ]
  },
  
  // 場景三：結局
  ending: {
    background: 草原背景,
    sequence: [
      { 
        speaker: 'xiaoLongNv', 
        text: '既然如此...我會離開，去絕情谷了斷這段情意...', 
        position: Position.RIGHT 
      },
      { 
        speaker: 'yangGuo', 
        text: '姑姑！等等！', 
        position: Position.LEFT 
      },
      {
        text: '這是個壞結局...',
      }
      // 這是最後一個對話，結束
    ]
  }
}; 