(function(){
    
const   sliderImages        = document.querySelectorAll(".tiles"),
        arrowLeft           = document.querySelector("#arrow-left"),
        arrowRight          = document.querySelector("#arrow-right"),
        button              = $(".menu-container .menu-item li"),
        $menuLinks          = $(".menuLinks"),
        $menuBtn            = $("#menuBtn"),
        $topNavContainer    = $(".mainMenu .menu-container");
    
let     current = 0;    

    
    
    
   
//BACKGROUND SLIDE
    
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].classList.add('removeStyleBackground');
  }
}

function startSlide() {
  reset();
  sliderImages[0].classList.remove('removeStyleBackground');
  sliderImages[0].classList.add('addStyleBackground');
}

function slideLeft() {
  reset();
  sliderImages[current - 1].classList.remove('removeStyleBackground');
  sliderImages[current - 1].classList.add('addStyleBackground');
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].classList.remove('removeStyleBackground');
  sliderImages[current + 1].classList.add('addStyleBackground');
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


