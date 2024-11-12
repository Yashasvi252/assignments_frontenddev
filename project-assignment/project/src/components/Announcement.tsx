import React from 'react';
import { Pin, MoreHorizontal } from 'lucide-react';

interface AnnouncementItemProps {
  title: string;
  time: string;
}

function AnnouncementItem({ title, time }: AnnouncementItemProps) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <Pin className="text-gray-400" size={20} />
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <MoreHorizontal size={20} />
      </button>
    </div>
  );
}

export function Announcement() {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Announcement</h3>
        <button className="px-4 py-2 text-blue-500 hover:bg-blue-50 rounded-lg text-sm">
          See All Announcement
        </button>
      </div>

      <div className="divide-y">
        <AnnouncementItem
          title="Outing schedule for every department"
          time="5 Minutes ago"
        />
        <AnnouncementItem
          title="Meeting HR Department"
          time="Yesterday, 12:30 PM"
        />
        <AnnouncementItem
          title="IT Department need two more talents for UX/UI Designer position"
          time="Yesterday, 09:15 AM"
        />
      </div>
    </div>
  );
}