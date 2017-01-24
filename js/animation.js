jQuery(document).ready(function($){
  //show circle animation on page load
  $(".management-text").removeClass("move-up-max");
  $(".circle").removeClass("scale-hide");

  $(".first-circle").click(function(){
    //Add background about-overlay
    $(".about-overlay").addClass("visible-opacity");
    $(this).addClass("rotate-scale");
    $(this).siblings(".second-circle").addClass("rotate-scale");
    $(this).siblings(".close-circle").removeClass("fade");
    $(this).removeClass("z-index");
    if($(this).attr("data-person") == 'md'){
      $(".ceo-circle").addClass("rotate-hide");
      setTimeout(function(){
          $(".fb-circle-md").removeClass("fade");
        setTimeout(function(){
          $(".tw-circle-md").removeClass("fade");
        },100);
        setTimeout(function(){
          $(".ln-circle-md").removeClass("fade");
        },200);
      },400);
    }
    else{
      $(".md-circle").addClass("rotate-hide");
      setTimeout(function(){
          $(".fb-circle-ceo").removeClass("fade");
        setTimeout(function(){
          $(".tw-circle-ceo").removeClass("fade");
        },100);
        setTimeout(function(){
          $(".ln-circle-ceo").removeClass("fade");
        },200);
      },400);
    }
  });

  $(".close-circle").click(function(){
    //Remove background about-overlay
    $(".about-overlay").removeClass("visible-opacity");

    $(this).siblings(".first-circle").removeClass("rotate-scale");
    $(this).siblings(".second-circle").removeClass("rotate-scale");
    $(this).siblings(".first-circle").addClass("z-index");
    $(this).addClass("fade");
    //$(".md-circle").removeClass("rotate-hide");
    if($(this).attr("data-person") == 'md'){
      setTimeout(function(){
        $(".ceo-circle").removeClass("rotate-hide");
      },400);
        $(".fb-circle-md").addClass("fade");
        $(".tw-circle-md").addClass("fade");
        $(".ln-circle-md").addClass("fade");
    }
    else{
      setTimeout(function(){
        $(".md-circle").removeClass("rotate-hide");
      },400);
        $(".fb-circle-ceo").addClass("fade");
        $(".tw-circle-ceo").addClass("fade");
        $(".ln-circle-ceo").addClass("fade");
    }
  });

//About page footer Next | Previous arrow animations
  $("span.nav-text").hover(function(){
      if($(this).attr("ahy-target") == "prev"){
          $(this).find("i").addClass("arrow-move-left");
      }else{
          $(this).find("i").addClass("arrow-move-right");
      }
    },function(){
          $(this).find("i").removeClass("arrow-move-right arrow-move-left");
  });


//Slide control
/* Note
* setTimeout is written considering default Transition/Animation time.
*@Param target. Target Slide.
*/
  function aboutPageTextSlideControl(target){
    if(target == 1){
      $(".management-text").removeClass("move-up-max");
      setTimeout(function(){
          $(".circle").removeClass("scale-hide");
      },550);
    }
    else{
      $(".management-text").addClass("move-up-max");
      $(".circle").addClass("scale-hide");
    }

    setTimeout(function(){
      $("div.active").removeClass("active");
      $("div[data-no="+target+"]").removeClass("hide").addClass("active");

      /*Make clicked bullet active*/
      $(".nav-circle[ahy-target="+target+"]").siblings().removeClass("active");
      $(".nav-circle[ahy-target="+target+"]").addClass('active');

      setTimeout(function(){
        $("div[data-no="+target+"].active .top-text").removeClass("move-up");
        $("div[data-no="+target+"].active .bottom-text .text-section").removeClass("scale-hide");
      },550);

        $("div[data-no="+target+"].active").siblings().find(".top-text").addClass("move-up");
        $("div[data-no="+target+"].active").siblings().find(".bottom-text").children(".text-section").addClass("scale-hide");
    },100);
  }

/*Slide control for about cirlce.If or If Not circle is opened.
@param target. Target Slide
*/
  function aboutPageSlideControl(target){
    if(target === undefined || target === null){
      console.log("no target found");
      return false;
    }

    if($(".first-circle").hasClass("rotate-scale")){
      setTimeout(function(){
        aboutPageTextSlideControl(target);
      },1400);
    }else{
          aboutPageTextSlideControl(target);
      }
  }

/* Next Previous Slide Animation
* @param 1 : Next slide, 0: Prev slide
*/

  function nextPrevNavigation(value){
    var target;
    if(value == 1){
      if($(".nav-circle.active").is(":last-child")){
        target = $(".nav-circle:first-child").attr("ahy-target");
        aboutPageSlideControl(target);
      }
      else{
        target = $(".nav-circle.active").next().attr('ahy-target');
        aboutPageSlideControl(target);
      }
    }
    else{
      if($(".nav-circle.active").is(":first-child")){
        target = $(".nav-circle:last-child").attr("ahy-target");
        aboutPageSlideControl(target);
      }
      else{
        target = $(".nav-circle.active").prev().attr('ahy-target');
        aboutPageSlideControl(target);
      }
    }

    //trigger circle close event
    $(".close-circle").trigger("click");
  }

  //About page bullet NAVIGATION
    $(".nav-circle").off("click").on("click",_.debounce(function(){
      if($(this).attr('ahy-page') != "about"){
        return false;
      }
      //slide control
      var target = $(this).attr("ahy-target");
      aboutPageSlideControl(target);

      //trigger circle close event
      $(".close-circle").trigger("click");
    },200));

  //About page footer Next NAVIGATION
    $(".nav-text[ahy-target='next']").off("click").on("click",_.debounce(function(){
        /*@param 1 for next slide */
        nextPrevNavigation(1);
    },250));

  //About page footer Prev NAVIGATION
    $(".nav-text[ahy-target='prev']").off("click").on("click",_.debounce(function(){
      /*@param 0 for next slide */
        nextPrevNavigation(0);
    },250));

  //About page mouse scroll event

  var mousewheelevt = (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel";
  $("body").on(mousewheelevt,_.debounce(function(e){
      // For Firefox
      if(/Firefox/i.test(navigator.userAgent)){
        /*  Positive value ( > 0 ) is for up scroll | Show previous slide on up scroll*/
        if(e.originalEvent.detail / 3 > 0) {
          var target;
          /*@param 0 for prev slide */
          nextPrevNavigation(0);
        }
        /*Negative value ( < 0 ) is for down scoll | Show next slide on down scroll*/
        else{
          /*@param 1 for next slide */
          nextPrevNavigation(1);
        }
      }
      //For other browsers
      else{
        /*Positive value ( > 0 ) is for up scroll | Show previous slide on up scroll*/
        if(e.originalEvent.wheelDelta / 120 > 0) {
          /*@param 0 for prev slide */
          nextPrevNavigation(0);
        }
        /*Negative value ( < 0 ) is for down scoll | Show next slide on down scroll*/
        else{
          /*@param 1 for next slide */
          nextPrevNavigation(1);
        }
      }
  },350));


/*About page mobile animation starts*/

  function mobileSlideNavigation(target){
    setTimeout(function(){
      $(".ahy-slide[data-id="+target+"]").removeClass("scale-hide");
      $("span.bullet-circle").removeClass("active");
      $(".bullet-circle[data-target="+target+"]").addClass("active");
    },400);

    $(".ahy-slide[data-id="+target+"]").siblings().addClass("scale-hide");
  }


  function nextPrevMobileNavigation(value){
      if(value ==  1){
        if($(".bullet-circle.active").parent().is(":first-child")){
            var target = $(".bullet-circle.active").parent().siblings(":last").find(".bullet-circle").attr("data-target");
            mobileSlideNavigation(target);
        }
        else{
          var target = $(".bullet-circle.active").parent().prev().find(".bullet-circle").attr("data-target");
            mobileSlideNavigation(target);
        }
      }
      else{
        if($(".bullet-circle.active").parent().is(":last-child")){
            var target = $(".bullet-circle.active").parent().siblings(":first").find(".bullet-circle").attr("data-target");
            mobileSlideNavigation(target);
        }
        else{
          var target = $(".bullet-circle.active").parent().next().find(".bullet-circle").attr("data-target");
            mobileSlideNavigation(target);
        }
      }
  }
  /*Slider swipe animation for mobile devices*/
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".ahy-slide[data-id=1]").removeClass("scale-hide");

    $("span.bullet-circle").click(function(){
        var target = $(this).attr("data-target");
        mobileSlideNavigation(target);
    });

    $(".mobile-view").swipe({
      swipeLeft:function(event, direction, distance, duration, fingerCount) {
        nextPrevMobileNavigation(0);
      },
      swipeRight:function(event, direction, distance, duration, fingerCount) {
        nextPrevMobileNavigation(1);
      }
    });
  }

/*About page mobile animation ends*/

  /*Hamburger  menu */
  $('#nav-icon').click(function(){
  		$(this).toggleClass('open');
      $(".mobile-menu").toggleClass('move-left');
  	});

  /*Info button Mobile*/
  $("#nav-icon-2").click(function(){
    $(".mobile-info-wrapper").addClass("move-down");
  });

  /*Info button close*/
  $(".mobile-nav-info").click(function(){
    $(".mobile-info-wrapper").removeClass("move-down");
  });

  /*Info button Desktop*/
  $(".info-link").click(function(){
    $(".mobile-info-wrapper").removeClass("move-down");
  });

  /*Contact page Starts*/
    $("#video-wrapper").removeClass("move-up");
    $("#contact-form-wrapper").removeClass("move-down");
    $(".form-heading").click(function(){
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      var target = $(this).attr("data-target");
      setTimeout(function(){
        $("div[data-attr="+target+"]").removeClass("scale-hide");
        setTimeout(function(){
          $("#contact-form-wrapper").css("border", "1px solid transparent");
        },200);

      },450);
      $("div[data-attr="+target+"]").siblings().addClass("scale-hide");
    });
  /*Contact page ends*/


/*work-page start(sameer) */
$(".main1").hover(function(){
$(".main2").addClass("main-animation");
$(".main2").css("overflow","hidden");
$(".main1").css("overflow","hidden");
$(".main1-work-circle").addClass("work-circle-color");
$(".work-block1").addClass("work-block-animation");
}, function(){
  $(".main2").removeClass("main-animation");
  $(".main2").css("overflow","hidden");
  $(".main1").css("overflow","hidden");
  $(".main1-work-circle").removeClass("work-circle-color");
  $(".work-block1").removeClass("work-block-animation");
});
$(".main2").hover(function(){
$(".main1").addClass("main-animation");
$(".main1").css("overflow","hidden");
$(".main2").css("overflow","hidden");
$(".main2-work-circle").addClass("work-circle-color");
$(".work-block2").addClass("work-block-animation");
}, function(){
  $(".main1").removeClass("main-animation");
  $(".main1").css("overflow","hidden");
  $(".main2").css("overflow","hidden");
  $(".main2-work-circle").removeClass("work-circle-color");
  $(".work-block2").removeClass("work-block-animation");
});

setTimeout(function(){
  $(".work-circle").css("visibility", "visible");
},1200);

$(".work-circle1").click(function(){
  $(".main1").removeClass("main-animation").addClass("main1-hide").fadeOut(650);
  $(".main2").fadeOut(700);
  $(".work-page-wrapper").css("background-color","black");
  $(".third-section").removeClass("hide");
  $(".work-background-image1").addClass("work-circle-click-animation");
  $(".work-text-block").addClass("word-container-animation");
});

$(".work-circle2").click(function(){
  $(".main2").addClass("main2-hide").fadeOut(650);
  $(".main1").fadeOut(700);
  $(".work-page-wrapper").css("background-color","black");
  $(".fourth-section").removeClass("hide");
  $(".work-background-image2").addClass("work-circle-click-animation");
  $(".work-text-block").addClass("word-container-animation");
});

$(".work-circle3").click(function(){
  $(".main1").addClass("main1-hide").fadeOut(650);
  $(".main2").fadeOut(700);
  $(".work-page-wrapper").css("background-color","black");
  $(".fifth-section").removeClass("hide");
  $(".work-background-image3").addClass("work-circle-click-animation");
  $(".work-text-block").addClass("word-container-animation");
});

$(".work-circle4").click(function(){
  $(".main2").addClass("main2-hide").fadeOut(650);
  $(".main1").fadeOut(700);
  $(".work-page-wrapper").css("background-color","black");
  $(".sixth-section").removeClass("hide");
  $(".work-background-image4").addClass("work-circle-click-animation");
  $(".work-text-block").addClass("word-container-animation");
});
/*work-page end */

/*work page neha begins*/
  function workPageTextSlideControl(target){
    setTimeout(function(){
      $("div.active").removeClass("active");
      $("div[data-no="+target+"]").removeClass("hide").addClass("active");
      $("div.work[data-no!="+target+"]").addClass("hide");
      /*Make clicked bullet active*/
      $(".nav-circle[ahy-target="+target+"]").siblings().removeClass("active");
      $(".nav-circle[ahy-target="+target+"]").addClass('active');
      $(".work-circle").css("visibility", "hidden");
      $(".main1").css("overflow","visible");
      $(".main2").css("overflow","visible");
     setTimeout(function(){
      $(".work-circle").css("visibility", "visible");
     },1200);
    },100);
  }
  function workPageSlideControl(target){
    if(target === undefined || target === null){
      console.log("no target found");
      return false;
    }else{
      workPageTextSlideControl(target);
    }
  }
  function nextPrevNavigationForWork(value){
    var target;
    if(value == 1){
      if($(".nav-circle.work.active").is(":last-child")){
        target = $(".nav-circle.work:first-child").attr("ahy-target");
        workPageSlideControl(target);
      }
      else{
        target = $(".nav-circle.work.active").next().attr('ahy-target');
        workPageSlideControl(target);
      }
    }
    else{
      if($(".nav-circle.work.active").is(":first-child")){
        target = $(".nav-circle.work:last-child").attr("ahy-target");
        workPageSlideControl(target);
      }
      else{
        target = $(".nav-circle.work.active").prev().attr('ahy-target');
        workPageSlideControl(target);
      }
    }
    $(".close-circle").trigger("click");
  }
  //work page dot navigation
    $(".nav-circle.work").off("click").on("click",_.debounce(function(){
      if($(this).attr('ahy-page') != "work"){
        return false;
      }
      var target = $(this).attr("ahy-target");
      workPageSlideControl(target);
      $(".close-circle").trigger("click");
    },200));
  //work page prev button navigation
    $(".nav-text.work[ahy-target='next']").off("click").on("click",_.debounce(function(){
        nextPrevNavigationForWork(1);
    },250));
  //Work page next button navigation
    $(".nav-text.work[ahy-target='prev']").off("click").on("click",_.debounce(function(){
        nextPrevNavigationForWork(0);
    },250));
    var mousewheelevent = (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel";
    $("body.work").on(mousewheelevt,_.debounce(function(e){
        if(/Firefox/i.test(navigator.userAgent)){
          if(e.originalEvent.detail / 3 > 0) {
            var target;
            nextPrevNavigationForWork(0);
          }
          else{
            nextPrevNavigationForWork(1);
          }
        }
        else{
          if(e.originalEvent.wheelDelta / 120 > 0) {
            nextPrevNavigationForWork(0);
          }
          else{
            nextPrevNavigationForWork(1);
          }
        }
    },350));
  /* work page neha ends*/

  /*News Page Starts*/
  /*Testimonail slider starts*/
    autoSlide();
    var timer;
      function autoSlide(){
        timer = setTimeout(function(){

          $(".testimonail-slide .item.active").find(".person-name").addClass("flip");
          $(".testimonail-slide .item.active").find(".quote").addClass("flip");
          $(".testimonail-slide .item.active").addClass("remove-me");

          setTimeout(function(){
              if($(".testimonail-slide .item.active").is(":last-child")){
              //  alert("hello");
                $(".testimonail-slide .item").first().find(".person-name").removeClass("flip-90");
                $(".testimonail-slide .item").first().find(".quote").removeClass("flip-90");
                $(".testimonail-slide .item").first().addClass("active");
              }
              else{
              $(".testimonail-slide .item.active").next().find(".person-name").removeClass("flip-90");
              $(".testimonail-slide .item.active").next().find(".quote").removeClass("flip-90");
              $(".testimonail-slide .item.active").next().addClass("active");
              }
              $(".testimonail-slide .item.remove-me").find(".person-name").removeClass("flip").addClass("flip-90");
              $(".testimonail-slide .item.remove-me").find(".quote").removeClass("flip").addClass("flip-90");
              $(".testimonail-slide .item.remove-me").removeClass("remove-me active");
              autoSlide();
          },300);
        },5000);

      }

      var secondTimer;
      function nextPrevNavigationForNews(flag){
          clearTimeout(timer);
          clearTimeout(secondTimer);
          secondTimer = setTimeout(function(){
            autoSlide();
          },7000);
          $(".testimonail-slide .item.active").find(".person-name").addClass("flip");
          $(".testimonail-slide .item.active").find(".quote").addClass("flip");
          $(".testimonail-slide .item.active").addClass("remove-me");

            if(flag == 1){
              setTimeout(function(){
                  if($(".testimonail-slide .item.active").is(":last-child")){
                    $(".testimonail-slide .item").first().find(".person-name").removeClass("flip-90");
                    $(".testimonail-slide .item").first().find(".quote").removeClass("flip-90");
                    $(".testimonail-slide .item").first().addClass("active");
                  }
                  else{
                  $(".testimonail-slide .item.active").next().find(".person-name").removeClass("flip-90");
                  $(".testimonail-slide .item.active").next().find(".quote").removeClass("flip-90");
                  $(".testimonail-slide .item.active").next().addClass("active");
                  }
                  $(".testimonail-slide .item.remove-me").find(".person-name").removeClass("flip").addClass("flip-90");
                  $(".testimonail-slide .item.remove-me").find(".quote").removeClass("flip").addClass("flip-90");
                  $(".testimonail-slide .item.remove-me").removeClass("remove-me active");
              },300);
            }
            else{
              setTimeout(function(){
                  if($(".testimonail-slide .item.active").is(":first-child")){
                    $(".testimonail-slide .item").last().find(".person-name").removeClass("flip-90");
                    $(".testimonail-slide .item").last().find(".quote").removeClass("flip-90");
                    $(".testimonail-slide .item").last().addClass("active");
                  }
                  else{
                  $(".testimonail-slide .item.active").prev().find(".person-name").removeClass("flip-90");
                  $(".testimonail-slide .item.active").prev().find(".quote").removeClass("flip-90");
                  $(".testimonail-slide .item.active").prev().addClass("active");
                  }
                  $(".testimonail-slide .item.remove-me").find(".person-name").removeClass("flip").addClass("flip-90");
                  $(".testimonail-slide .item.remove-me").find(".quote").removeClass("flip").addClass("flip-90");
                  $(".testimonail-slide .item.remove-me").removeClass("remove-me active");
              },300);
            }
      }
      /*Testimonail slider Ends*/

      //news page prev button navigation
        $(".nav-text.news[ahy-target='next']").off("click").on("click",_.debounce(function(){
            nextPrevNavigationForNews(1);

        },250));
      //news page next button navigation
        $(".nav-text.news[ahy-target='prev']").off("click").on("click",_.debounce(function(){
            nextPrevNavigationForNews(0);
        },250));


       /*Tab Navigation*/
        $(".ahy-tab li").click(function(){
          var value = $(this).find("a").attr("data-href");
          if(value == 2){
            clearTimeout(timer);
            clearTimeout(secondTimer);
            autoSlide();
          }
          else{

          }
        });

  /*News Page ends*/
});/*Document.ready ends*/
