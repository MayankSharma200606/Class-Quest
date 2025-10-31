import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Student } from '@/types/student';
import { Trophy, Medal, Award } from 'lucide-react';

interface TopPerformersProps {
  students: Student[];
}

const TopPerformers = ({ students }: TopPerformersProps) => {
  const topStudents = [...students]
    .sort((a, b) => b.points - a.points)
    .slice(0, 5);

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="h-5 w-5 text-accent" />;
      case 1:
        return <Medal className="h-5 w-5 text-muted-foreground" />;
      case 2:
        return <Award className="h-5 w-5 text-warning" />;
      default:
        return <div className="h-5 w-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{index + 1}</div>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-accent" />
          Top Performers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {topStudents.map((student, index) => (
            <div
              key={student.id}
              className="flex items-center gap-3 p-3 bg-gradient-to-r from-card to-secondary/20 rounded-lg hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0">
                {getIcon(index)}
              </div>
              <div className="text-2xl">{student.avatar}</div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">{student.name}</p>
                <p className="text-xs text-muted-foreground">Level {student.level}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="font-bold text-primary">{student.points}</p>
                <p className="text-xs text-muted-foreground">points</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopPerformers;
