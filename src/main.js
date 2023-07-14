import '../styles/style.css';
import '../styles/components/site-content.css';
import '../styles/components/latest-news.css';
import '../styles/components/hero.css';
import '../styles/components/top-products.css';
import '../styles/components/about-meal.css';
import '../styles/components/our-services.css';
import '../styles/components/big-deal.css';
import '../styles/components/subscribe.css';
import '../styles/components/contact-us.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';



console.log("done");

$(document).ready(function(){
  $('.food-slider').slick({
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow:3,
    prevArrow:".prev-btn",
    nextArrow:".next-btn",
    responsive:[
      {
        breakpoint: 1640,
        settings:{
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings:{
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        }
      }
      ]
    
  });
  
  $('.nav-trigger').click(function(){
    $('.site-content-wrapper').toggleClass('scaled');
  })
  
});
