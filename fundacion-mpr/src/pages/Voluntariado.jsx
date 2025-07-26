import React, { useState } from 'react';
import { Heart, User, Mail, Phone, Calendar, Clock, Send, MapPin } from 'lucide-react';

const Voluntariado = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    edad: '',
    ocupacion: '',
    experiencia: '',
    areas_interes: [],
    disponibilidad: '',
    dias_disponibles: [],
    motivacion: '',
    como_conocio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const areasInteres = [
    'Apoyo educativo',
    'Actividades recreativas',
    'Talleres de arte',
    'Deportes',
    'Apoyo psicológico',
    'Distribución de alimentos',
    'Eventos y fundraising',
    'Comunicaciones',
    'Administración'
  ];

  const diasSemana = [
    'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'areas_interes') {
        setFormData(prev => ({
          ...prev,
          areas_interes: checked 
            ? [...prev.areas_interes, value]
            : prev.areas_interes.filter(area => area !== value)
        }));
      } else if (name === 'dias_disponibles') {
        setFormData(prev => ({
          ...prev,
          dias_disponibles: checked 
            ? [...prev.dias_disponibles, value]
            : prev.dias_disponibles.filter(dia => dia !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/voluntariado', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tipo: 'voluntariado'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
          edad: '',
          ocupacion: '',
          experiencia: '',
          areas_interes: [],
          disponibilidad: '',
          dias_disponibles: [],
          motivacion: '',
          como_conocio: ''
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
            <Heart className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            <h1 className="text-4xl font-bold mb-4">Únete como Voluntario</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Forma parte de nuestro equipo y ayuda a transformar vidas. Tu tiempo y dedicación pueden hacer la diferencia en la vida de muchos niños.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Información sobre voluntariado */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">¿Por qué ser voluntario?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Impacta directamente en la vida de niños vulnerables</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Desarrolla nuevas habilidades y experiencias</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Forma parte de una comunidad comprometida</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Contribuye al desarrollo de tu comunidad</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Áreas de Voluntariado</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Educación:</span> Apoyo en tareas y reforzamiento</p>
                <p><span className="font-medium">Recreación:</span> Actividades lúdicas y deportivas</p>
                <p><span className="font-medium">Arte:</span> Talleres creativos y expresión artística</p>
                <p><span className="font-medium">Apoyo:</span> Distribución de alimentos y recursos</p>
                <p><span className="font-medium">Eventos:</span> Organización de actividades especiales</p>
              </div>
            </div>
          </div>

          {/* Formulario de voluntariado */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Formulario de Postulación</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">¡Postulación enviada exitosamente! Te contactaremos pronto para coordinar una entrevista.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">Hubo un error al enviar la postulación. Por favor, intenta nuevamente.</p>
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
                        min="16"
                        max="80"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Estudiante, Profesional, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Áreas de interés */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Áreas de Interés</h3>
                  <p className="text-sm text-gray-600 mb-4">Selecciona las áreas en las que te gustaría colaborar (puedes elegir varias):</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {areasInteres.map((area) => (
                      <label key={area} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="areas_interes"
                          value={area}
                          checked={formData.areas_interes.includes(area)}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Disponibilidad */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Disponibilidad</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="disponibilidad" className="block text-sm font-medium text-gray-700 mb-2">
                        Horario preferido *
                      </label>
                      <select
                        id="disponibilidad"
                        name="disponibilidad"
                        value={formData.disponibilidad}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Selecciona un horario</option>
                        <option value="mañana">Mañana (9:00 - 13:00)</option>
                        <option value="tarde">Tarde (14:00 - 18:00)</option>
                        <option value="noche">Noche (19:00 - 21:00)</option>
                        <option value="fin-semana">Solo fines de semana</option>
                        <option value="flexible">Horario flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Días disponibles *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {diasSemana.map((dia) => (
                          <label key={dia} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              name="dias_disponibles"
                              value={dia}
                              checked={formData.dias_disponibles.includes(dia)}
                              onChange={handleChange}
                              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <span className="text-sm text-gray-700">{dia}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experiencia y motivación */}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="experiencia" className="block text-sm font-medium text-gray-700 mb-2">
                      Experiencia previa en voluntariado
                    </label>
                    <textarea
                      id="experiencia"
                      name="experiencia"
                      value={formData.experiencia}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Cuéntanos qué te motiva a ser parte de nuestro equipo..."
                    />
                  </div>

                  <div>
                    <label htmlFor="como_conocio" className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Cómo conociste nuestra fundación? *
                    </label>
                    <select
                      id="como_conocio"
                      name="como_conocio"
                      value={formData.como_conocio}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="redes-sociales">Redes sociales</option>
                      <option value="sitio-web">Sitio web</option>
                      <option value="amigo-familiar">Amigo o familiar</option>
                      <option value="evento">En un evento</option>
                      <option value="medios">Medios de comunicación</option>
                      <option value="otro">Otro</option>
                    </select>
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
                      Enviando postulación...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Postulación
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

export default Voluntariado;

