

/**
 * Abstract repository for image conversion.
 */
export abstract class ImageConverter {
    abstract convert(inputFile: string, outputFile: string, format: string): Promise<void>;
}