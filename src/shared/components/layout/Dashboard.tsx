import React from 'react';
import { MetricsPanel } from "../../../features/dashboard/components/admin/metrics/MetricsPanel";
import { TrafficGraph } from "../../../features/dashboard/components/admin/metrics/TrafficGraph";

export function Dashboard() {
  return (
    <div className="h-full">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-primary-900 dark:text-primary-100">Admin Dashboard</h1>
        </div>
        
        <div className="grid gap-6">
          <MetricsPanel />
          <TrafficGraph />
        </div>
      </div>
    </div>
  );
}