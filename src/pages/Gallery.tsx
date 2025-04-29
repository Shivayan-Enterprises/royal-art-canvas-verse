
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, GalleryHorizontal } from 'lucide-react';
import { useState } from 'react';

const Gallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Gallery artworks data
  const artworks = [
    {
      id: 1,
      title: "Royal Heritage",
      artist: "Elizabeth Gardener",
      description: "A stunning depiction of royal heritage with gold accents",
      imageUrl: "https://source.unsplash.com/random/800x600?art,painting,royal,1"
    },
    {
      id: 2,
      title: "Crimson Dreams",
      artist: "Marcus Reynolds",
      description: "Bold strokes of crimson and gold create a dramatic landscape",
      imageUrl: "https://source.unsplash.com/random/800x600?art,painting,red,2"
    },
    {
      id: 3,
      title: "Renaissance Revival",
      artist: "Sophia Laurent",
      description: "A modern take on renaissance techniques with vibrant colors",
      imageUrl: "https://source.unsplash.com/random/800x600?art,renaissance,3"
    },
    {
      id: 4,
      title: "Golden Hour",
      artist: "Alexander Blake",
      description: "Capturing the ethereal beauty of light during the golden hour",
      imageUrl: "https://source.unsplash.com/random/800x600?art,gold,sunset,4"
    },
    {
      id: 5,
      title: "Velvet Shadows",
      artist: "Victoria Hemsworth",
      description: "Deep red velvet textures creating mysterious shadow play",
      imageUrl: "https://source.unsplash.com/random/800x600?art,red,velvet,5"
    },
    {
      id: 6,
      title: "Imperial Majesty",
      artist: "Richard Thornhill",
      description: "A majestic portrayal of imperial grandeur and elegance",
      imageUrl: "https://source.unsplash.com/random/800x600?art,imperial,6"
    }
  ];
  
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.5 }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-40 left-0 w-64 h-64 rounded-full bg-red-500/10 blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl -z-10"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="container mx-auto px-4 py-16"
        >
          <div className="flex items-center mb-4">
            <GalleryHorizontal className="text-red-500 mr-2" />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 font-medium tracking-wider"
            >
              EXPLORE OUR COLLECTION
            </motion.p>
          </div>
          
          <motion.h1 
            variants={titleVariants}
            className="text-4xl md:text-6xl font-serif mb-6 relative inline-block"
          >
            Gallery Collection
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-1 bg-gold absolute bottom-0 left-0"
            />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-12 text-muted-foreground max-w-2xl"
          >
            Discover our exquisite collection of fine art pieces, showcasing the perfect blend of traditional craftsmanship and contemporary vision.
            Each piece tells a unique story of artistic excellence and royal heritage.
          </motion.p>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredItem(artwork.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="group relative overflow-hidden rounded-lg"
              >
                <Link to={`/artwork/${artwork.id}`}>
                  <div className="relative overflow-hidden rounded-lg h-[400px]">
                    <motion.img 
                      src={artwork.imageUrl}
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: hoveredItem === artwork.id ? 1.1 : 1,
                        filter: hoveredItem === artwork.id ? 'brightness(0.8)' : 'brightness(1)'
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end"
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: hoveredItem === artwork.id ? 1 : 0.4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3 
                        className="text-white text-2xl font-serif mb-1"
                        initial={{ y: 20, opacity: 0.8 }}
                        animate={{ 
                          y: hoveredItem === artwork.id ? 0 : 20,
                          opacity: hoveredItem === artwork.id ? 1 : 0.8
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {artwork.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-white/80 mb-3"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: hoveredItem === artwork.id ? 0 : 20,
                          opacity: hoveredItem === artwork.id ? 1 : 0
                        }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        {artwork.artist}
                      </motion.p>
                      
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ 
                          y: hoveredItem === artwork.id ? 0 : 30,
                          opacity: hoveredItem === artwork.id ? 1 : 0
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Button 
                          variant="outline" 
                          className="bg-transparent border border-white/50 text-white hover:bg-red-500/20 hover:border-red-500 transition-all group-hover:translate-y-0"
                        >
                          View Details <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </Link>
                
                {/* Decorative red accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-red-500"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredItem === artwork.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white border-none"
              size="lg"
            >
              Explore All Artworks
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Gallery;
