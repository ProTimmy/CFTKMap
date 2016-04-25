var canExecute = true;
var county_text;

function waitToExecute() {
    canExecute = false;
    setTimeout(function () {
        canExecute = true;
    }, 1000);
}

$(document).ready(function () {
    
      $('path').click(function(event) {
          county_text = event.target.id + '-text';
          if($(document.getElementById(county_text)).is(":hidden")) {
              if(canExecute) {
                  waitToExecute();
                  $('.info-container>div:visible').fadeOut(500, function () {
                    $(document.getElementById(county_text)).fadeIn(500);
                  });
              }
          }
      });
    
});