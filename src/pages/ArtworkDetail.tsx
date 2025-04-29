
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Heart, Share2, ZoomIn } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  description: string;
  fullDescription?: string;
  year?: string;
  medium?: string;
  dimensions?: string;
  price?: number;
  imageUrl: string;
}

const ArtworkDetail = () => {
  const { artworkId } = useParams<{ artworkId: string }>();
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Simulate fetching artwork data
    const fetchArtwork = async () => {
      setIsLoading(true);
      // In a real app, this would be an API call to get artwork by ID
      
      // Mock data for demonstration
      const mockArtwork = {
        id: parseInt(artworkId || '1'),
        title: artworkId === '2' ? "Crimson Dreams" : artworkId === '5' ? "Velvet Shadows" : "Royal Heritage",
        artist: artworkId === '2' ? "Marcus Reynolds" : artworkId === '5' ? "Victoria Hemsworth" : "Elizabeth Gardener",
        description: artworkId === '2' 
          ? "Bold strokes of crimson and gold create a dramatic landscape" 
          : artworkId === '5' 
            ? "Deep red velvet textures creating mysterious shadow play" 
            : "A stunning depiction of royal heritage with gold accents",
        fullDescription: "This remarkable piece exemplifies the artist's signature style, combining traditional techniques with contemporary vision. The intricate details reveal themselves upon closer inspection, inviting viewers to immerse themselves in the rich narrative woven through color and form. Created during a pivotal moment in the artist's career, this work represents a perfect balance between technical mastery and emotional depth.",
        year: "2023",
        medium: "Oil on canvas",
        dimensions: "120cm × 80cm",
        price: 12000,
        imageUrl: `https://source.unsplash.com/random/800x600?art,${artworkId === '2' ? 'painting,red' : artworkId === '5' ? 'red,velvet' : 'painting,royal'},${artworkId}`
      };
      
      setTimeout(() => {
        setArtwork(mockArtwork);
        setIsLoading(false);
      }, 800);
    };

    fetchArtwork();
  }, [artworkId]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="w-16 h-16 border-4 border-t-red-500 border-r-gold border-b-red-500 border-l-gold rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-serif animate-pulse">Loading masterpiece...</p>
        </div>
      </Layout>
    );
  }

  if (!artwork) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl">Artwork not found</h1>
          <Link to="/gallery">
            <Button variant="outline" className="mt-4">
              <ChevronLeft className="mr-2 h-4 w-4" /> Return to Gallery
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-16"
      >
        <Link to="/gallery">
          <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-red-500 transition-colors">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Gallery
          </Button>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Artwork Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg shadow-black/10"
          >
            <div className={`relative h-full w-full overflow-hidden ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                 onClick={() => setIsZoomed(!isZoomed)}>
              <motion.img 
                src={artwork.imageUrl}
                alt={artwork.title}
                className="h-full w-full object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: isZoomed ? 1.5 : 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <Button 
              size="sm" 
              variant="outline" 
              className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <ZoomIn className="h-4 w-4 mr-1" /> {isZoomed ? 'Reset' : 'Zoom'}
            </Button>

            {/* Red corner accent */}
            <div className="absolute top-0 left-0 border-t-[80px] border-l-[80px] border-t-red-500 border-l-transparent -z-10 opacity-70"></div>
            <div className="absolute bottom-0 right-0 border-b-[80px] border-r-[80px] border-b-gold border-r-transparent -z-10 opacity-70"></div>
          </motion.div>
          
          {/* Artwork Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center mb-2">
              <div className="h-0.5 w-12 bg-red-500 mr-4"></div>
              <p className="text-red-500 font-medium tracking-wider text-sm">{artwork.medium}</p>
            </div>
            
            <h1 className="text-4xl font-serif mb-2">{artwork.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">by {artwork.artist}, {artwork.year}</p>
            
            <div className="w-full h-px bg-gradient-to-r from-red-500 via-gold to-transparent mb-8"></div>
            
            <div className="prose max-w-none mb-8">
              <p className="text-lg mb-6">{artwork.description}</p>
              <p>{artwork.fullDescription}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Dimensions</h3>
                <p>{artwork.dimensions}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Medium</h3>
                <p>{artwork.medium}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Creation Year</h3>
                <p>{artwork.year}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Authentication</h3>
                <p>Certificate of Authenticity</p>
              </div>
            </div>
            
            {artwork.price && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Price</h3>
                <p className="text-3xl font-serif">${artwork.price.toLocaleString()}</p>
              </motion.div>
            )}
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Inquire About This Piece
              </Button>
              <Button variant="outline" className="border-gold hover:bg-gold/10">
                <Heart className="mr-2 h-4 w-4" /> Add to Favorites
              </Button>
              <Button variant="ghost">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ArtworkDetail;
