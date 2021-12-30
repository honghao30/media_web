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

   const subImg = document.querySelector('.sub__visual');
   const subImgHt = subImg.offsetHeight;
   const Nav = document.querySelector('.header');

   if (scrollTop > lastScrollTop){
      // downscroll code      
      console.log('내려가나')   
      if (scrollTop > subImgHt * 0.5){
        subImg.classList.add('fixed');
       }  


   } else {
      // upscroll code
      console.log('올라가나');
         
      if(scrollTop > subImgHt){
        Nav.classList.add('fixed');
      } else{
        Nav.classList.remove('fixed');
      }
      //nav fixed
            
   }
   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, false);
