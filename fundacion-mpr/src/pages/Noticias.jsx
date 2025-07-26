import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

// Importar imágenes
import noticiasData from '../data/noticiasData';

const Noticias = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de la página */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Noticias</h1>
          <p className="text-xl text-center text-blue-100 max-w-2xl mx-auto">
            Mantente al día con las últimas actividades, eventos y logros de la Fundación MPR
          </p>
        </div>
      </div>

      {/* Grid de noticias */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticiasData.map((noticia) => (
            <div key={noticia.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Imagen de la noticia */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={noticia.imagen} 
                  alt={noticia.titulo}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {noticia.categoria}
                  </span>
                </div>
              </div>

              {/* Contenido de la noticia */}
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{noticia.fecha}</span>
                  <User className="w-4 h-4 ml-4 mr-2" />
                  <span>{noticia.autor}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {noticia.titulo}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {noticia.resumen}
                </p>

                <Link 
                  to={`/noticias/${noticia.id}`}
                  className="inline-flex items-center text-primary hover:text-blue-600 font-medium transition-colors"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación (placeholder) */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
              1
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              2
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticias;

