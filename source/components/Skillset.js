import React from 'react';
import skillsMap from '../theme/assets/data/skillset';
import Skill from './Skill';

export default () => {

  const skillsJSX = skillsMap.map(skill => (
    <Skill
      key = { skill.id }
      title = { skill.title }
      points = { skill.points }
    />
  ));

  return (
    <section className = 'skillset'>
      <section className = 'sectionHeading'>
        <h1>
          <span className = 'sectionNumber'>01.</span>
          <span className = 'sectionName'>Набор скилов</span>
        </h1>
      </section>
      { skillsJSX }
    </section>
  );
};