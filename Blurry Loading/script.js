// Variable declarations
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// Functions

// blurring
function blurring() {

  load++;

  if (load > 99) {
    clearInterval(interval);
  }

  // console.log('load', load);
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scaling(load, 0, 100, 1, 0);   //Opacity can be from 0 to 1, so 3rd n 4th characters are 1 and 0.
  bg.style.filter = `blur(${scaling(load, 0, 100, 30, 0)}px)`;  //3rd n 4th params are the blurness, from 30% blur to no blur(i.e. 0px)
};

// scaling 
// Function which allows you to convert a number that falls within a range of numbers into a number within a different range. 
function scaling(number, inputMin, inputMax, outputMin, outputMax) {
  return (number - inputMin) * (outputMax - outputMin) / (inputMax - inputMin) + outputMin;
};

// Logic
let load = 0;
let interval = setInterval(blurring, 30); //30 is a 30ms, setting time interval.
