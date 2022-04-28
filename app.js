$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        appendDots:'.slider-dots'
    })
})

const mediaQuery = window.matchMedia('(max-width:768px)');


    if(mediaQuery.matches)
    {
        

        $(document).ready(function(){
            $('.trending-slider').slick({
                arrows:false,
                dots:true,
                slidesToShow:2,   
                autoplay:true,
                slidesToScroll:1,
                infinite: true,
                speed: 200,
                appendDots:'.silder2-dots'
        
            })
        })

    }
    else
    {
        $(document).ready(function(){
            $('.trending-slider').slick({
                arrows:false,
                dots:true,
                slidesToShow:5,   
                autoplay:true,
                slidesToScroll:1,
                infinite: true,
                speed: 200,
                appendDots:'.silder2-dots'
        
            })
        })
    }




const clickItems = document.querySelectorAll('.main-menu');

clickItems.forEach(function(item){
  
    item.addEventListener('click',function(e){
        e.preventDefault();
        this.classList.toggle('is-open');
        console.log(this);

    })
})


const menuIcon= document.querySelector('.menu');

const navLinks = document.querySelector('.nav-links');


menuIcon.addEventListener('click',function(){
    navLinks.classList.toggle('nav-active');
    
})

