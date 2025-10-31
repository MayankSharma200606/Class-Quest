import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Student } from '@/types/student';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

interface AnalyticsDashboardProps {
  students: Student[];
}

const AnalyticsDashboard = ({ students }: AnalyticsDashboardProps) => {
  const avgAttendance = Math.round(
    students.reduce((sum, s) => sum + s.attendance, 0) / students.length
  );
  const avgParticipation = Math.round(
    students.reduce((sum, s) => sum + s.participation, 0) / students.length
  );
  const avgPerformance = Math.round(
    students.reduce((sum, s) => sum + s.performance, 0) / students.length
  );
  const totalBadges = students.reduce((sum, s) => sum + s.badges.length, 0);

  const performanceData = students.map(s => ({
    name: s.name.split(' ')[0],
    attendance: s.attendance,
    participation: s.participation,
    performance: s.performance,
  }));

  const weeklyTrend = [
    { week: 'Week 1', attendance: 85, participation: 78, performance: 82 },
    { week: 'Week 2', attendance: 88, participation: 82, performance: 85 },
    { week: 'Week 3', attendance: 90, participation: 85, performance: 88 },
    { week: 'Week 4', attendance: 92, participation: 88, performance: 90 },
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Attendance</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{avgAttendance}%</div>
            <p className="text-xs text-muted-foreground mt-1">Across all students</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Participation</CardTitle>
            <Users className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{avgParticipation}%</div>
            <p className="text-xs text-muted-foreground mt-1">Class engagement</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-success/10 to-success/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Performance</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{avgPerformance}%</div>
            <p className="text-xs text-muted-foreground mt-1">Overall scores</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning/10 to-warning/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Badges</CardTitle>
            <Award className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{totalBadges}</div>
            <p className="text-xs text-muted-foreground mt-1">Earned by class</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Student Performance Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--foreground))" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Legend />
                <Bar dataKey="attendance" fill="hsl(var(--success))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="participation" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="performance" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="hsl(var(--foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--foreground))" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Legend />
                <Line type="monotone" dataKey="attendance" stroke="hsl(var(--success))" strokeWidth={2} />
                <Line type="monotone" dataKey="participation" stroke="hsl(var(--primary))" strokeWidth={2} />
                <Line type="monotone" dataKey="performance" stroke="hsl(var(--accent))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
