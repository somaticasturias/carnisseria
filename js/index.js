 function toggleMenu() {
    document.getElementById('menu').classList.toggle('mostrar');
  }
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu').classList.remove('mostrar');
    });
  });
  window.addEventListener('scroll', () => {
    const boto = document.getElementById('tornar-adalt');
    if (window.scrollY > 300) {
      boto.style.display = 'block';
    } else {
      boto.style.display = 'none';
    }
  });
  document.getElementById('tornar-adalt').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('map').setView([43.398791870429726, -5.812451133819586], 15); // Coordenadas de Lugones
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);
  L.marker([43.398791870429726, -5.812451133819586]).addTo(map)
    .bindPopup('Ubicació de SomaTIC Asturias')
    .openPopup();
});