import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface ActivityProps {
  time: string;
  title: string;
  description: string;
}

export function ActivityCard({ time, title, description }: ActivityProps) {
  return (
    <div className="bg-[#1B204A] text-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-gray-400 text-sm">{time}</p>
          <h2 className="text-xl font-semibold mt-1">{title}</h2>
        </div>
        <button className="text-gray-400 hover:text-white">
          <MoreHorizontal size={20} />
        </button>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm">Today you makes 12 Activity</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
          See All Activity
        </button>
      </div>
    </div>
  );
}