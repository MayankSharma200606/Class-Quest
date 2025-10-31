import { Student, Badge, AIInsight } from '@/types/student';

export const badges: Badge[] = [
  { id: 'b1', name: 'Perfect Attendance', description: '100% attendance for a week', icon: '🎯', earned: false },
  { id: 'b2', name: 'Class Contributor', description: 'Participated 10+ times', icon: '💬', earned: false },
  { id: 'b3', name: 'Top Performer', description: 'Scored 90%+ on 3 assignments', icon: '🏆', earned: false },
  { id: 'b4', name: 'Team Player', description: 'Helped 5 classmates', icon: '🤝', earned: false },
  { id: 'b5', name: 'Quick Learner', description: 'Improved score by 20%', icon: '⚡', earned: false },
  { id: 'b6', name: 'Consistent Star', description: '2 weeks of positive behavior', icon: '⭐', earned: false },
];

export const mockStudents: Student[] = [
  {
    id: 's1',
    name: 'Emma Johnson',
    avatar: '👧',
    level: 8,
    points: 2450,
    badges: [
      { ...badges[0], earned: true, earnedDate: '2025-10-28' },
      { ...badges[1], earned: true, earnedDate: '2025-10-25' },
      { ...badges[2], earned: true, earnedDate: '2025-10-22' }
    ],
    attendance: 98,
    participation: 92,
    performance: 94,
    recentActivity: [
      { id: 'a1', type: 'achievement', description: 'Earned Perfect Attendance badge', points: 100, timestamp: '2025-10-28T10:30:00' },
      { id: 'a2', type: 'participation', description: 'Answered 3 questions in class', points: 30, timestamp: '2025-10-28T09:15:00' },
    ]
  },
  {
    id: 's2',
    name: 'Liam Chen',
    avatar: '👦',
    level: 7,
    points: 2180,
    badges: [
      { ...badges[1], earned: true, earnedDate: '2025-10-27' },
      { ...badges[4], earned: true, earnedDate: '2025-10-20' }
    ],
    attendance: 95,
    participation: 88,
    performance: 91,
    recentActivity: [
      { id: 'a3', type: 'performance', description: 'Scored 95% on quiz', points: 50, timestamp: '2025-10-27T14:00:00' },
      { id: 'a4', type: 'participation', description: 'Led group discussion', points: 40, timestamp: '2025-10-27T11:00:00' },
    ]
  },
  {
    id: 's3',
    name: 'Sophia Martinez',
    avatar: '👧',
    level: 9,
    points: 2890,
    badges: [
      { ...badges[0], earned: true, earnedDate: '2025-10-28' },
      { ...badges[2], earned: true, earnedDate: '2025-10-26' },
      { ...badges[3], earned: true, earnedDate: '2025-10-24' },
      { ...badges[5], earned: true, earnedDate: '2025-10-23' }
    ],
    attendance: 100,
    participation: 96,
    performance: 97,
    recentActivity: [
      { id: 'a5', type: 'achievement', description: 'Reached Level 9!', points: 200, timestamp: '2025-10-28T15:00:00' },
      { id: 'a6', type: 'participation', description: 'Helped classmate with assignment', points: 35, timestamp: '2025-10-28T13:30:00' },
    ]
  },
  {
    id: 's4',
    name: 'Noah Williams',
    avatar: '👦',
    level: 6,
    points: 1850,
    badges: [
      { ...badges[4], earned: true, earnedDate: '2025-10-21' }
    ],
    attendance: 89,
    participation: 82,
    performance: 86,
    recentActivity: [
      { id: 'a7', type: 'performance', description: 'Completed homework on time', points: 25, timestamp: '2025-10-28T08:00:00' },
      { id: 'a8', type: 'attendance', description: 'Attended morning session', points: 10, timestamp: '2025-10-28T08:30:00' },
    ]
  },
  {
    id: 's5',
    name: 'Ava Thompson',
    avatar: '👧',
    level: 7,
    points: 2210,
    badges: [
      { ...badges[1], earned: true, earnedDate: '2025-10-26' },
      { ...badges[3], earned: true, earnedDate: '2025-10-25' }
    ],
    attendance: 93,
    participation: 90,
    performance: 89,
    recentActivity: [
      { id: 'a9', type: 'participation', description: 'Participated in class debate', points: 45, timestamp: '2025-10-27T10:00:00' },
      { id: 'a10', type: 'performance', description: 'Improved quiz score by 15%', points: 60, timestamp: '2025-10-26T14:00:00' },
    ]
  },
  {
    id: 's6',
    name: 'Oliver Davis',
    avatar: '👦',
    level: 5,
    points: 1620,
    badges: [],
    attendance: 85,
    participation: 78,
    performance: 82,
    recentActivity: [
      { id: 'a11', type: 'attendance', description: 'Attended afternoon session', points: 10, timestamp: '2025-10-28T13:00:00' },
      { id: 'a12', type: 'performance', description: 'Submitted assignment', points: 20, timestamp: '2025-10-27T16:00:00' },
    ]
  }
];

export const aiInsights: AIInsight[] = [
  {
    id: 'i1',
    studentId: 's3',
    studentName: 'Sophia Martinez',
    type: 'achievement',
    message: 'Sophia has maintained exceptional performance for 2 weeks. Consider rewarding with a leadership role.',
    priority: 'high',
    timestamp: '2025-10-28T15:30:00'
  },
  {
    id: 'i2',
    studentId: 's4',
    studentName: 'Noah Williams',
    type: 'suggestion',
    message: 'Noah\'s participation has dropped 10% this week. Try engaging with interactive activities.',
    priority: 'medium',
    timestamp: '2025-10-28T14:00:00'
  },
  {
    id: 'i3',
    studentId: 's6',
    studentName: 'Oliver Davis',
    type: 'alert',
    message: 'Oliver is at risk of falling behind. Schedule a one-on-one session to understand challenges.',
    priority: 'high',
    timestamp: '2025-10-28T12:00:00'
  },
  {
    id: 'i4',
    studentId: 's1',
    studentName: 'Emma Johnson',
    type: 'achievement',
    message: 'Emma is close to earning the Team Player badge. Encourage peer collaboration activities.',
    priority: 'low',
    timestamp: '2025-10-28T11:00:00'
  }
];
