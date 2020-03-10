$(function(){
  $("#top-bar").load("gorny_pasek.html");
  $("#nav").load("menu.html");
});


$('#yourelement').ready(function() {
    $('.pop-up').click(function(){
        var src = $(this).attr('src');
        $('<div>').css({
            background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
            width:'100%', height:'100%',
            position:'fixed',
            zIndex:'10000',
            top:'0', left:'0',
            cursor: 'zoom-out'
        }).click(function(){
            $(this).remove();
        }).appendTo('body');
    });
});