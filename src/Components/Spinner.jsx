import React from 'react';

const Spinner = () => {
  return (
    <div
      className="flex items-center justify-center min-h-[200px]"
      role="status"
    >
      <div className="relative">
        <div className="w-12 h-12 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-violet-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
