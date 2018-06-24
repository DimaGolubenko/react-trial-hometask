import React from 'react';

import educationMap from '../theme/assets/data/education';

export default () => {
  const educationJSX = educationMap.map(education => (
    <div className = 'eduspace' key = { education.id }>
      <span className = 'period'>{ education.period }</span>
      <span className = 'eduspace'>{ education.eduspace }</span>
      <span className = 'degree'>{ education.degree }</span>
    </div>
  ));

  return (
    <div className = 'education'>
      <section className = 'sectionHeading'>
        <h1>
          <span className = 'sectionNumber'>04.</span>
          <span className = 'sectionName'>Образование</span>
        </h1>
      </section>
      { educationJSX }
      <div className = 'copyright'>2018 © Илон Маск</div>
    </div>
  );
};