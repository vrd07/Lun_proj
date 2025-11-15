import { useState, useEffect } from 'react';
import { useGameStore } from '../store/gameStore';

// Secret cheat code: Click the gift box on landing page 10 times
const CheatCode = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const unlockAllLevels = useGameStore((state) => state.unlockAllLevels);

  useEffect(() => {
    if (clickCount >= 10) {
      unlockAllLevels();
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  }, [clickCount, unlockAllLevels]);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <>
      {showMessage && (
        <div className="fixed top-4 right-4 bg-romantic-rose text-white p-4 rounded-lg shadow-lg z-50">
          All levels unlocked! 🎉
        </div>
      )}
      <div onClick={handleClick} className="cursor-pointer">
        {/* This will be used in LandingPage */}
      </div>
    </>
  );
};

export default CheatCode;

