let mapa;
let marcadorUsuario = null;
let taxis = [];

// inicia o mapa
function iniciarMapa() {

  const brasil = { lat: -14.2350, lng: -51.9253 };

  mapa = new google.maps.Map(document.getElementById("map"), {
    center: brasil,
    zoom: 4,
    styles: [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e5e7eb" }]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#f3f4f6" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#dbeafe" }]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      }
    ]
  });

  pegarLocalizacao();
}

// pega localização do usuário
function pegarLocalizacao() {

  if (!navigator.geolocation) {
    alert("Geolocalização não suportada neste navegador.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function (pos) {

      const posicao = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };

      mapa.setCenter(posicao);
      mapa.setZoom(15);

      // remove marcador antigo
      if (marcadorUsuario) {
        marcadorUsuario.setMap(null);
      }

      // cria marcador do usuário
      marcadorUsuario = new google.maps.Marker({
        position: posicao,
        map: mapa,
        title: "Você está aqui 🚕"
      });

    },
    function (erro) {
      console.error(erro);
      alert("Não foi possível obter sua localização.");
    }
  );
}

// botão localizar
function irLocalizacao() {
  pegarLocalizacao();
}

// deixa a função global para o Google Maps
window.iniciarMapa = iniciarMapa;


// botão para pedi taxi
document.querySelector(".request-ride").addEventListener("click", function(){

  alert("Procurando táxis próximos... 🚕");
  
  });

  
// abrir escolha
document.querySelector(".request-ride").addEventListener("click", function(){

  document.getElementById("rideModal").style.display = "flex";
  
  });
  
  // fechar
  function fecharModal(){
  document.getElementById("rideModal").style.display = "none";
  }
  
  // escolher tipo
  function escolherCorrida(tipo){
  
  fecharModal();
  
  if(tipo === "taxi"){
  alert("🚕 Procurando táxi próximo...");
  }
  
  if(tipo === "moto"){
  alert("🏍 Procurando moto táxi próximo...");
  }
  
  }

  function abrirMenu(){
    document.getElementById("menuCorrida").classList.toggle("ativo");
    }

    function abrirConta(){
      window.location.href = "conta.html";
      }