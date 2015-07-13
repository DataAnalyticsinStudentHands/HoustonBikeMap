gmaps = {
    // map object
    map: null,
 
    // google markers objects
    markers: [],
 
    // google lat lng objects
    latLngs: [],
 
    // our formatted marker data objects
    markerData: [],
    
    //layers of objects
    layers: [],
 
    // add a marker given our formatted marker data object
    addMarker: function(marker) {
        var gLatLng = new google.maps.LatLng(marker.lat, marker.lng);
        var gMarker = new google.maps.Marker({
            position: gLatLng,
            map: this.map,
            title: marker.title,
            // animation: google.maps.Animation.DROP,
            icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
        this.latLngs.push(gLatLng);
        this.markers.push(gMarker);
        this.markerData.push(marker);
        return gMarker;
    },
 
    // calculate and move the bound box based on our markers
    /*calcBounds: function() {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0, latLngLength = this.latLngs.length; i < latLngLength; i++) {
            bounds.extend(this.latLngs[i]);
        }
        this.map.fitBounds(bounds);
    },
 
    // check if a marker already exists
    markerExists: function(key, val) {
        _.each(this.markers, function(storedMarker) {
            if (storedMarker[key] == val)
                return true;
        });
        return false;
    },*/
 
    // intialize the map
    initialize: function() {
        //console.log("[+] Intializing Google Maps...");    
         
        var mapOptions = {
                center: new google.maps.LatLng(29.7604, -95.3698),
                //center: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                zoom: 15,
                scaleControl: false,                
                zoomControl: false,
                mapTypeControl: false,
                panControl: false,
                rotateControl: true,
                overviewMapControl: false, 
                streetViewControl: false                    
            }        
 
        this.map = new google.maps.Map(
            document.getElementById('map-canvas'),
            mapOptions
        );
        
   /*                   
        if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

        var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
        });

        map.setCenter(pos);
        }, function() {
        handleNoGeolocation(true);
        });
        }   else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
        }
     */        
        // global flag saying we intialized already
        Session.set('map', true);
        
           
               
        }
    
    
    }