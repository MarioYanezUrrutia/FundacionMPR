from flask import Blueprint, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os

formularios_bp = Blueprint('formularios', __name__)

# Configuración de email (usar variables de entorno en producción)
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_USER = "contacto@fundacionmpr.cl"  # Cambiar por el email real
EMAIL_PASSWORD = "tu_password_aqui"  # Cambiar por la contraseña real
ADMIN_EMAIL = "admin@fundacionmpr.cl"  # Email donde llegan los formularios

def enviar_email(asunto, contenido, email_destinatario=None):
    """Función para enviar emails"""
    try:
        # Crear mensaje
        msg = MIMEMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = email_destinatario or ADMIN_EMAIL
        msg['Subject'] = asunto
        
        # Agregar contenido
        msg.attach(MIMEText(contenido, 'html', 'utf-8'))
        
        # Conectar y enviar (comentado para demo)
        # server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        # server.starttls()
        # server.login(EMAIL_USER, EMAIL_PASSWORD)
        # text = msg.as_string()
        # server.sendmail(EMAIL_USER, email_destinatario or ADMIN_EMAIL, text)
        # server.quit()
        
        print(f"Email enviado: {asunto}")
        print(f"Contenido: {contenido}")
        return True
    except Exception as e:
        print(f"Error enviando email: {str(e)}")
        return False

