'use strict'

const heading = document.querySelector('#heading');

const Keyframes = {

  borderRadius: [
    '20% 50% 50% 70%/50% 50% 70% 50%',
    '50% 20% 50% 50%/40% 40% 60% 60%',
    '50% 40% 20% 40%/40% 50% 50% 80&',
    '50% 50% 50% 20%/40% 40% 60% 60%',
  ],
};

const options = {
  duration: 3000,
  direction: 'alternate',
  iterations: Infinity,

};

heading.animate(Keyframes, options);

// 
const items = document.querySelectorAll('.img-item');
for (let i = 0; i < items.length; i++) {
  const keyframes = {
    filter: ['blur(20px)', 'blur(0)'],
  };
  const option = {
    duration: 1000,
    delay: i * 300,
    fill: 'forwards',
  };

  items[i].animate(keyframes, option);
}