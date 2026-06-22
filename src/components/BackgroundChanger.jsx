import React from 'react';

const BackgroundChanger = ({ backgrounds, selected, onSelect }) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6">
      {backgrounds.map(bg => (
        <button
          key={bg.id}
          onClick={() => onSelect(bg.id)}
          className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
            selected === bg.id
              ? 'ring-2 ring-purple-500 ring-offset-2 scale-110'
              : 'hover:scale-105'
          }`}
          style={{
            background: selected === bg.id ? bg.gradient : bg.gradient,
            color: 'white',
            opacity: selected === bg.id ? 1 : 0.7,
          }}
        >
          {bg.name}
        </button>
      ))}
    </div>
  );
};

export default BackgroundChanger;
