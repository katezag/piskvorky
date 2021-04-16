'use strict';

let player = 'circle';

const poleElement = document.querySelector('.hra-circle');


const hra = (hraje) => {
    if (player === 'circle') {
      hraje.target.classList.add('ctverec--circle');
      poleElement.src = 'images/cross.svg';
      player = 'cross';
   
    } else if (player === 'cross') {
      hraje.target.classList.add('ctverec--cross');
      poleElement.src = 'images/circle.svg';
      player = 'circle';
    }
  };
  
  const pole = document.querySelectorAll('.ctverec');
  for (let i = 0; i < pole.length; i++) {

    pole[i].addEventListener('click', hra);
  }
  