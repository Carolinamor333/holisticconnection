import React, { useState } from 'react';
import { X, Calendar, Clock, Video, MapPin } from 'lucide-react';
import type { Coach, BookingSlot } from '../../types';
import { TimeSlotPicker } from './TimeSlotPicker';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  coach: Coach;
}

export function BookingModal({ isOpen, onClose, coach }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<BookingSlot | null>(null);
  const [sessionType, setSessionType] = useState<'online' | 'in-person'>('online');

  if (!isOpen) return null;

  const handleBooking = () => {
    if (!selectedSlot) return;
    
    console.log('Booking confirmed:', {
      coach,
      slot: selectedSlot,
      sessionType,
    });
    
    // TODO: Implement actual booking logic
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={coach.imageUrl}
                alt={coach.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900">{coach.name}</h3>
                <p className="text-sm text-gray-500">{coach.title}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6">
            <div className="flex space-x-4 mb-6">
              <button
                className={`flex-1 py-2 px-4 rounded-md ${
                  sessionType === 'online'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setSessionType('online')}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Video className="h-5 w-5" />
                  <span>Online Session</span>
                </div>
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md ${
                  sessionType === 'in-person'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setSessionType('in-person')}
              >
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>In-Person Session</span>
                </div>
              </button>
            </div>

            <TimeSlotPicker
              onDateSelect={setSelectedDate}
              onSlotSelect={setSelectedSlot}
            />

            {selectedSlot && (
              <div className="mt-6 bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Booking Summary</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{selectedSlot.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{selectedSlot.time} ({selectedSlot.duration} minutes)</span>
                  </div>
                  <div className="flex items-center">
                    {sessionType === 'online' ? (
                      <Video className="h-4 w-4 mr-2" />
                    ) : (
                      <MapPin className="h-4 w-4 mr-2" />
                    )}
                    <span>{sessionType === 'online' ? 'Online Session' : 'In-Person Session'}</span>
                  </div>
                  <div className="mt-4 font-medium text-gray-900">
                    Total: ${coach.hourlyRate}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6">
              <button
                onClick={handleBooking}
                disabled={!selectedSlot}
                className={`w-full py-2 px-4 rounded-md text-white ${
                  selectedSlot
                    ? 'bg-indigo-600 hover:bg-indigo-700'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}