import React from 'react';

const TryOnInterface = ({ cloneImage, productCategory, productName, productImage, onReset }) => {
  const getAccessoryStyle = (category) => {
    const styles = {
      eyewear: {
        width: '120px',
        height: '60px',
        top: '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '50%',
      },
      jewelry: {
        width: '80px',
        height: '80px',
        top: '120px',
        right: '20px',
        borderRadius: '50%',
      },
      belts: {
        width: '140px',
        height: '40px',
        top: '200px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '10px',
      },
      clothing: {
        width: '120px',
        height: '150px',
        top: '170px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '10px',
      },
    };
    return styles[category] || styles.eyewear;
  };

  return (
    <div className="space-y-6">
      {/* Try-On Preview */}
      <div className="bg-gradient-to-b from-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden shadow-lg">
        {/* Clone Image */}
        <div className="relative w-full h-96 flex items-center justify-center">
          <img
            src={cloneImage}
            alt="Clone with product"
            className="w-64 h-72 object-cover rounded-2xl shadow-xl"
          />
          
          {/* Simulated Accessory Overlay */}
          {productImage && (
            <div
              className="absolute bg-gray-300 opacity-70 flex items-center justify-center shadow-md"
              style={getAccessoryStyle(productCategory)}
            >
              <img
                src={productImage}
                alt="Product"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-2">Product Details</h3>
        <div className="space-y-2">
          <p className="text-gray-600 text-sm">
            <span className="font-medium">Category:</span> {productCategory.charAt(0).toUpperCase() + productCategory.slice(1)}
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-medium">Product:</span> {productName}
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-medium">Status:</span> <span className="text-green-600 font-medium">✓ Fitted</span>
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onReset}
          className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
        >
          Try Another
        </button>
        <button className="flex-1 px-4 py-3 rounded-lg gradient-primary text-white font-semibold hover:shadow-lg transition-all">
          Save Item
        </button>
      </div>
    </div>
  );
};

export default TryOnInterface;
