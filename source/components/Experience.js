import React from 'react';

import experienceMap from '../theme/assets/data/experience';
import Workplace from './Workplace';

export default () => {

  const experienceJSX = experienceMap.map(workplace => (
    <Workplace
      key = { workplace.id }
      period = { workplace.period }
      position = { workplace.position }
      location = { workplace.location }
      company = { workplace.company }
    />
  ));

  return (
    <section>
      <section className = 'sectionHeading'>
        <h1>
          <span className = 'sectionNumber'>02.</span>
          <span className = 'sectionName'>Опыт работы</span>
        </h1>
      </section>
      { experienceJSX }
    </section>
  );
}