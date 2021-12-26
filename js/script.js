//pc m 구분
window.addEventListener("resize",function(e){
    e.preventDefault;
    const windSize = window.innerWidth;
    console.log(windSize);
    if(windSize > 768){
        //pc에서만 실행되는 스크립트        
        gnb();
        console.log(windSize + 'pc사이즈')
    }else{
        //모바일에서만 실행되는 스크립트
        console.log(windSize + '모바일 사이즈')
    }
});
//gnb
function gnb() {
const head = document.querySelector('.header__gnb');
const Nav = document.querySelector('.nav');  
const NavOneDepth = document.querySelectorAll('.nav > li');
const Navdim = document.querySelector('.dim');
const subMenu = document.querySelectorAll('.navTwo');
const subMenuCont = subMenu.length;
const subMenuHiehgt = 0;
const navTwoHt = subMenu[0].offsetHeight;
  for(var i = 0; i < subMenuCont; i++){
    if(subMenu[i].offsetHeight > subMenuHiehgt){
      subMenuHiehgt = subMenu[i].offsetHeight;
    }  
  };
  for (let i=0;i < NavOneDepth.length;i++){
    NavOneDepth[i].addEventListener('mouseenter', function() {
      console.log(subMenu[0].offsetHeight);
      Navdim.classList.add('is-open');
      Nav.classList.add('is-open');
      Navdim.style.height = '130' + 'px';
    });
    NavOneDepth[i].addEventListener('mouseleave', function() {    
      Navdim.classList.remove('is-open');
      Nav.classList.remove('is-open');
      Navdim.style.height = '0';
    });  
  }
}
gnb()
//윈도우 스크롤
var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop; 

   const sect01 = document.querySelector('.section01');
   const sect01Offset = sect01.offsetTop;
   const sect01Height = sect01.offsetHeight;
   const sectAnival = sect01Offset + (sect01Height * 0.5) + 'px';
   const sect01List = document.querySelectorAll('.section01 li');


   const sect02 = document.querySelector('.section02');
   const sect02Offset = sect02.offsetTop;
   const sect02Height = sect02.offsetHeight;
   const movibox = document.querySelector('.movie');
   const movieBoxChangeT = sect02Offset + sect02Height;

   const sect03 = document.querySelector('.section03');
   const sect03Offset = sect03.offsetTop;
   const sect03Height = sect03.offsetHeight;
   const sectenter = sect03Offset + sect03Height;
   const sect03List = document.querySelectorAll('.section03 p');

   console.log(sect03List);    

   if (scrollTop > lastScrollTop){
      // downscroll code      
      console.log('내려가나')   
      if (scrollTop > sect01Offset){
        console.log(sect01Offset)
        sect01.classList.add('is-active');
        for(let i = 0;i < sect01List.length;i++){
          sect01List[i].classList.add('is-show');
        }
       }  
       //section-01
       if(scrollTop > movieBoxChangeT ){
        movibox.classList.add('bottom__play');
       }
      //  비디오 플레이어
      if (scrollTop > sect03Offset - 200){        
        sect03.classList.add('is-active');
        for(let i = 0;i < sect03List.length;i++){
          sect03List[i].classList.add('is-show');
        }
       } 
       //sect03

   } else {
      // upscroll code
      console.log('올라가나');
      const mainVheight = document.querySelector('.main__visual').offsetHeight;
      const Nav = document.querySelector('.header');
      console.log('이미높이' + mainVheight);      
      if(scrollTop > mainVheight){
        Nav.classList.add('fixed');
      } else{
        Nav.classList.remove('fixed');
      }
      //nav fixed
      if (scrollTop > sect01Offset){
        sect01.classList.remove('is-active');
        for(let i = 0;i < sect01List.length;i++){
          sect01List[i].classList.remove('is-show');
        }         
      }
      //sect01
      if(scrollTop < movieBoxChangeT ){
        movibox.classList.remove('bottom__play');
       }
       //video play
       if (scrollTop > sect01Offset){
        sect03.classList.remove('is-active');
        for(let i = 0;i < sect01List.length;i++){
          sect03List[i].classList.remove('is-show');
        }         
      }       
   }
   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, false);
//동영상 재새이
window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);
function videoScroll() {
  if ( document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');
    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;
      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ))) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
};