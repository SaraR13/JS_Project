(function(){

   
//BACKGROUND SLIDE
   
const sliderImages = document.querySelectorAll(".tiles"),
      arrowLeft = document.querySelector("#arrow-left"),
      arrowRight = document.querySelector("#arrow-right");
    
let     current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].classList.add('newClass2');
  }
}

function startSlide() {
  reset();
  sliderImages[0].classList.remove('newClass2');
  sliderImages[0].classList.add('newClass');
}

function slideLeft() {
  reset();
  sliderImages[current - 1].classList.remove('newClass2');
  sliderImages[current - 1].classList.add('newClass');
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].classList.remove('newClass2');
  sliderImages[current + 1].classList.add('newClass');
  current++;
}

arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
    
});

arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
    
});



    
    
    
    

//GALLERY

function startGallery() {

$('.photo-gallery ul li').on("click", function() {
	
    let src = $(this).data('src');
    let $gallery = $(this).closest('.photo-gallery');
	
    $gallery.find('.current-photo img').attr('src', src);
    
});

$('.photo-gallery').each(function() {

    $(this).find('li')[0].click();
    
});

};




    
 
    
    
//MENU BORDER ANIMATION

function menuBorderAnim() {

const button = $(".menu-container .menu-item li");

button.mouseover(onButtonOver);
   
    function onButtonOver() {

    let parent = $(this).parent();
        
    parent.addClass("active");
    parent
        .find(".menu-lt").animate(
            {   
                marginLeft: 0, 
                marginTop: 0, 
                opacity: 1
            }, 
            100
    )
        .end()
        
        .find(".menu-rt").animate(
            {
                marginRight: 0,
                marginTop: 0,
                opacity: 1
            }, 
            100
    )
        .end()
        
        .find(".menu-lb").animate(
            {
                marginLeft: 0,
                marginTop: -5,
                opacity: 1
            }, 
            100
    )
        .end()
        
        .find(".menu-rb").animate(
            {
                marginRight: 0,
                marginTop: -5,
                opacity: 1
            }, 
            100
    )   
        .end()
        
    }

button.mouseout(onButtonOut);
   
    function onButtonOut() {

    let parent = $(this).parent();
        
    parent.removeClass("active");        
    parent
        .find(".menu-lt").animate(
            {
                marginLeft: -10,
                marginTop: -10,
                opacity: 0
            }, 
            100
    )
        .end()
        
        .find(".menu-rt").animate(
            {
                marginRight: -10,
                marginTop: -10,
                opacity: 0
            }, 
            100
    )
        .end()
        
        .find(".menu-lb").animate(
            {
                marginLeft: -10,
                marginTop: 5,
                opacity: 0
            }, 
            100
    )
        .end()
        
        .find(".menu-rb").animate(
            {
                marginRight: -10,
                marginTop: 5,
                opacity: 0
            }, 
            100
    )
        .end()
        
    }
}





    
    
//SCROLL DOWN ANIMATION
    
const $menuLinks = $(".menuLinks");

function scrollDown(){        
        $menuLinks.on("click", function(evt){
        evt.preventDefault();
        let targetElement = $(this).attr("href");
            $("html, body")
                .animate(
                    {
                        "scrollTop" : $(targetElement).offset().top 
                    },
                    1300
                );
        });
    }

    




// MENU ICON ON SMALL DEVICES

const
    $menuBtn            =   $("#menuBtn"),
    $topNavContainer    =   $(".mainMenu .menu-container");

function bindMenuBtn() {
    $menuBtn.on("click", function () {
    $topNavContainer.slideToggle();
    });
}
    
function bindEnquire() {
    enquire.register("screen and (min-width: 768px)", {
    match: function () {
    $topNavContainer.show();
},

    unmatch: function () {
    $topNavContainer.hide();
    }
    });
} 


    
function init() {
   
 startSlide();
    bindEnquire();
    bindMenuBtn();
    scrollDown();
    startGallery();
    menuBorderAnim();
}    
    
window.onload = init;     

})(); // closing IFFY


