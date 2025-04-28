
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import ProductViewer3D from '@/components/3D/ProductViewer3D';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PRODUCTS = {
  'royal-vase': {
    id: 'royal-vase',
    title: 'Royal Gold-Trimmed Vase',
    artist: 'Alexandra Chen',
    price: 3200,
    rating: 4.8,
    reviews: 24,
    description: 'This exquisite vase represents the pinnacle of contemporary ceramic artistry. Hand-crafted with meticulous attention to detail, the delicate gold trim highlights the sweeping curves of this masterpiece. The rich mahogany glaze provides the perfect backdrop for the intricate detailing, creating a striking juxtaposition of color and texture.',
    details: [
      'Height: 45 cm',
      'Width: 25 cm',
      'Materials: Porcelain, 24k gold trim',
      'Created: 2023',
      'Certificate of authenticity included',
    ],
    colors: [
      { name: 'Mahogany', value: '#8A5E3C', hex: '#8A5E3C' },
      { name: 'Cobalt Blue', value: '#1E4D8C', hex: '#1E4D8C' },
      { name: 'Emerald Green', value: '#046307', hex: '#046307' },
    ],
    availableStock: 3
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const product = PRODUCTS[productId as string] || PRODUCTS['royal-vase'];
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const productRef = useRef(null);
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-animate",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
      );
    }, productRef);
    
    return () => ctx.revert();
  }, [product]);
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.title} (${selectedColor.name}) has been added to your cart.`,
      duration: 3000,
    });
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  
  const incrementQuantity = () => {
    if (quantity < product.availableStock) setQuantity(quantity + 1);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12" ref={productRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="h-[500px] md:h-[700px] bg-cream rounded-lg overflow-hidden shadow-lg">
            <ProductViewer3D 
              productTitle={product.title} 
              productId={product.id}
              color={selectedColor.value} 
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <motion.div 
              className="product-animate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h1 className="text-3xl md:text-4xl font-serif mb-2">{product.title}</h1>
              <p className="text-lg text-gray-600 mb-4">By {product.artist}</p>
            </motion.div>
            
            <motion.div 
              className="flex items-center mb-6 product-animate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-gray-300"} 
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </motion.div>
            
            <motion.div 
              className="text-3xl font-serif mb-6 product-animate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ${product.price.toLocaleString()}
            </motion.div>
            
            <motion.p 
              className="text-gray-700 mb-8 product-animate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {product.description}
            </motion.p>
            
            <motion.div 
              className="mb-6 product-animate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="font-medium mb-3">Details:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-gray-700">{detail}</li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="mb-8 product-animate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="font-medium mb-3">Color:</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-8 h-8 rounded-full focus:outline-none ${
                      selectedColor.name === color.name 
                        ? 'ring-2 ring-offset-2 ring-gold' 
                        : ''
                    }`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color.name} color`}
                  ></button>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-6 mb-8 product-animate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div>
                <h3 className="font-medium mb-3">Quantity:</h3>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    className="px-3 py-1 text-lg"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-x border-gray-300">
                    {quantity}
                  </span>
                  <button
                    className="px-3 py-1 text-lg"
                    onClick={incrementQuantity}
                    disabled={quantity >= product.availableStock}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  {product.availableStock} available
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 product-animate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Button 
                className="bg-royal hover:bg-royal-dark text-white px-8 py-6 text-lg flex items-center"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2" size={20} />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                className="border-royal text-royal hover:bg-royal hover:text-white px-8 py-6 text-lg"
              >
                Request More Info
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
