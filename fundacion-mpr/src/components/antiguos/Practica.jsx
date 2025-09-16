import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, BookOpen, Users, Activity, Palette, Brain, Send, Upload } from 'lucide-react';

const Practica = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    edad: '',
    universidad: '',
    carrera: '',
    semestre: '',
    area: '',
    otraArea: '',
    horasRequeridas: '',
    fechaInicio: '',
    fechaTermino: '',
    horario: '',
    dias: [],
    curriculum: null,
    cartaPresentacion: null,
    experiencia: '',
    objetivos: '',
    conocimientos: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'dias') {
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
    const subject = 'Nueva postulación de práctica profesional - Fundación MPR';
    const body = `
Nueva postulación de práctica profesional recibida:

INFORMACIÓN PERSONAL:
Nombre: ${formData.nombre} ${formData.apellido}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Edad: ${formData.edad}

INFORMACIÓN ACADÉMICA:
Universidad: ${formData.universidad}
Carrera: ${formData.carrera}
Semestre: ${formData.semestre}

INFORMACIÓN DE LA PRÁCTICA:
Área de interés: ${formData.area}
${formData.area === 'otra' ? `Otra área especificada: ${formData.otraArea}` : ''}
Horas requeridas: ${formData.horasRequeridas}
Fecha de inicio: ${formData.fechaInicio}
Fecha de término: ${formData.fechaTermino}

DISPONIBILIDAD:
Horario preferido: ${formData.horario}
Días disponibles: ${formData.dias.length > 0 ? formData.dias.join(', ') : 'Ninguno seleccionado'}

EXPERIENCIA PREVIA:
${formData.experiencia || 'No especificada'}

OBJETIVOS DE LA PRÁCTICA:
${formData.objetivos || 'No especificados'}

CONOCIMIENTOS RELEVANTES:
${formData.conocimientos || 'No especificados'}

DOCUMENTOS ADJUNTOS:
Currículum: ${formData.curriculum ? formData.curriculum.name : 'No adjuntado'}
Carta de presentación: ${formData.cartaPresentacion ? formData.cartaPresentacion.name : 'No adjuntada'}

---
Enviado desde el formulario de práctica profesional de la página web de Fundación MPR
    `;

    // Crear el enlace mailto
    const mailtoLink = `mailto:fundacionmprefugio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir el cliente de correo
    window.location.href = mailtoLink;
    
    // Nota sobre archivos adjuntos
    if (formData.curriculum || formData.cartaPresentacion) {
      alert('Nota: Por favor, adjunta manualmente tus documentos al correo que se abrirá.');
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
      <div style={{backgroundColor: '#B5EAD7'}} className="text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-4" style={{color: '#FFDAB3'}} />
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Práctica Profesional</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Desarrolla tu experiencia profesional mientras contribuyes al bienestar de niños y familias vulnerables.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Información lateral */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Beneficios de hacer tu práctica con nosotros</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 mt-1" style={{color: '#A7C7E7'}} />
                  <p className="text-gray-600">Experiencia real trabajando con comunidades vulnerables</p>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-5 h-5 mt-1" style={{color: '#B5EAD7'}} />
                  <p className="text-gray-600">Aplicación práctica de conocimientos teóricos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="w-5 h-5 mt-1" style={{color: '#FFDAB3'}} />
                  <p className="text-gray-600">Desarrollo de habilidades profesionales y personales</p>
                </div>
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 mt-1" style={{color: '#D7BDE2'}} />
                  <p className="text-gray-600">Supervisión profesional y retroalimentación constante</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Áreas Disponibles</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5" style={{color: '#A7C7E7'}} />
                  <div>
                    <p className="font-medium text-gray-800">Educación</p>
                    <p className="text-sm text-gray-600">Apoyo pedagógico y reforzamiento</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5" style={{color: '#B5EAD7'}} />
                  <div>
                    <p className="font-medium text-gray-800">Psicología</p>
                    <p className="text-sm text-gray-600">Apoyo psicológico y evaluación</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5" style={{color: '#FFDAB3'}} />
                  <div>
                    <p className="font-medium text-gray-800">Trabajo Social</p>
                    <p className="text-sm text-gray-600">Intervención social y familiar</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5" style={{color: '#D7BDE2'}} />
                  <div>
                    <p className="font-medium text-gray-800">Otra</p>
                    <p className="text-sm text-gray-600">Especifica tu área de estudio</p>
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
                        max="35"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="22"
                      />
                    </div>
                  </div>
                </div>

                {/* Información Académica */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Información Académica</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="universidad" className="block text-sm font-medium text-gray-700 mb-2">
                        Universidad/Instituto *
                      </label>
                      <input
                        type="text"
                        id="universidad"
                        name="universidad"
                        value={formData.universidad}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nombre de tu institución"
                      />
                    </div>
                    <div>
                      <label htmlFor="carrera" className="block text-sm font-medium text-gray-700 mb-2">
                        Carrera *
                      </label>
                      <input
                        type="text"
                        id="carrera"
                        name="carrera"
                        value={formData.carrera}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tu carrera"
                      />
                    </div>
                    <div>
                      <label htmlFor="semestre" className="block text-sm font-medium text-gray-700 mb-2">
                        Semestre/Año *
                      </label>
                      <input
                        type="text"
                        id="semestre"
                        name="semestre"
                        value={formData.semestre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="5to semestre"
                      />
                    </div>
                  </div>
                </div>

                {/* Información de la Práctica */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Información de la Práctica</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                        Área de Práctica *
                      </label>
                      <select
                        id="area"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecciona un área</option>
                        <option value="educacion">Educación</option>
                        <option value="psicologia">Psicología</option>
                        <option value="trabajo-social">Trabajo Social</option>
                        <option value="otra">Otra</option>
                      </select>
                    </div>

                    {formData.area === 'otra' && (
                      <div>
                        <label htmlFor="otraArea" className="block text-sm font-medium text-gray-700 mb-2">
                          Especifica tu área *
                        </label>
                        <input
                          type="text"
                          id="otraArea"
                          name="otraArea"
                          value={formData.otraArea}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Especifica tu área de estudio"
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="horasRequeridas" className="block text-sm font-medium text-gray-700 mb-2">
                        Horas de práctica requeridas *
                      </label>
                      <input
                        type="number"
                        id="horasRequeridas"
                        name="horasRequeridas"
                        value={formData.horasRequeridas}
                        onChange={handleChange}
                        required
                        min="100"
                        max="1000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="240"
                      />
                    </div>

                    <div>
                      <label htmlFor="fechaInicio" className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha de inicio *
                      </label>
                      <input
                        type="date"
                        id="fechaInicio"
                        name="fechaInicio"
                        value={formData.fechaInicio}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="fechaTermino" className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha de término *
                      </label>
                      <input
                        type="date"
                        id="fechaTermino"
                        name="fechaTermino"
                        value={formData.fechaTermino}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

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
                        <option value="jornada-completa">Jornada completa</option>
                        <option value="flexible">Horario flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Días disponibles *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
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

                {/* Documentos */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Documentos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="curriculum" className="block text-sm font-medium text-gray-700 mb-2">
                        Currículum Vitae *
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
                            required
                          />
                        </label>
                        {formData.curriculum && (
                          <span className="text-sm text-gray-600">{formData.curriculum.name}</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cartaPresentacion" className="block text-sm font-medium text-gray-700 mb-2">
                        Carta de Presentación
                      </label>
                      <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                          <Upload className="w-5 h-5 text-gray-500" />
                          <span className="text-sm text-gray-700">Elegir archivo</span>
                          <input
                            type="file"
                            id="cartaPresentacion"
                            name="cartaPresentacion"
                            onChange={handleChange}
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                          />
                        </label>
                        {formData.cartaPresentacion && (
                          <span className="text-sm text-gray-600">{formData.cartaPresentacion.name}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Formatos permitidos: PDF, DOC, DOCX. Tamaño máximo: 5MB</p>
                </div>

                {/* Información Adicional */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Información Adicional</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="experiencia" className="block text-sm font-medium text-gray-700 mb-2">
                        Experiencia previa relevante
                      </label>
                      <textarea
                        id="experiencia"
                        name="experiencia"
                        value={formData.experiencia}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Describe tu experiencia previa relevante..."
                      />
                    </div>

                    <div>
                      <label htmlFor="objetivos" className="block text-sm font-medium text-gray-700 mb-2">
                        Objetivos de la práctica *
                      </label>
                      <textarea
                        id="objetivos"
                        name="objetivos"
                        value={formData.objetivos}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="¿Qué esperas lograr con esta práctica?"
                      />
                    </div>

                    <div>
                      <label htmlFor="conocimientos" className="block text-sm font-medium text-gray-700 mb-2">
                        Conocimientos y habilidades relevantes
                      </label>
                      <textarea
                        id="conocimientos"
                        name="conocimientos"
                        value={formData.conocimientos}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Describe tus conocimientos y habilidades que puedan ser útiles..."
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg transition-colors"
                  style={{backgroundColor: '#B5EAD7', '&:hover': {backgroundColor: '#9DD4C4'}}}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Postulación
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                * Campos obligatorios. Revisaremos tu postulación y nos pondremos en contacto contigo para coordinar una entrevista.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practica;

