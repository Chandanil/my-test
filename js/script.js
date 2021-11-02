$(document).ready (function(){
	$(".nav-toggler").on("click", function(){
		$('#navbarCollapse').toggleClass('show');
		$(this).toggleClass("toggle");
		$('html').toggleClass('hidden-y');
		$('.body-overlay').toggleClass('show-overlay'); 
	});
	// $('body').on('click', '#navToggler', function()
	// {
	// 	$('.main-navigation').addClass('show');
	// 	$('.body-overlay').addClass('show-overlay');  
	// 	$('html').addClass('hidden-y');
	// 	$('#navbarCollapse').addClass('show');
	// 	$(this).next().parent().addClass("menu-open");
	// });
	// $('body').on('click', '.body-overlay', function()
	// {   
	// 	$(this).removeClass('show-overlay');
	// 	$('.main-navigation').removeClass('show');
	// 	$('html').removeClass('hidden-y'); 
	
	// 	$('#navbarCollapse').removeClass('show');
	// 	$('.nav-toggler').removeClass("toggle"); 
	// 	$(this).next().parent().removeClass("menu-open"); 
	// })
	// grab the initial top offset of the navigation 
      var stickyNavTop = $('.site-header').offset().top;

        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var stickyNav = function(){
          var scrollTop = $(window).scrollTop(); // our current vertical position from the top

          // if we've scrolled more than the navigation, change its position to fixed to stick to top,
          // otherwise change it back to relative
          if (scrollTop > stickyNavTop) { 
            $('.site-header').addClass('sticky');
          } else {
            $('.site-header').removeClass('sticky'); 
          }
        };

        stickyNav();
      // and run it again every time you scroll
      $(window).scroll(function() {
        stickyNav();
      });

});
$('.testimonial-carousel').owlCarousel({
	loop:true,
	autoplay: false,
	smartSpeed: 1000,
	margin:30,
	nav:false,
	width: 100,
	dots: true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	}
});
$('.product-carousel').owlCarousel({
	loop:true,
	autoplay: false,
	smartSpeed: 1000,
	margin:30,
	nav:false,
	width: 100,
	dots: true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:3
		}
	}
});
$('.branch-carousel').owlCarousel({
	loop:true,
	autoplay: false,
	smartSpeed: 1000,
	margin:0,
	nav:false,
	width: 100,
	dots: true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:3
		}
	}
});
$('.team-carousel').owlCarousel({
	loop:true,
	autoplay: false,
	smartSpeed: 1000,
	margin:15,
	nav:false,
	width: 100,
	dots: false,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		991:{
			items:2
		},
		1000:{
			items:4
		}
	}
});