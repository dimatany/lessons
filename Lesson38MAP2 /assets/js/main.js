'use strict'
let tiles = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png\'', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
    }),
    latlng = L.latLng(50.387273, 30.624084);

let map = L.map('map', {center: latlng, zoom: 13, layers: [tiles]});

let markers = L.markerClusterGroup();

addressPoints.forEach(el=>{
    let marker = L.marker(L.latLng(el.lat, el.lng), { title: el.descr, icon: Icons[el.type] }).bindPopup(el.descr);
    markers.addLayer(marker);
})
map.addLayer(markers);