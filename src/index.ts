#!/usr/bin/env node

import { Command } from 'commander';

import { Cli } from '#presentation/cli.js';

// CLI Setup
const program = new Command();

program
    .name('books-image-converter')
    .description('Convierte imágenes a diferentes formatos')
    .version('1.0.0');

program
    .command('convert')
    .description('Convierte todas las imágenes de una carpeta a un formato específico.')
    .option('-i, --input <path>', 'Ruta de la carpeta con las imágenes')
    .option('-f, --format <format>', 'Formato de salida (webp, jpg, png)')
    .option('-o, --output <path>', 'Carpeta de salida (opcional, por defecto la misma de entrada)')
    .option('-d, --delete', 'Eliminar imágenes originales después de convertir')
    .action((options) => Cli.run(options));

program.parse();

