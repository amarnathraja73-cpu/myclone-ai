import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-6">
          {/* Outer circle */}
          <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#667eea"
              strokeWidth="2"
              fill="none"
              strokeDasharray="282"
              strokeDashoffset="70"
              strokeLinecap="round"
            />
          </svg>

          {/* Inner circle */}
          <svg className="absolute inset-0 w-full h-full" style={{ animation: 'spin 3s linear reverse infinite' }} viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="#f093fb"
              strokeWidth="2"
              fill="none"
              strokeDasharray="220"
              strokeDashoffset="55"
              strokeLinecap="round"
            />
          </svg>

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl animate-pulse">✨</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Generating Your AI Clone</h2>
        <p className="text-gray-600 mb-6">This takes about 15-20 minutes</p>
        
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span>Analyzing photos</span>
          </div>
          <div className="flex items-center justify-center gap-2 animate-pulse" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>Building 3D model</span>
          </div>
          <div className="flex items-center justify-center gap-2 animate-pulse" style={{ animationDelay: '0.4s' }}>
            <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>Training AI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
