import React from 'react';
import './Gallery.css';

const galleryImages = [
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1561081699-db0ac4e82b3d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1452906801831-29e8c3385750?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1508933010776-96353ea8fbee?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&q=80&w=800"
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>Our Inspiration & Showcase</h1>
        <p>A glimpse into our premium designs, hand-crafted to perfection.</p>
      </div>
      
      <div className="masonry-grid">
        {galleryImages.map((src, idx) => (
          <div className="masonry-item" key={idx}>
            <img src={src} alt={`Gallery Floral ${idx + 1}`} loading="lazy" />
            <div className="item-overlay">
              <span>View Design</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
