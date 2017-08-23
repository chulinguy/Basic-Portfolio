setTimeout(()=>{
  $("#SkypeButton_Call_chulinguy_1").find('img').addClass('icon')
  $('.icon').hover( function() {
    $(this).attr('bounce', true);
    bounce($(this));
    }, function() { 
      $(this).attr('bounce', false);
      $(this).stop();
    }
  )
}, 500);


function bounce($elem) {
    $elem.effect('bounce', { times: 1, distance: 10 }, 1200, ()=>{
      if ($elem.attr('bounce') =='true') bounce($elem);
      else {
        $elem.stop()
      }
    });
}