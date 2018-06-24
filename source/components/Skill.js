import React from 'react';

export default ({ id, title, points }) => {
  const isInactive = (i, pointsCount) => i >= pointsCount ? 'inactive' : null;

  const pointsJSX = pointsCount => (
    <ul>
      {[...Array(10)].map((_, i) => (
        <li key = { i } className = { isInactive(i, pointsCount) }></li>
      ))}
    </ul>
  );

  return (
    <div className = 'skill'>
      <span>{ title }</span>
      { pointsJSX(points) }
    </div>
  );
};