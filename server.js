const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const puntos = [
  { id:1,  nombre:"Sala Principal",       icono:"🛋️", area:"33 m²",   x:27, y:30,
    descripcion:"Espacio social principal con sofá en L, televisión empotrada y mesa de centro. Gran ventana panorámica con luz natural.",
    foto:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85" },
  { id:2,  nombre:"Comedor",              icono:"🍽️", area:"30 m²",   x:55, y:30,
    descripcion:"Comedor para 6 personas con mesa de madera maciza, sillas tapizadas y lámpara colgante de diseño. Contiguo a la cocina.",
    foto:"https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=85" },
  { id:3,  nombre:"Cocina",               icono:"🍳", area:"27 m²",   x:79, y:30,
    descripcion:"Cocina en L con mesada de cuarzo, estufa de 6 quemadores, campana extractora, fregadero doble y refrigerador de dos puertas.",
    foto:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85" },
  { id:4,  nombre:"Habitación Principal", icono:"🛏️", area:"47 m²",   x:27, y:63,
    descripcion:"Suite principal con cama king size, doble mesita de noche, closet walk-in con espejo y tocador con iluminación LED.",
    foto:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=85" },
  { id:5,  nombre:"Habitación 2",         icono:"🚪", area:"17.5 m²", x:52, y:55,
    descripcion:"Habitación con cama individual, escritorio de estudio, estante empotrado y ventilación natural.",
    foto:"https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=85" },
  { id:6,  nombre:"Habitación 3",         icono:"🛌", area:"17.1 m²", x:52, y:74,
    descripcion:"Tercera habitación con cama individual, escritorio y armario de dos puertas. Ideal como cuarto de huéspedes o estudio.",
    foto:"https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=900&q=85" },
  { id:7,  nombre:"Baño Principal",       icono:"🛁", area:"12.9 m²", x:68, y:56,
    descripcion:"Baño de suite con tina empotrada, ducha de lluvia independiente, doble lavabo y espejo con retroiluminación LED.",
    foto:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=85" },
  { id:8,  nombre:"Baño de Visitas",      icono:"🚿", area:"9.8 m²",  x:80, y:56,
    descripcion:"Baño secundario con ducha de vidrio, lavabo moderno y suelo de mosaico de mármol.",
    foto:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=85" },
  { id:9,  nombre:"Garaje",               icono:"🚗", area:"22 m²",   x:76, y:75,
    descripcion:"Garaje para un vehículo con puerta automatizada, toma para carga eléctrica y almacenamiento lateral.",
    foto:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85" },
  { id:10, nombre:"Lavandería",           icono:"🧺", area:"10.9 m²", x:27, y:85,
    descripcion:"Área de servicio con lavadora y secadora de carga frontal, fregadero y espacio de almacenamiento.",
    foto:"https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=900&q=85" },
  { id:11, nombre:"Jardín Frontal",       icono:"🌿", area:"62 m²",   x:50, y:12,
    descripcion:"Jardín de entrada con césped natural, arbustos ornamentales, árboles de sombra y sendero de adoquín.",
    foto:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=85" },
  { id:12, nombre:"Terraza Trasera",      icono:"☀️", area:"21.8 m²", x:55, y:88,
    descripcion:"Terraza con piso de madera exterior, mesa para 6 personas, área de asador y pérgola con enredaderas.",
    foto:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85" }
];

app.get('/',              (req, res) => res.json({ mensaje:'API Casa Interactiva ✅', version:'2.0', zonas: puntos.length }));
app.get('/api/puntos',    (req, res) => res.json(puntos));
app.get('/api/puntos/:id',(req, res) => {
  const p = puntos.find(p => p.id === parseInt(req.params.id));
  p ? res.json(p) : res.status(404).json({ error:'Punto no encontrado' });
});

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
