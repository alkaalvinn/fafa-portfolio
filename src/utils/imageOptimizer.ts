/**
 * Cloudinary Image URL Optimizer
 * Menambahkan parameter optimasi pada URL Cloudinary untuk mengurangi ukuran file
 */

interface OptimizeImageOptions {
  width?: number;
  quality?: number;
  format?: 'webp' | 'auto' | 'jpg' | 'png';
  fetchPriority?: 'high' | 'auto' | 'low';
}

/**
 * Mengecek apakah URL adalah URL Cloudinary
 */
const isCloudinaryUrl = (url: string): boolean => {
  return url.includes('cloudinary.com') || url.includes('res.cloudinary.com');
};

/**
 * Mengecek apakah URL sudah memiliki parameter transformasi
 */
const hasTransformations = (url: string): boolean => {
  return url.includes('/image/upload/') && url.includes(',v');
};

/**
 * Menambahkan parameter optimasi Cloudinary ke URL gambar
 * Contoh transformasi:
 * - q_auto: Kualitas otomatis (biasanya 80-85%)
 * - f_webp: Format WebP (lebih kecil ~25-35% dari JPEG)
 * - w_: Lebar maksimum gambar
 * - c_limit: Crop sesuai rasio, jangan stretch
 */
export const optimizeCloudinaryUrl = (
  url: string,
  options: OptimizeImageOptions = {}
): string => {
  if (!isCloudinaryUrl(url)) {
    return url; // Bukan URL Cloudinary, kembalikan aslinya
  }

  const {
    width,
    quality = 80, // Default quality 80% (balance antara size & visual)
    format = 'webp', // Default pakai WebP
  } = options;

  // Pattern: /image/upload/ menjadi /image/upload/q_80,f_webp,w_800,c_limit/
  const uploadPattern = /\/image\/upload\//;

  let transformations = `q_${quality}`;

  // Tambah format
  if (format === 'webp') {
    transformations += ',f_webp';
  }

  // Tambah width limit
  if (width) {
    transformations += `,w_${width},c_limit`;
  } else {
    transformations += ',c_limit'; // Gunakan c_limit tanpa width constraint
  }

  // Ganti /image/upload/ dengan /image/upload/transformations/
  return url.replace(uploadPattern, `/image/upload/${transformations}/`);
};

/**
 * Mengembalikan URL thumbnail yang sangat kecil untuk preview cepat
 * Berguna untuk skeleton loading atau background blur
 */
export const getThumbnailUrl = (url: string, width: number = 50): string => {
  return optimizeCloudinaryUrl(url, {
    width,
    quality: 60,
    format: 'webp'
  });
};

/**
 * Mengembalikan URL medium quality untuk grid images
 */
export const getGridImageUrl = (url: string, width: number = 600): string => {
  return optimizeCloudinaryUrl(url, {
    width,
    quality: 75,
    format: 'webp'
  });
};

/**
 * Mengembalikan URL high quality untuk modal/full view
 */
export const getFullImageUrl = (url: string): string => {
  return optimizeCloudinaryUrl(url, {
    width: 1920,
    quality: 85,
    format: 'webp'
  });
};

/**
 * Preload multiple images dengan priority
 */
export const preloadImages = (
  urls: string[],
  priority: RequestPriority = 'high'
): void => {
  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    // @ts-ignore - fetchPriority is valid but not in all TypeScript versions
    link.fetchPriority = priority;
    document.head.appendChild(link);
  });
};

/**
 * Hitung jumlah gambar yang terlihat di viewport (untuk preloading)
 */
export const getVisibleImageCount = (
  totalImages: number,
  gridCols: number = 6
): number => {
  // Asumsi: preload 2x jumlah kolom grid untuk cover area awal + buffer
  return Math.min(gridCols * 3, totalImages);
};
