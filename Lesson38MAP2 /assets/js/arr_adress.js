'use strict'
const Icons = {
    1:L.icon({
        iconUrl: 'assets/img/marker.png',
        iconSize: [48, 48],
        iconAnchor: [22, 60],
        popupAnchor: [-3, -76],
    }),
    2: L.icon({
        iconUrl: 'assets/img/marker2.png',
        iconSize: [48, 48],
        iconAnchor: [22, 60],
        popupAnchor: [-3, -76],
    }),
    3: L.icon({
        iconUrl: 'assets/img/marker3.png',
        iconSize: [48, 48],
        iconAnchor: [22, 60],
        popupAnchor: [-3, -76],
    })
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let addressPoints = [
    {
        lat: 50.387273,
        lng: 30.624084,
        descr: 'This is my place of residence.<br> Not for spread.',
        type: 1,
    },
    {
        lat: 50.401849382118435,
        lng: 30.632636297957657,
        descr: 'Here they sell the most delicious fish in the city.<br> I\'m often there.',
        type: 2,
    },
    {
        lat: 50.346753332881136,
        lng: 30.48959863146808,
        descr: 'Here they sell the most delicious fish in the city.<br> I\'m often there.',
        type: 3,
    }
];


