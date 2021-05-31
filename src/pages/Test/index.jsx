
import React, { memo, useState, useEffect, useCallback, useMemo } from 'react'

import userIcon from '@/static/userIcon.png';
import userIcon2 from '@/static/userIcon2.png';

const Test = () => {
  const handleSave = (e) => {
    console.warn('handleSave', userIcon2)
  };
  console.warn('handleSave', userIcon2)
  return (
    <div>
      <div>
        11111 userIcon
        <img src={userIcon} />
        <img src={userIcon2} />
      </div>
    </div>
  );
};

export default Test;
