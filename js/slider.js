/*
sh slider 0.1Ver.
공부하면서 검색하면서 만든 슬라이드
*/
//슬라이드 start
function shslide(){
const mainslider = document.querySelector(".main__visual--slider"); //전체 슬라이드 컨테이너
const slider = document.querySelectorAll(".main__visual--slider > .slider"); //모든 슬라이드들
const slideCount = slider.length; //슬라이드 갯수

const slideWidth = document.querySelector(".main__visual--slider > li").offsetWidth;
const totalWidth = slideWidth * slideCount;
const pcentWidth = (totalWidth / slideWidth) * 100;
const startNum = 0;

let currentIdx = 0; //현재 슬라이드 index
let curIndex = startNum;
let curSlide = slider[curIndex];
let slideSpeed = 300;

mainslider.style.left = 0 + 'px';

const slidePrev = document.querySelector('.btn__slider--prev');
const slideNext = document.querySelector('.btn__slider--next');
console.log();

//move slider
function moveSlide(num) { 
    mainslider.style.left = -num * slideWidth + 'px'; 
    currentIdx = num;     
    for(let i = 0; i < slideCount; i++) {
        slider[i].classList.remove('slide-active');
        slider[currentIdx].classList.add('slide-active');

        pageDots[i].classList.remove('dot_active');        
        pageDots[currentIdx].classList.add('dot_active');        
    }
    

    console.log(pageDots);
};
//next prev
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
//pagation
const pagination = document.querySelector('.pagenation');
let pageChild = '';
for (let i = 0; i < slideCount; i++) {
    pageChild += '<button type="button" class="dot';
    pageChild += (i === startNum) ? ' dot_active' : '';
    pageChild += '" data-index="' + i + '"><span class="ir-text">'+ i + ' </span></button>';
}
pagination.innerHTML = pageChild;
const pageDots = document.querySelectorAll('.dot'); // each dot from pagination


    //slider dot
    let curDot; 
    Array.prototype.forEach.call(pageDots, function (dot, i) {
        dot.addEventListener('click', function (e) {
            e.preventDefault();
            curDot = document.querySelector('.dot_active');
            curDot.classList.remove('dot_active');

            curDot = this;
            this.classList.add('dot_active');

            curSlide.classList.remove('slide-active');
            curIndex = Number(this.getAttribute('data-index'));
            curSlide = slider[curIndex];
            curSlide.classList.add('slide-active');  
            
            mainslider.style.transition = slideSpeed + "ms";
            mainslider.style.transform = "translate3d(-" + (slideWidth * (curIndex)) + "px, 0px, 0px)";
        });
    });

  
}

shslide();
//슬라이드 end