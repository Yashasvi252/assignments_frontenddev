import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LinkProps {
  icon: LucideIcon;
  text: string;
  active?: boolean;
}

export function Link({ icon: Icon, text, active }: LinkProps) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg ${
        active
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      <Icon size={20} />
      <span>{text}</span>
    </a>
  );
}