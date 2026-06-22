import React from 'react';

const PhotoUploadGrid = ({ photoAngles, uploadedPhotos, onPhotoUpload }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {photoAngles.map(angle => (
        <div key={angle.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
          <label className="block cursor-pointer group">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 aspect-square flex flex-col items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-blue-50 transition-all">
              <div className="text-4xl mb-2">{angle.icon}</div>
              <p className="text-xs font-semibold text-gray-600 text-center px-2">{angle.label}</p>
              
              {uploadedPhotos[angle.id] && (
                <div className="absolute inset-0 bg-green-500 bg-opacity-20 flex items-center justify-center">
                  <div className="text-white text-2xl">✓</div>
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => onPhotoUpload(angle.id, e.target.files[0])}
              className="hidden"
            />
            <div className="px-3 py-2 text-center border-t border-gray-100 bg-gray-50 group-hover:bg-purple-50 transition-all">
              <p className="text-xs font-medium text-gray-600 group-hover:text-purple-600">
                {uploadedPhotos[angle.id] ? '✓ Uploaded' : 'Upload'}
              </p>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default PhotoUploadGrid;
