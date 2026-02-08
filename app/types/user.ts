export type UserPreferences = {
  dailyReviewGoal: number;
  notifications: boolean;
};

export type UserStats = {
  totalStudyTime: number;
  streak: number;
  lastActive: string;
  totalCardsMastered: number;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  _id: string;
  email: string;
  userName: string;
  password: string;
  avatar?: string;
  preferences: UserPreferences;
  stats: UserStats;
};
