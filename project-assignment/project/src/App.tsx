import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { StatCard } from './components/StatCard';
import { ActivityCard } from './components/ActivityCard';
import { Schedule } from './components/Schedule';
import { Announcement } from './components/Announcement';
import { useStats } from './hooks/useStats';
import { useSchedule } from './hooks/useSchedule';

function App() {
  const { stats } = useStats();
  const { schedules, addSchedule, removeSchedule } = useSchedule();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-3 gap-6 mb-6">
            {stats.slice(0, 3).map((stat, index) => (
              <StatCard
                key={index}
                {...stat}
                className="bg-white"
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            {stats.slice(3).map((stat, index) => (
              <StatCard
                key={index}
                {...stat}
                className={`bg-white ${index === 1 ? 'border-2 border-blue-100' : ''}`}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <ActivityCard
                time="10:40 AM | Fri 10 Sept 2021"
                title="You Posted a New Job"
                description="Kindly check the requirements and terms of work and make sure everything is right."
              />
              <Schedule 
                schedules={schedules}
                onRemove={removeSchedule}
                onAdd={addSchedule}
              />
            </div>
            <Announcement />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;