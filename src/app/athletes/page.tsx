'use client'
import { useEffect, useState } from 'react';

interface CloudinaryImage {
  url: string;
  public_id: string;
}

export default function HomePage() {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null); // Reset l'erreur avant chaque nouvelle requête
    try {
      const response = await fetch(`/api/get-images?nextCursor=${nextCursor}`);
      const data = await response.json();

      if (data.images.length > 0) {
        setImages((prevImages) => [...prevImages, ...data.images]);
        setNextCursor(data.nextCursor); 
        setHasMore(!!data.nextCursor);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des images :", error);
      setError("Impossible de charger les images. Veuillez réessayer.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages(); // Charge les premières images
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 && !loading) {
      fetchImages(); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, nextCursor]);

  return (
    <div>
      <h1>Galerie d'images</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <div key={image.public_id} style={{ margin: '10px' }}>
            <img src={image.url} alt={image.public_id} width="300" height="200" loading="lazy" />
          </div>
        ))}
      </div>
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!hasMore && <p>Aucune autre image disponible.</p>}
    </div>
  );
}
