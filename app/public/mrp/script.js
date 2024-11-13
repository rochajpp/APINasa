let long = parseFloat(document.querySelector('#long').innerHTML);
let lat = parseFloat(document.querySelector('#lat').innerHTML);

console.log(long);
console.log(lat);

// Função para inicializar o mapa
async function initMap() {
    

    var latitude = lat; // Latitude desejada
    var longitude = long; // Longitude desejada

     // Cria um objeto de mapa
     var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 2
    });
  
    var icon = {
        url: '/mrp/img/issIcon.png'
    };

    // Adiciona um marcador no mapa
    var marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        icon: icon
    });

    setInterval(async () => {
        var position;
        await fetch("http://api.open-notify.org/iss-now.json")
        .then((response) => {
            return response.json();
        }) 
        .then((data) => {
            position = data.iss_position;
        });

        document.querySelector('#long').innerHTML = position.latitude;
        document.querySelector('#lat').innerHTML =  position.longitude;

        latitude = position.latitude;
        longitude = position.longitude;

        marker.setPosition({
            lat: parseFloat(latitude),
            lng: parseFloat(longitude)
        });

    }, 1000);
   
}
