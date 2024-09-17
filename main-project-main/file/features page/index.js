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

let qty1 = 1;
let qty2 = 1;
const price1 = 1999;
const price2 = 1299;
const price3 = 900;

function updateTotal(product) {
    if (product === 1) {
        document.getElementById('qty1').textContent = qty1;
        document.getElementById('total1').textContent = '₹ ' + (qty1 * price1).toLocaleString();
    } else if (product === 2) {
        document.getElementById('qty2').textContent = qty2;
        document.getElementById('total2').textContent = '₹ ' + (qty2 * price2).toLocaleString();
    }
}

function increaseQty(product) {
    if (product === 1) {
        qty1++;
        updateTotal(1);
    } else if (product === 2) {
        qty2++;
        updateTotal(2);
    }
}

function decreaseQty(product) {
    if (product === 1 && qty1 > 1) {
        qty1--;
        updateTotal(1);
    } else if (product === 2 && qty2 > 1) {
        qty2--;
        updateTotal(2);
    }
}