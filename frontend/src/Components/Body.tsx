import React from 'react';
import Buttons from './Buttons';

const Body: React.FC = () => {
  return (
    <div className='bg-cover bg-center' style={{ backgroundImage: 'url(https://cdn.vectorstock.com/i/1000x1000/91/27/circuit-board-background-with-blue-electronics-vector-1969127.webp)' }}>
  
          <div>
            <Buttons />
          </div>
        
    </div>
  );
};

export default Body;

