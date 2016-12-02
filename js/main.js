// document ready
$(document).ready(function () {
    // hamburger menu
    $('.hamburger').click(function () {
        $('nav ul').slideToggle('slow');
        $('.hamburger').toggleClass('is-active', 'add');
    });
    // open sign status
    var Now = new Date();
    var CurrentDay = Now.getDay();
    var OpeningTime = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(), 11, 0);
    var ClosingTime = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(), 22, 0);
    var Open = (Now.getTime() > OpeningTime.getTime() && Now.getTime() < ClosingTime.getTime());
    if (CurrentDay !== 6 && CurrentDay !== 0 && Open) {
        $('.openstatus').toggle();
    }
    // custom jquery code restaurant menu dropdown
    $('.dropdown').click(function () {
        $(this).children().toggleClass('show-sub-menu');
        $(this).siblings().children().removeClass('show-sub-menu');
        // $(this).children().slideDown('slow');
    });
    // add animation to all elements
    $('*').addClass('w3-animate-bottom');
});
// custom javascript code for thank you on form submission
var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var paragraph = document.createElement('p');
    paragraph.classList.add('thanks', 'w3-animate-bottom');
    if (document.getElementsByClassName('thanks').length < 1) {
        paragraph.innerHTML = '<p>Your Owl will Arrive Soon!</p>';
        document.getElementsByTagName('footer')[0].prepend(paragraph);
    }
});
// Google Map
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 28.479717, lng: -81.469619},
        zoom: 12,
        styles: [{ 'elementType': 'geometry', 'stylers': [{ 'color': '#ebe3cd' }] }, {'elementType': 'geometry.fill', 'stylers': [{ 'color': '#846333' }, { 'lightness': 35 }, { 'weight': 1.5 }] }, { 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#222222' }, { 'saturation': 55 }, { 'lightness': -85 }, { 'weight': 3 }] }, { 'elementType': 'labels.icon', 'stylers': [{ 'color': '#475052' }] }, { 'elementType': 'labels.text', 'stylers': [{ 'color': '#271a20' }] }, { 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#523735' }] }, { 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#f5f1e6' }] }, { 'featureType': 'administrative', 'elementType': 'geometry', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'administrative', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#c9b2a6' }] }, { 'featureType': 'administrative.land_parcel', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'administrative.land_parcel', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#dcd2be' }] }, { 'featureType': 'administrative.land_parcel', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#ae9e90' }] }, { 'featureType': 'administrative.neighborhood', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'landscape.natural', 'elementType': 'geometry', 'stylers': [{ 'color': '#dfd2ae' }] }, { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'poi', 'elementType': 'geometry', 'stylers': [{ 'color': '#dfd2ae' }] }, { 'featureType': 'poi', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#93817c' }] }, { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#a5b076' }] }, { 'featureType': 'poi.park', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#447530' }] }, { 'featureType': 'road', 'elementType': 'geometry', 'stylers': [{ 'color': '#f5f1e6' }] }, { 'featureType': 'road', 'elementType': 'labels', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'road', 'elementType': 'labels.icon', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{ 'color': '#fdfcf8' }] }, { 'featureType': 'road.arterial', 'elementType': 'labels', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'road.highway', 'elementType': 'geometry', 'stylers': [{ 'color': '#f8c967' }] }, { 'featureType': 'road.highway', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#e9bc62' }] }, { 'featureType': 'road.highway', 'elementType': 'labels', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'road.highway.controlled_access', 'elementType': 'geometry', 'stylers': [{ 'color': '#e98d58' }] }, { 'featureType': 'road.highway.controlled_access', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#db8555' }] }, { 'featureType': 'road.local', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'road.local', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#806b63' }] }, { 'featureType': 'transit', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'transit.line', 'elementType': 'geometry', 'stylers': [{ 'color': '#dfd2ae' }] }, { 'featureType': 'transit.line', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#8f7d77' }] }, { 'featureType': 'transit.line', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ebe3cd' }] }, { 'featureType': 'transit.station', 'elementType': 'geometry', 'stylers': [{ 'color': '#dfd2ae' }] }, { 'featureType': 'water', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#b9d3c2' }] }, { 'featureType': 'water', 'elementType': 'labels.text', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'water', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#92998d' }]}]
    });
    map();
}
initMap();
