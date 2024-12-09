import React from 'react'; 
import { 
  Brain, 
  Zap, 
  MessageSquare, 
  Users, 
  BarChart3,
  Calendar
} from 'lucide-react';

export function MetricsPanel() {
  return (
    <div className="space-y-6">
      {/* First Row - Performance Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <MetricCard
          icon={<Brain className="w-6 h-6" />}
          title="AI Confidence"
          value="94.6%"
          trend="+2.3%"
          description="Average confidence score"
          category="ai"
        />
        <MetricCard
          icon={<Zap className="w-6 h-6" />}
          title="Response Time"
          value="1.2s"
          trend="-0.3s"
          description="Average AI processing time"
          category="ai"
        />
        <MetricCard
          icon={<Users className="w-6 h-6" />}
          title="User Growth"
          value="+12.3%"
          trend="+2.1%"
          description="Week over week"
          category="users"
        />
        <MetricCard
          icon={<BarChart3 className="w-6 h-6" />}
          title="User Satisfaction"
          value="4.8/5"
          trend="+0.2"
          description="Based on feedback"
          category="users"
        />
      </div>

      {/* Second Row - Question Counts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <MetricCard
          icon={<MessageSquare className="w-6 h-6" />}
          title="Today"
          value="156"
          trend="+12"
          description="Questions answered today"
          category="questions"
        />
        <MetricCard
          icon={<MessageSquare className="w-6 h-6" />}
          title="This Week"
          value="2,891"
          trend="+342"
          description="Questions this week"
          category="questions"
        />
        <MetricCard
          icon={<Calendar className="w-6 h-6" />}
          title="This Month"
          value="12,445"
          trend="+1,234"
          description="Questions this month"
          category="questions"
        />
        <MetricCard
          icon={<Calendar className="w-6 h-6" />}
          title="This Year"
          value="156,789"
          trend="+15,678"
          description="Questions this year"
          category="questions"
        />
      </div>
    </div>
  );
}

function MetricCard({ 
  icon, 
  title, 
  value, 
  trend, 
  description,
  category 
}: { 
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
  description: string;
  category: 'ai' | 'questions' | 'users';
}) {
  const getCategoryColors = (category: string) => {
    switch (category) {
      case 'ai':
        return 'bg-blue-50 dark:bg-blue-900/30 border-blue-100 dark:border-blue-700';
      case 'questions':
        return 'bg-purple-50 dark:bg-purple-900/30 border-purple-100 dark:border-purple-700';
      case 'users':
        return 'bg-green-50 dark:bg-green-900/30 border-green-100 dark:border-green-700';
      default:
        return 'bg-white dark:bg-primary-800/30 border-primary-100 dark:border-primary-700';
    }
  };

  const isPositiveTrend = trend.startsWith('+');
  const isNeutralTrend = trend.toLowerCase().includes('schedule') || trend.toLowerCase().includes('maintained');
  
  return (
    <div className={`rounded-lg border p-4 sm:p-6 ${getCategoryColors(category)}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="text-primary-600 dark:text-primary-300">{icon}</div>
        <div>
          <p className="text-sm text-primary-600 dark:text-primary-300">{title}</p>
          <p className="text-xl sm:text-2xl font-bold text-primary-900 dark:text-primary-100">{value}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-primary-600 dark:text-primary-400">{description}</p>
        <span className={`text-sm ${
          isNeutralTrend 
            ? 'text-primary-600 dark:text-primary-400'
            : isPositiveTrend 
              ? 'text-green-600 dark:text-green-400' 
              : 'text-red-600 dark:text-red-400'
        }`}>
          {trend}
        </span>
      </div>
    </div>
  );
}