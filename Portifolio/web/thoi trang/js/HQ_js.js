    // menuSmall
    $(document).ready(function() {
        $('.content_menu , .link').slideUp(0);

        $('.box span,.content_menu span').click(function() {

            $(this).next('.content_menu,.link').slideToggle();

            $(this).toggleClass('bg-selector color-selector');
            $(this).toggleClass('demo ');
        });
    });

    //--------------------------------------------------------------- hide show box
    function hideShow_box() {
        $('.dangky').animate({ opacity: 0, marginLeft: 900 }, 0);

        $('.btn_dangky').click(function(event) {
            $('.dangky').animate({ opacity: 1, marginLeft: 0 }, 500);
            $('.dangnhap').animate({ opacity: 0, marginLeft: -900 }, 0);
        });

        $('.btn_dangnhap').click(function(event) {
            $('.dangnhap').animate({ opacity: 1, marginLeft: 0 }, 500);
            $('.dangky').animate({ opacity: 0, marginLeft: 900 }, 0);
        });
    }
    //------------------------------------------------------------------------ ScrollBox
    function scrollBox() {
        $('.text').slideUp(0);

        $('.box h3').click(function() {

            $(this).next('.text').slideToggle();

            $(this).toggleClass('hoverColor');
        });
    }
    //---------------------------------------------------------------------- Onepage
    function OnePage() {
        // console.log($('.chapter1').offset().top);
        $('.menutren ul li:nth-child(1) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: $('.chapter1').offset().top }, 2500, "easeOutElastic");
        });
        $('.menutren ul li:nth-child(2) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: $('.chapter2').offset().top }, 2500, "easeOutElastic");
        });
        $('.menutren ul li:nth-child(3) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({ scrollTop: $('.chapter3').offset().top }, 2500, "easeOutElastic");
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
        var vitrimenu = $('.menutren').offset().top;
        $(window).scroll(function(event) {
            /* Act on the event */
            var vitribody = $('body,html').scrollTop();
            console.log(vitribody);

            if (vitribody >= vitrimenu) {
                $('.menutren').addClass('in_top');
            } else {
                $('.menutren').removeClass('in_top');
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
        TweenMax.staggerFrom($('.NDbandau .to'), 1, { top: 100, opacity: 0 }, 0.5)

        // những nội dung nằm trong class NDthem sẽ ẩn
        $('.NDthem').slideUp(0);

        // khi click vào button class load những nội dung nằm trong class NDthem sẽ hiện
        $('.load').click(function() {
            $('.NDthem').slideDown(0);
            TweenMax.staggerFrom($('.NDthem .to'), 1, { top: 100, opacity: 0 }, 0.5)
        });
    }

    //---------------------------------------------------------- Mansory layout
    function mansory() {

        $hieuung = $('.content').isotope({
            // options
            itemSelector: '.box',
            layoutMode: 'masonry'
        });
        $hieuung.imagesLoaded().progress(function() {
            $hieuung.isotope('layout');
        });

    }

    // -------------------------------------------------filter button js

    function Filter() {
        $('.content ul').isotope({
            itemSelector: 'li'
        });

        $('nav ul li a').click(function(event) {
            /* Act on the event */
            var danhmuc = $(this).data('danhmucanh');
            var ten = $(this).text();
            if (danhmuc == 'all') {

                $('section h1').text("Tất cả ảnh");
                $('.content ul').isotope({ filter: '*' });
            } else {
                $('section h1').text(ten);
                $('.content ul').isotope({ filter: danhmuc });
            }
            return false;
        });
    }
    // ----------------------------------------------------filter box search
    function search_filter() {

        $('.content ul').isotope({
            itemSelector: 'li'
        });

        $('.tukhoa').keypress(function(event) {
            if (event.keyCode == 13) {
                tu1 = $('.tukhoa').val();
                tu1 = "." + tu1;
                $('.content ul').isotope({ filter: tu1 });
            }
        })

        // code tim kiem tu dong
        thoigian = setInterval(function() {
            tu1 = $('.tukhoa').val();
            tu1 = "." + tu1;
            $('.content ul').isotope({ filter: tu1 });
        }, 200);
    }

    //--------------------------------------------- Menu transform and back to top

    function MenuTransform() {
        $(window).scroll(function() {
            if ($('body,html').scrollTop() > 600) {
                $('.menutren').addClass('bg-scroll');
                $('.backtotop').addClass('icon_back_top_show');
            } else {
                $('.menutren').removeClass('bg-scroll');
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
        TweenMax.to($('.nut2 '), 1, { y: 200, opacity: 0, scale: 0 });
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