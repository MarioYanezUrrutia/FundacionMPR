import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Building2, Gift, ShoppingCart, Droplets, GraduationCap, CreditCard, Mail, FileText } from 'lucide-react';

const Donaciones = () => {
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
          <h1 className="text-4xl font-bold mb-4">Donaciones</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tu generosidad puede transformar vidas. Cada donación, sin importar su tamaño, hace la diferencia en la vida de nuestros niños.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* DONACIÓN ÚNICA */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: '#A7C7E7'}}>
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">DONACIÓN ÚNICA</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Puedes aportar transfiriendo el monto que tú quieras directamente a nuestra cuenta corriente:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Beneficiario:</span>
                  <span className="text-gray-800">Fundacion Mi Pequeño Refugio</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">RUT:</span>
                  <span className="text-gray-800">65.216.119-7</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Banco:</span>
                  <span className="text-gray-800">Banco Estado</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Tipo de cuenta:</span>
                  <span className="text-gray-800">Chequera Electronica</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Número de cuenta:</span>
                  <span className="text-gray-800 font-mono">29770142448</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-sm text-blue-700">
                <strong>Importante:</strong> Después de realizar tu transferencia, envíanos el comprobante a nuestro email para poder agradecerte personalmente.
              </p>
            </div>
          </div>

          {/* DONA CELEBRACIÓN */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: '#B5EAD7'}}>
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">DONA CELEBRACIÓN</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Puedes ser parte de la construcción de recuerdos especiales para los niños y niñas en nuestra fundación. Tu colaboración hace posible actividades que despiertan entusiasmo y generan felicidad en ellos.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#B5EAD7'}}></div>
                <p className="text-gray-600">Fiestas de cumpleaños grupales</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#B5EAD7'}}></div>
                <p className="text-gray-600">Celebraciones de fechas especiales</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#B5EAD7'}}></div>
                <p className="text-gray-600">Eventos recreativos y educativos</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{backgroundColor: '#B5EAD7'}}></div>
                <p className="text-gray-600">Actividades de temporada navideña</p>
              </div>
            </div>
          </div>

          {/* DONACIÓN EMPRESAS */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: '#FFDAB3'}}>
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">DONACIÓN EMPRESAS</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Hoy muchas empresas están comprometidas con la Responsabilidad Social Empresarial. Si la tuya también lo está y deseas colaborar con nosotros, comunícate con Graciela Céspedes para coordinar tu ayuda.
            </p>
            
            <div className="bg-orange-50 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-3">
                <Mail className="w-5 h-5 mr-2" style={{color: '#FFDAB3'}} />
                <span className="font-medium text-gray-700">Contacto empresarial:</span>
              </div>
              <a 
                href="mailto:fundacionmprefugio@gmail.com" 
                className="text-blue-600 hover:underline font-medium"
              >
                fundacionmprefugio@gmail.com
              </a>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <div className="flex items-center mb-2">
                <FileText className="w-5 h-5 mr-2 text-green-600" />
                <span className="font-medium text-green-800">Certificados de donación</span>
              </div>
              <p className="text-sm text-green-700">
                Contamos con certificados de donaciones amparados en la <strong>Ley 19.885 sobre Donaciones Sociales</strong>.
              </p>
            </div>
          </div>

          {/* DONA ALIMENTOS */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: '#D7BDE2'}}>
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">DONA ALIMENTOS</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Tienes la posibilidad de aportar con alimentos no perecibles, un gesto que permite sostener el comedor solidario y entregar bienestar a niños y niñas. Cada aporte es fundamental para motivarlos y llenar sus días de esperanza.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800 mb-3">Alimentos más necesarios:</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#D7BDE2'}}></div>
                  <span className="text-sm text-gray-600">Arroz</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#D7BDE2'}}></div>
                  <span className="text-sm text-gray-600">Fideos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#D7BDE2'}}></div>
                  <span className="text-sm text-gray-600">Legumbres</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#D7BDE2'}}></div>
                  <span className="text-sm text-gray-600">Conservas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#D7BDE2'}}></div>
                  <span className="text-sm text-gray-600">Aceite</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#D7BDE2'}}></div>
                  <span className="text-sm text-gray-600">Azúcar</span>
                </div>
              </div>
            </div>
          </div>

          {/* DONA ÚTILES DE ASEO */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: '#A7C7E7'}}>
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">DONA ÚTILES DE ASEO</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Con tu aporte en útiles de aseo puedes entregar bienestar y cuidado a niños y niñas que asisten a nuestra fundación. Estos elementos son fundamentales para que se sientan protegidos, valorados y con la confianza de enfrentar su día a día.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800 mb-3">Artículos más necesarios:</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#A7C7E7'}}></div>
                  <span className="text-sm text-gray-600">Jabón</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#A7C7E7'}}></div>
                  <span className="text-sm text-gray-600">Shampoo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#A7C7E7'}}></div>
                  <span className="text-sm text-gray-600">Pasta dental</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#A7C7E7'}}></div>
                  <span className="text-sm text-gray-600">Cepillos de dientes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#A7C7E7'}}></div>
                  <span className="text-sm text-gray-600">Papel higiénico</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#A7C7E7'}}></div>
                  <span className="text-sm text-gray-600">Toallas húmedas</span>
                </div>
              </div>
            </div>
          </div>

          {/* DONA ÚTILES ESCOLARES */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: '#B5EAD7'}}>
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">DONA ÚTILES ESCOLARES</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Al colaborar con útiles escolares, entregas a los niños y niñas la posibilidad de aprender y soñar en grande. Cada cuaderno, lápiz o mochila se convierte en una herramienta que abre puertas a nuevas oportunidades.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800 mb-3">Materiales más necesarios:</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#B5EAD7'}}></div>
                  <span className="text-sm text-gray-600">Cuadernos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#B5EAD7'}}></div>
                  <span className="text-sm text-gray-600">Lápices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#B5EAD7'}}></div>
                  <span className="text-sm text-gray-600">Gomas de borrar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#B5EAD7'}}></div>
                  <span className="text-sm text-gray-600">Reglas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#B5EAD7'}}></div>
                  <span className="text-sm text-gray-600">Mochilas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#B5EAD7'}}></div>
                  <span className="text-sm text-gray-600">Colores</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <Heart className="w-12 h-12 mx-auto mb-4" style={{color: '#A7C7E7'}} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Tienes dudas sobre cómo donar?
            </h3>
            <p className="text-gray-600 mb-6">
              Estamos aquí para ayudarte. Contáctanos y te guiaremos en el proceso de donación que mejor se adapte a tus posibilidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="px-6 py-3 text-white font-medium rounded-lg transition-colors text-center"
                style={{backgroundColor: '#A7C7E7'}}
              >
                Contactar
              </Link>
              <a
                href="mailto:fundacionmprefugio@gmail.com"
                className="px-6 py-3 text-white font-medium rounded-lg transition-colors text-center"
                style={{backgroundColor: '#B5EAD7'}}
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donaciones;

