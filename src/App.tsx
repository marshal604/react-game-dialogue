import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasicExample from './pages/Basic';
import './App.css';

function App() {
  return (
    <div className="example-container">
      <button className="back-button absolute top-4 left-4 z-10">Back</button>
      <Router basename="/react-game-dialogue">
        <Routes>
          <Route path="/" element={<BasicExample />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
