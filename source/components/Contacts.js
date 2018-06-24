import React from 'react';

import contactsMap from '../theme/assets/data/contacts';
import Contact from './Contact';

export default () => {
  const contactsJSX = contactsMap.map(contact => (
    <Contact
      key = { contact.id }
      id = { contact.id }
      action = { contact.action }
      address = { contact.address }
    />
  ));

  return (
    <div className = 'contacts'>
      <section className = 'sectionHeading'>
        <h1>
          <span className = 'sectionNumber'>03.</span>
          <span className = 'sectionName'>Контакты</span>
        </h1>
      </section>
      { contactsJSX }
    </div>
  );
};