import React, { useState } from 'react';
import { GraduationCap, User, Mail, Phone, Calendar, FileText, Send, BookOpen } from 'lucide-react';

const Practica = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    rut: '',
    universidad: '',
    carrera: '',
    semestre: '',
    area_practica: '',
    duracion: '',
    fecha_inicio: '',
    fecha_termino: '',
    horas_semanales: '',
    supervisor_academico: '',
    email_supervisor: '',
    objetivos: '',
    habilidades: '',
    motivacion: '',
    disponibilidad: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const areasPractica = [
    'Trabajo Social',
    'Psicología',
    'Educación',
    'Comunicaciones',
    'Administración',
    'Contabilidad',
    'Marketing',
    'Diseño Gráfico',
    'Informática',
    'Derecho',
    'Otra'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/practica', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tipo: 'practica'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
          rut: '',
          universidad: '',
          carrera: '',
          semestre: '',
          area_practica: '',
          duracion: '',
          fecha_inicio: '',
          fecha_termino: '',
          horas_semanales: '',
          supervisor_academico: '',
          email_supervisor: '',
          objetivos: '',
          habilidades: '',
          motivacion: '',
          disponibilidad: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de la página */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            <h1 className="text-4xl font-bold mb-4">Práctica Profesional</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Desarrolla tu experiencia profesional mientras contribuyes a transformar vidas. Ofrecemos un ambiente de aprendizaje enriquecedor y significativo.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Información sobre prácticas */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">¿Por qué hacer tu práctica con nosotros?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Experiencia real en el tercer sector</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Supervisión profesional especializada</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Proyectos con impacto social real</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Desarrollo de habilidades profesionales</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Networking en el ámbito social</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Áreas Disponibles</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Trabajo Social:</span> Intervención familiar y comunitaria</p>
                <p><span className="font-medium">Psicología:</span> Apoyo emocional y evaluaciones</p>
                <p><span className="font-medium">Educación:</span> Programas pedagógicos</p>
                <p><span className="font-medium">Comunicaciones:</span> Marketing social y contenido</p>
                <p><span className="font-medium">Administración:</span> Gestión organizacional</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Requisitos</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Estar cursando los últimos semestres de carrera</li>
                <li>• Disponibilidad mínima de 20 horas semanales</li>
                <li>• Compromiso y responsabilidad</li>
                <li>• Interés genuino en el trabajo social</li>
              </ul>
            </div>
          </div>

          {/* Formulario de práctica */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Solicitud de Práctica Profesional</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">¡Solicitud enviada exitosamente! Revisaremos tu postulación y te contactaremos pronto.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">Hubo un error al enviar la solicitud. Por favor, intenta nuevamente.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Información personal */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Información Personal</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tu apellido"
                      />
                    </div>

                    <div>
                      <label htmlFor="rut" className="block text-sm font-medium text-gray-700 mb-2">
                        RUT *
                      </label>
                      <input
                        type="text"
                        id="rut"
                        name="rut"
                        value={formData.rut}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="12.345.678-9"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                  </div>
                </div>

                {/* Información académica */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Información Académica</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Nombre de tu carrera"
                      />
                    </div>

                    <div>
                      <label htmlFor="semestre" className="block text-sm font-medium text-gray-700 mb-2">
                        Semestre/Año actual *
                      </label>
                      <input
                        type="text"
                        id="semestre"
                        name="semestre"
                        value={formData.semestre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Ej: 8vo semestre, 4to año"
                      />
                    </div>

                    <div>
                      <label htmlFor="area_practica" className="block text-sm font-medium text-gray-700 mb-2">
                        Área de práctica *
                      </label>
                      <select
                        id="area_practica"
                        name="area_practica"
                        value={formData.area_practica}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Selecciona un área</option>
                        {areasPractica.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Información de la práctica */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Detalles de la Práctica</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="duracion" className="block text-sm font-medium text-gray-700 mb-2">
                        Duración (semanas) *
                      </label>
                      <input
                        type="number"
                        id="duracion"
                        name="duracion"
                        value={formData.duracion}
                        onChange={handleChange}
                        required
                        min="8"
                        max="24"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="12"
                      />
                    </div>

                    <div>
                      <label htmlFor="horas_semanales" className="block text-sm font-medium text-gray-700 mb-2">
                        Horas semanales *
                      </label>
                      <input
                        type="number"
                        id="horas_semanales"
                        name="horas_semanales"
                        value={formData.horas_semanales}
                        onChange={handleChange}
                        required
                        min="20"
                        max="44"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="30"
                      />
                    </div>

                    <div>
                      <label htmlFor="fecha_inicio" className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha de inicio preferida *
                      </label>
                      <input
                        type="date"
                        id="fecha_inicio"
                        name="fecha_inicio"
                        value={formData.fecha_inicio}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="fecha_termino" className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha de término estimada *
                      </label>
                      <input
                        type="date"
                        id="fecha_termino"
                        name="fecha_termino"
                        value={formData.fecha_termino}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Supervisor académico */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Supervisor Académico</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="supervisor_academico" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre del supervisor *
                      </label>
                      <input
                        type="text"
                        id="supervisor_academico"
                        name="supervisor_academico"
                        value={formData.supervisor_academico}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Nombre completo del supervisor"
                      />
                    </div>

                    <div>
                      <label htmlFor="email_supervisor" className="block text-sm font-medium text-gray-700 mb-2">
                        Email del supervisor *
                      </label>
                      <input
                        type="email"
                        id="email_supervisor"
                        name="email_supervisor"
                        value={formData.email_supervisor}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="supervisor@universidad.cl"
                      />
                    </div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="objetivos" className="block text-sm font-medium text-gray-700 mb-2">
                      Objetivos de aprendizaje *
                    </label>
                    <textarea
                      id="objetivos"
                      name="objetivos"
                      value={formData.objetivos}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Describe qué esperas aprender durante tu práctica..."
                    />
                  </div>

                  <div>
                    <label htmlFor="habilidades" className="block text-sm font-medium text-gray-700 mb-2">
                      Habilidades y conocimientos relevantes
                    </label>
                    <textarea
                      id="habilidades"
                      name="habilidades"
                      value={formData.habilidades}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Menciona habilidades, software, idiomas u otros conocimientos relevantes..."
                    />
                  </div>

                  <div>
                    <label htmlFor="motivacion" className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Por qué quieres hacer tu práctica en nuestra fundación? *
                    </label>
                    <textarea
                      id="motivacion"
                      name="motivacion"
                      value={formData.motivacion}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Cuéntanos qué te motiva a realizar tu práctica con nosotros..."
                    />
                  </div>

                  <div>
                    <label htmlFor="disponibilidad" className="block text-sm font-medium text-gray-700 mb-2">
                      Disponibilidad horaria *
                    </label>
                    <textarea
                      id="disponibilidad"
                      name="disponibilidad"
                      value={formData.disponibilidad}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Indica tu disponibilidad de días y horarios..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando solicitud...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Solicitud
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practica;

