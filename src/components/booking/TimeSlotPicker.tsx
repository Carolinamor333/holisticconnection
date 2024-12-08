import React, { useState } from 'react';
import type { BookingSlot } from '../../types';

interface TimeSlotPickerProps {
  onDateSelect: (date: string) => void;
  onSlotSelect: (slot: BookingSlot) => void;
}

export function TimeSlotPicker({ onDateSelect, onSlotSelect }: TimeSlotPickerProps) {
  const [selectedDate, setSelectedDate] = useState('');

  // Mock available time slots
  const timeSlots = [
    { time: '09:00 AM', duration: 60 },
    { time: '10:30 AM', duration: 60 },
    { time: '02:00 PM', duration: 60 },
    { time: '03:30 PM', duration: 60 },
    { time: '05:00 PM', duration: 60 },
  ];

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const handleSlotSelect = (time: string, duration: number) => {
    if (!selectedDate) return;

    const slot: BookingSlot = {
      date: selectedDate,
      time,
      duration,
      type: 'online',
    };
    onSlotSelect(slot);
  };

  // Generate next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  });

  return (
    <div>
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Select Date</h4>
        <div className="grid grid-cols-7 gap-2">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => handleDateSelect(date)}
              className={`p-2 text-sm rounded-md text-center ${
                selectedDate === date
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Select Time</h4>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map(({ time, duration }) => (
              <button
                key={time}
                onClick={() => handleSlotSelect(time, duration)}
                className="p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}