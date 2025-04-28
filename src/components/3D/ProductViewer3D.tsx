
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useToast } from '@/components/ui/use-toast';
import SceneWrapper from './SculptureModel';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductViewer3DProps {
  productTitle: string;
  productId: string;
  color?: string;
}

const ProductViewer3D = ({ productTitle, productId, color = "#8A5E3C" }: ProductViewer3DProps) => {
  const [isRotating, setIsRotating] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  const toggleRotation = () => {
    setIsRotating(!isRotating);
    toast({
      title: isRotating ? "Rotation paused" : "Rotation enabled",
      description: isRotating 
        ? "You can now inspect the piece manually" 
        : "The sculpture will rotate automatically",
      duration: 3000,
    });
  };
  
  return (
    <div className="relative w-full h-full">
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="w-12 h-12 border-4 border-t-gold border-royal-light rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg">Loading {productTitle}...</p>
          </motion.div>
        </div>
      )}
      
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 4], fov: 50 }} 
        className="canvas-container"
        onCreated={() => {
          // Simulate loading time for demonstration purposes
          setTimeout(() => setIsLoading(false), 1500);
        }}
      >
        <Suspense fallback={null}>
          <SceneWrapper autoRotate={isRotating} color={color} />
        </Suspense>
      </Canvas>
      
      {/* Controls overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-background/80 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg"
      >
        <Button 
          variant="ghost" 
          size="sm"
          onClick={toggleRotation}
          className="text-royal hover:text-royal-dark"
        >
          {isRotating ? "Stop Rotation" : "Auto Rotate"}
        </Button>
        <div className="w-px bg-border mx-2"></div>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-royal hover:text-royal-dark">
          <ZoomIn size={18} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-royal hover:text-royal-dark">
          <ZoomOut size={18} />
        </Button>
      </motion.div>
    </div>
  );
};

export default ProductViewer3D;
