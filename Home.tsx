import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Trophy, Brain, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-primary to-primary-glow rounded-xl shadow-md">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ClassQuest
              </h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate('/login')}>
                Student Login
              </Button>
              <Button onClick={() => navigate('/dashboard')}>
                Teacher Dashboard
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Adaptive Classroom Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your classroom with gamified learning, behavior tracking, and AI-driven insights
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-border/50">
            <CardHeader>
              <Trophy className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Gamified Rewards</CardTitle>
              <CardDescription>
                Earn badges, points, and unlock achievements based on positive actions
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <BarChart3 className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Behavior Tracking</CardTitle>
              <CardDescription>
                Monitor attendance, participation, and performance in real-time
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <Brain className="h-10 w-10 text-primary mb-2" />
              <CardTitle>AI Insights</CardTitle>
              <CardDescription>
                Get intelligent recommendations to improve student engagement
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <GraduationCap className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>
                Identify top performers and areas needing attention
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-border/50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Classroom?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join teachers and students already using ClassQuest to create engaging, adaptive learning environments
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/login')}>
                Get Started as Student
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/dashboard')}>
                Teacher Access
              </Button>
              <Button size="lg" variant="secondary" onClick={() => navigate('/engagement')}>
                🎮 Engagement Hub
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Home;
