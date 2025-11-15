import { useState } from 'react';
import { motion } from 'framer-motion';

interface TriviaChallengeProps {
  challenge: any;
  onComplete: () => void;
}

const TriviaChallenge = ({ challenge, onComplete }: TriviaChallengeProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const questions = challenge.data.questions || [];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // All questions answered
      setTimeout(() => onComplete(), 500);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="bg-white/30 glass-effect rounded-2xl p-8 text-center">
        <p className="text-xl">No questions available. Challenge complete!</p>
        <button
          onClick={onComplete}
          className="mt-4 bg-romantic-rose text-white px-8 py-3 rounded-lg"
        >
          Continue
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="bg-white/30 glass-effect rounded-2xl p-8">
      <div className="mb-4 text-center">
        <span className="text-romantic-purple">
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>
      <h2 className="text-2xl font-romantic text-romantic-rose mb-6 text-center">
        {challenge.instructions}
      </h2>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">{question.question}</h3>
        <div className="space-y-3">
          {question.options.map((option: string, index: number) => (
            <motion.button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
              className={`
                w-full p-4 rounded-lg text-left transition-all
                ${
                  selectedAnswer === index
                    ? selectedAnswer === question.correct
                      ? 'bg-green-400 text-white'
                      : 'bg-red-400 text-white'
                    : 'bg-white/50 hover:bg-white/70'
                }
                ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}
              `}
              whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
              whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>
      {selectedAnswer !== null && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleNext}
          className="w-full bg-romantic-rose text-white py-3 rounded-lg font-bold text-xl hover:bg-romantic-purple transition-colors"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete'}
        </motion.button>
      )}
    </div>
  );
};

export default TriviaChallenge;

