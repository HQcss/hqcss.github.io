    // menuSmall
    function small_menu() {
        $('.content_menu , .link').slideUp(0);

        $('.box-menu-small span,.content_menu span').click(function() {

            $(this).next('.content_menu,.link').slideToggle();

            $(this).toggleClass('bg-selector color-selector');
            $(this).toggleClass('demo ');
        });
    }

    //--------------------------------------------------------------- hide show box
    function hideShow_box() {
        $('.box-login').animate({ opacity: 0, marginLeft: -900 }, 0);

        $('.btn_dangky').click(function(event) {
            $('.box-reg').animate({ opacity: 1, marginLeft: 0 }, 500);
            $('.box-login').animate({ opacity: 0, marginLeft: -900 }, 0);
        });

        $('.btn_dangnhap').click(function(event) {
            $('.box-login').animate({ opacity: 1, marginLeft: 0 }, 500);
            $('.box-reg').animate({ opacity: 0, marginLeft: -900 }, 0);
        });
    }
    //------------------------------------------------------------------------ ScrollBox
    function scrollBox() {
        $('.text').slideUp(0);

        $('.box h5').click(function() {

            $(this).next('.text').slideToggle();

            $(this).toggleClass('hoverColor');
        });
    }
    //---------------------------------------------------------------------- Onepage
    function OnePage() {
        // console.log($('.chapter1').offset().top);
        $('.menutren ul li:nth-child(1) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: $('.content-page2').offset().top }, 1500, "easeOutElastic");
            $('.menutren ul li a').removeClass('active');
            $(this).addClass('active');
        });
        $('.menutren ul li:nth-child(2) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: $('.content-page3').offset().top }, 1500, "easeOutElastic");
            $('.menutren ul li a').removeClass('active');
            $(this).addClass('active');
        });
        $('.menutren ul li:nth-child(3) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: $('.content-page4').offset().top }, 1500, "easeOutElastic");
            $('.menutren ul li a').removeClass('active');
            $(this).addClass('active');
        });
        $('.menutren ul li:nth-child(4) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: $('.content-page5').offset().top }, 1500, "easeOutElastic");
            $('.menutren ul li a').removeClass('active');
            $(this).addClass('active');
        });
        $('.menutren ul li:nth-child(5) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: $('.content-page5').offset().top }, 1500, "easeOutElastic");
            $('.menutren ul li a').removeClass('active');
            $(this).addClass('active');
        });

    }
    //---------------------------------------------------------------------- Onepage
    function OnePage_pin() {
        // console.log($('.chapter1').offset().top);
        $('.menu-pin ul li:nth-child(1) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: $('.content-page1').offset().top }, 1500, "easeOutElastic");
            $('.menu-pin ul li a').removeClass('active');
            $(this).addClass('active');
        });
        $('.menu-pin ul li:nth-child(2) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: $('.content-page2').offset().top }, 1500, "easeOutElastic");
            $('.menu-pin ul li a').removeClass('active');
            $(this).addClass('active');
        });
        $('.menu-pin ul li:nth-child(3) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: $('.content-page3').offset().top }, 1500, "easeOutElastic");
            $('.menu-pin ul li a').removeClass('active');
            $(this).addClass('active');
        });

    }
    //------------------------------------------------------------------- Back to top
    function BackToTop() {
        $('.backtotop').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: 0 }, 1000);
        });
    }

    // --------------------------------------------------------------Pin top menu
    function pinTopMenu() {
        var vitrimenu = $('.menu-pin').offset().top;

        $(window).scroll(function(event) {
            /* Act on the event */
            var vitribody = $('body,html').scrollTop();
            // console.log(vitribody);
            // console.log(vitrimenu);


            if (vitribody >= vitrimenu) {
                $('.menu-pin').addClass('in_top');

            } else {
                $('.menu-pin').removeClass('in_top');
            }
        });
    }


    //---------------------------------------------------- fancyBox
    // No_effect
    function FancyBox_No_effect() {
        $('.boxImg a').fancybox();
    }
    // Effect
    function FancyBox_Effect() {
        $('.boxImg a').fancybox({ openEffect: 'elastic' });
    }

    //---------------------------------------------------- LoadMore
    function LoadMore() {
        TweenMax.staggerFrom($('.NDbandau .initial'), 1, { top: 100, opacity: 0 }, 0.5)

        // những nội dung nằm trong class NDthem sẽ ẩn
        $('.NDthem').slideUp(0);

        // khi click vào button class load những nội dung nằm trong class NDthem sẽ hiện
        $('.load_more').click(function() {
            $('.NDthem').slideDown(0);
            TweenMax.staggerFrom($('.NDthem .more'), 1, { top: 100, opacity: 0 }, 0.5)
            $('.load_more').addClass('hidden');
            $('.row_loadMore').addClass('height_x2');
        });
    }

    //---------------------------------------------------------- Mansory layout
    function mansory() {

        $hieuung = $('.content-mansory').isotope({
            // options
            itemSelector: '.box-mansory',
            layoutMode: 'masonry'
        });
        $hieuung.imagesLoaded().progress(function() {
            $hieuung.isotope('layout');
        });

    }

    // -------------------------------------------------filter button js

    function Filter() {
        $('.content-filter ul ').isotope({
            itemSelector: 'li'
        });

        $('nav ul li a').click(function(event) {
            /* Act on the event */
            var danhmuc = $(this).data('danhmucanh');
            var ten = $(this).text();
            if (danhmuc == 'all') {

                $('section h6').text("Tất cả ảnh");
                $('.content-filter ul').isotope({ filter: '*' });
            } else {
                $('section h6').text(ten);
                $('.content-filter ul').isotope({ filter: danhmuc });
            }
            return false;
        });
    }
    // ----------------------------------------------------filter box search
    function search_filter() {

        $('.content-filter ul').isotope({
            itemSelector: 'li'
        });

        $('.tukhoa').keypress(function(event) {
            if (event.keyCode == 13) {
                tu1 = $('.tukhoa').val();
                tu1 = "." + tu1;
                $('.content-filter ul').isotope({ filter: tu1 });
            }
        })

        // code tim kiem tu dong
        thoigian = setInterval(function() {
            tu1 = $('.tukhoa').val();
            tu1 = "." + tu1;
            $('.content-filter ul').isotope({ filter: tu1 });
        }, 200);
    }

    //--------------------------------------------- Menu transform and back to top

    function MenuTransform() {
        $(window).scroll(function() {
            if ($('body,html').scrollTop() > 180) {
                $('.menutren').addClass('bg-scroll');
                $('.menutren ul li a').addClass('color_change');
                $('.backtotop').addClass('icon_back_top_show');
            } else {
                $('.menutren').removeClass('bg-scroll');
                $('.menutren ul li a').removeClass('color_change');
                $('.backtotop').removeClass('icon_back_top_show');
            }
        });
        // back to top

        $('.backtotop').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: 0 }, 1000);
        });
    }



    // -------------------------------------------------------------------Wow

    function Wow_js() {
        new WOW().init();
    }

    //------------------------------------------------------------------ TweenMax

    //  TweenMax.to (tenphantu ,thoigian, {ten thuoc tinh:gia tri,..});
    // .from : là từ vị trí đó trở về vị trí mặc định
    // .to : là từ vị trí mặc định tới vị trí đã đặt
    // .fromTo: Từ vị trí A đến vị trí B
    // .staggerTo: là chuyển động đi với những phần tử giống nhau
    // .staggerFrom: ngược lại với stagerTo

    // phần tử đồng nhất

    function staggerFrom_func() {
        TweenMax.staggerFrom($('.btn-primary'), 1, { x: 200, opacity: 0, ease: Bounce.easeOut }, 0.5);
    }

    function staggerTo_func() {
        TweenMax.staggerTo($('.btn-primary'), 1, { x: 200, opacity: 0 }, 0.5);
    }

    // phần tử đơn lẻ

    function TweenMaxTo() {
        TweenMax.to($('.menutren '), 1, { y: 200, opacity: 0, scale: 0 });
    }

    function TweenMaxFrom() {
        TweenMax.from($('.nut1 '), 1, { x: 200, opacity: 0 });
    }

    function TweenMaxFromTo() {
        TweenMax.fromTo($('.nut1 '), 1, { x: 200, }, { x: -200 });
    }
    // kết hợp với hàm click
    $('.nut3').click(function(event) {
        TweenMax.fromTo($('.nut4 '), 1, { x: 200, }, { x: -200 });
        TweenMax.to($(this), 1, { x: "+=200", });
    });

    // modal box
    function modal_box() {
        $(' .download-code').click(function() {
            $(this).next('.modal-box').addClass('select');

            $('.background').addClass('select');

        });
        $('.btn-close,.background').click(function() {
            $('.modal-box').removeClass('select');
            $('.background').removeClass('select');

        });
    }

    // tab
    function tab_box() {
        $('.tab-thumbnail .thumbnail-img').click(function() {
            x = $(this).index();
            x = x + 1;
            $('.large-img-tab').removeClass('active');
            $('.large-img-tab:nth-child(' + x + ')').addClass('active');
        });
    }


    // plugin
    // OWL slide


    function slideBasic() {
        $("#owl-demo").owlCarousel({

            autoPlay: 5000, //Set AutoPlay to 3 seconds

            items: 6,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]

        });
    }