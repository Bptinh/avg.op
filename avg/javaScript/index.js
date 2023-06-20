
 











var labelB3 = document.querySelector('.item-list-label')
, chevron = document.querySelector('.fa-chevron-up')
,dropdowLabel = document.querySelector('.drop-dow-label')
labelB3.addEventListener('click', ()=>{
    chevron.classList.toggle('activer-b3')
    dropdowLabel.classList.toggle('drop-dowlabel')
})


const openm = document.querySelector('.open')
        ,menuopen = document.querySelector('.container-menu-top2')
        ,maino = document.querySelector('.main-overplay')

    openm.addEventListener('click' , toggle);
    maino.addEventListener('click' , toggle);


    function toggle(){
        menuopen.classList.toggle('active-open')
        document.body.classList.toggle('hiden')
        maino.classList.toggle('main')
    }
    $(document).ready(function(){
        $('.cl-muavg').click(function(){
            $('.mua-avg').slideToggle()
        })
        // chill
        $('.GHTB').click(function(){
            $('.DRGHTB').slideToggle()
        })
    
        $('.vavg').click(function(){
            $('.vavg1').slideToggle()
        })
    
        $('.htavg').click(function(){
            $('.htavg2').slideToggle()
        })
    })
    // 
var carouselScorll = document.querySelector('.carouselTinhka')
            ,prevNext = document.querySelectorAll('#prevNext')
            ,itemCardWidth = carouselScorll.querySelector('.cardTinhka').offsetWidth
            ,crouselChid = [...carouselScorll.children]
        var isDrag = false, starX, scrollStar, timeOut;
        // prev next
            prevNext.forEach(function(preNex){
                preNex.addEventListener('click', ()=>{
                    carouselScorll.scrollLeft += preNex.className === 'left' ? -itemCardWidth : itemCardWidth;
                })
            })
        // vòng tuần hoàn
        let itemCarview =Math.round(carouselScorll.offsetWidth / itemCardWidth);

        crouselChid.slice(-itemCarview).reverse().forEach(function(card){
            carouselScorll.insertAdjacentHTML("afterbegin", card.outerHTML)
        })

        crouselChid.slice(0, itemCarview).forEach(function(card){
            carouselScorll.insertAdjacentHTML("beforeend", card.outerHTML)
        })
        // lạp lai
        carouselScorll.addEventListener('scroll', vonglaplai);

        function vonglaplai(){
            if(carouselScorll.scrollLeft === 0){
                carouselScorll.classList.add('not-transition')
                carouselScorll.scrollLeft = carouselScorll.scrollWidth - ( 2 * carouselScorll.offsetWidth)
                carouselScorll.classList.remove('not-transition')
            }else if(Math.ceil(carouselScorll.scrollLeft) === carouselScorll.scrollWidth - carouselScorll.offsetWidth) {
                carouselScorll.classList.add('not-transition')
                carouselScorll.scrollLeft = carouselScorll.offsetWidth;
                carouselScorll.classList.remove('not-transition')
            }
        }
        // scroll
        carouselScorll.addEventListener('mousedown', draggingStar);
        carouselScorll.addEventListener('mousemove', dragging);
        document.addEventListener('mouseup', draggingStop);


        function draggingStar(e){
            isDrag = true;
            starX = e.pageX;
            scrollStar = carouselScorll.scrollLeft;
            carouselScorll.classList.add('dragging')
        }

        function dragging(e){
            if(!isDrag){return}
            carouselScorll.scrollLeft = scrollStar -  (e.pageX - starX)
        }

        function draggingStop(){
            isDrag = false;

        }
        // auto play
        function atoplay(){
            if(window.innerWidth < 100){return}
            timeOut = setInterval(function(){
                carouselScorll.scrollLeft -= itemCardWidth
            },3500)
        }
        atoplay()
// slider 1

let slideIndexX = 0;
showSlidesX();

function showSlidesX() {
  let i;
  let slidesX = document.getElementsByClassName("noneSld");
  for (i = 0; i < slidesX.length; i++) {
    slidesX[i].style.display = "none";
  }
  slideIndexX++;
  if (slideIndexX > slidesX.length) {slideIndexX = 1}
  slidesX[slideIndexX-1].style.display = "block";
  setTimeout(showSlidesX, 3000); 
}
// auto play
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("noneSld");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// slider 2











        