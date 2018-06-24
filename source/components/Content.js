import React from 'react';

import Skillset from '../components/Skillset';
import Experience from '../components/Experience';
import Contacts from '../components/Contacts';
import Education from '../components/Education';

export default () => {
  return (
    <div className = 'content'>
      <div>
        <div className = 'topRow'>
          <Skillset />
          <Experience />
        </div>
        <div className = 'bottomRow'>
          <Contacts />
          <Education />
        </div>
      </div>
    </div>
  );
};