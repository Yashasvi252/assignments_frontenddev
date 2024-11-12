import { useState } from 'react';
import { StatData } from '../types';

export function useStats() {
  const [stats] = useState<StatData[]>([
    {
      title: "Available Position",
      value: "24",
      subtitle: "4 Urgently needed",
    },
    {
      title: "Job Open",
      value: "10",
      subtitle: "4 Active hiring",
    },
    {
      title: "New Employees",
      value: "24",
      subtitle: "4 Department",
    },
    {
      title: "Total Employees",
      value: "216",
      trend: { value: "2%", label: "Past month" },
    },
    {
      title: "Talent Request",
      value: "16",
      trend: { value: "5%", label: "Past month" },
    },
  ]);

  return { stats };
}