@formularios_bp.route('/contacto', methods=['POST'])
def contacto():
    """Endpoint para formulario de contacto"""
    try:
        data = request.get_json()
        
        # Validar datos requeridos
        campos_requeridos = ['nombre', 'email', 'asunto', 'mensaje']
        for campo in campos_requeridos:
            if not data.get(campo):
                return jsonify({'error': f'El campo {campo} es requerido'}), 400
        
        # Crear contenido del email
        asunto = f"Nuevo mensaje de contacto: {data['asunto']}"
        contenido = f"""
        <html>
        <body>
            <h2>Nuevo mensaje de contacto - Fundación MPR</h2>
            <p><strong>Fecha:</strong> {datetime.now().strftime('%d/%m/%Y %H:%M')}</p>
            <p><strong>Nombre:</strong> {data['nombre']}</p>
            <p><strong>Email:</strong> {data['email']}</p>
            <p><strong>Teléfono:</strong> {data.get('telefono', 'No proporcionado')}</p>
            <p><strong>Asunto:</strong> {data['asunto']}</p>
            <p><strong>Mensaje:</strong></p>
            <p>{data['mensaje'].replace(chr(10), '<br>')}</p>
        </body>
        </html>
        """
        
        # Enviar email
        if enviar_email(asunto, contenido):
            return jsonify({'message': 'Mensaje enviado exitosamente'}), 200
        else:
            return jsonify({'error': 'Error al enviar el mensaje'}), 500
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@formularios_bp.route('/voluntariado', methods=['POST'])
def voluntariado():
    """Endpoint para formulario de voluntariado"""
    try:
        data = request.get_json()
        
        # Validar datos requeridos
        campos_requeridos = ['nombre', 'apellido', 'email', 'telefono', 'edad', 'ocupacion', 'motivacion']
        for campo in campos_requeridos:
            if not data.get(campo):
                return jsonify({'error': f'El campo {campo} es requerido'}), 400
        
        # Crear contenido del email
        asunto = f"Nueva postulación de voluntario: {data['nombre']} {data['apellido']}"
        contenido = f"""
        <html>
        <body>
            <h2>Nueva Postulación de Voluntario - Fundación MPR</h2>
            <p><strong>Fecha:</strong> {datetime.now().strftime('%d/%m/%Y %H:%M')}</p>
            
            <h3>Información Personal</h3>
            <p><strong>Nombre:</strong> {data['nombre']} {data['apellido']}</p>
            <p><strong>Email:</strong> {data['email']}</p>
            <p><strong>Teléfono:</strong> {data['telefono']}</p>
            <p><strong>Edad:</strong> {data['edad']} años</p>
            <p><strong>Ocupación:</strong> {data['ocupacion']}</p>
            
            <h3>Áreas de Interés</h3>
            <p>{', '.join(data.get('areas_interes', []))}</p>
            
            <h3>Disponibilidad</h3>
            <p><strong>Horario:</strong> {data.get('disponibilidad', 'No especificado')}</p>
            <p><strong>Días:</strong> {', '.join(data.get('dias_disponibles', []))}</p>
            
            <h3>Experiencia</h3>
            <p>{data.get('experiencia', 'No especificada')}</p>
            
            <h3>Motivación</h3>
            <p>{data['motivacion'].replace(chr(10), '<br>')}</p>
            
            <h3>¿Cómo nos conoció?</h3>
            <p>{data.get('como_conocio', 'No especificado')}</p>
        </body>
        </html>
        """
        
        # Enviar email
        if enviar_email(asunto, contenido):
            return jsonify({'message': 'Postulación enviada exitosamente'}), 200
        else:
            return jsonify({'error': 'Error al enviar la postulación'}), 500
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@formularios_bp.route('/practica', methods=['POST'])
def practica():
    """Endpoint para formulario de práctica profesional"""
    try:
        data = request.get_json()
        
        # Validar datos requeridos
        campos_requeridos = ['nombre', 'apellido', 'email', 'telefono', 'rut', 'universidad', 
                           'carrera', 'area_practica', 'duracion', 'horas_semanales', 
                           'supervisor_academico', 'email_supervisor', 'objetivos', 'motivacion']
        for campo in campos_requeridos:
            if not data.get(campo):
                return jsonify({'error': f'El campo {campo} es requerido'}), 400
        
        # Crear contenido del email
        asunto = f"Nueva solicitud de práctica: {data['nombre']} {data['apellido']} - {data['carrera']}"
        contenido = f"""
        <html>
        <body>
            <h2>Nueva Solicitud de Práctica Profesional - Fundación MPR</h2>
            <p><strong>Fecha:</strong> {datetime.now().strftime('%d/%m/%Y %H:%M')}</p>
            
            <h3>Información Personal</h3>
            <p><strong>Nombre:</strong> {data['nombre']} {data['apellido']}</p>
            <p><strong>RUT:</strong> {data['rut']}</p>
            <p><strong>Email:</strong> {data['email']}</p>
            <p><strong>Teléfono:</strong> {data['telefono']}</p>
            
            <h3>Información Académica</h3>
            <p><strong>Universidad/Instituto:</strong> {data['universidad']}</p>
            <p><strong>Carrera:</strong> {data['carrera']}</p>
            <p><strong>Semestre/Año:</strong> {data.get('semestre', 'No especificado')}</p>
            <p><strong>Área de práctica:</strong> {data['area_practica']}</p>
            
            <h3>Detalles de la Práctica</h3>
            <p><strong>Duración:</strong> {data['duracion']} semanas</p>
            <p><strong>Horas semanales:</strong> {data['horas_semanales']}</p>
            <p><strong>Fecha inicio:</strong> {data.get('fecha_inicio', 'No especificada')}</p>
            <p><strong>Fecha término:</strong> {data.get('fecha_termino', 'No especificada')}</p>
            
            <h3>Supervisor Académico</h3>
            <p><strong>Nombre:</strong> {data['supervisor_academico']}</p>
            <p><strong>Email:</strong> {data['email_supervisor']}</p>
            
            <h3>Objetivos de Aprendizaje</h3>
            <p>{data['objetivos'].replace(chr(10), '<br>')}</p>
            
            <h3>Habilidades y Conocimientos</h3>
            <p>{data.get('habilidades', 'No especificadas').replace(chr(10), '<br>')}</p>
            
            <h3>Motivación</h3>
            <p>{data['motivacion'].replace(chr(10), '<br>')}</p>
            
            <h3>Disponibilidad</h3>
            <p>{data.get('disponibilidad', 'No especificada').replace(chr(10), '<br>')}</p>
        </body>
        </html>
        """
        
        # Enviar email
        if enviar_email(asunto, contenido):
            return jsonify({'message': 'Solicitud enviada exitosamente'}), 200
        else:
            return jsonify({'error': 'Error al enviar la solicitud'}), 500
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

