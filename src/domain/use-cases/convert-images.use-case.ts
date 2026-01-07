import { readdir, unlink } from 'node:fs/promises';
import { basename,extname, join } from 'node:path';

import type { ImageConverter } from '#domain/repository/image-converter.repository.js';

export interface ConvertImagesOptions {
    inputPath: string;
    outputFormat: 'webp' | 'jpg' | 'png';
    outputPath?: string;
    deleteOriginal?: boolean;
}

/**
 * Use case to convert images in a folder to a specified format.
 */
export class ConvertImagesUseCase {
    constructor(private readonly imageConverter: ImageConverter) {}

    async execute(options: ConvertImagesOptions): Promise<string[]> {
        const { inputPath, outputFormat, outputPath, deleteOriginal } = options;
        
        // Reed all files in the input directory
        const files = await readdir(inputPath);
        
        // Filter image files based on common extensions
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.bmp'];
        const imageFiles = files.filter(file => 
            imageExtensions.includes(extname(file).toLowerCase())
        );

        if (imageFiles.length === 0) {
            throw new Error('No se encontraron imágenes en la carpeta especificada');
        }

        const outputDir = outputPath || inputPath;
        const convertedFiles: string[] = [];
        const filesToDelete: string[] = [];

        // Converter each image file
        for (const file of imageFiles) {
            const inputFile = join(inputPath, file);
            const fileNameWithoutExt = basename(file, extname(file));
            const outputFile = join(outputDir, `${fileNameWithoutExt}.${outputFormat}`);

            await this.imageConverter.convert(inputFile, outputFile, outputFormat);
            convertedFiles.push(outputFile);
            
            // Only delete original if specified and not the same as output
            if (deleteOriginal && inputFile !== outputFile) {
                filesToDelete.push(inputFile);
            }
        }

        // Delete original files if requested
        if (deleteOriginal && filesToDelete.length > 0) {
            for (const file of filesToDelete) {
                await unlink(file);
            }
        }

        return convertedFiles;
    }
}
