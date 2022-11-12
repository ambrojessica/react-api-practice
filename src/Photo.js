import React from 'react';
import images from './data/Image';

function Photo() {
  const randomImg = images[Math.floor(Math.random() * images.length)];
  return (
    <div>
      <img src={randomImg.img} alt="random" width="200" />
    </div>
  );
}

export default Photo;