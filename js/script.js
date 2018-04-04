/*BACKGROUND SLIDE*/

(function(){

let sliderImages = document.querySelectorAll(".tiles"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
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

startSlide();











/*GALLERY*/
    
$(function() {

	$('.photo-gallery ul li').click(function() {
		var src = $(this).data('src');
		var $gallery = $(this).closest('.photo-gallery');
		$gallery.find('.current-photo img').attr('src', src);
	});

	$('.photo-gallery').each(function() {
		$(this).find('li')[0].click();
	});

});




    
    
/*MENU BORDER ANIMATION*/

$(document).ready(documentReady);

function documentReady()
{
    var button = $(".menu-container .menu-item li");

    button.mouseover(onButtonOver);
    function onButtonOver()
    {

    var parent = $(this).parent();
        parent.addClass("active");

        parent.find(".menu-lt").animate({marginLeft: 0, marginTop: 0, opacity: 1}, 100);

        parent.find(".menu-rt").animate({marginRight: 0, marginTop: 0, opacity: 1}, 100);

        parent.find(".menu-lb").animate({marginLeft: 0, marginTop: -5, opacity: 1}, 100);

        parent.find(".menu-rb").animate({marginRight: 0, marginTop: -5, opacity: 1}, 100);

    }

    button.mouseout(onButtonOut);
    function onButtonOut()
    {

    var parent = $(this).parent();
        parent.removeClass("active");        

        parent.find(".menu-lt").animate({marginLeft: -10, marginTop: -10, opacity: 0}, 100);

        parent.find(".menu-rt").animate({marginRight: -10, marginTop: -10, opacity: 0}, 100);

        parent.find(".menu-lb").animate({marginLeft: -10, marginTop: 5, opacity: 0}, 100);
        
        parent.find(".menu-rb").animate({marginRight: -10, marginTop: 5, opacity: 0}, 100);

    }
}








/*BACKGROUND ZOOM ANIMATION*/
    
$('.tile')
    
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    
    
    .each(function(){
      $(this)
        
        .append('<div class="photo"></div>')
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })



    const $menuLinks = $(".menuLinks");

    function init(){
        
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

    window.addEventListener("load", init);
})();








/*SCROLL DOWN ANIMATION*/

(function () {
    const
        $menuBtn            =   $("#menuBtn"),
        $topNavContainer    =   $(".mainMenu .menu-container")
    ;

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
        bindEnquire();
        bindMenuBtn();
    } 

    window.addEventListener("load", init);
})();