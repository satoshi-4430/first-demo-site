/* globals $*/
$('.burger-btn').on('click', function(){
  $('.menu-list').slideToggle(300);
});
$(window).resize(function() {
  if( $(window).width() <= 768){
      $('.menu-list').hide();
  } else {
    $('.menu-list').css('display','flex');
      $('.menu-list').show();   
  }
});

/* global google */
$(document).ready(function(){
    initMap();
  });
  var map;
  var marker;
  var center = {
    lat: 35.6809591, // 緯度
    lng: 139.7673068 // 経度
  };
  function initMap() {
    var mapOptions = {
      zoom: 16,
      center: center,
      scrollwheel: false, 
      disableDoubleClickZoom: true,
      draggable: false,
      scaleControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    map = new google.maps.Map(document.getElementById('google-map'),mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(35.6809591,139.7673068),
            map: map, 
            title: "もみほぐしデモ" 
        });
  }
  
  $('.up-js').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__fadeInUp');
        this.destroy();
      }
    },
  
    offset: '70%',
  });

  $('.left-js').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__fadeInLeft');
        this.destroy();
      }
    },
  
    offset: '70%',
  });

  $('.right-js').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__fadeInRight');
        this.destroy();
      }
    },
  
    offset: '70%',
  });

  $(function(){
    $(".qa-q-box").on("click", function(){
      $(this).next(".qa-a-box").slideToggle(300);
      $(this).toggleClass("open");
    });
  });
/*上へ戻る*/ 
  $(function () {
    var pagetop = $('#js-pagetop');
    pagetop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({
          scrollTop: 0
      }, 500);
      return false;
    });
  });