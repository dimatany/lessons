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

let addressPoints = [
[50.387273, 30.624084, 'This is my place of residence.<br> Not for spread.', myIcon],
[50.401849382118435, 30.632636297957657, 'Here they sell the most delicious fish in the city.<br> I\'m often there.', myIcon2],
[50.346753332881136, 30.48959863146808, 'This is my favorite park in town.<br> I\'m often there.', myIcon3]
];