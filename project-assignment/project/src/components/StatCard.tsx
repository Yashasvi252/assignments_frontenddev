import React from 'react';
import { StatData } from '../types';

interface StatCardProps extends StatData {
  className?: string;
}

export function StatCard({ title, value, subtitle, trend, className = '' }: StatCardProps) {
  return (
    <div className={`p-6 rounded-xl hover:shadow-lg transition-shadow ${className}`}>
      <h3 className="text-gray-600 font-medium mb-4">{title}</h3>
      <div className="flex items-end gap-2 mb-2">
        <span className="text-4xl font-bold">{value}</span>
        {subtitle && <span className="text-sm text-gray-500 mb-1">{subtitle}</span>}
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-sm">
          <span className="text-green-500">+{trend.value}</span>
          <span className="text-gray-500">{trend.label}</span>
        </div>
      )}
    </div>
  );
}