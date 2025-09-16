import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';

// Importar imágenes directamente desde assets/images
import not1 from '../assets/images/not1.jpg';
import not2 from '../assets/images/not2.jpg';
import not3 from '../assets/images/not3.jpg';

const Noticias = () => {
  const noticias = [
    {
      id: 1,
      titulo: "Conciencia y medio ambiente🌎🌳",
      fecha: "2024-03-15",
      imagen: not1,
      resumen: "¡Comprometidos con nuestro planeta! La Fundación Mi Pequeño Refugio en compañía de un equipo profesional llevó a cabo una increíble actividad de gestión y medio ambiente...",
      contenido: `¡Comprometidos con nuestro planeta! La Fundación Mi Pequeño Refugio en compañía de un equipo profesional llevó a cabo una increíble actividad de gestión y medio ambiente para la toma de conciencia sobre lo importante del cuidado en nuestro entorno natural a través de un Huerto Vertical y la siembra de semillas.

¿Quieres ser parte de estos talleres y compartir diversos conocimientos prácticos y de formación con nuestros niños? Te invitamos a ser parte de nosotros.

¡Súmate y ayúdanos a ayudar!`
    },
    {
      id: 2,
      titulo: "Navidad y Fin de Año🎁❤️",
      fecha: "2024-12-20",
      imagen: not2,
      resumen: "¡Es mejor dar que recibir! Cada año celebramos las navidades y fechas especiales de la mano de todas aquellas personas y organizaciones que se unen...",
      contenido: `¡Es mejor dar que recibir! Cada año celebramos las navidades y fechas especiales de la mano de todas aquellas personas y organizaciones que se unen para regalarles una sonrisa a nuestros pequeños a través de obsequios y sorpresas para cada uno de ellos.

¿Quisieras compartir junto a nosotros✨? Llena de sonrisas estas fiestas decembrinas y celebremos juntos con un bonito propósito.`
    },
    {
      id: 3,
      titulo: "Eventos y Celebraciones🥳✨",
      fecha: "2024-11-10",
      imagen: not3,
      resumen: "¡Cada evento especial suma sonrisas! Y la felicidad de nuestros niños es el motor que mueve cada día la Fundación...",
      contenido: `¡Cada evento especial suma sonrisas! Y la felicidad de nuestros niños es el motor que mueve cada día la Fundación, pinta-caritas, obras de teatros, musicales, eventos lúdicos y fiestas sorpresas llenan de alegría y diversión el Pequeño Refugio.`
    }
  ];

  const formatearFecha = (fecha) => {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opciones);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón de regreso */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Header */}
      <div style={{backgroundColor: '#A7C7E7'}} className="text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Noticias</h1>
          <p className="text-xl text-white/90">
            Mantente al día con las últimas actividades y logros de nuestra fundación
          </p>
        </div>
      </div>

      {/* Grid de Noticias */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <article key={noticia.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={noticia.imagen} 
                  alt={noticia.titulo}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {formatearFecha(noticia.fecha)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {noticia.titulo}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {noticia.resumen}
                </p>
                <Link
                  to={`/noticia/${noticia.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mensaje si no hay más noticias */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#B5EAD7'}}>
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              ¡Mantente conectado!
            </h3>
            <p className="text-gray-600 mb-4">
              Síguenos en nuestras redes sociales para no perderte ninguna novedad
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.instagram.com/fundacionmipequenorefugio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/zoar2021" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@fundacionm.p.r" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticias;

