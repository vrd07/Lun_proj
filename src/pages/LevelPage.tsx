import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import PuzzleChallenge from '../components/challenges/PuzzleChallenge';
import TimelineChallenge from '../components/challenges/TimelineChallenge';
import TriviaChallenge from '../components/challenges/TriviaChallenge';
import ConstellationChallenge from '../components/challenges/ConstellationChallenge';
import ScavengerChallenge from '../components/challenges/ScavengerChallenge';
import RhythmChallenge from '../components/challenges/RhythmChallenge';
import MazeChallenge from '../components/challenges/MazeChallenge';
import RewardDisplay from '../components/RewardDisplay';
import LoadingScreen from '../components/LoadingScreen';

const LevelPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const levelId = parseInt(id || '1');
  const { levels, completeLevel } = useGameStore();
  const level = levels.find((l) => l.id === levelId);
  const [showReward, setShowReward] = useState(false);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!level) {
      navigate('/levels');
      return;
    }

    if (!level.unlocked) {
      navigate('/levels');
      return;
    }

    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
  }, [level, navigate]);

  const handleChallengeComplete = () => {
    setChallengeCompleted(true);
    setShowReward(true);
    completeLevel(levelId);
  };

  if (isLoading) {
    return <LoadingScreen message="Preparing your surprise..." />;
  }

  if (!level) return null;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <button
            onClick={() => navigate('/levels')}
            className="text-romantic-rose hover:text-romantic-purple mb-4 text-lg"
          >
            ← Back to Levels
          </button>
          <h1 className="text-4xl font-romantic text-romantic-rose mb-2">
            {level.title}
          </h1>
          <p className="text-xl text-romantic-purple">{level.description}</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showReward ? (
            <motion.div
              key="challenge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <ChallengeComponent
                challenge={level.challenge}
                challengeType={level.challengeType}
                onComplete={handleChallengeComplete}
              />
            </motion.div>
          ) : (
            <motion.div
              key="reward"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <RewardDisplay
                reward={level.reward}
                onContinue={() => navigate('/levels')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

interface ChallengeComponentProps {
  challenge: any;
  challengeType: string;
  onComplete: () => void;
}

const ChallengeComponent = ({
  challenge,
  challengeType,
  onComplete,
}: ChallengeComponentProps) => {
  switch (challengeType) {
    case 'puzzle':
      return <PuzzleChallenge challenge={challenge} onComplete={onComplete} />;
    case 'timeline':
      return <TimelineChallenge challenge={challenge} onComplete={onComplete} />;
    case 'trivia':
      return <TriviaChallenge challenge={challenge} onComplete={onComplete} />;
    case 'constellation':
      return (
        <ConstellationChallenge challenge={challenge} onComplete={onComplete} />
      );
    case 'scavenger':
      return <ScavengerChallenge challenge={challenge} onComplete={onComplete} />;
    case 'rhythm':
      return <RhythmChallenge challenge={challenge} onComplete={onComplete} />;
    case 'maze':
      return <MazeChallenge challenge={challenge} onComplete={onComplete} />;
    default:
      return <div>Unknown challenge type</div>;
  }
};

export default LevelPage;

