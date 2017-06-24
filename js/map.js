$(function () { 
    
function initialize() {
      var marcadores = [
        ['UTN FRCU', -32.495702, -58.229611],
        ['Auditorio Municipal', -32.482596, -58.233491],
        ['Terminal', -32.485328, -58.242022],
        ['Barlovento Restobar', -32.496524, -58.226277] 
      ];
    
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: new google.maps.LatLng(-32.482596, -58.233491),
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    
      var infowindow = new google.maps.InfoWindow();
      var marker, i;
      for (i = 0; i < marcadores.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
          map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(marcadores[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    }
    
    google.maps.event.addDomListener(window, 'load', initialize);
});