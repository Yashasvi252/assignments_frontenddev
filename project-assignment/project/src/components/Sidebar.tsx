import React from 'react';
import { LayoutDashboard, Users, Calendar, UserCircle, Building2, Headphones, Settings } from 'lucide-react';
import { Link } from './Link';

export function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="text-blue-600">
          <svg className="w-8 h-8" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold">Vasitum</h1>
      </div>

      <div className="space-y-1">
        <h2 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          MAIN MENU
        </h2>
        <Link icon={LayoutDashboard} text="Dashboard" active />
        <Link icon={Users} text="Recruitment" />
        <Link icon={Calendar} text="Schedule" />
        <Link icon={UserCircle} text="Employee" />
        <Link icon={Building2} text="Department" />
      </div>

      <div className="mt-8 space-y-1">
        <h2 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          OTHER
        </h2>
        <Link icon={Headphones} text="Support" />
        <Link icon={Settings} text="Settings" />
      </div>
    </div>
  );
}