$(function() {
    // 「#hide-text」要素に対するclickイベントを作成してください
    // $('#hide-text').click(function(){
    //     $('#text').slideUp();
    // });
    // $('#change-css').click(function(){
    //     $('#text').css('color','red');
    //     $('#text').css('font-size','50px');
    // });

    // 「#change-text」要素に対するclickイベントを作成してください
  $('#change-text').click(function(){
    $('#text').text('ようこそ、Progateへ');
  });
  
  // 「#change-html」要素に対するclickイベントを作成してください
  $('#change-html').click(function(){
    $('#text').html('<a href="https://prog-8.com/">ようこそ、Progateへ</a>');
  });
});