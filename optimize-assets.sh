#!/bin/bash

# Asset optimization script for Vercel build performance
# This script compresses large images to reduce build time

echo "🖼️  Optimizing large assets for faster builds..."

# Check if imagemagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Installing via Homebrew..."
    brew install imagemagick
fi

# Create backup directory
mkdir -p public/assets/backup
cp public/assets/*.{jpg,jpeg,png} public/assets/backup/ 2>/dev/null || true

# Optimize large images
echo "📦 Compressing Wallpaper4.jpeg (6.4MB)..."
convert public/assets/Wallpaper4.jpeg -quality 80 -resize 1920x1080 public/assets/Wallpaper4.jpeg

echo "📦 Compressing LeafAnalyser.png (4.2MB)..."
convert public/assets/LeafAnalyser.png -quality 80 -resize 1200x800 public/assets/LeafAnalyser.png

echo "📦 Compressing Hero.png (2.9MB)..."
convert public/assets/Hero.png -quality 80 -resize 1200x800 public/assets/Hero.png

echo "📦 Compressing PotatoLeaf.png (2.3MB)..."
convert public/assets/PotatoLeaf.png -quality 80 -resize 1200x800 public/assets/PotatoLeaf.png

echo "📦 Compressing HeroSection.png (2.0MB)..."
convert public/assets/HeroSection.png -quality 80 -resize 1200x800 public/assets/HeroSection.png

echo "📦 Compressing WallpaperTwo.jpg (1.5MB)..."
convert public/assets/WallpaperTwo.jpg -quality 80 -resize 1200x800 public/assets/WallpaperTwo.jpg

echo "✅ Asset optimization complete!"
echo "📊 New file sizes:"
ls -lh public/assets/*.{jpg,jpeg,png} | grep -E "(Wallpaper4|LeafAnalyser|Hero|PotatoLeaf|HeroSection|WallpaperTwo)"

echo ""
echo "🚀 Your build should now be much faster!"
echo "💡 Original files backed up in public/assets/backup/"
