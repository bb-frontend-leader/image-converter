
import chalk from 'chalk';
import { resolve } from 'node:path';
import { confirm, input, select } from '@inquirer/prompts';

import { ConvertImagesUseCase } from '#domain/use-cases/convert-images.use-case.js';
import { SharpImageConverter } from '#infrastructure/repositories/sharp-image-converter.imp.js';

/**
 * Class to handle CLI interactions for image conversion.
 */
export class Cli {
    static async run(options: { format?: string; input?: string; output?: string; delete?: boolean }): Promise<void> {
        try {
            // Fallback to interactive prompts if options are missing
            if (!options.input || !options.format) {
                console.log(chalk.bold.blue('\n🎨 B&B - Image Converter\n'));
                 
                // Prompt for missing options
                options.input = await input({
                    message: '📂 Ruta de la carpeta con las imágenes:',
                    default: '../assests/images'
                });

                // Prompt for output format if not provided
                options.format = await select({
                    message: '🎯 Formato de salida:',
                    choices: [
                        { name: 'WebP (mejor compresión)', value: 'webp' },
                        { name: 'JPG (compatible)', value: 'jpg' },
                        { name: 'PNG (sin pérdida)', value: 'png' }
                    ]
                });

                // Prompt for output path and delete option
                const wantsCustomOutput = await confirm({
                    message: '📁 ¿Usar carpeta de salida diferente?',
                    default: false
                });
                 
                // If user wants a custom output path, prompt for it
                if (wantsCustomOutput) {
                    options.output = await input({
                        message: '📁 Ruta de la carpeta de salida:'
                    });
                }
                 
                // Prompt for delete original option
                options.delete = await confirm({
                    message: '🗑️  ¿Eliminar imágenes originales?',
                    default: false
                });
            }
   
            const format = options.format!.toLowerCase();

            // If the format is invalid, exit with error
            if (!['webp', 'jpg', 'png'].includes(format)) {
                console.error(chalk.red('❌ Formato no válido. Usa: webp, jpg o png'));
                process.exit(1);
            }
             
            // We get absolute paths for input and output
            const inputPath = resolve(options.input);
            const outputPath = options.output ? resolve(options.output) : undefined;
        
            console.log(chalk.blue(`\n🔄 Convirtiendo imágenes a .${format}...`));
            console.log(chalk.cyan(`📂 Carpeta de entrada: ${inputPath}`));
            if (outputPath) {
                console.log(chalk.cyan(`📁 Carpeta de salida: ${outputPath}`));
            }
            if (options.delete) {
                console.log(chalk.yellow('🗑️  Se eliminarán las imágenes originales'));
            }
            

            // Initialize use case and perform conversion
            const converter = new SharpImageConverter(); // Using Sharp implementation

            // Create use case instance
            const useCase = new ConvertImagesUseCase(converter);

            const convertedFiles = await useCase.execute({
                inputPath,
                outputFormat: format as 'webp' | 'jpg' | 'png',
                outputPath: outputPath || inputPath,
                ...(options.delete && { deleteOriginal: options.delete })
            });

            console.log(chalk.green(`\n✅ Se convirtieron ${convertedFiles.length} imágenes exitosamente:`));
            convertedFiles.forEach(file => console.log(chalk.gray(`   - ${file}`)));
            
            if (options.delete) {
                console.log(chalk.yellow('\n🗑️  Imágenes originales eliminadas'));
            }

        } catch (error) {
            console.error(chalk.red('\n❌ Error:'), error instanceof Error ? error.message : error);
            process.exit(1);
        }
    }

}