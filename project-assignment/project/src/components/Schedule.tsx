import React, { useState } from 'react';
import { MoreHorizontal, Plus, X } from 'lucide-react';
import { ScheduleItem as ScheduleItemType } from '../types';

interface ScheduleItemProps extends ScheduleItemType {
  onRemove: (id: string) => void;
}

function ScheduleItem({ id, time, title, priority, type, onRemove }: ScheduleItemProps) {
  const [showActions, setShowActions] = useState(false);

  return (
    <div 
      className="flex items-center justify-between py-3 group"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="flex items-start gap-4">
        <span className="text-sm text-gray-500">{time}</span>
        <div>
          <h4 className="font-medium">{title}</h4>
          {type && <span className="text-sm text-gray-500">{type}</span>}
        </div>
      </div>
      {showActions && (
        <button 
          onClick={() => onRemove(id)}
          className="text-red-400 hover:text-red-600 transition-colors"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}

interface ScheduleProps {
  schedules: ScheduleItemType[];
  onRemove: (id: string) => void;
  onAdd: (schedule: Omit<ScheduleItemType, 'id'>) => void;
}

export function Schedule({ schedules, onRemove, onAdd }: ScheduleProps) {
  const [showForm, setShowForm] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    time: '',
    title: '',
    priority: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(newSchedule);
    setNewSchedule({ time: '', title: '', priority: false });
    setShowForm(false);
  };

  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Upcoming Schedule</h3>
          <p className="text-sm text-gray-500">Today, {new Date().toLocaleDateString()}</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 text-blue-500 hover:bg-blue-50 rounded-lg text-sm flex items-center gap-2"
        >
          <Plus size={16} />
          <span>New Schedule</span>
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                value={newSchedule.time}
                onChange={e => setNewSchedule(prev => ({ ...prev, time: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={newSchedule.title}
                onChange={e => setNewSchedule(prev => ({ ...prev, title: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="priority"
                checked={newSchedule.priority}
                onChange={e => setNewSchedule(prev => ({ ...prev, priority: e.target.checked }))}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="priority" className="ml-2 block text-sm text-gray-700">
                Priority
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
              >
                Add Schedule
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="divide-y">
        {schedules.map(schedule => (
          <ScheduleItem key={schedule.id} {...schedule} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
}