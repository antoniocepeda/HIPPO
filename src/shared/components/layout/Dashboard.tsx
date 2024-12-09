import React from 'react';
import { MetricsPanel } from "../../../features/dashboard/components/admin/metrics/MetricsPanel";
import { TrafficGraph } from "../../../features/dashboard/components/admin/metrics/TrafficGraph";
import { AdminNav } from "./AdminNav";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-primary-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h1 className="text-2xl font-bold text-primary-900">Admin Dashboard</h1>
          <div className="flex gap-2">
            <select className="px-3 py-2 border border-primary-200 rounded-md text-sm">
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>
        
        <MetricsPanel />
        <TrafficGraph />
      </div>
    </div>
  );
}