import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AIInsight } from '@/types/student';
import { Brain, AlertCircle, TrendingUp, Award } from 'lucide-react';

interface AIInsightsPanelProps {
  insights: AIInsight[];
}

const AIInsightsPanel = ({ insights }: AIInsightsPanelProps) => {
  const getIcon = (type: AIInsight['type']) => {
    switch (type) {
      case 'achievement':
        return <Award className="h-4 w-4" />;
      case 'alert':
        return <AlertCircle className="h-4 w-4" />;
      case 'suggestion':
        return <TrendingUp className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: AIInsight['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'low':
        return 'bg-success/10 text-success border-success/20';
    }
  };

  const sortedInsights = [...insights].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary animate-pulse" />
          AI-Driven Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {sortedInsights.map((insight) => (
            <div
              key={insight.id}
              className={`p-3 rounded-lg border ${getPriorityColor(insight.priority)} transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {getIcon(insight.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{insight.studentName}</span>
                    <Badge variant="outline" className="text-xs">
                      {insight.priority}
                    </Badge>
                  </div>
                  <p className="text-sm leading-relaxed">{insight.message}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(insight.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsightsPanel;
