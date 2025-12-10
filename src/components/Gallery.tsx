import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const lightboxImages = images.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.title || img.alt,
  }));

  // Create a pattern for varied sizes - every 5th and 6th image are featured (larger)
  const getImageSize = (idx: number) => {
    const pattern = idx % 8;
    if (pattern === 0 || pattern === 5) return "featured";
    return "normal";
  };

  return (
    <>
      <div className="gallery-masonry">
        {images.map((image, idx) => {
          const size = getImageSize(idx);
          return (
            <div
              key={idx}
              className={`gallery-item ${size === "featured" ? "gallery-item-featured" : ""}`}
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
            >
              <div className="gallery-item-inner group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="inline-flex items-center text-sm font-medium text-white">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                    Zobrazit detail
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={lightboxImages}
        controller={{ closeOnBackdropClick: true }}
      />

      <style>{`
        .gallery-masonry {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        
        @media (min-width: 640px) {
          .gallery-masonry {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
          }
        }
        
        @media (min-width: 1024px) {
          .gallery-masonry {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
        }
        
        .gallery-item {
          grid-column: span 1;
          grid-row: span 1;
        }
        
        .gallery-item-featured {
          grid-column: span 2;
          grid-row: span 2;
        }
        
        @media (max-width: 639px) {
          .gallery-item-featured {
            grid-column: span 2;
            grid-row: span 1;
          }
        }
        
        .gallery-item-inner {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          overflow: hidden;
          border-radius: 0.75rem;
          cursor: pointer;
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        
        .gallery-item-inner:hover {
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          transform: translateY(-4px);
        }
        
        .gallery-item-featured .gallery-item-inner {
          padding-bottom: 100%;
        }
        
        .gallery-item-inner img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}
