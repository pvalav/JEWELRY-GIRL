// ==============================
// Jewelry Girl - Servidor Express
// ==============================

// Importar dependencias
const express = require('express');
const path = require('path');

// Crear la aplicación
const app = express();

// ==============================
// Configuración del motor de plantillas y archivos estáticos
// ==============================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

// ==============================
// Rutas principales
// ==============================

// Página de bienvenida
app.get('/', (req, res) => {
  res.render('bienvenida', { titulo: 'Bienvenida a Jewelry Girl 💎' });
});

// Página de inicio de sesión
app.get('/login', (req, res) => {
  res.render('login', { titulo: 'Iniciar Sesión - Jewelry Girl' });
});

// Página de registro
app.get('/registro', (req, res) => {
  res.render('registro', { titulo: 'Crear Cuenta - Jewelry Girl' });
});

// Página principal (inicio)
app.get('/inicio', (req, res) => {
  res.render('inicio', { titulo: 'Inicio - Jewelry Girl 💎' });
});

// Página de ofertas
app.get('/ofertas', (req, res) => {
  res.render('ofertas', { titulo: 'Ofertas - Jewelry Girl 💎' });
});

// Página de tickets
app.get('/tickets', (req, res) => {
  res.render('tickets', { titulo: 'Tickets - Jewelry Girl 💎' });
});

// Página de tienda
app.get('/tienda', (req, res) => {
  res.render('tienda', { titulo: 'Tienda - Jewelry Girl 💎' });
});

// Página de consulta
app.get('/consulta', (req, res) => {
  res.render('consulta', { titulo: 'Consulta - Jewelry Girl 💎' });
});

// ==============================
// Manejo de rutas no encontradas
// ==============================
app.use((req, res) => {
  res.status(404).send('<h1>404 - Página no encontrada 💔</h1><a href="/">Volver al inicio</a>');
});

// ==============================
// Servidor en ejecución
// ==============================
const PORT = 9999;
app.listen(PORT, () => {
  console.log(`✅ Servidor iniciado en http://localhost:${PORT}`);
});
