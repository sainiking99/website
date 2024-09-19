$(document).ready(function(){
    $('#Search').click(function(){
        $('.input').toggle();
    });
    $(window).on('scroll',function(){
      if($(this).scrollTop() > 300){
        $('#header').css('background','white');
      }else{
        $('#header').css('background','none');
      }
    });


    $('.tab-item').isotope({
      // options
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });

  

    $('.tab-manu li').click(function(){
      $('.tab-manu li').removeClass('active');
      $(this).addClass('active');
      
      var selector = $(this).attr('data-filter');
      $('.tab-item').isotope({filter:selector});
      return false;
    }); 

});


$(document).ready(function() {
  // Add your jQuery effects or interactions here
  $(".read-more").hover(function() {
      $(this).css("background-color", "#555");
  }, function() {
      $(this).css("background-color", "#333");
  });
});
