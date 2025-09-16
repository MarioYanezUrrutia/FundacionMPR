import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear el contenido del correo
    const subject = `Contacto desde web - ${formData.asunto}`;
    const body = `
Nuevo mensaje de contacto desde la página web:

Nombre: ${formData.nombre}
Email: ${formData.email}
Asunto: ${formData.asunto}

Mensaje:
${formData.mensaje}

---
Enviado desde el formulario de contacto de la página web de Fundación MPR
    `;

    // Crear el enlace mailto
    const mailtoLink = `mailto:fundacionmprefugio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir el cliente de correo
    window.location.href = mailtoLink;
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
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-white/90">
            ¿Tienes alguna pregunta o quieres conocer más sobre nuestro trabajo? Estamos aquí para ayudarte.
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Información de Contacto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#A7C7E7'}}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a 
                    href="mailto:fundacionmprefugio@gmail.com" 
                    className="text-blue-600 hover:underline"
                  >
                    fundacionmprefugio@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#B5EAD7'}}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Ubicación</h3>
                  <p className="text-gray-600">
                    Lo Prado, Santiago<br />
                    Región Metropolitana, Chile
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#FFDAB3'}}>
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Horarios de Atención</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p>Sábados: 9:00 AM - 2:00 PM</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Nuestra Ubicación</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Mapa de Google Maps - Lo Prado, Santiago</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Envíanos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto *
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="Información General">Información General</option>
                  <option value="Donaciones">Donaciones</option>
                  <option value="Voluntariado">Voluntariado</option>
                  <option value="Alianzas y Colaboraciones">Alianzas y Colaboraciones</option>
                  <option value="Prensa y Medios">Prensa y Medios</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg transition-colors"
                style={{backgroundColor: '#A7C7E7', '&:hover': {backgroundColor: '#8BB5E0'}}}
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              * Campos obligatorios. Nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

