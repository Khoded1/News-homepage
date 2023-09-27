'use strict';
const headerEl = document.querySelector('.container');
const btnNavEl = document.querySelector('.mobile-nav_button');
const openMenu = document.querySelector('.open_menu');
const closeMenu = document.querySelector('.close_menu');
const overLay = document.querySelector('.overlay');

// btnNavEl.addEventListener('click', function () {
// 	headerEl.classList.toggle('nav_open');
// });
openMenu.addEventListener('click', function () {
	headerEl.classList.add('nav_open');
	document.querySelector('.overlay').style.display = 'block';
});
closeMenu.addEventListener('click', function () {
	headerEl.classList.remove('nav_open');
	document.querySelector('.overlay').style.display = 'none';
});
