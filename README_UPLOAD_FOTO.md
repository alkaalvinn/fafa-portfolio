# Cara Mengganti Foto Portfolio

## 📁 Struktur Folder yang Diperlukan

Buat folder berikut di dalam folder `public/images/`:

```
public/
└── images/
    ├── fafa.png (hero image - sudah ada)
    ├── visual.png (background Visual World - sudah ada)
    ├── arrow.png (panah Experience - sudah ada)
    ├── portfolio/
    │   ├── visual-1.jpg
    │   ├── visual-2.jpg
    │   ├── ... (hingga visual-24.jpg)
    ├── experience/
    │   ├── bi-1.jpg
    │   ├── bi-2.jpg
    │   ├── bi-3.jpg
    │   ├── bi-4.jpg
    │   ├── kh-1.jpg
    │   ├── kh-2.jpg
    │   ├── kh-3.jpg
    │   ├── kh-4.jpg
    │   ├── gmf-1.jpg
    │   ├── gmf-2.jpg
    │   ├── gmf-3.jpg
    │   ├── gmf-4.jpg
    │   ├── hangry-1.jpg
    │   ├── hangry-2.jpg
    │   ├── hangry-3.jpg
    │   └── hangry-4.jpg
    └── contact/
        ├── portrait-1.jpg
        └── portrait-2.jpg
```

## 🖼️ Section-Specific Instructions

### 1. **Visual World Section** (24 gambar)
- Ganti placeholder di `src/data/portfolioData.ts` line 117-149
- Format: `/images/portfolio/visual-X.jpg`
- Contoh:
```typescript
visualWorld: [
  '/images/portfolio/visual-1.jpg',
  '/images/portfolio/visual-2.jpg',
  // ... hingga visual-24
]
```

### 2. **Experience Section** (4 gambar per perusahaan)
- **Bank Indonesia** (id: 1): bi-1.jpg hingga bi-4.jpg
- **Kraft Heinz** (id: 2): kh-1.jpg hingga kh-4.jpg
- **GMF AeroAsia** (id: 3): gmf-1.jpg hingga gmf-4.jpg
- **Hangry** (id: 4): hangry-1.jpg hingga hangry-4.jpg

### 3. **Contact Section** (2 gambar dekoratif)
- portrait-1.jpg: Gambar pertama (desktop top-right, mobile top)
- portrait-2.jpg: Gambar kedua (desktop left-side, mobile bottom)

## ⚠️ Important Notes

1. **Hero Image** (`fafa.png`): Tidak perlu diganti
2. **Visual Background** (`visual.png`): Tidak perlu diganti
3. **Arrow Image** (`arrow.png`): Tidak perlu diganti

## 📝 Cara Update

1. **Upload foto** ke folder yang sesuai
2. **Edit `src/data/portfolioData.ts`**
3. **Ganti placeholder paths** dengan path foto Anda
4. **Save** dan refresh browser

## 🎨 Tips untuk Foto

### Ukuran yang Direkomendasikan:
- **Visual World**: 400x500px (aspect ratio 4:5)
- **Experience**: 300x300px (square)
- **Contact Portrait**:
  - Portrait 1: 600x400px (landscape)
  - Portrait 2: 400x500px (portrait)

### Format File:
- Gunakan JPG atau PNG
- Kompres file untuk loading lebih cepat
- Konsistenkan style/filter untuk aesthetic yang seragam

## 🔄 Fallback System

Sistem sudah memiliki fallback:
- Jika foto tidak ditemukan, akan otomatis menggunakan placeholder
- Tidak akan ada gambar broken/error
- Website tetap berfungsi dengan baik

## 🚀 Quick Update

Untuk update cepat, Anda bisa:

1. Letakkan semua foto di folder yang sesuai
2. Replace semua placeholder path di `portfolioData.ts`
3. Done! Website akan otomatis menggunakan foto Anda

---

**Need help?** Check the console for any image loading errors.