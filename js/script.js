//pc m 구분
window.addEventListener("resize",function(e){
    e.preventDefault;
    const windSize = window.innerWidth;
    console.log(windSize);
    if(windSize > 768){
        //pc에서만 실행되는 스크립트
        console.log(windSize + 'pc사이즈')
    }else{
        //모바일에서만 실행되는 스크립트
        console.log(windSize + '모바일 사이즈')
    }
});
//gnb


//tab
//슬라이드 start
const mainslider = document.querySelector(".main__visual--slider"); //전체 슬라이드 컨테이너
const slider = document.querySelectorAll(".main__visual--slider > .slider"); //모든 슬라이드들
const slideCount = slider.length; //슬라이드 갯수

const slideWidth = document.querySelector(".main__visual--slider > li").offsetWidth;
const totalWidth = slideWidth * slideCount;
const pcentWidth = (totalWidth / slideWidth) * 100;

let currentIdx = 0; //현재 슬라이드 index

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

autoSlide();
console.log('dd'+totalWidth);
//슬라이드 end

//윈도우 스크롤
var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
   if (scrollTop > lastScrollTop){
      // downscroll code      
      console.log('내려가나')
   } else {
      // upscroll code
      console.log('올라가나')
   }
   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, false);
