//슬라이드 start
const mainslider = document.querySelector(".main__visual--slider"); //전체 슬라이드 컨테이너
const slider = document.querySelectorAll(".main__visual--slider > .slider"); //모든 슬라이드들
const slideCount = slider.length; //슬라이드 갯수

const slideWidth = document.querySelector(".main__visual--slider > li").offsetWidth;
const totalWidth = slideWidth * slideCount;
const pcentWidth = (totalWidth / slideWidth) * 100;

let currentIdx = 0; //현재 슬라이드 index

mainslider.style.left = 0 + 'px';

const slidePrev = document.querySelector('.btn__slider--prev');
const slideNext = document.querySelector('.btn__slider--next');
console.log();

function moveSlide(num) { 
    mainslider.style.left = -num * slideWidth + 'px'; 
    currentIdx = num; 
}
slidePrev.addEventListener('click', function() { 
    if (currentIdx !== 0) {
        moveSlide(currentIdx - 1);
    }
}); 
slideNext.addEventListener('click', function() { 
    if (currentIdx !== slideCount - 1) {         
        moveSlide(currentIdx + 1); 
    } 
});
function autoSlide() {    
    interval = setInterval(function(){
        moveSlide(currentIdx + 1);
    },2000);
}


console.log('dd'+totalWidth);
//슬라이드 end
