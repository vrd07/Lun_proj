import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { GameProgress, Level } from '../types/game';
import { gameData } from '../data/gameData';

interface GameState {
  progress: GameProgress;
  levels: Level[];
  currentLevelId: number;
  musicEnabled: boolean;
  musicVolume: number;
  setCurrentLevel: (levelId: number) => void;
  completeLevel: (levelId: number) => void;
  unlockLevel: (levelId: number) => void;
  addAchievement: (achievementId: string) => void;
  toggleMusic: () => void;
  setMusicVolume: (volume: number) => void;
  resetProgress: () => void;
  unlockAllLevels: () => void; // For cheat code
}

const initialProgress: GameProgress = {
  currentLevel: 1,
  completedLevels: [],
  unlockedRewards: [],
  achievements: [],
  totalScore: 0,
};

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      progress: initialProgress,
      levels: gameData.levels.map((level, index) => {
        // Ensure we use the latest image paths from gameData
        const updatedLevel = { ...level };
        if (updatedLevel.challenge?.data?.image) {
          updatedLevel.challenge.data.image = gameData.levels[index].challenge.data.image;
        }
        return {
          ...updatedLevel,
          unlocked: index === 0,
          completed: false,
        };
      }),
      currentLevelId: 1,
      musicEnabled: true,
      musicVolume: 0.5,
      setCurrentLevel: (levelId) =>
        set((state) => ({
          currentLevelId: levelId,
          progress: { ...state.progress, currentLevel: levelId },
        })),
      completeLevel: (levelId) =>
        set((state) => {
          const updatedLevels = state.levels.map((level) =>
            level.id === levelId
              ? { ...level, completed: true }
              : level
          );
          const nextLevel = updatedLevels.find(
            (level) => level.id === levelId + 1
          );
          if (nextLevel) {
            nextLevel.unlocked = true;
          }
          return {
            levels: updatedLevels,
            progress: {
              ...state.progress,
              completedLevels: [...state.progress.completedLevels, levelId],
              currentLevel: nextLevel ? nextLevel.id : state.currentLevelId,
            },
          };
        }),
      unlockLevel: (levelId) =>
        set((state) => ({
          levels: state.levels.map((level) =>
            level.id === levelId ? { ...level, unlocked: true } : level
          ),
        })),
      addAchievement: (achievementId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            achievements: [
              ...state.progress.achievements,
              { id: achievementId, title: '', description: '', unlocked: true, icon: '' },
            ],
          },
        })),
      toggleMusic: () =>
        set((state) => ({ musicEnabled: !state.musicEnabled })),
      setMusicVolume: (volume) => set({ musicVolume: volume }),
      resetProgress: () =>
        set({
          progress: initialProgress,
          levels: gameData.levels.map((level, index) => ({
            ...level,
            unlocked: index === 0,
            completed: false,
          })),
          currentLevelId: 1,
        }),
      unlockAllLevels: () =>
        set((state) => ({
          levels: state.levels.map((level) => ({
            ...level,
            unlocked: true,
          })),
        })),
    }),
    {
      name: 'unlock-my-heart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

