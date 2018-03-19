function initMap() {
			
            var mapOptions = {
               center:new google.maps.LatLng(60.394, 5.322),
               zoom:14
            }
            
            var map = new google.maps.Map(document.getElementById("sample"),mapOptions);
            
            var marker = new google.maps.Marker({
               position: new google.maps.LatLng(60.394, 5.342),
               map: map,
               draggable:false,
			
			});
			
			   var marker2 = new google.maps.Marker({
               position: new google.maps.LatLng(60.394, 5.322),
               map: map,
               draggable:false,
               
            });
				
            marker.setMap(map);
			marker2.setMap(map);
		// 	marker2.setMap(null);
         }