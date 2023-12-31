const card = ()=>{
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

}

export default card;
