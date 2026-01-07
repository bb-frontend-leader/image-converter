import sharp from 'sharp';

import type { ImageConverter } from '#domain/repository/image-converter.repository.js';

/**
 * Implementation of ImageConverter using Sharp library.
 */
export class SharpImageConverter implements ImageConverter {
    
    async convert(inputFile: string, outputFile: string, format: string): Promise<void> {

        // Load the image using Sharp
        const image = sharp(inputFile);

        // Convert image based on specified format
        switch (format) {
            case 'webp':
                await image.webp({ quality: 90 }).toFile(outputFile);
                break;
            case 'jpg':
            case 'jpeg':
                await image.jpeg({ quality: 90 }).toFile(outputFile);
                break;
            case 'png':
                await image.png({ compressionLevel: 9 }).toFile(outputFile);
                break;
            default:
                throw new Error(`Formato no soportado: ${format}`);
        }
    }
}
