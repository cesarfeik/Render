const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Datos de los 7 puntos de la casa con fotos de ejemplo (Unsplash)
const puntos = [
  {
    id: 1,
    nombre: "Sala Principal",
    descripcion: "Área de estar con sofás y televisión. Espacio principal de reunión familiar.",
    icono: "🛋️",
    foto: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    x: 30,
    y: 40
  },
  {
    id: 2,
    nombre: "Cocina",
    descripcion: "Cocina equipada con estufa, refrigerador y área de preparación de alimentos.",
    icono: "🍳",
    foto: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    x: 65,
    y: 38
  },
  {
    id: 3,
    nombre: "Habitación Principal",
    descripcion: "Dormitorio principal con cama doble, closet y ventana al jardín.",
    icono: "🛏️",
    foto: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80",
    x: 20,
    y: 68
  },
  {
    id: 4,
    nombre: "Baño",
    descripcion: "Baño completo con ducha, lavabo y espejo. Iluminación natural.",
    icono: "🚿",
    foto: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    x: 55,
    y: 72
  },
  {
    id: 5,
    nombre: "Jardín Frontal",
    descripcion: "Jardín de entrada con plantas, sendero de acceso y portón principal.",
    icono: "🌿",
    foto: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    x: 48,
    y: 15
  },
  {
    id: 6,
    nombre: "Garaje",
    descripcion: "Espacio para un vehículo, con puerta automatizada y almacenamiento lateral.",
    icono: "🚗",
    foto: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    x: 80,
    y: 60
  },
  {
    id: 7,
    nombre: "Terraza Trasera",
    descripcion: "Área exterior con sillas, mesa y vista al patio trasero. Ideal para reuniones.",
    icono: "☀️",
    foto: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    x: 35,
    y: 88
  }
];

// Ruta principal
app.get('/', (req, res) => {
  res.json({ mensaje: 'API Casa Interactiva funcionando ✅', version: '1.0' });
});

// Obtener todos los puntos
app.get('/api/puntos', (req, res) => {
  res.json(puntos);
});

// Obtener un punto específico por ID
app.get('/api/puntos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const punto = puntos.find(p => p.id === id);
  if (!punto) return res.status(404).json({ error: 'Punto no encontrado' });
  res.json(punto);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
