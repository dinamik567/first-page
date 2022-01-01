'use strict';
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav-list')
burger.addEventListener('click', function(){
	burger.classList.toggle('burger--active');
	nav.classList.toggle('nav-list--open');
});

(function sliderCarousel(){
let next = document.querySelector('.slider-arrows__right')
let previous = document.querySelector('.slider-arrows__left')
let cards = document.querySelectorAll('.slider-card');

for (let i = 0; i < cards.length; i++){
	cards[i].style.order = i + 1;
}
checkOrder()

next.addEventListener('click', function(){
	for (let i = 0; i < cards.length; i++){
		if(cards[i].style.order == 1){
			cards[i].style.order = 2;
		}
		else if(cards[i].style.order == 2){
			cards[i].style.order = 3;
		}
		else{
			cards[i].style.order = 1
		}
	}
	checkOrder()
})

previous.addEventListener('click', function(){
	for (let i = 0; i < cards.length; i++){
		if(cards[i].style.order == 3){
			cards[i].style.order = 2;
		}
		else if(cards[i].style.order == 2){
			cards[i].style.order = 1;
		}
		else{
			cards[i].style.order = 3
		}
	}
	checkOrder()
})
function checkOrder() {
	for (let i = 0; i < cards.length; i++){
		if(cards[i].style.order == 2){
			cards[i].classList.add('slider-card--active');
		}else{
			cards[i].classList.remove('slider-card--active');
		}
	}
}
}());

(function dropDownList(){
	let footerTitle = document.querySelectorAll('.footer__title');
	for(let i = 0; i < footerTitle.length; i++){
		footerTitle[i].addEventListener('click', function(){
			let elems = footerTitle[i].parentElement.children;
			for(let elem of elems){
				elem.classList.toggle('footer-col__item--active')
			}
		})
	}
}());




