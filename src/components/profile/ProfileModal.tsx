import React from 'react';
import { X } from 'lucide-react';
import { ProfileForm } from '../auth/ProfileForm';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userType: 'client' | 'coach';
}

export function ProfileModal({ isOpen, onClose, userType }: ProfileModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (data: any) => {
    console.log('Profile data:', data);
    // TODO: Implement profile creation/update logic
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Create Your {userType === 'coach' ? 'Coach' : 'Client'} Profile
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <ProfileForm userType={userType} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}