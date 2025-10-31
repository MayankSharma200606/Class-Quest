export interface Student {
  id: string;
  name: string;
  avatar: string;
  level: number;
  points: number;
  badges: Badge[];
  attendance: number;
  participation: number;
  performance: number;
  recentActivity: Activity[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
}

export interface Activity {
  id: string;
  type: 'attendance' | 'participation' | 'performance' | 'achievement';
  description: string;
  points: number;
  timestamp: string;
}

export interface AIInsight {
  id: string;
  studentId: string;
  studentName: string;
  type: 'suggestion' | 'alert' | 'achievement';
  message: string;
  priority: 'low' | 'medium' | 'high';
  timestamp: string;
}
