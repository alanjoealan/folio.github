let text = document.getElementById('text');
let moon = document.getElementById('moon');
let left = document.getElementById('left');
let right = document.getElementById('right');
let sky= document.getElementById('sky');
let floor= document.getElementById('floor');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

   
    sky.style.top = value * -1.5 + 'px';
    left.style.left = value * -1.5 + 'px';
    right.style.left = value * 1.5 + 'px';
    floor.style.marginTop = value * 2.5 + 'px';
    moon.style.marginTop = value * 2.5 + 'px';
});

