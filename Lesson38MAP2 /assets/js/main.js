let tiles = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png\'', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
    }),
    latlng = L.latLng(50.387273, 30.624084);

let map = L.map('map', {center: latlng, zoom: 13, layers: [tiles]});

let markers = L.markerClusterGroup();

for (let i = 0; i < addressPoints.length; i++) {
    let a = addressPoints[i];
    let title = a[2];
    let marker = L.marker(L.latLng(a[0], a[1]), { title: title });
    /*
    if(a[3]===0) {
        marker[{icon}]=myIcon;
    }else if(a[3]===1) {
        marker[{icon}]=myIcon2;
    }else if(a[3]===2) {
        marker[{icon}]=myIcon2;
    }else {
        return false;
    }*/
    marker.bindPopup(title);
    markers.addLayer(marker);
}

map.addLayer(markers);