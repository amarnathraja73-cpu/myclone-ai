import React from 'react';
import BottomNavigation from '../components/BottomNavigation';

const ProfileScreen = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm text-center mb-6">
          <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-5xl">
            👤
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Your Name</h2>
          <p className="text-gray-500 mb-4">Premium User</p>
          <div className="flex justify-center gap-4 text-sm">
            <div>
              <p className="text-gray-500">Clone Age</p>
              <p className="font-semibold text-gray-900">0 days</p>
            </div>
            <div className="border-l border-gray-300"></div>
            <div>
              <p className="text-gray-500">Try-Ons Done</p>
              <p className="font-semibold text-gray-900">0</p>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Account Settings</h3>
          </div>
          <div className="divide-y divide-gray-200">
            <button className="w-full px-6 py-4 text-left text-gray-700 hover:bg-gray-50 transition-all flex justify-between items-center">
              <span>Edit Profile</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full px-6 py-4 text-left text-gray-700 hover:bg-gray-50 transition-all flex justify-between items-center">
              <span>Privacy Settings</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full px-6 py-4 text-left text-gray-700 hover:bg-gray-50 transition-all flex justify-between items-center">
              <span>Notification Preferences</span>
              <span className="text-gray-400">→</span>
            </button>
          </div>
        </div>

        {/* Help & Support */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Help & Support</h3>
          </div>
          <div className="divide-y divide-gray-200">
            <button className="w-full px-6 py-4 text-left text-gray-700 hover:bg-gray-50 transition-all flex justify-between items-center">
              <span>FAQ</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full px-6 py-4 text-left text-gray-700 hover:bg-gray-50 transition-all flex justify-between items-center">
              <span>Contact Support</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full px-6 py-4 text-left text-gray-700 hover:bg-gray-50 transition-all flex justify-between items-center">
              <span>Terms & Privacy</span>
              <span className="text-gray-400">→</span>
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <button className="w-full px-6 py-4 rounded-lg border-2 border-red-300 text-red-600 font-semibold hover:bg-red-50 transition-all">
          Sign Out
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation currentScreen="profile" onNavigate={onNavigate} />
    </div>
  );
};

export default ProfileScreen;
