
import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: 'blue' | 'green' | 'orange' | 'red';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  max = 100, 
  color = 'blue', 
  size = 'md',
  showLabel = true 
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500'
  };

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  return (
    <div className="w-full">
      <div className={`w-full bg-gray-200 rounded-full ${sizeClasses[size]}`}>
        <div 
          className={`${colorClasses[color]} ${sizeClasses[size]} rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-sm text-gray-600 mt-1">{Math.round(percentage)}%</span>
      )}
    </div>
  );
};

export default ProgressBar;
