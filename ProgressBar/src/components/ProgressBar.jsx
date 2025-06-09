

import React, { useEffect, useState } from 'react';

const ProgressBar = ({ value = 0 }) => {

  const [percent, setpercent] = useState(value);

  useEffect(()=>{
    setpercent(Math.min(100, Math.max(value,0)));
  }, [])

  return (
    <div className="progress">
      <div className="progress-fill" style={{ width: `${value}%` }}></div>
      <span>{percent.toFixed()}%</span>
    </div>
  );
};

export default ProgressBar;
