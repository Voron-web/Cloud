

// ****************************************
// Title slider

const slides = document.querySelectorAll('.title-slider__slide'),
   points = document.querySelectorAll('.title-slider__switch-point'),
   playButton = document.querySelector('.button-play'),
   wrapper = document.querySelector('.button-play__wrapper');

let counter = 0;
interval = 0;


const activeSlide = n => {
   for (slide of slides) {
      slide.classList.remove('active');
   }
   slides[n].classList.add('active');
   for (point of points) {
      point.classList.remove('active');
   }
   points[n].classList.add('active');
};
function nextSlide() {
   if (counter != (slides.length - 1)) {
      counter++;
   }
   else {
      counter = 0;
   }
   activeSlide(counter);
}
function stopPlay() {
   playButton.classList.remove('active');
   clearInterval(interval);
}

points.forEach((item, indexPoint) => {
   item.addEventListener('click', () => {
      counter = indexPoint;
      activeSlide(counter);
      stopPlay();
   })
})

playButton.addEventListener('click', () => {
   playButton.classList.add('active')
   interval = setInterval(nextSlide, 4000);
   event.stopPropagation();
})
wrapper.addEventListener('click', () => {
   stopPlay();
})


// ****************************************
// Blog slider

const blogBtnLeft = document.querySelector('.blog__button-left'),
   blogBtnRight = document.querySelector('.blog__button-right'),
   blogSlider = document.querySelector('.slide__tape'),
   blogSliders = document.querySelectorAll('.slide'),
   blogSwitchButton = document.querySelectorAll('.blog__switch-wrapper'),
   blogSwitchPoints = document.querySelectorAll('.blog__point');

let blogCounter = 0;
blogBtnLeft.style.visibility = 'hidden';

let changeBlogActivePoint = () => {
   blogSwitchPoints.forEach((item) => {
      item.classList.remove('active');
   })
   blogSwitchPoints[blogCounter].classList.add('active');
}

let nextBlogSlide = () => {
   blogSlideWidth = document.querySelector('.slide').clientWidth;
   console.log(blogSlideWidth);
   blogBtnLeft.style.visibility = 'visible';
   changeBlogActivePoint();
   blogSlider.style.transform = 'translateX(' + (-(blogSlideWidth * blogCounter)) + 'px)';
   if (blogCounter == (blogSliders.length - 1)) {
      blogBtnRight.style.visibility = 'hidden';
   }
}
let prevBlogSlide = () => {
   blogSlideWidth = document.querySelector('.slide').clientWidth;

   blogBtnRight.style.visibility = 'visible';
   changeBlogActivePoint();
   blogSlider.style.transform = 'translateX(' + (-(blogSlideWidth * blogCounter)) + 'px)';
   if (blogCounter == 0) {
      blogBtnLeft.style.visibility = 'hidden';
   }
}

blogBtnRight.addEventListener('click', () => {
   if (blogCounter !== (blogSliders.length - 1)) {
      blogCounter++;
      nextBlogSlide();
   }
})
blogBtnLeft.addEventListener('click', () => {
   if (blogCounter !== 0) {
      blogCounter--;
      prevBlogSlide();
   }
})
blogSwitchButton.forEach((item, index) => {
   item.addEventListener('click', () => {
      if (blogCounter > index) {
         blogCounter = index;
         prevBlogSlide();
      }
      else if (blogCounter < index) {
         blogCounter = index;
         nextBlogSlide();
      }
   }
   )
})
// Event window resize
window.addEventListener('resize', () => {
   blogSlideWidth = document.querySelector('.slide').clientWidth;
   blogSlider.style.transform = 'translateX(' + (-(blogSlideWidth * blogCounter)) + 'px)';
});

// ****************************************
// Quotes slider

const
   quotesSlider = document.querySelector('.quotes__slider-tape'),
   quotesSlides = document.querySelectorAll('.quotes__slide'),
   quotesSwitchButton = document.querySelectorAll('.quotes__switcher-wrap'),
   quotesSwitchPoints = document.querySelectorAll('.quotes__switcher-point');
// quotesSlideWidth = document.querySelector('.quotes__slide').clientWidth + 64;


let quotesCounter = 0;

let quotesChangeSlide = () => {
   quotesSlideWidth = document.querySelector('.quotes__slide').clientWidth + 64;
   quotesSlider.style.transform = 'translateX(' + (-(quotesSlideWidth * quotesCounter)) + 'px)';
   quotesSwitchPoints.forEach((item) => {
      item.classList.remove('active');
   })
   quotesSlides.forEach((item) => {
      item.classList.remove('active');
   })
   quotesSwitchPoints[quotesCounter].classList.add('active');
   quotesSlides[quotesCounter].classList.add('active');


}
quotesSwitchButton.forEach((item, index) => {
   item.addEventListener('click', () => {
      quotesCounter = index;
      quotesChangeSlide();
   })
})
window.addEventListener('resize', () => {
   quotesSlideWidth = document.querySelector('.quotes__slide').clientWidth + 64;
   quotesSlider.style.transform = 'translateX(' + (-(quotesSlideWidth * quotesCounter)) + 'px)';
});