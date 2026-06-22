import React from 'react';

const BottomNavigation = ({ currentScreen, onNavigate }) => {
  const uniqueItems = [
    { id: 'dashboard', label: 'My Clone', icon: '👤' },
    { id: 'tryon', label: 'Try-On', icon: '✨' },
    { id: 'profile', label: 'Profile', icon: '⚙️' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex justify-around">
          {uniqueItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex-1 py-4 px-3 text-center transition-all border-t-2 ${
                currentScreen === item.id
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="text-xs font-semibold">{item.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
