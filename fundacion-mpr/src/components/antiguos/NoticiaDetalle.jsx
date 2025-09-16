import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Mail } from 'lucide-react';
import noticiasData from '../data/noticiasData';

const NoticiaDetalle = () => {
  const { id } = useParams();
  const noticia = noticiasData.find(n => n.id === parseInt(id));

  if (!noticia) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Noticia no encontrada</h2>
          <Link to="/noticias" style={{color: '#A7C7E7'}} className="hover:underline">
            Volver a noticias
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón de regreso */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          to="/noticias"
          className="inline-flex items-center font-medium transition-colors"
          style={{color: '#A7C7E7'}}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a noticias
        </Link>
      </div>

      {/* Contenido principal */}
      <article className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Imagen principal más grande */}
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={noticia.imagen} 
              alt={noticia.titulo}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="text-white px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#A7C7E7'}}>
                {noticia.categoria}
              </span>
            </div>
          </div>

          {/* Header del artículo */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
              {noticia.titulo}
            </h1>
            
            <div className="flex items-center text-gray-500 mb-6">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="mr-6">{noticia.fecha}</span>
              <User className="w-5 h-5 mr-2" />
              <span>{noticia.autor}</span>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              {noticia.resumen}
            </p>
          </header>

          {/* Contenido del artículo */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: noticia.contenido }}
            />
          </div>

          {/* Compartir */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Share2 className="w-5 h-5 mr-2" />
              Compartir esta noticia
            </h3>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </button>
            </div>
          </div>

          {/* Noticias relacionadas */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Noticias relacionadas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {noticiasData
                .filter(n => n.id !== noticia.id && n.categoria === noticia.categoria)
                .slice(0, 2)
                .map(noticiaRelacionada => (
                  <Link 
                    key={noticiaRelacionada.id}
                    to={`/noticias/${noticiaRelacionada.id}`}
                    className="flex space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <img 
                      src={noticiaRelacionada.imagen} 
                      alt={noticiaRelacionada.titulo}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1 line-clamp-2">
                        {noticiaRelacionada.titulo}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {noticiaRelacionada.fecha}
                      </p>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NoticiaDetalle;

