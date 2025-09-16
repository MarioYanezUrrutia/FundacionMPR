import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Heart } from 'lucide-react';

// Importar imágenes directamente desde assets/images
import not1 from '../assets/images/not1.jpg';
import not2 from '../assets/images/not2.jpg';
import not3 from '../assets/images/not3.jpg';

const NoticiaDetalle = () => {
  const { id } = useParams();

  const noticias = [
    {
      id: 1,
      titulo: "Conciencia y medio ambiente🌎🌳",
      fecha: "2024-03-15",
      imagen: not1,
      contenido: `¡Comprometidos con nuestro planeta! La Fundación Mi Pequeño Refugio en compañía de un equipo profesional llevó a cabo una increíble actividad de gestión y medio ambiente para la toma de conciencia sobre lo importante del cuidado en nuestro entorno natural a través de un Huerto Vertical y la siembra de semillas.

Esta actividad no solo educó a nuestros niños sobre la importancia del cuidado del medio ambiente, sino que también les permitió conectar con la naturaleza de una manera práctica y divertida. Los pequeños aprendieron sobre el ciclo de vida de las plantas, la importancia del agua y la tierra, y cómo pequeñas acciones pueden generar grandes cambios en nuestro entorno.

El huerto vertical se convirtió en un símbolo de esperanza y crecimiento, donde cada semilla plantada representa el futuro que estamos construyendo junto a nuestros niños. Los voluntarios y profesionales que nos acompañaron compartieron conocimientos valiosos sobre sostenibilidad y cuidado ambiental.

¿Quieres ser parte de estos talleres y compartir diversos conocimientos prácticos y de formación con nuestros niños? Te invitamos a ser parte de nosotros.

¡Súmate y ayúdanos a ayudar!`,
      categoria: "Educación Ambiental"
    },
    {
      id: 2,
      titulo: "Navidad y Fin de Año🎁❤️",
      fecha: "2024-12-20",
      imagen: not2,
      contenido: `¡Es mejor dar que recibir! Cada año celebramos las navidades y fechas especiales de la mano de todas aquellas personas y organizaciones que se unen para regalarles una sonrisa a nuestros pequeños a través de obsequios y sorpresas para cada uno de ellos.

La temporada navideña es una época muy especial en nuestra fundación. Durante estos días, vemos cómo la magia de la Navidad se refleja en los ojos brillantes de nuestros niños. Gracias a la generosidad de donantes, voluntarios y organizaciones aliadas, pudimos crear momentos inolvidables llenos de alegría y esperanza.

Cada regalo entregado no es solo un objeto material, sino un mensaje de amor y esperanza que llega directamente al corazón de cada niño. Las sonrisas, los abrazos y la emoción que vemos en sus rostros nos recuerdan por qué hacemos este trabajo cada día.

Las celebraciones incluyeron actividades especiales, cenas navideñas, visitas de Santa Claus y momentos de reflexión sobre el verdadero significado de estas fechas: el amor, la solidaridad y la unión familiar.

¿Quisieras compartir junto a nosotros✨? Llena de sonrisas estas fiestas decembrinas y celebremos juntos con un bonito propósito.`,
      categoria: "Celebraciones"
    },
    {
      id: 3,
      titulo: "Eventos y Celebraciones🥳✨",
      fecha: "2024-11-10",
      imagen: not3,
      contenido: `¡Cada evento especial suma sonrisas! Y la felicidad de nuestros niños es el motor que mueve cada día la Fundación, pinta-caritas, obras de teatros, musicales, eventos lúdicos y fiestas sorpresas llenan de alegría y diversión el Pequeño Refugio.

Nuestros eventos y celebraciones son mucho más que simples actividades recreativas. Son espacios donde los niños pueden expresarse libremente, desarrollar su creatividad y, sobre todo, ser simplemente niños. Cada pinta-caritas se convierte en una obra de arte única, cada obra de teatro en una oportunidad para brillar, y cada musical en una celebración de sus talentos.

Los eventos lúdicos que organizamos están diseñados para fomentar la participación, el trabajo en equipo y la autoestima de nuestros pequeños. Vemos cómo niños tímidos se transforman en pequeños artistas seguros de sí mismos, y cómo aquellos más extrovertidos encuentran nuevas formas de canalizar su energía de manera positiva.

Las fiestas sorpresas son momentos especiales donde celebramos logros, cumpleaños y fechas importantes. Estos eventos fortalecen los lazos de nuestra comunidad y crean recuerdos que perdurarán en la memoria de nuestros niños para toda la vida.

Cada sonrisa que logramos arrancar, cada momento de felicidad que creamos, es un paso más hacia nuestro objetivo de brindar esperanza y oportunidades a quienes más lo necesitan.`,
      categoria: "Recreación"
    }
  ];

  const noticia = noticias.find(n => n.id === parseInt(id));

  if (!noticia) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Noticia no encontrada</h2>
          <Link to="/noticias" className="text-blue-600 hover:underline">
            Volver a noticias
          </Link>
        </div>
      </div>
    );
  }

  const formatearFecha = (fecha) => {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opciones);
  };

  const compartirNoticia = () => {
    if (navigator.share) {
      navigator.share({
        title: noticia.titulo,
        text: noticia.titulo,
        url: window.location.href,
      });
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón de regreso */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <Link 
            to="/noticias" 
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a noticias
          </Link>
        </div>
      </div>

      {/* Contenido del artículo */}
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header del artículo */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium text-white"
                style={{backgroundColor: '#A7C7E7'}}
              >
                {noticia.categoria}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {formatearFecha(noticia.fecha)}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {noticia.titulo}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#B5EAD7'}}>
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Fundación MPR</span>
                </div>
              </div>
              
              <button
                onClick={compartirNoticia}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">Compartir</span>
              </button>
            </div>
          </header>

          {/* Imagen principal */}
          <div className="mb-8">
            <img 
              src={noticia.imagen} 
              alt={noticia.titulo}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Contenido del artículo */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {noticia.contenido.split('\n\n').map((parrafo, index) => (
                <p key={index} className="text-lg">
                  {parrafo}
                </p>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 p-6 rounded-lg" style={{backgroundColor: '#F8F9FA'}}>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                ¿Te gustaría ser parte de nuestra misión?
              </h3>
              <p className="text-gray-600 mb-6">
                Únete a nosotros como voluntario o realiza una donación para seguir transformando vidas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/voluntariado"
                  className="px-6 py-3 text-white font-medium rounded-lg transition-colors text-center"
                  style={{backgroundColor: '#A7C7E7'}}
                >
                  Ser Voluntario
                </Link>
                <Link
                  to="/donaciones"
                  className="px-6 py-3 text-white font-medium rounded-lg transition-colors text-center"
                  style={{backgroundColor: '#B5EAD7'}}
                >
                  Hacer Donación
                </Link>
              </div>
            </div>
          </div>

          {/* Navegación entre artículos */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                {parseInt(id) > 1 && (
                  <Link
                    to={`/noticia/${parseInt(id) - 1}`}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Artículo anterior
                  </Link>
                )}
              </div>
              <div>
                {parseInt(id) < noticias.length && (
                  <Link
                    to={`/noticia/${parseInt(id) + 1}`}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Siguiente artículo
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NoticiaDetalle;

