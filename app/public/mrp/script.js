const long = parseFloat(document.querySelector('#long').innerHTML);
const lat = parseFloat(document.querySelector('#lat').innerHTML);

console.log(long);
console.log(lat);

// Função para inicializar o mapa
function initMap() {
    var latitude = lat; // Latitude desejada
    var longitude = long; // Longitude desejada
  
    // Cria um objeto de mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 2
    });
  
    // Adiciona um marcador no mapa
    var marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map
    });
}

setInterval(() => {
    location.reload();
}, 10000);