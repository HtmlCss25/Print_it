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

	function setSlide(){

		bannerImage.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
		bannerText.innerHTML = slides[currentSlideIndex].tagLine;

	}

	function setCurrentDot(){

		for(let i=0;i<dots.length;i++){

			if(dots[i].classList.contains('dot_selected')){
				dots[i].classList.remove('dot_selected');
			}
			
			dots[currentSlideIndex].classList.add('dot_selected');

		}

	}

	arrowLeft.addEventListener('click',()=>{

		incrementSlideIndex()

		setSlide()
		setCurrentDot()
		console.log(currentSlideIndex);
	})
	arrowRight.addEventListener('click',()=>{

		decrementSlideIndex()
		setSlide()
		setCurrentDot()
		// console.log(currentSlideIndex);
	})


})

	
