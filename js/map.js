const mapButton = document.querySelectorAll('.contact-box__reference');
let map = null;
let marker = null;

const showMap = (x, y, office) => {
  map = L.map('map').setView([x, y], 16);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  marker = L.marker([x, y]).addTo(map);
  marker.bindPopup(`<b>${office}</b>`).openPopup();
};

const changeButton = (a, b) => {
  mapButton[a].innerHTML =
    '<h3 class="contact-box__reference-headline">On Map</h3>';
  mapButton[b].innerHTML =
    '<h3 class="contact-box__reference-headline">View on Map</h3> <svg class="contact-box__reference-icon"><use href="./images/icons.svg#icon-arrow"/></svg>';
};

showMap(51.75568465, 19.45962696228166, 'Main Office');

mapButton[0].addEventListener('click', () => {
  map.remove();
  showMap(51.75568465, 19.45962696228166, 'Main Office');
  changeButton(0, 1);
});
mapButton[1].addEventListener('click', () => {
  map.remove();
  showMap(52.2301331, 21.014284, 'Office II');
  changeButton(1, 0);
});
