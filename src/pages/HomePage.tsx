import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">React Game Dialogue Demo</h1>
        <p className="text-xl text-center mb-12">
          互動式對話框系統 UI 套件演示
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ExampleCard 
            title="基本示例" 
            description="展示基本的對話框和選項功能" 
            link="/basic" 
          />
          {/* 未來可以添加更多示例卡片 */}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">關於 React-Game-Dialogue</h2>
          <p className="mb-6">
            React-Game-Dialogue 是一個專為 React 應用開發的對話系統 UI 套件，
            提供類遊戲風格的對話介面，支援豐富的對話功能和自定義主題。
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com/marshal604/react-game-dialogue" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.npmjs.com/package/@marshal604/react-game-dialogue" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
            >
              NPM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// 示例卡片組件
const ExampleCard = ({ title, description, link }: { title: string; description: string; link: string }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition-colors"
        >
          查看示例
        </Link>
      </div>
    </div>
  );
};

export default HomePage; 