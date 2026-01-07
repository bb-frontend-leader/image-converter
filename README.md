# 📚 Books Image Converter

Una aplicación CLI para convertir imágenes a diferentes formatos usando Sharp, construida con TypeScript y siguiendo los principios de Arquitectura Limpia.

## ✨ Características

- 🖼️ Convierte imágenes entre múltiples formatos (JPEG, PNG, WebP, AVIF, etc.)
- 🚀 Procesamiento de imágenes de alto rendimiento con Sharp
- 💻 CLI interactiva con prompts intuitivos
- 🏗️ Diseño con Arquitectura Limpia
- 📦 TypeScript para seguridad de tipos
- 🎨 Salida de consola hermosa con Chalk

## 📋 Requisitos Previos

- Node.js (v18 o superior recomendado)
- npm o yarn

## 🔧 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Navegar al directorio del proyecto
cd books-image-converter

# Instalar dependencias
npm install

# Construir el proyecto
npm run build
```

## 🚀 Uso

### Modo Desarrollo

```bash
npm run dev
```

### Modo Producción

```bash
# Construir el proyecto
npm run build

# Ejecutar la CLI
npm start
```

### Usar la CLI directamente

Después de construir, puedes usar la CLI a través del comando bin:

```bash
node dist/index.js
```

O instálalo globalmente para usar el comando `image-converter` desde cualquier lugar.

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run build` | Compila TypeScript a JavaScript |
| `npm start` | Ejecuta la aplicación compilada |
| `npm run dev` | Construye y ejecuta en modo desarrollo |
| `npm run clean` | Elimina el directorio dist |
| `npm run cz` | Usa Commitizen para commits convencionales |

## 📁 Estructura del Proyecto

```
books-image-converter/
├── src/
│   ├── index.ts                           # Punto de entrada
│   ├── domain/                            # Capa de dominio
│   │   ├── repository/                    # Interfaces de repositorios
│   │   │   └── image-converter.repository.ts
│   │   └── use-cases/                     # Lógica de negocio
│   │       └── convert-images.use-case.ts
│   ├── infrastructure/                    # Capa de infraestructura
│   │   └── repositories/                  # Implementaciones de repositorios
│   │       └── sharp-image-converter.imp.ts
│   └── presentation/                      # Capa de presentación
│       └── cli.ts                         # Interfaz CLI
├── dist/                                  # Salida compilada
├── package.json
├── tsconfig.json
├── eslint.config.ts
└── commitlint.config.mjs
```

## 🛠️ Tecnologías Utilizadas

- **[Sharp](https://sharp.pixelplumbing.com/)** 🖼️ - Procesamiento de imágenes de alto rendimiento
- **[TypeScript](https://www.typescriptlang.org/)** 📘 - JavaScript con tipos seguros
- **[Commander.js](https://github.com/tj/commander.js)** ⚡ - Framework CLI
- **[Inquirer](https://github.com/SBoudrias/Inquirer.js)** ❓ - Prompts interactivos
- **[Chalk](https://github.com/chalk/chalk)** 🎨 - Estilos para terminal
- **[ESLint](https://eslint.org/)** ✅ - Linting de código
- **[Commitlint](https://commitlint.js.org/)** 📝 - Validación de mensajes de commit
- **[Commitizen](http://commitizen.github.io/cz-cli/)** 🤝 - Commits estandarizados

## 👨‍💻 Desarrollo

Este proyecto sigue los principios de Arquitectura Limpia con clara separación de responsabilidades:

- **Capa de Dominio**: Contiene la lógica de negocio e interfaces de repositorios
- **Capa de Infraestructura**: Implementa detalles técnicos (integración con Sharp)
- **Capa de Presentación**: Maneja la interacción del usuario a través de la CLI

### 🔗 Alias de Rutas

El proyecto usa alias de rutas de TypeScript para importaciones más limpias:

- `#domain/*` - Módulos de la capa de dominio
- `#infrastructure/*` - Módulos de la capa de infraestructura
- `#presentation/*` - Módulos de la capa de presentación
- `#application/*` - Módulos de la capa de aplicación
- `#utils/*` - Módulos de utilidades

### 📝 Convención de Commits

Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/). Usa Commitizen para commits guiados:

```bash
npm run cz
```

## 📄 Licencia

MIT

## 👤 Autor

Alejandro Repizo

---

**Nota**: Esta es una herramienta CLI diseñada para ayudar con tareas de conversión de imágenes por lotes, particularmente útil para la preparación de libros y contenido educativo.
