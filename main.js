$(document).ready(function(){

      var banner = {
          padre: $('#banner'),
          numeroSlide: $('#banner').children('.slide').length,
          posicion: 1

      }

      var info = {
          padre: $('#info'),
          numeroSlide: $('#info').children('.slide').length,
          posicion: 1
      }


          banner.padre.children('.slide').first().css({
               'left': 0
      });
           info.padre.children('.slide').first().css({
           'left': 0
      });

          var altoBanner = function (){
              var alto = banner.padre.children('.slide').outerHeight();

              banner.padre.css({
                   'height': alto + 'px'
       });
          }

          var altoinfo = function (){
              var alto = info.padre.children('.active').outerHeight();

              info.padre.animate({
                   'height': alto + 'px'
       });
          }

         var altoContenedor = function () {
             var altoVentana = $(window).height();

             if (altoVentana <= $('contenedor').outerHeight() + 200){
                      $('#contenedor').css({
                          'height': ''
        });
      } else {
        $('#contenedor').css({
            'height': altoVentana + 'px'
        });
      }
   }
         altoBanner();
         altoinfo();
         altoContenedor();
         $(window).resize(function(){
                  altoBanner();
                  altoinfo();
                  altoContenedor();
       });
         $('#info').children('.slide').each(function(){
                   $('#botones').append('<span>');
         });

         $('#botones').children('span').first().addClass('active');
// =======================================
//--------------banner
//========================================

       $('#banner-next').on('click', function(e){
                  e.preventDefault();

       if(banner.position < banner.numeroSlide){

          banner.padre.children().not('.active').css({
                 'left': '100%'
       });

       $('#banner .active').removeClass('active').next().addClass('active').animate({
                  'left': '0'
       });

       $('#banner .active').prev().animate({
                  'left': '-100%'
       });
          banner.position = banner.position + 1;
        } else {
           $('#banner .active').animate({
                   'left': '-100%'
       });
           $('#banner .active').removeClass('active');
           banner.padre.children('.slide').first().addClass('active').animate({
                   'left': 0
       });

       banner.position = 1;
       }

       });


       $('#banner-prev').on('click', function(e){
                      e.preventDefault();

       if(banner.position > 1){

       banner.padre.children().not('.active').css({
                      'left': '-100%'
       });

        $('#banner .active').animate({
                       'left': '100%'
       });

        $('#banner .active').removeClass('active').prev().addClass('active').animate ({
                         'left': 0
        });

        banner.position = banner.position - 1;
      } else {
        banner.padre.children().not('.active').css({
                          'left':'-100%'
        });

        $('#banner .active').animate({
                      'left':'100%'
        });

        $('#banner .active').removeClass('active');
         banner.padre.children().last().addClass('active').animate({
                       'left': 0
         });
         banner.position = banner.numeroSlide;
      }

       });

       // =======================================
       //--------------info
       //========================================

       $('#info-next').on('click', function(e){
                  e.preventDefault();

       if(info.position < info.numeroSlide){

          info.padre.children().not('.active').css({
                 'left': '100%'
       });

       $('#info .active').removeClass('active').next().addClass('active').animate({
                  'left': '0'
       });

       $('#info .active').prev().animate({
                  'left': '-100%'
       });

       $('#botones').children('.active').removeClass('active').next().addClass('active');


          info.position = info.position + 1;
        } else {
           $('#info .active').animate({
                   'left': '-100%'
       });
           $('#info.active').removeClass('active');
           info.padre.children('.slide').first().addClass('active').animate({
                   'left': 0
       });

           $('#botones').children('.active').removeClass('active');
           $('#botones').children('span').first().addClass('active');

       info.position = 1;
       }
                 altoinfo();
       });


       $('#info-prev').on('click', function(e){
                      e.preventDefault();

       if(info.position > 1){

       info.padre.children().not('.active').css({
                      'left': '-100%'
       });

        $('#info .active').animate({
                       'left': '100%'
       });

        $('#info .active').removeClass('active').prev().addClass('active').animate ({
                         'left': 0
        });

        $('#botones').children('.active').removeClass('active').prev().addClass('active');

        info.position = info.position - 1;
      } else {
        info.padre.children().not('.active').css({
                          'left':'-100%'
        });

        $('#info .active').animate({
                      'left':'100%'
        });

        $('#info .active').removeClass('active');
         info.padre.children().last().addClass('active').animate({
                       'left': 0
         });

         $('#botones').children('.active').removeClass('active');
         $('#botones').children('span').last().addClass('active');

         info.position = info.numeroSlide;
      }
                altoinfo();
       });
  });
