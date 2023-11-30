const slides = [
	{
		image:"slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.addEventListener("DOMContentLoaded",()=>{

	const arrowLeft = document.querySelector('.arrow_left');
	const arrowRight = document.querySelector('.arrow_right');
	const bannerImage = document.querySelector('.banner-img');
	const bannerText = document.querySelector('#banner-text');
	const dots = document.getElementsByClassName('dot');
	let currentSlideIndex = 0;

	// function setSlide(){

		

	// }

	function incrementSlideIndex(){
		if(currentSlideIndex===0){
			currentSlideIndex = 3;
		}else{
			currentSlideIndex-=1;
		}
	}
	function decrementSlideIndex(){
		if(currentSlideIndex===3){
			currentSlideIndex = 0;
		}else{
			currentSlideIndex+=1;
		}
	}

	arrowLeft.addEventListener('click',()=>{

		incrementSlideIndex()

		console.log(currentSlideIndex);
	})
	arrowRight.addEventListener('click',()=>{

		decrementSlideIndex()

		console.log(currentSlideIndex);
	})


})

	
