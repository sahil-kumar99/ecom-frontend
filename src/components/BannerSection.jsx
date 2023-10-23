import React from "react";

const BannerSection = () => {
  return (
    <div
      className="bg-cover bg-center h-80 flex items-center justify-center text-white relative"
      style={{ backgroundImage: "url('https://picsum.photos/100/200')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 relative text-center">
        <h1 className="text-4xl font-semibold mb-4">Welcome to Ecom</h1>
        <p className="text-lg mb-6">Discover amazing products.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BannerSection;
