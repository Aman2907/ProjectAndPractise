import React from 'react';

const ProgressBar = ({ value = 0 }) => {
  return (
    <div className="progress">
      <div className="progress-fill" style={{ width: `${value}%` }}></div>
      <span>{value.toFixed()}%</span>
    </div>
  );
};

export default ProgressBar;
