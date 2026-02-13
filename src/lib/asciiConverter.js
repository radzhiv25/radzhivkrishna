/**
 * Converts an image to ASCII art
 * @param {string} imageUrl - URL of the image to convert
 * @param {number} width - Width of ASCII art in characters (default: 32)
 * @param {number} height - Height of ASCII art in characters (default: 32)
 * @returns {Promise<string>} - ASCII art string
 */
export async function imageToAscii(imageUrl, width = 32, height = 32) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        canvas.width = width;
        canvas.height = height;
        
        // Draw image to canvas
        ctx.drawImage(img, 0, 0, width, height);
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        
        // ASCII characters from darkest to lightest
        const asciiChars = '@%#*+=-:. ';
        // Alternative: '@%#*+=-:.· ' for more detail
        
        let ascii = '';
        
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            
            // Convert RGB to grayscale
            const gray = (r * 0.299 + g * 0.587 + b * 0.114);
            
            // Map grayscale to ASCII character
            const charIndex = Math.floor((gray / 255) * (asciiChars.length - 1));
            ascii += asciiChars[charIndex];
          }
          ascii += '\n';
        }
        
        resolve(ascii);
      } catch (error) {
        reject(error);
      }
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = imageUrl;
  });
}
