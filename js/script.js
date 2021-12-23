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
