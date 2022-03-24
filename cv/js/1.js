$(function() {
    //  TweenMax.to (tenphantu ,thoigian, {ten thuoc tinh:gia tri,..});
    // .from : là từ vị trí đó trở về vị trí mặc định
    // .to : là từ vị trí mặc định tới vị trí đã đặt
    // .fromTo: Từ vị trí A đến vị trí B
    // .staggerTo: là chuyển động đi với những phần tử giống nhau
    // .staggerFrom: ngược lại với stagerTo
    TweenMax.to($('.nut2 '), 1, { y: 200, opacity: 0, scale: 0 });
    TweenMax.from($('.nut1 '), 1, { x: 200, opacity: 0 });
    TweenMax.fromTo($('.nut1 '), 1, { x: 200, }, { x: -200 });

    // kết hợp với hàm click
    $('.nut3').click(function(event) {
        TweenMax.fromTo($('.nut4 '), 1, { x: 200, }, { x: -200 });
        TweenMax.to($(this), 1, { x: "+=200", });
    });



}); // hết fucntion 1

// viết dưới dạng hàm
// $(function() {
//     //  gọi hàm
//     staggerTo_func();
//     // định nghĩa hàm
//     function staggerTo_func() {
//         TweenMax.staggerTo($('.btn-primary'), 1, { x: 200, opacity: 0 }, 0.5);
//     }
// });
// hết function 2
// viết dưới dạng hàm
$(function() {
    //  gọi hàm
    staggerFrom_func();
    // định nghĩa hàm
    function staggerFrom_func() {
        TweenMax.staggerFrom($('.menutren'), 1, { y: -200, opacity: 0, ease: Bounce.easeOut }, 0.5);
    }
});
// hết function 2