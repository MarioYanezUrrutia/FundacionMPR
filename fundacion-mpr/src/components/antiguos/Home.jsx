import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronRight, ChevronLeft, Mail, Download } from 'lucide-react';

// Importar imágenes directamente desde assets/images
import ninosJugando from '../assets/images/ninos-jugando.jpg';
import ninosEstudiando from '../assets/images/ninos-estudiando.jpg';
import ninosNaturaleza from '../assets/images/ninos-naturaleza.jpg';
import alimentacionFundacion from '../assets/images/alimentacion-fundacion.jpg';
import voluntariosAyudando from '../assets/images/voluntarios-ayudando.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Cómo puedes ayudarnos",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-bold text-lg mb-3" style={{color: '#FFDAB3'}}>Artículos de Aseo</h3>
              <ul className="text-sm space-y-1">
                <li>• Limpia pisos</li>
                <li>• Aerosoles</li>
                <li>• Cloro</li>
                <li>• Escobas</li>
                <li>• Trapeadores</li>
                <li>• Detergente</li>
                <li>• Jabón</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-bold text-lg mb-3" style={{color: '#B5EAD7'}}>Alimentos No Perecederos</h3>
              <ul className="text-sm space-y-1">
                <li>• Arroz</li>
                <li>• Fideos</li>
                <li>• Legumbres</li>
                <li>• Conservas</li>
                <li>• Aceite</li>
                <li>• Azúcar</li>
                <li>• Harina</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-bold text-lg mb-3" style={{color: '#D7BDE2'}}>Útiles Escolares</h3>
              <ul className="text-sm space-y-1">
                <li>• Cuadernos</li>
                <li>• Lápices</li>
                <li>• Gomas</li>
                <li>• Sacapuntas</li>
                <li>• Cartulinas</li>
                <li>• Goma Eva</li>
                <li>• Tijeras</li>
                <li>• etc.</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <a 
              href="/listado-ayuda-fundacion-mpr.pdf"
              download="listado-ayuda-fundacion-mpr.pdf"
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Listado Ayuda
            </a>
          </div>
        </div>
      ),
      image: alimentacionFundacion
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Header Superior */}
      <div style={{backgroundColor: '#A7C7E7'}} className="text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <Mail className="w-4 h-4" />
            <a 
              href="mailto:fundacionmprefugio@gmail.com" 
              className="hover:underline"
            >
              fundacionmprefugio@gmail.com
            </a>
          </div>
          
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <a href="https://www.instagram.com/fundacionmipequenorefugio" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/zoar2021" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@fundacionm.p.r" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <button
              className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors font-medium cursor-default"
            >
              <Heart className="w-4 h-4" />
              <span>Donaciones</span>
            </button>
          </div>
        </div>
      </div>

      {/* Barra de Navegación */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #A7C7E7, #B5EAD7)'}}>
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-800">Fundación MPR</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="font-medium text-gray-700 transition-colors flex items-center space-x-1"
                  style={{'&:hover': {color: '#A7C7E7'}}}
                >
                  <span>Nosotros</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <a href="#vision" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors" style={{'&:hover': {color: '#A7C7E7'}}}>Visión</a>
                    <a href="#mision" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors" style={{'&:hover': {color: '#A7C7E7'}}}>Misión</a>
                    <a href="#quienes-somos" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors" style={{'&:hover': {color: '#A7C7E7'}}}>Quienes somos</a>
                    <a href="#historia" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors" style={{'&:hover': {color: '#A7C7E7'}}}>Nuestra historia</a>
                  </div>
                )}
              </div>
              <Link to="/noticias" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Noticias</Link>
              <Link to="/voluntariado" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Voluntariado</Link>
              <Link to="/practica" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Práctica</Link>
              <Link to="/contacto" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Contacto</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Carrusel */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {slides[currentSlide].title}
              </h2>
              <div className="mb-8">
                {slides[currentSlide].content}
              </div>
            </div>
          </div>
        </div>

        {/* Controles del carrusel */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Nuestra Historia */}
      <section id="historia" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Historia</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              En el 2018 comenzó un proyecto que entregaba espacios dignos para que los niños fueran apoyados en sus estudios además de darles un espacio de distracción y crecimiento.
            </p>
            <p className="text-lg text-gray-600">
              Constituidos legalmente como Organización Sin Fines De Lucro en el 2022.
            </p>
          </div>
        </div>
      </section>

      {/* Quienes Somos */}
      <section id="quienes-somos" className="py-16" style={{backgroundColor: '#B5EAD7'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quienes Somos</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg text-gray-600">
              Nacimos del deseo de ofrecer un espacio seguro para niños en Lo Prado.
            </p>
            <p className="text-lg text-gray-600">
              Inspirados en valores cristianos, apoyamos a familias migrantes y de escasos recursos.
            </p>
            <p className="text-lg text-gray-600">
              Nuestro propósito es proporcionar alimentación, educación y acompañamiento integral.
            </p>
          </div>
        </div>
      </section>

      {/* Visión */}
      <section id="vision" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Visión</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              Ser una fundación reconocida por su compromiso en la transformación de vidas de niños y familias vulnerables, creando oportunidades de desarrollo integral y promoviendo la igualdad de oportunidades en nuestra comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section id="mision" className="py-16" style={{backgroundColor: '#FFDAB3'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              Brindar apoyo integral a niños y familias en situación de vulnerabilidad social, proporcionando espacios seguros de aprendizaje, alimentación y desarrollo personal, basados en valores cristianos y el compromiso con la dignidad humana.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor: '#D7BDE2'}} className="text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg">Fundación MPR</span>
              </div>
              <p className="text-white/80 mb-4">
                Transformando vidas a través del amor, la educación y el apoyo integral a niños y familias vulnerables.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contacto</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:fundacionmprefugio@gmail.com" className="hover:text-white">
                    fundacionmprefugio@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Lo Prado, Santiago</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/fundacionmipequenorefugio" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/zoar2021" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@fundacionm.p.r" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-white/60 text-sm">
            © {new Date().getFullYear()} Fundación MPR. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;


