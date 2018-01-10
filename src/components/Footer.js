import React from 'react';
import { Text } from 'rebass';

const Footer = () => {
  const fire = (
    <svg width="24px" height="24px" viewBox="0 0 24 24">
      <path
        fill="white"
        d="M11.71,19C9.93,19 8.5,17.59 8.5,15.86C8.5,14.24 9.53,13.1 11.3,12.74C13.07,12.38 14.9,11.53 15.92,10.16C16.31,11.45 16.5,12.81 16.5,14.2C16.5,16.84 14.36,19 11.71,19M13.5,0.67C13.5,0.67 14.24,3.32 14.24,5.47C14.24,7.53 12.89,9.2 10.83,9.2C8.76,9.2 7.2,7.53 7.2,5.47L7.23,5.1C5.21,7.5 4,10.61 4,14A8,8 0 0,0 12,22A8,8 0 0,0 20,14C20,8.6 17.41,3.8 13.5,0.67Z"
      />
    </svg>
  );

  return (
    <div style={{ marginTop: '2em' }}>
      <Text center bg={'orange5'} color={'white'} py={2}>
        Made with {fire} by <a href="http://adamfriedl.com">Adam Friedl</a>
      </Text>
    </div>
  );
};

export default Footer;
