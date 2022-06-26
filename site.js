$(document).ready(function(){
    var docWidth = $('body').width(),
        $wrap = $('#wrap'),
        $images = $('#wrap .hb'),
        slidesWidth = $wrap.width();
    
    $(window).on('resize', function(){
      docWidth = $('body').width();
      slidesWidth = $wrap.width();
    })
    
    $(document).mousemove(function(e) {
      var mouseX = e.pageX,
          offset = mouseX / docWidth * slidesWidth - mouseX / 2;
      
      $images.css({
        '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
                'transform': 'translate3d(' + -offset + 'px,0,0)'
      });
    });
  })

  //Agregado para el Modal acceso 
  $(".open").on("click", function(){
    $(".overlay, #dvacceso").addClass("active");
  });

  //modal registro
  $("#registro").on("click", function(){
    $(".overlay, #dvregistro").addClass("active");
    $(".overlay, #dvacceso").removeClass("active");
  });
  

  //Cierra todos los modals
  $(".close, .overlay").on("click", function(){
     $(".overlay, .modal").removeClass("active");
  });
  
  //cierra el modal con la tecla Esc
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      $(".overlay, .modal").removeClass("active");
    }
  });