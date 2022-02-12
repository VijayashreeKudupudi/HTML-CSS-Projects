const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let activeCircles = 1;

next.addEventListener('click', () => {
  activeCircles += 1;

  if (activeCircles > circles.length) {
    activeCircles = circles.length;
  }

  // console.log(activeCircles);
  update();
});

prev.addEventListener('click', () => {
  activeCircles -= 1;

  if (activeCircles < 1) {
    activeCircles = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, i) => {

    if (i < activeCircles) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }

  });

  const actives = document.querySelectorAll('.active');
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

  if (activeCircles === 1) {
    prev.disabled = true;
  } else if (activeCircles === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

}