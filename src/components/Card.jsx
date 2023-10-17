import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <img src="product-image.jpg" alt="Product" className="w-full" /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Product Title</div>
        <p className="text-gray-700 text-base">
          Product description goes here. You can provide a brief overview of the
          product.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Price: $XX.XX
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Rating: X.X
        </span>
      </div>
    </div>
  );
};

export default Card;
