import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, BookOpen, Palette, Activity, Brain, Send, Upload } from 'lucide-react';

const Voluntariado = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    edad: '',
    ocupacion: '',
    areas: [],
    horario: '',
    dias: [],
    curriculum: null,
    experiencia: '',
    motivacion: '',
    otros: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'areas') {
        setFormData(prev => ({
          ...prev,
          areas: checked 
            ? [...prev.areas, value]
            : prev.areas.filter(area => area !== value)
        }));
      } else if (name === 'dias') {
        setFormData(prev => ({
          ...prev,
          dias: checked 
            ? [...prev.dias, value]
            : prev.dias.filter(dia => dia !== value)
        }));
      }
    } else if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: e.target.files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear el contenido del correo
    const subject = 'Nueva postulación de voluntariado - Fundación MPR';
    const body = `
Nueva postulación de voluntariado recibida:

INFORMACIÓN PERSONAL:
Nombre: ${formData.nombre} ${formData.apellido}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Edad: ${formData.edad}
Ocupación: ${formData.ocupacion}

ÁREAS DE INTERÉS:
${formData.areas.length > 0 ? formData.areas.join(', ') : 'Ninguna seleccionada'}

DISPONIBILIDAD:
Horario preferido: ${formData.horario}
Días disponibles: ${formData.dias.length > 0 ? formData.dias.join(', ') : 'Ninguno seleccionado'}

EXPERIENCIA PREVIA:
${formData.experiencia || 'No especificada'}

MOTIVACIÓN:
${formData.motivacion || 'No especificada'}

OTROS COMENTARIOS:
${formData.otros || 'Ninguno'}

CURRÍCULUM:
${formData.curriculum ? `Archivo adjunto: ${formData.curriculum.name}` : 'No adjuntado'}

---
Enviado desde el formulario de voluntariado de la página web de Fundación MPR
    `;

    // Crear el enlace mailto
    const mailtoLink = `mailto:fundacionmprefugio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir el cliente de correo
    window.location.href = mailtoLink;
    
    // Nota: El archivo del currículum no se puede enviar automáticamente por mailto
    if (formData.curriculum) {
      alert('Nota: Por favor, adjunta manualmente tu currículum al correo que se abrirá.');
    }
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
          <Heart className="w-16 h-16 mx-auto mb-4" style={{color: '#FFDAB3'}} />
          <h1 className="text-4xl font-bold mb-4">Únete como Voluntario</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Forma parte de nuestro equipo y ayuda a transformar vidas. Tu tiempo y dedicación pueden hacer la diferencia en la vida de muchos niños.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Información lateral */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">¿Por qué ser voluntario?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 mt-1" style={{color: '#A7C7E7'}} />
                  <p className="text-gray-600">Impacta directamente en la vida de niños vulnerables</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 mt-1" style={{color: '#B5EAD7'}} />
                  <p className="text-gray-600">Desarrolla nuevas habilidades y experiencias</p>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-5 h-5 mt-1" style={{color: '#FFDAB3'}} />
                  <p className="text-gray-600">Forma parte de una comunidad comprometida</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Activity className="w-5 h-5 mt-1" style={{color: '#D7BDE2'}} />
                  <p className="text-gray-600">Contribuye al desarrollo de tu comunidad</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Áreas de Voluntariado</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5" style={{color: '#A7C7E7'}} />
                  <div>
                    <p className="font-medium text-gray-800">Educación</p>
                    <p className="text-sm text-gray-600">Apoyo en tareas y reforzamiento</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5" style={{color: '#B5EAD7'}} />
                  <div>
                    <p className="font-medium text-gray-800">Recreación</p>
                    <p className="text-sm text-gray-600">Actividades lúdicas y deportivas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Palette className="w-5 h-5" style={{color: '#FFDAB3'}} />
                  <div>
                    <p className="font-medium text-gray-800">Arte</p>
                    <p className="text-sm text-gray-600">Talleres creativos y expresión artística</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5" style={{color: '#D7BDE2'}} />
                  <div>
                    <p className="font-medium text-gray-800">Psicológico</p>
                    <p className="text-sm text-gray-600">Apoyo emocional y contención</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5" style={{color: '#A7C7E7'}} />
                  <div>
                    <p className="font-medium text-gray-800">Otros</p>
                    <p className="text-sm text-gray-600">Diversas formas de colaboración según tus habilidades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Formulario de Postulación</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Información Personal */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Información Personal</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
                        Apellido *
                      </label>
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tu apellido"
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
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="edad" className="block text-sm font-medium text-gray-700 mb-2">
                        Edad *
                      </label>
                      <input
                        type="number"
                        id="edad"
                        name="edad"
                        value={formData.edad}
                        onChange={handleChange}
                        required
                        min="18"
                        max="80"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="25"
                      />
                    </div>
                    <div>
                      <label htmlFor="ocupacion" className="block text-sm font-medium text-gray-700 mb-2">
                        Ocupación *
                      </label>
                      <input
                        type="text"
                        id="ocupacion"
                        name="ocupacion"
                        value={formData.ocupacion}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Estudiante, Profesional, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Áreas de Interés */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Áreas de Interés</h3>
                  <p className="text-sm text-gray-600 mb-4">Selecciona las áreas en las que te gustaría colaborar (puedes elegir varias):</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { value: 'apoyo-educativo', label: 'Apoyo educativo', icon: BookOpen },
                      { value: 'actividades-recreativas', label: 'Actividades recreativas', icon: Activity },
                      { value: 'talleres-arte', label: 'Talleres de arte', icon: Palette },
                      { value: 'deportes', label: 'Deportes', icon: Activity },
                      { value: 'apoyo-psicologico', label: 'Apoyo psicológico', icon: Brain },
                      { value: 'otros', label: 'Otros', icon: Heart }
                    ].map((area) => {
                      const IconComponent = area.icon;
                      return (
                        <label key={area.value} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            name="areas"
                            value={area.value}
                            checked={formData.areas.includes(area.value)}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <IconComponent className="w-5 h-5 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">{area.label}</span>
                        </label>
                      );
                    })}
                  </div>
                  
                  {formData.areas.includes('otros') && (
                    <div className="mt-4">
                      <label htmlFor="otros" className="block text-sm font-medium text-gray-700 mb-2">
                        Especifica otras formas de voluntariado:
                      </label>
                      <textarea
                        id="otros"
                        name="otros"
                        value={formData.otros}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Describe otras formas en las que te gustaría colaborar..."
                      />
                    </div>
                  )}
                </div>

                {/* Disponibilidad */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Disponibilidad</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="horario" className="block text-sm font-medium text-gray-700 mb-2">
                        Horario preferido *
                      </label>
                      <select
                        id="horario"
                        name="horario"
                        value={formData.horario}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecciona un horario</option>
                        <option value="mañana">Mañana (9:00 - 13:00)</option>
                        <option value="tarde">Tarde (14:00 - 18:00)</option>
                        <option value="flexible">Horario flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Días disponibles (Lunes a Viernes) *
                      </label>
                      <div className="space-y-2">
                        {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map((dia) => (
                          <label key={dia} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              name="dias"
                              value={dia}
                              checked={formData.dias.includes(dia)}
                              onChange={handleChange}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{dia}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Currículum */}
                <div>
                  <label htmlFor="curriculum" className="block text-sm font-medium text-gray-700 mb-2">
                    Adjuntar Currículum (PDF, DOC, DOCX)
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <Upload className="w-5 h-5 text-gray-500" />
                      <span className="text-sm text-gray-700">Elegir archivo</span>
                      <input
                        type="file"
                        id="curriculum"
                        name="curriculum"
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </label>
                    {formData.curriculum && (
                      <span className="text-sm text-gray-600">{formData.curriculum.name}</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Formatos permitidos: PDF, DOC, DOCX. Tamaño máximo: 5MB</p>
                </div>

                {/* Experiencia y Motivación */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="experiencia" className="block text-sm font-medium text-gray-700 mb-2">
                      Experiencia previa en voluntariado
                    </label>
                    <textarea
                      id="experiencia"
                      name="experiencia"
                      value={formData.experiencia}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Describe tu experiencia previa en voluntariado o trabajo con niños..."
                    />
                  </div>

                  <div>
                    <label htmlFor="motivacion" className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Por qué quieres ser voluntario en nuestra fundación? *
                    </label>
                    <textarea
                      id="motivacion"
                      name="motivacion"
                      value={formData.motivacion}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Comparte tu motivación para ser voluntario..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg transition-colors"
                  style={{backgroundColor: '#A7C7E7', '&:hover': {backgroundColor: '#8BB5E0'}}}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Postulación
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                * Campos obligatorios. Revisaremos tu postulación y nos pondremos en contacto contigo pronto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voluntariado;

