import React from 'react';
import photo from '../theme/assets/images/elon-musk.png';

export default () => {
  return (
    <div className = 'header'>
      <div>
        <h1>Илон Маск</h1>
        <span>Предприниматель, изобретатель, инженер, инвестор</span>
        <p>Стремлюсь сократить глобальное потепление за счёт устойчивого производства потребления энергии и снижения «риска исчезновения человека», сделав жизнь многопланетной и создав человеческую колонию на Марсе.</p>
      </div>
      <img src = {photo} />
    </div>
  )
};