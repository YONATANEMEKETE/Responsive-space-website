/*=============== SHOW MENU ===============*/
const menu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle'); 
const navClose = document.getElementById('nav-close');


navToggle.addEventListener('click', () => {
  menu.classList.toggle('show-menu')
}); 

navClose.addEventListener('click', () => {
  menu.classList.remove('show-menu')
}); 

/*=============== REMOVE MENU MOBILE ===============*/
const links = document.querySelectorAll(".nav__link"); 

const linkAction = () => {
  const menu = document.getElementById('nav-menu')

  menu.classList.remove('show-menu')
}; 

links.forEach(lb => {
  lb.addEventListener('click', linkAction); 
})

const navBtn = document.getElementById('nav-button');  

navBtn.addEventListener('click', () => {
  menu.classList.remove('show-menu')
}); 
/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__points', 1.5, {opacity: 0, y: -300, delay: .2}) 
gsap.from('.home__rocket', 1.5, {opacity: 0, y: 300, delay: .3}) 
gsap.from('.home__planet-1', 1.5, {opacity: 0, x: -200, delay: .8}) 
gsap.from('.home__planet-2', 1.5, {opacity: 0, x: 200, delay: 1}) 
gsap.from('.home__cloud-1', 1.5, {opacity: 0, y: 200, delay: 1.2}) 
gsap.from('.home__cloud-2', 1.5, {opacity: 0, x: 200, delay: 1.3}) 
gsap.from('.home__content', 1.5, {opacity: 0, y: -100, delay: 1.4}) 
gsap.from('.home__title img', 1.5, {opacity: 0, x: 100, delay: 1.6})
