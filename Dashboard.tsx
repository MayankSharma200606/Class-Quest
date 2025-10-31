import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import StudentCard from '@/components/StudentCard';
import TopPerformers from '@/components/TopPerformers';
import AIInsightsPanel from '@/components/AIInsightsPanel';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import { mockStudents, aiInsights } from '@/data/mockData';
import { GraduationCap, Users, BarChart3, Brain, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [students] = useState(mockStudents);
  const navigate = useNavigate();

  const handleAddStudent = () => {
    navigate('/add-student');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-primary to-primary-glow rounded-xl shadow-md">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ClassQuest
                </h1>
                <p className="text-sm text-muted-foreground">Teacher Dashboard</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate('/')}>
                Home
              </Button>
              <Button variant="secondary" onClick={() => navigate('/engagement')}>
                🎮 Hub
              </Button>
              <Button onClick={handleAddStudent} className="gap-2">
                <Plus className="h-4 w-4" />
                Add Student
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-3 mx-auto">
            <TabsTrigger value="overview" className="gap-2">
              <Users className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="insights" className="gap-2">
              <Brain className="h-4 w-4" />
              AI Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Students</h2>
                  <p className="text-sm text-muted-foreground">
                    {students.length} active students
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {students.map((student) => (
                    <StudentCard key={student.id} student={student} />
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <TopPerformers students={students} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard students={students} />
          </TabsContent>

          <TabsContent value="insights">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <AIInsightsPanel insights={aiInsights} />
              </div>
              <div>
                <TopPerformers students={students} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
