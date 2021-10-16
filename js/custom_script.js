(function($) {
    "use strict";
	
	/* Progress Inner */	
    function tdProgress(container) {
        container.find('.progress_inner').each(function(i) {
            var progress = jQuery(this);
            var pValue = parseInt(progress.data('value'), 10);
            var pColor = progress.data('color');
            var pBarWrap = progress.find('.bar');
            var pBar = progress.find('.bar_in');
            pBar.css({
                width: pValue + '%',
                backgroundColor: pColor
            });
            setTimeout(function() {
                pBarWrap.addClass('open');
            }, (i * 300));
        });
    }
	
    jQuery('.utf_aarlin_progress').each(function() {
        var pWrap = jQuery(this);
        pWrap.waypoint({
            handler: function() {
                tdProgress(pWrap);
            },
            offset: '90%'
        });
    });

	/* Utf Aarlin Images */	
    function utf_aarlin_images() {
        var data = jQuery('*[data-img-url]');
        data.each(function() {
            var element = jQuery(this);
            var url = element.data('img-url');
            element.css({
                backgroundImage: 'url(' + url + ')'
            });
        });
    }
    utf_aarlin_images();
	
	/* Utf Arrow Wrap */	
	jQuery('.utf_arrow_wrap a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 1000);
		}
		return false;
	});
	
	/* Utf Aarlin Hero */
    function utf_aarlin_hero_height() {
        var WH = jQuery(window).height();
        var hero = jQuery('.utf_aarlin_hero_wrap');
        hero.css({
            height: WH
        });
    }
    utf_aarlin_hero_height();

	/* Utf Aarlin About Top */
    function utf_aarlin_about_top() {
        var hero = jQuery('.utf_aarlin_hero_wrap').height();
        var about = jQuery('#about');
        about.css({
            marginTop: hero
        });
    }
    utf_aarlin_about_top();

	/* Utf Aarlin Menu Bg */
    function utf_aarlin_menu_bg() {
        jQuery(window).on('scroll', function() {
            var WinOffset = jQuery(window).scrollTop();
            var topBar = jQuery('.utf_aarlin_topbar');
            if (WinOffset >= 500) {
                topBar.addClass('animate');
            } else {
                topBar.removeClass('animate');
            }
        });
    }
    utf_aarlin_menu_bg();

	/* Utf Aarlin Mobile Menu */
    function utf_aarlin_mobile_menu() {
        var trigger = jQuery('.utf_aarlin_topbar .trigger');
        var triggerMenu = jQuery('.utf_aarlin_topbar .trigger .menu');
        var triggerClose = jQuery('.utf_aarlin_topbar .trigger .close');
        var dropdown = jQuery('.utf_aarlin_topbar .dropdown');

        trigger.on('click', function() {
            var element = jQuery(this);
            if (element.hasClass('opened')) {
                element.removeClass('opened');
                triggerMenu.removeClass('opened');
                triggerClose.removeClass('opened');
                dropdown.slideUp();
            } else {
                element.addClass('opened');
                triggerMenu.addClass('opened');
                triggerClose.addClass('opened');
                dropdown.slideDown();
            }
            return false;
        });
    }
    utf_aarlin_mobile_menu();

    function utf_aarlin_anchor() {
        jQuery('.utf_aarlin_topbar .menu ul li a,.utf_aarlin_topbar .dropdown .main ul li a').off().on('click', function(e) {
            e.stopPropagation();
            var element = jQuery(this);
            var url = element.attr('href');
            if (url !== '#' && url.charAt(0) === '#') {
                $('html, body').animate({
                    scrollTop: $(url).offset().top - 85
                }, 1000);
            }
            return false;
        });
    }
    utf_aarlin_anchor();

	/* Utf Aarlin Appear */
    function utf_aarlin_appear() {
        var div = jQuery('.utf_aarlin_appear');
        div.each(function() {
            var element = jQuery(this);
            element.waypoint({
                handler: function() {
                    element.addClass('load');
                },
                offset: "60%"
            });
        });
    }
    utf_aarlin_appear();

	/* Utf Aarlin Gallery Popup */
    function utf_aarlin_popup() {
        jQuery('.gallery_zoom').each(function() { 
            jQuery(this).magnificPopup({
                delegate: 'a.zoom', 
                type: 'image',
                gallery: {
                    enabled: true
                },
                removalDelay: 300,
                mainClass: 'mfp-fade'
            });
        });
    }
    utf_aarlin_popup();

    function utf_aarlin_ripple() {
        jQuery('#ripple').ripples({
            resolution: 500,
            dropRadius: 20,
            perturbance: 0.04
        });
    }

	/* Utf Aarlin Youtube Bg */
    utf_aarlin_ripple();
    $(".youtube-bg").mb_YTPlayer();
    $(".glitch").mgGlitch({
        destroy: false,
        glitch: true,
        scale: true,
        blend: true,
        blendModeType: "hue",
        glitch1TimeMin: 200,
        glitch1TimeMax: 400,
        glitch2TimeMin: 10,
        glitch2TimeMax: 100
    });

    function utf_aarlin_hero_effect() {
        jQuery(window).on('scroll', function() {
            var currentScroll = window.pageYOffset;
            jQuery(".utf_aarlin_hero_wrap,.glitch").css({
                'transform': 'scale(' + (100 - currentScroll / 100) / 99 + ')',
                'opacity': (1 - (currentScroll / 20) / 15)
            });
        });
    }
	
	/* Utf Aarlin Hero Effect */
    jQuery(window).on('scroll', function() {
        utf_aarlin_hero_effect();
    });

    jQuery(window).on('resize', function() {
        utf_aarlin_hero_height();
    });
	
	jQuery(window).load('body', function() {
        setTimeout(function() {
            utf_aarlin_preloader();
        }, 1000);
        setTimeout(function() {
            jQuery('.utf_aarlin_hero_wrap .hero_texts,.utf_aarlin_hero_wrap_video .hero_texts').addClass('animate');
        }, 6000);
    });
	
	/* VFX Loader */
	$(window).on('load', function() {
		$('.vfx-loader').delay(400).fadeOut(500);
	});
	
	/* Typed Words */
	var typed = new Typed('.typed-words', {
		strings: ["Web Designer."," Graphic Designer."," Logo Designer."," Sales Marketing."],
		typeSpeed: 80,
		backSpeed: 80,
		backDelay: 4000,
		startDelay: 1000,
		loop: true,
		showCursor: true
	});
})(this.jQuery);