import React, { useState } from 'react';
import BottomNavigation from '../components/BottomNavigation';
import BackgroundChanger from '../components/BackgroundChanger';

const MainDashboard = ({ cloneImage, onNavigate }) => {
  const [selectedBackground, setSelectedBackground] = useState(0);

  const backgrounds = [
    { id: 0, name: 'Formal Office', color: 'from-blue-900 to-blue-700', gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' },
    { id: 1, name: 'Casual Street', color: 'from-orange-400 to-yellow-300', gradient: 'linear-gradient(135deg, #fb923c 0%, #fcd34d 100%)' },
    { id: 2, name: 'Party Night', color: 'from-purple-600 to-pink-500', gradient: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)' },
    { id: 3, name: 'Gym/Sports', color: 'from-red-500 to-orange-400', gradient: 'linear-gradient(135deg, #ef4444 0%, #fb923c 100%)' },
    { id: 4, name: 'Nature Green', color: 'from-green-500 to-emerald-400', gradient: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)' },
  ];

  const currentBackground = backgrounds[selectedBackground];

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">My Clone Studio</h1>
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
            AI
          </div>
        </div>
      </div>

      {/* Clone Display */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div
          className="w-full h-96 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center relative"
          style={{
            background: currentBackground.gradient,
          }}
        >
          {/* Clone Image */}
          <div className="text-center">
            <img
              src={cloneImage}
              alt="AI Clone"
              className="w-64 h-72 object-cover rounded-2xl shadow-lg"
            />
            <p className="text-white text-sm mt-4 font-semibold">{currentBackground.name}</p>
          </div>
        </div>
      </div>

      {/* Background Selector */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Background</h3>
        <BackgroundChanger
          backgrounds={backgrounds}
          selected={selectedBackground}
          onSelect={setSelectedBackground}
        />
      </div>

      {/* Stats Card */}
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-semibold text-gray-900 mb-4">Your Clone Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-500 text-sm">Try-Ons</p>
              <p className="text-2xl font-bold text-purple-600">0</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-500 text-sm">Saved Items</p>
              <p className="text-2xl font-bold text-blue-600">0</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-500 text-sm">Accuracy</p>
              <p className="text-2xl font-bold text-green-600">99%</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-500 text-sm">Created</p>
              <p className="text-2xl font-bold text-pink-600">Today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation currentScreen="dashboard" onNavigate={onNavigate} />
    </div>
  );
};

export default MainDashboard;
