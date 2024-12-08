import React from 'react';
import { X } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProfile: (type: 'client' | 'coach') => void;
}

export function MobileNav({ isOpen, onClose, onOpenProfile }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div 
        className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <button 
            onClick={() => {
              onClose();
              onOpenProfile('client');
            }}
            className="block w-full text-left px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
          >
            Find a Coach
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenProfile('coach');
            }}
            className="block w-full text-left px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
          >
            Become a Coach
          </button>
          <a 
            href="#" 
            className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
          >
            About Us
          </a>
          <a 
            href="#" 
            className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
          >
            Contact
          </a>
        </nav>

        <div className="border-t px-4 py-6">
          <a 
            href="#" 
            className="block px-4 py-2 text-base font-medium text-indigo-600 hover:bg-indigo-50 rounded-md"
          >
            Sign In
          </a>
          <a 
            href="#" 
            className="block px-4 py-2 mt-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-center"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}