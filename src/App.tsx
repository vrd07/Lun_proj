import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LevelSelect from './pages/LevelSelect';
import LevelPage from './pages/LevelPage';
import Gallery from './pages/Gallery';
import MusicPlayer from './components/MusicPlayer';
import { useGameStore } from './store/gameStore';

function App() {
  const musicEnabled = useGameStore((state) => state.musicEnabled);
  const musicVolume = useGameStore((state) => state.musicVolume);

  return (
    <Router>
      <div className="min-h-screen relative">
        <MusicPlayer volume={musicVolume} enabled={musicEnabled} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/levels" element={<LevelSelect />} />
          <Route path="/level/:id" element={<LevelPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

