function preventBehavior(e) {
  e.preventDefault(); 
};

document.addEventListener("touchmove", preventBehavior, false);
	
function onBodyLoad() {		
	document.addEventListener("deviceready",onDeviceReady,false);
}

function onDeviceReady() {

}

$(document).ready(function() {
  $("#query").submit(function(e) {
    e.preventDefault();
    ("#submitButton").trigger("click");
  });

  $('#view').live( 'pageshow',function(event, ui){
    console.log(event);
    var query_venue = $('#venue').attr("value");
    $('#query-venue').html(query_venue);
  });
});
