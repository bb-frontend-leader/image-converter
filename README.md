<h1 align="center">
  📚 Books Image Converter
</h1>

<p align="center">
  <strong>Convierte imágenes entre diferentes formatos con facilidad</strong>
</p>

<p align="center">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/books-image-converter">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/books-image-converter">
  <img alt="License" src="https://img.shields.io/npm/l/books-image-converter">
  <img alt="Bundle Size" src="https://img.shields.io/bundlephobia/min/books-image-converter">
</p>

<p align="center">
  <a href="#-características">Características</a> •
  <a href="#-instalación">Instalación</a> •
  <a href="#-uso">Uso</a> •
  <a href="#-ejemplos">Ejemplos</a>
</p>

---

## 📖 Descripción

**Books Image Converter** es una herramienta CLI potente y fácil de usar para convertir imágenes entre diferentes formatos. Perfecta para preparar contenido de libros digitales, optimizar imágenes web o procesar lotes de imágenes de forma eficiente.

Construida con TypeScript, Sharp y siguiendo principios de Arquitectura Limpia para garantizar código mantenible y escalable.

## ✨ Características

- 🖼️ **Múltiples Formatos**: Convierte entre JPEG, PNG, WebP y más
- ⚡ **Alto Rendimiento**: Procesamiento ultra rápido con Sharp
- 🎯 **Modo Interactivo**: CLI intuitiva con prompts guiados
- 🚀 **Modo Comando**: Ejecución rápida con parámetros
- 📁 **Batch Processing**: Convierte carpetas completas de una vez
- 🗑️ **Limpieza Automática**: Opción para eliminar archivos originales
- 💻 **Cross-platform**: Funciona en Windows, macOS y Linux
- 📦 **Sin Configuración**: Listo para usar después de instalar

## 📦 Instalación

### Uso con npx (Sin instalación)

```bash
npx books-image-converter convert
```

### Instalación Global

```bash
npm install -g books-image-converter
```

### Instalación en Proyecto

```bash
npm install books-image-converter
```

## 🚀 Uso

### Inicio Rápido

La forma más fácil de comenzar es usar el **modo interactivo**:

```bash
npx books-image-converter convert
```

La CLI te guiará paso a paso:

```
🎨 B&B - Image Converter

📂 Ruta de la carpeta con las imágenes: ./imagenes
🎯 Formato de salida:
  ❯ WebP (mejor compresión)
    JPG (compatible)
    PNG (sin pérdida)
📁 ¿Usar carpeta de salida diferente? No
🗑️  ¿Eliminar imágenes originales? No

🔄 Convirtiendo imágenes a .webp...
✅ Se convirtieron 15 imágenes exitosamente
```

### Modo Comando (Avanzado)

Para usuarios que prefieren rapidez:

```bash
books-image-converter convert -i ./imagenes -f webp
```

### Opciones Disponibles

| Opción | Alias | Descripción | Requerido |
|--------|-------|-------------|-----------|
| `--input` | `-i` | Ruta de la carpeta con imágenes | Sí* |
| `--format` | `-f` | Formato de salida (webp, jpg, png) | Sí* |
| `--output` | `-o` | Carpeta de salida (por defecto: misma carpeta) | No |
| `--delete` | `-d` | Eliminar imágenes originales | No |

<sub>* Solo requeridos en modo comando. En modo interactivo se solicitan automáticamente.</sub>

## 💡 Ejemplos

### Ejemplo 1: Conversión Básica

Convertir todas las imágenes de una carpeta a WebP:

```bash
npx books-image-converter convert -i ./mis-fotos -f webp
```

### Ejemplo 2: Con Carpeta de Salida

Mantener originales y guardar convertidas en otra carpeta:

```bash
npx books-image-converter convert \
  -i ./imagenes-originales \
  -f jpg \
  -o ./imagenes-convertidas
```

### Ejemplo 3: Optimización Web

Convertir a WebP y eliminar originales para ahorrar espacio:

```bash
npx books-image-converter convert -i ./assets/images -f webp -d
```

### Ejemplo 4: Conversión a PNG

Para mantener calidad sin pérdida:

```bash
npx books-image-converter convert -i ./fotos -f png
```

### Ejemplo 5: Uso en Scripts

Integra en tus scripts de build:

```json
{
  "scripts": {
    "optimize-images": "books-image-converter convert -i ./public/images -f webp"
  }
}
```

## 🎯 Casos de Uso

### 🌐 Optimización Web

```bash
books-image-converter convert -i ./src/assets -f webp -d
```

### 🖼️ Estandarización de Formatos

```bash
books-image-converter convert -i ./coleccion-fotos -f png
```

## 🏗️ Arquitectura

Este proyecto sigue los principios de **Clean Architecture**:

```
📂 src/
├── 📁 domain/              # Lógica de negocio
│   ├── repository/         # Interfaces
│   └── use-cases/          # Casos de uso
├── 📁 infrastructure/      # Implementaciones técnicas
│   └── repositories/       # Sharp integration
└── 📁 presentation/        # Capa de presentación
    └── cli.ts              # Interfaz CLI
```

## 🛠️ Tecnologías

- **[Sharp](https://sharp.pixelplumbing.com/)** - Procesamiento de imágenes de alto rendimiento
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Commander.js](https://github.com/tj/commander.js)** - CLI framework
- **[Inquirer](https://github.com/SBoudrias/Inquirer.js)** - Prompts interactivos
- **[Chalk](https://github.com/chalk/chalk)** - Styling para terminal

## 🤝 Contribuir

¿Encontraste un bug o tienes una idea? ¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: Add amazing feature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Changelog

Ver [CHANGELOG.md](./CHANGELOG.md) para detalles de cada versión.

## ❤️ Hecho con el 💙 en Books&Books  

Nos enorgullece desarrollar este proyecto como parte del compromiso de **Books&Books** con la educación y la innovación tecnológica. 🌟  

Gracias por visitar nuestro proyecto. ¡Juntos podemos hacer del aprendizaje una experiencia increíble! 🥳✨