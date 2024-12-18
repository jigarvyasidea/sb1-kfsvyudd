import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

const StatCard = ({ icon: Icon, label, value }: StatCardProps) => {
  return (
    <div className="px-4 py-5 bg-gray-800/50 backdrop-blur-sm shadow rounded-lg overflow-hidden sm:p-6">
      <dt className="text-sm font-medium text-gray-400 truncate flex items-center">
        <Icon className="mr-2 h-5 w-5 text-blue-500" />
        {label}
      </dt>
      <dd className="mt-1 text-3xl font-semibold text-white">{value}</dd>
    </div>
  );
};

export default StatCard;