# Landing Page - Fundación MPR

## Descripción
Landing page completa y responsiva para la Fundación MPR, desarrollada en React con Tailwind CSS. La página está diseñada para mostrar la misión, visión y actividades de la fundación, con un enfoque en la ayuda a niños en situación de vulnerabilidad.

## Características Principales

### 🎨 Diseño
- **Paleta de colores** personalizada para fundaciones infantiles
- **Gradientes metálicos** según especificaciones
- **Tipografía Nunito** (Bold, Medium, Regular) de Google Fonts
- **Diseño responsivo** para desktop, tablet y móvil

### 🧩 Componentes Implementados

#### Header Superior
- Correo electrónico clickeable
- Iconos de redes sociales (Facebook, Instagram, Twitter)
- Botón de donaciones con enlace a Flow
- Botón de inicio de sesión

#### Navegación Principal
- Logo de la fundación
- Menú desplegable "Nosotros" con submenús:
  - Visión
  - Misión
  - Quienes somos
  - Nuestra historia
- Enlaces a: Noticias, Voluntariado, Práctica, Contacto

#### Carrusel Interactivo
1. **Cómo puedes ayudarnos** - Lista de elementos necesarios en 4 columnas
2. **Información de contacto** - Teléfono y mensaje motivacional
3. **Niños jugando** - Imagen de niños en actividades recreativas
4. **Apoyo educativo** - Con botón de descarga de listado
5. **Conexión con la naturaleza** - Niños en actividades al aire libre

#### Secciones de Contenido
- **Nuestra Historia** - Cronología desde 2018
- **Quienes Somos** - Misión y valores de la fundación
- **Visión/Impacto/Misión** - Tres columnas con iconos
- **Nuestro Directorio** - Equipo de liderazgo

#### Footer
- Logo y descripción de la fundación
- Sección destacada con preguntas frecuentes
- Información de contacto (teléfono y email)

### ⚡ Funcionalidades

#### Carrusel
- Auto-avance cada 5 segundos
- Navegación manual con botones
- Indicadores de slide
- Transiciones suaves

#### Navegación
- Scroll suave entre secciones
- Menús desplegables interactivos
- Enlaces ancla funcionales

#### Descargas
- Botón de descarga de listado de ayuda
- Genera archivo .txt con información completa

#### Responsividad
- **Desktop** (1024px+): Layout completo
- **Tablet** (768px): Adaptación intermedia
- **Mobile** (375px): Layout apilado

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **Tailwind CSS** - Estilos y responsividad
- **Vite** - Bundler y servidor de desarrollo
- **Lucide React** - Iconografía
- **Google Fonts** - Tipografía Nunito

## 📁 Estructura del Proyecto

```
fundacion-mpr/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── ninos-jugando.jpg
│   │       ├── ninos-estudiando.jpg
│   │       ├── ninos-naturaleza.jpg
│   │       ├── alimentacion-fundacion.jpg
│   │       └── voluntarios-ayudando.jpg
│   ├── components/
│   │   └── ui/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+
- pnpm (recomendado) o npm

### Instalación
```bash
cd fundacion-mpr
pnpm install
```

### Desarrollo
```bash
pnpm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Construcción para Producción
```bash
pnpm run build
```

### Vista Previa de Producción
```bash
pnpm run preview
```

## 🔗 Enlaces Importantes

- **Donaciones**: https://www.flow.cl/app/web/pagarBtnPago.php?token=...
- **Email**: contacto@fundacionmpr.cl
- **Teléfono**: +569 3099 9099 / +569 9309 9099

## 📱 Responsividad

La página está optimizada para:
- **Desktop**: Experiencia completa con todas las funcionalidades
- **Tablet**: Layout adaptado manteniendo usabilidad
- **Mobile**: Interfaz optimizada para touch con menú hamburguesa

## 🎯 Escalabilidad a Django

El proyecto está preparado para futura migración a Django:
- Estructura de componentes modular
- Separación clara de datos y presentación
- Rutas preparadas para backend
- Formularios listos para integración con APIs

## 🧪 Pruebas Realizadas

- ✅ Funcionalidad completa del carrusel
- ✅ Navegación entre secciones
- ✅ Responsividad en múltiples dispositivos
- ✅ Descarga de archivos
- ✅ Enlaces externos
- ✅ Optimización de rendimiento

## 📞 Soporte

Para consultas sobre el desarrollo o modificaciones, contactar al equipo de desarrollo.

---

**Desarrollado con ❤️ para la Fundación MPR**

