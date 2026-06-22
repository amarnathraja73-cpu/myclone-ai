import React, { useState } from 'react';
import BottomNavigation from '../components/BottomNavigation';
import TryOnInterface from '../components/TryOnInterface';

const TryOnStudio = ({ cloneImage, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('eyewear');
  const [productLink, setProductLink] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isTrying, setIsTrying] = useState(false);
  const [tryOnResult, setTryOnResult] = useState(null);

  const categories = [
    { id: 'eyewear', label: 'Eyewear', icon: '👓' },
    { id: 'jewelry', label: 'Jewelry', icon: '💍' },
    { id: 'belts', label: 'Belts', icon: '⌛' },
    { id: 'clothing', label: 'Clothing', icon: '👗' },
  ];

  const handleFetchAndTryOn = () => {
    if (productLink.trim()) {
      setIsTrying(true);
      setTimeout(() => {
        setIsTrying(false);
        setTryOnResult({
          category: selectedCategory,
          source: 'link',
          productName: 'Product from ' + new URL(productLink).hostname,
        });
      }, 3000);
    }
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
        setIsTrying(true);
        setTimeout(() => {
          setIsTrying(false);
          setTryOnResult({
            category: selectedCategory,
            source: 'upload',
            productName: file.name,
          });
        }, 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Try-On Studio</h1>
          <p className="text-gray-500 text-sm mt-1">See how products look on your clone</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        {!tryOnResult ? (
          <div className="space-y-6">
            {/* Category Selection */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Product Category</h2>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                      selectedCategory === cat.id
                        ? 'gradient-primary text-white shadow-md'
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-purple-300'
                    }`}
                  >
                    <span className="mr-2">{cat.icon}</span>{cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Link Input */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Paste Product Link</h3>
              <p className="text-gray-500 text-sm mb-4">Works with Instagram, Amazon, Myntra, and more</p>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={productLink}
                  onChange={(e) => setProductLink(e.target.value)}
                  placeholder="https://example.com/product"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 text-sm"
                />
                <button
                  onClick={handleFetchAndTryOn}
                  disabled={!productLink.trim() || isTrying}
                  className="px-6 py-3 gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isTrying ? 'Trying...' : 'Fetch & Try'}
                </button>
              </div>
            </div>

            {/* Or Divider */}
            <div className="flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-400 text-sm font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Upload Image */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Upload Product Image</h3>
              <label className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center cursor-pointer hover:bg-purple-50 transition-all block">
                <div className="text-4xl mb-3">📷</div>
                <p className="font-semibold text-gray-700 mb-1">Drag or click to upload</p>
                <p className="text-gray-500 text-sm">PNG, JPG up to 10MB</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUploadImage}
                  disabled={isTrying}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        ) : (
          <TryOnInterface
            cloneImage={cloneImage}
            productCategory={tryOnResult.category}
            productName={tryOnResult.productName}
            productImage={uploadedImage}
            onReset={() => {
              setTryOnResult(null);
              setProductLink('');
              setUploadedImage(null);
            }}
          />
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation currentScreen="tryon" onNavigate={onNavigate} />
    </div>
  );
};

export default TryOnStudio;
