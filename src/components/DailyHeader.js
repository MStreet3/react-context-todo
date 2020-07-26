import React, { useEffect } from 'react';

const DailyHeader = () => {
  useEffect(() => {
    if (navigator.geolocation) {
      console.log('Available');
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
      });
    } else {
      console.log('Unavailable');
    }
  }, []);
  return <div>Hello World!</div>;
};

export default DailyHeader;
