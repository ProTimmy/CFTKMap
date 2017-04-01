var canExecute = true;
var county_text;

$(document).ready(function () {

      $('path').click(function(event) {
          county_text = event.target.id + '-text';
          if($(document.getElementById(county_text)).is(":hidden")) {
            $('.box>div:visible').slideUp(500, function () {
              $(document.getElementById(county_text)).slideDown(500);
            });
          }
      });

});
