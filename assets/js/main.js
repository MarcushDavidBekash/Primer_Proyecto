const sections = document.querySelectorAll('.spa-section');

function showSection(id) {
  sections.forEach(sec => {
    sec.style.display = sec.id === id ? 'block' : 'none';
  });
}

// Navbar links
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href').replace('#', '');
    showSection(target);
    history.pushState(null, '', 'index.html');
  });
});

// Logo SmartFishing Hub
const logoLink = document.querySelector('.navbar-brand');
logoLink.addEventListener('click', e => {
  e.preventDefault();
  showSection('inicio');
  history.pushState(null, '', 'index.html');
});

// Botón "Regístrate Aquí" de la página principal
const registroBtns = document.querySelectorAll('a.btn.btn-primary.btn-lg');
registroBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    showSection('registro');
    history.pushState(null, '', 'index.html');
  });
});

// Buscador de productos
const buscador = document.getElementById('productoBuscador');
const productosContainer = document.getElementById('productosContainer');

buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();
  const productos = productosContainer.querySelectorAll('.producto-card');

  productos.forEach(prod => {
    const titulo = prod.querySelector('.card-title').textContent.toLowerCase();
    if (titulo.includes(texto)) {
      prod.style.display = 'block';
    } else {
      prod.style.display = 'none';
    }
  });
});

// Inicializa mostrando la sección inicio
window.addEventListener('load', () => {
  showSection('inicio');
});