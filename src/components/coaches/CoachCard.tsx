import React, { useState } from 'react';
import { Star, MapPin, Clock, Shield, Languages, Award } from 'lucide-react';
import type { Coach } from '../../types';
import { BookingModal } from '../booking/BookingModal';

interface CoachCardProps {
  coach: Coach;
  onSelect: (coach: Coach) => void;
}

export function CoachCard({ coach, onSelect }: CoachCardProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src={coach.imageUrl} 
            alt={coach.name}
            className="object-cover w-full h-48"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-gray-900">{coach.name}</h3>
                {coach.verifiedCredentials && (
                  <Shield className="h-5 w-5 text-green-500" title="Verified Credentials" />
                )}
              </div>
              <p className="text-sm text-gray-600">{coach.title}</p>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">
                {coach.rating} ({coach.reviewCount} reviews)
              </span>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{coach.location}</span>
          </div>

          <div className="mt-2 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              <span>Next available: {coach.nextAvailable}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-600">
              <Languages className="h-4 w-4 mr-2" />
              <span>{coach.languages.join(', ')}</span>
            </div>

            {coach.education.length > 0 && (
              <div className="flex items-center text-sm text-gray-600">
                <Award className="h-4 w-4 mr-2" />
                <span>{coach.education[0]}</span>
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {coach.specializations.slice(0, 3).map((spec, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>

          {coach.insuranceAccepted.length > 0 && (
            <div className="mt-3">
              <p className="text-sm text-gray-600">
                Insurance accepted: {coach.insuranceAccepted.slice(0, 2).join(', ')}
                {coach.insuranceAccepted.length > 2 && ' & more'}
              </p>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between">
            <p className="text-lg font-semibold text-indigo-600">${coach.hourlyRate}/hr</p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Book Session
            </button>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        coach={coach}
      />
    </>
  );
}