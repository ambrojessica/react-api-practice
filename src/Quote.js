import React from 'react';
import Photo from './Photo';

function Quote({ msg }) {
  return (
    <div>
      <Photo />
      {
        Object.values(msg).map((value) => (
          <div key={value}>
            <h3>{value}</h3>
          </div>
        ))
      }
    </div >
  );
}

export default Quote;