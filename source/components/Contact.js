import React from 'react';

export default ({ id, action, address }) => {
  return (
    <div className = 'contact'>
      <div className = 'contact'>
        <span className = 'action'>{ action }</span>
        <span className = 'address'>{ address }</span>
      </div>
    </div>
  );
};