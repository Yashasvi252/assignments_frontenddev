import { useState } from 'react';
import { ScheduleItem } from '../types';

export function useSchedule() {
  const [schedules, setSchedules] = useState<ScheduleItem[]>([
    {
      id: '1',
      time: "11:30 AM",
      title: "Review candidate applications",
      priority: true,
      type: "Priority",
    },
    {
      id: '2',
      time: "10:30 AM",
      title: "Interview with candidates",
    },
    {
      id: '3',
      time: "09:15 AM",
      title: "Short meeting with product designer from IT Department",
    },
  ]);

  const addSchedule = (schedule: Omit<ScheduleItem, 'id'>) => {
    setSchedules(prev => [...prev, { ...schedule, id: Date.now().toString() }]);
  };

  const removeSchedule = (id: string) => {
    setSchedules(prev => prev.filter(schedule => schedule.id !== id));
  };

  return { schedules, addSchedule, removeSchedule };
}