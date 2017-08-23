  $('.icon').hover( function() {
    $(this).attr('bounce', true);
    bounce($(this));
    }, function() { 
      $(this).attr('bounce', false);
      $(this).stop();
    }
  )

function bounce($elem) {
    $elem.effect('bounce', { times: 1, distance: 10 }, 1200, ()=>{
      if ($elem.attr('bounce') =='true') bounce($elem);
      else {
        $elem.stop()
      }
    });
}