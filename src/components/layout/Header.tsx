import React, { useState } from 'react';
import { Menu, User } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { ProfileModal } from '../profile/ProfileModal';
import { SearchBar } from '../search/SearchBar';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [profileType, setProfileType] = useState<'client' | 'coach'>('client');

  const openProfileModal = (type: 'client' | 'coach') => {
    setProfileType(type);
    setIsProfileModalOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Holistic Connection</h1>
            </div>
            
            <div className="flex-1 max-w-2xl mx-8">
              <SearchBar 
                value={searchQuery}
                onChange={onSearchChange}
              />
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => openProfileModal('client')}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Find a Coach
              </button>
              <button
                onClick={() => openProfileModal('coach')}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Become a Coach
              </button>
              <button 
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md"
              >
                <User className="h-6 w-6" />
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button 
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenProfile={openProfileModal}
      />

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        userType={profileType}
      />
    </>
  );
}