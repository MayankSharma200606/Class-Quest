import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Trophy, Zap, Gift, Target, Users, Sparkles, Crown, Star, Award, Flame } from 'lucide-react';
import { mockStudents } from '@/data/mockData';

const quests = [
  { id: 1, title: 'Perfect Week', description: 'Maintain 100% attendance for 5 days', reward: 500, progress: 80, icon: Target, color: 'text-primary' },
  { id: 2, title: 'Knowledge Warrior', description: 'Score 95%+ on 5 assignments', reward: 750, progress: 60, icon: Award, color: 'text-accent' },
  { id: 3, title: 'Team Champion', description: 'Help 10 classmates this week', reward: 600, progress: 40, icon: Users, color: 'text-secondary' },
  { id: 4, title: 'Speed Runner', description: 'Submit 3 assignments early', reward: 400, progress: 33, icon: Zap, color: 'text-warning' },
];

const rewards = [
  { id: 1, name: 'Extra Credit Pass', cost: 500, icon: Star, description: 'Get extra credit on any assignment' },
  { id: 2, name: 'Homework Skip', cost: 800, icon: Sparkles, description: 'Skip one homework assignment' },
  { id: 3, name: 'Front Row Seat', cost: 300, icon: Crown, description: 'Reserved front row seat for a week' },
  { id: 4, name: 'Lunch with Teacher', cost: 600, icon: Gift, description: 'Special lunch session with the teacher' },
  { id: 5, name: 'Class DJ', cost: 400, icon: Flame, description: 'Choose music for study time' },
  { id: 6, name: 'Extra Time', cost: 700, icon: Trophy, description: 'Extra 15 minutes on any test' },
];

const classCompetitions = [
  { id: 1, name: 'Math Masters', team1: 'Red Dragons', team2: 'Blue Eagles', score1: 1250, score2: 1100, endTime: '2 days' },
  { id: 2, name: 'Science Sprint', team1: 'Green Ninjas', team2: 'Yellow Warriors', score1: 890, score2: 920, endTime: '5 days' },
];

const EngagementHub = () => {
  const [activeTab, setActiveTab] = useState('leaderboard');
  const sortedStudents = [...mockStudents].sort((a, b) => b.points - a.points);
  const topStudent = sortedStudents[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto p-4 md:p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 py-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            🎮 Engagement Hub
          </h1>
          <p className="text-muted-foreground text-lg">Level up your learning journey!</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="leaderboard" className="gap-2">
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">Leaderboard</span>
            </TabsTrigger>
            <TabsTrigger value="quests" className="gap-2">
              <Target className="h-4 w-4" />
              <span className="hidden sm:inline">Quests</span>
            </TabsTrigger>
            <TabsTrigger value="rewards" className="gap-2">
              <Gift className="h-4 w-4" />
              <span className="hidden sm:inline">Rewards</span>
            </TabsTrigger>
            <TabsTrigger value="battles" className="gap-2">
              <Flame className="h-4 w-4" />
              <span className="hidden sm:inline">Battles</span>
            </TabsTrigger>
          </TabsList>

          {/* Live Leaderboard */}
          <TabsContent value="leaderboard" className="space-y-4">
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-6 w-6 text-primary animate-pulse" />
                  Top Champion
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="text-6xl">{topStudent.avatar}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">{topStudent.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="default" className="text-lg px-3 py-1">Level {topStudent.level}</Badge>
                      <Badge variant="secondary" className="text-lg px-3 py-1">{topStudent.points} points</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-3">
              {sortedStudents.map((student, index) => (
                <Card key={student.id} className="hover:shadow-lg transition-all hover:scale-[1.02]">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="text-3xl font-bold text-muted-foreground min-w-[3rem] text-center">
                        {index === 0 && <span className="text-primary">🥇</span>}
                        {index === 1 && <span className="text-secondary">🥈</span>}
                        {index === 2 && <span className="text-accent">🥉</span>}
                        {index > 2 && `#${index + 1}`}
                      </div>
                      <div className="text-4xl">{student.avatar}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{student.name}</h4>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline">Lvl {student.level}</Badge>
                          <Badge variant="secondary">{student.points} pts</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{student.badges.filter(b => b.earned).length} badges</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Quests System */}
          <TabsContent value="quests" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Active Quests
                </CardTitle>
                <CardDescription>Complete challenges to earn bonus rewards!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {quests.map((quest) => {
                  const Icon = quest.icon;
                  return (
                    <Card key={quest.id} className="border-2 hover:border-primary/50 transition-all">
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-3 flex-1">
                            <Icon className={`h-6 w-6 ${quest.color}`} />
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg">{quest.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{quest.description}</p>
                            </div>
                          </div>
                          <Badge variant="default" className="ml-2">
                            <Zap className="h-3 w-3 mr-1" />
                            {quest.reward} pts
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-semibold">{quest.progress}%</span>
                          </div>
                          <Progress value={quest.progress} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reward Store */}
          <TabsContent value="rewards" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-accent" />
                  Reward Store
                </CardTitle>
                <CardDescription>Redeem your points for awesome rewards!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {rewards.map((reward) => {
                    const Icon = reward.icon;
                    return (
                      <Card key={reward.id} className="hover:shadow-lg transition-all hover:scale-[1.02]">
                        <CardContent className="p-4 space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{reward.name}</h4>
                              <p className="text-xs text-muted-foreground mt-1">{reward.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t">
                            <Badge variant="secondary" className="text-sm">
                              {reward.cost} points
                            </Badge>
                            <Button size="sm" className="gap-1">
                              <Sparkles className="h-3 w-3" />
                              Redeem
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Class Battles */}
          <TabsContent value="battles" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-destructive animate-pulse" />
                  Class Battles
                </CardTitle>
                <CardDescription>Team competitions with epic rewards!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {classCompetitions.map((battle) => (
                  <Card key={battle.id} className="border-2 border-destructive/20">
                    <CardContent className="p-6 space-y-4">
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">{battle.name}</h3>
                        <Badge variant="outline">Ends in {battle.endTime}</Badge>
                      </div>
                      
                      <div className="space-y-4">
                        {/* Team 1 */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-destructive">{battle.team1}</span>
                            <span className="text-lg font-bold">{battle.score1}</span>
                          </div>
                          <Progress value={(battle.score1 / (battle.score1 + battle.score2)) * 100} className="h-3" />
                        </div>

                        {/* VS Divider */}
                        <div className="text-center text-sm font-bold text-muted-foreground">VS</div>

                        {/* Team 2 */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-primary">{battle.team2}</span>
                            <span className="text-lg font-bold">{battle.score2}</span>
                          </div>
                          <Progress value={(battle.score2 / (battle.score1 + battle.score2)) * 100} className="h-3" />
                        </div>
                      </div>

                      <Button className="w-full" size="lg">
                        <Trophy className="h-4 w-4 mr-2" />
                        Join Battle
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EngagementHub;