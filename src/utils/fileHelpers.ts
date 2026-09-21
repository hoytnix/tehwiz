export interface ImageBuffer {
  data: string;
  mimeType: string;
  previewUrl: string;
}

export const processFile = (file: File): Promise<ImageBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (!result) {
        reject(new Error("Failed to read file"));
        return;
      }
      const [header, base64Data] = result.split(',');
      const mimeType = header.split(':')[1].split(';')[0];
      
      resolve({
        data: base64Data,
        mimeType: mimeType,
        previewUrl: result
      });
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
