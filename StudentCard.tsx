import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Student } from '@/types/student';
import { Trophy, Target, MessageSquare, TrendingUp } from 'lucide-react';

interface StudentCardProps {
  student: Student;
  onClick?: () => void;
}

const StudentCard = ({ student, onClick }: StudentCardProps) => {
  const pointsToNextLevel = (student.level + 1) * 300;
  const progressToNextLevel = (student.points % 300) / 3;

  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300 cursor-pointer border-border/50 bg-gradient-to-br from-card to-card/80"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{student.avatar}</div>
            <div>
              <CardTitle className="text-lg font-semibold">{student.name}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs font-medium">
                  Level {student.level}
                </Badge>
                <span className="text-sm text-muted-foreground font-medium">
                  {student.points} pts
                </span>
              </div>
            </div>
          </div>
          {student.badges.length > 0 && (
            <div className="flex gap-1">
              {student.badges.slice(0, 3).map((badge) => (
                <span key={badge.id} className="text-xl" title={badge.name}>
                  {badge.icon}
                </span>
              ))}
              {student.badges.length > 3 && (
                <span className="text-xs text-muted-foreground">+{student.badges.length - 3}</span>
              )}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Progress to Level {student.level + 1}</span>
              <span>{Math.round(progressToNextLevel)}%</span>
            </div>
            <Progress value={progressToNextLevel} className="h-2" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center p-2 bg-success/10 rounded-lg">
              <Target className="h-4 w-4 text-success mb-1" />
              <span className="text-xs text-muted-foreground">Attendance</span>
              <span className="text-sm font-semibold text-foreground">{student.attendance}%</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-primary/10 rounded-lg">
              <MessageSquare className="h-4 w-4 text-primary mb-1" />
              <span className="text-xs text-muted-foreground">Participation</span>
              <span className="text-sm font-semibold text-foreground">{student.participation}%</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-accent/10 rounded-lg">
              <TrendingUp className="h-4 w-4 text-accent mb-1" />
              <span className="text-xs text-muted-foreground">Performance</span>
              <span className="text-sm font-semibold text-foreground">{student.performance}%</span>
            </div>
          </div>

          {student.recentActivity.length > 0 && (
            <div className="pt-2 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-1">Recent Activity</p>
              <p className="text-sm text-foreground line-clamp-2">
                {student.recentActivity[0].description}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
