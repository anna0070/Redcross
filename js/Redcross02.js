$(".gnb > li > ul").hide();
$(".gnb > li").hover(function() {
    $(this).find("ul").stop().slideToggle(600);
});



// $(".gnb > li > ul").hide();
// $(".gnb > li > ul").click(function() {
//     $('.gnb').addClass('on');
//     if(iw < 768) {    
//          $('.reactmenu').addClass('on');
//           }
//           $('.gnd > li > ul').click(function() {
//                     $('.gnb').stop(false,true).slideUp(500);
//                     $(this).siblings('.gnb').stop(true).slideToggle(500);
//                 });                







//     $(this).find("ul").stop().slideToggle();
// });


// $('.gnb').click(function() {
    //         $('.gnb').addClass('on');
    //         if(iw < 768) {
    //             $('.reactmenu').addClass('on');
    //         }
    //     });
    //     //snb 펼치기
        // $('.gnd > li > ul').hide(function() {
        //     $('.gnb').stop(false,true).slideUp(500);
        //     $(this).siblings('.gnb').stop(true).slideToggle(500);
        // });                
    //     //모바일 nav 닫기
    //     $('.menuclose').click(function() {
    //         $('.nav').removeClass('on');
    //         $('.nb').hide();
    //         if(iw < 768) {
    //             $('.reactmenu').removeClass('on');
    //         }
    //     });
    // }