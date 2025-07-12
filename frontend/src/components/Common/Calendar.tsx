
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(currentDate.getMonth() - 1);
    } else {
      newDate.setMonth(currentDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };
  
  const days = getDaysInMonth(currentDate);
  const today = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <div className="flex space-x-1">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigateMonth('next')}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          const isToday = day === today && 
                         currentDate.getMonth() === currentMonth && 
                         currentDate.getFullYear() === currentYear;
          
          return (
            <div
              key={index}
              className={`text-center p-2 text-sm cursor-pointer rounded ${
                day === null 
                  ? '' 
                  : isToday 
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
