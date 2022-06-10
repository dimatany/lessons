"use strict"
//карта гугл
//50.387273, 30.624084
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 50.387273, lng: 30.624084 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
window.initMap = initMap;


//карта leaflet
let map2 = L.map('map2').setView([50.387273, 30.624084], 13);//координаты маркера

let myIcon = L.icon({
    iconUrl: 'assets/img/marker.png',
    iconSize: [48, 48],
    iconAnchor: [22, 60],
    popupAnchor: [-3, -76],
});

let myIcon2 = L.icon({
    iconUrl: 'assets/img/marker2.png',
    iconSize: [48, 48],
    iconAnchor: [22, 60],
    popupAnchor: [-3, -76],
});

let myIcon3 = L.icon({
    iconUrl: 'assets/img/marker3.png',
    iconSize: [48, 48],
    iconAnchor: [22, 60],
    popupAnchor: [-3, -76],
});


L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

L.marker([50.387273, 30.624084],{icon: myIcon}).addTo(map2)//координаты popup
    .bindPopup('This is my place of residence.<br> Not for spread.')
    .openPopup();

L.marker([50.401849382118435, 30.632636297957657],{icon: myIcon2}).addTo(map2)//координаты popup
    .bindPopup('Here they sell the most delicious fish in the city.<br> I\'m often there.')
    .openPopup();

L.marker([50.346753332881136, 30.48959863146808],{icon: myIcon3}).addTo(map2)//координаты popup
    .bindPopup('This is my favorite park in town.<br> I\'m often there.')
    .openPopup();

/////////////////////////////////////////////////////////////////



