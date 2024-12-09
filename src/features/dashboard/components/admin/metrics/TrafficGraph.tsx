import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const timeRanges = {
  day: {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 50) + 10)
  },
  week: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 300) + 100)
  },
  month: {
    labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
    data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 500) + 200)
  },
  year: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 10000) + 5000)
  }
};

export function TrafficGraph() {
  const [timeRange, setTimeRange] = useState<'day' | 'week' | 'month' | 'year'>('day');

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1a202b',
        bodyColor: '#1a202b',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `${context.parsed.y} questions`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          },
          maxRotation: 45,
          minRotation: 45,
          autoSkip: true,
          maxTicksLimit: 12
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#f1f5f9'
        },
        ticks: {
          font: {
            size: 12
          }
        }
      }
    },
    elements: {
      line: {
        tension: 0.4
      }
    }
  };

  const data = {
    labels: timeRanges[timeRange].labels,
    datasets: [
      {
        data: timeRanges[timeRange].data,
        borderColor: '#526f91',
        backgroundColor: 'rgba(82, 111, 145, 0.1)',
        fill: true
      }
    ]
  };

  return (
    <div className="bg-white dark:bg-primary-800/30 rounded-lg shadow-sm p-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100">Question Traffic</h3>
          <div className="flex gap-2">
            {(['day', 'week', 'month', 'year'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 text-sm rounded-md ${
                  timeRange === range
                    ? 'bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-300'
                    : 'hover:bg-primary-100 dark:hover:bg-primary-700 text-primary-600 dark:text-primary-400'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="h-[300px] sm:h-[400px] w-full">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}