export interface Level {
  id: number;
  title: string;
  description: string;
  challengeType: 'puzzle' | 'quiz' | 'matching' | 'timeline' | 'trivia' | 'constellation' | 'scavenger' | 'rhythm' | 'maze';
  challenge: Challenge;
  reward: Reward;
  unlocked: boolean;
  completed: boolean;
  theme: string;
}

export interface Challenge {
  type: string;
  data: any;
  instructions: string;
}

export interface Reward {
  type: 'photo' | 'gallery' | 'message' | 'music' | 'video' | 'poem' | 'certificate' | 'surprise';
  content: any;
  animation: string;
}

export interface GameProgress {
  currentLevel: number;
  completedLevels: number[];
  unlockedRewards: string[];
  achievements: Achievement[];
  totalScore: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  icon: string;
}

export interface PersonalData {
  herName: string;
  favoriteColor: string;
  favoriteMusic?: string;
  photos: {
    firstPhoto?: string;
    adventures?: string[];
    insideJokes?: string[];
    favoriteThings?: string[];
    milestones?: string[];
  };
  messages: {
    firstMeeting?: string;
    loveReasons?: string[];
    futurePlans?: string;
  };
}

