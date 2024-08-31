import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 h-2 rounded mt-2">
      <div
        className="bg-blue-500 h-2 rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
