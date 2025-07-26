import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronRight, ChevronLeft, Mail, Phone, MapPin, User } from 'lucide-react';

// Importar imágenes
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-bold text-lg mb-3 text-yellow-300">Alimentación</h3>
            <ul className="text-sm space-y-1">
              <li>• Arroz</li>
              <li>• Fideos</li>
              <li>• Legumbres</li>
              <li>• Verduras</li>
              <li>• Huevos</li>
              <li>• Queso</li>
              <li>• Cecina</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-bold text-lg mb-3 text-yellow-300">Alimentación</h3>
            <ul className="text-sm space-y-1">
              <li>• Margarina</li>
              <li>• Manjar</li>
              <li>• Mermeladas</li>
              <li>• Leche</li>
              <li>• Jugos</li>
              <li>• etc.</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-bold text-lg mb-3 text-yellow-300">Artículos de Aseo</h3>
            <ul className="text-sm space-y-1">
              <li>• Limpia pisos</li>
              <li>• Aerosoles</li>
              <li>• Cloro</li>
              <li>• Escobas</li>
              <li>• Trapeadores</li>
              <li>• etc.</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-bold text-lg mb-3 text-yellow-300">Útiles Escolares</h3>
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
      ),
      image: alimentacionFundacion
    },
    {
      id: 2,
      title: "Para mayor información contáctanos",
      content: (
        <div className="text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <Phone className="w-8 h-8 mr-3 text-yellow-300" />
            <span className="text-3xl font-bold">+569 3099 9099</span>
          </div>
          <p className="text-xl text-yellow-300 font-medium">¡Tu ayuda es fundamental!</p>
        </div>
      ),
      image: voluntariosAyudando
    },
    {
      id: 3,
      title: "Niños jugando y creciendo",
      content: (
        <div className="text-white">
          <p className="text-lg leading-relaxed">
            Brindamos espacios seguros donde los niños pueden jugar, aprender y desarrollar todo su potencial.
          </p>
        </div>
      ),
      image: ninosJugando
    },
    {
      id: 4,
      title: "Apoyo educativo",
      content: (
        <div className="text-white">
          <p className="text-lg leading-relaxed mb-6">
            Ofrecemos apoyo académico y herramientas educativas para que cada niño pueda alcanzar sus sueños.
          </p>
          <button 
            onClick={downloadList}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-6 8h8a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Descarga listado para ayudar
          </button>
        </div>
      ),
      image: ninosEstudiando
    },
    {
      id: 5,
      title: "Conexión con la naturaleza",
      content: (
        <div className="text-white">
          <p className="text-lg leading-relaxed">
            Fomentamos el contacto con la naturaleza como parte integral del desarrollo saludable de los niños.
          </p>
        </div>
      ),
      image: ninosNaturaleza
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

  function downloadList() {
    const listContent = `LISTADO DE AYUDA - FUNDACIÓN MPR

ALIMENTACIÓN:
• Arroz
• Fideos
• Legumbres
• Verduras
• Huevos
• Queso
• Cecina
• Margarina
• Manjar
• Mermeladas
• Leche
• Jugos

ARTÍCULOS DE ASEO:
• Limpia pisos
• Aerosoles
• Cloro
• Escobas
• Trapeadores
• Detergente
• Jabón

ÚTILES ESCOLARES:
• Cuadernos
• Lápices
• Gomas
• Sacapuntas
• Cartulinas
• Goma Eva
• Tijeras
• Pegamento
• Reglas

Para más información contacta:
Teléfono: +569 3099 9099
Email: contacto@fundacionmpr.cl

¡Gracias por tu apoyo!
Fundación MPR - Transformando vidas`;

    const blob = new Blob([listContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'listado-ayuda-fundacion-mpr.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen">
      {/* Header Superior */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <Mail className="w-4 h-4" />
            <a 
              href="https://forms.google.com/tu-formulario-aqui" 
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              contacto@fundacionmpr.cl
            </a>
          </div>
          
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <a href="#" className="hover:text-blue-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-blue-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-blue-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="https://www.flow.cl/app/web/pagarBtnPago.php?token=p8020dfbc00c9ebf9a2debdf6b95defef867368f&fbclid=PAQ0xDSwLro_VleHRuA2FlbQIxMQABp4LEp311WA-3m-yVvHIJsxaFVAZ2NYgl0OHSSt_QvoIbYVM8HwDXYzYXS5i0_aem_96Y6FPrhy72P5Ekxo7O49w"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors font-medium"
            >
              <Heart className="w-4 h-4" />
              <span>Donaciones</span>
            </a>
            <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors font-medium">
              Inicio Sesión
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
                <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-800">Fundación MPR</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="font-medium text-gray-700 hover:text-primary transition-colors flex items-center space-x-1"
                >
                  <span>Nosotros</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <a href="#vision" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Visión</a>
                    <a href="#mision" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Misión</a>
                    <a href="#quienes-somos" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Quienes somos</a>
                    <a href="#historia" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Nuestra historia</a>
                  </div>
                )}
              </div>
              <Link to="/noticias" className="font-medium text-gray-700 hover:text-primary transition-colors">Noticias</Link>
              <Link to="/voluntariado" className="font-medium text-gray-700 hover:text-primary transition-colors">Voluntariado</Link>
              <Link to="/practica" className="font-medium text-gray-700 hover:text-primary transition-colors">Práctica</Link>
              <Link to="/contacto" className="font-medium text-gray-700 hover:text-primary transition-colors">Contacto</Link>
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
      <section id="quienes-somos" className="py-16 bg-gray-50">
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
              Nuestro propósito es proporcionar alimentación, educación y acompañamiento emocional siendo una red de apoyo.
            </p>
          </div>
        </div>
      </section>

      {/* Visión, Impacto, Misión */}
      <section id="vision" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Empoderar a niños chilenos e inmigrantes en situación de vulnerabilidad, transformándolos en grandes servidores y ciudadanos que contribuyan positivamente a la sociedad. Basados en sólidos principios cristianos, les brindamos herramientas que potencian sus capacidades y promueven su desarrollo académico, moral y familiar, para que nunca normalicen la miseria, sino que alcancen un futuro digno y lleno de propósito.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Impacto</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transformamos vidas a través de programas integrales que abordan las necesidades básicas y el desarrollo personal de cada niño, creando un impacto positivo duradero en sus familias y comunidades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Nuestra Visión</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ser una fundación reconocida por su excelencia en la transformación de vidas infantiles, expandiendo nuestro impacto a nivel nacional e internacional, siendo un modelo de esperanza y desarrollo integral para niños en situación de vulnerabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Directorio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestro Directorio</h2>
            <p className="text-lg text-gray-600">
              Conoce al equipo comprometido que lidera nuestra misión de transformar vidas y construir un futuro mejor para los niños.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">María Pérez</h3>
              <p className="text-primary font-medium mb-3">Presidenta</p>
              <p className="text-gray-600 text-sm">
                Líder visionaria con más de 10 años de experiencia en trabajo social.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Carlos Rodríguez</h3>
              <p className="text-primary font-medium mb-3">Director Ejecutivo</p>
              <p className="text-gray-600 text-sm">
                Especialista en gestión de organizaciones sin fines de lucro.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ana González</h3>
              <p className="text-primary font-medium mb-3">Coordinadora de Programas</p>
              <p className="text-gray-600 text-sm">
                Educadora con pasión por el desarrollo infantil integral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Columna 1 */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Fundación MPR</span>
              </div>
              <p className="text-gray-300 text-sm">
                Levantamos necesidades e identificamos niños en riesgo social para brindarles apoyo integral y oportunidades de desarrollo.
              </p>
            </div>

            {/* Columna 2 */}
            <div>
              <h4 className="font-bold text-lg mb-4">Destacado</h4>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Preguntas Frecuentes
              </a>
            </div>

            {/* Columna 3 */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-gray-300">+569 9309 9099</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-gray-300">contacto@fundacionmpr.cl</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-sm">
              © 2024 Fundación MPR. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

