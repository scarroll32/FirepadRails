//= require jquery3
//= require rails-ujs
//= require activestorage
//= require popper
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function() {
  if($('#firepad-container').length > 0 ) {
    console.log('initFirepad');
    initFirepad();
  }
});
