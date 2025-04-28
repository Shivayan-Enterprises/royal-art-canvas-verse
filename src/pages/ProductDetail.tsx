
import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import ProductViewer3D from '@/components/3D/ProductViewer3D';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, ChevronRight, Truck, Package, Shield, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = getProductById(productId || '') || {
    id: 'royal-vase',
    title: 'Royal Gold-Trimmed Vase',
    artist: 'Alexandra Chen',
    price: 3200,
    rating: 4.8,
    reviews: [
      {
        id: "rev1",
        userName: "Art Collector",
        rating: 5,
        comment: "Absolutely stunning craftsmanship. This vase is the centerpiece of my living room.",
        date: "2023-11-15"
      }
    ],
    description: 'This exquisite vase represents the pinnacle of contemporary ceramic artistry. Hand-crafted with meticulous attention to detail, the delicate gold trim highlights the sweeping curves of this masterpiece.',
    details: [
      'Height: 45 cm',
      'Width: 25 cm',
      'Materials: Porcelain, 24k gold trim',
      'Created: 2023',
      'Certificate of authenticity included',
    ],
    images: [
      { src: "/assets/products/royal-vase-1.jpg", alt: "Royal Gold-Trimmed Vase - Main View" },
    ],
    features: [
      "Hand-painted by master artisans",
      "Limited edition series",
      "Microwave and dishwasher safe",
      "Includes display stand"
    ],
    materials: ["Porcelain", "24k Gold", "Premium Glaze"],
    dimensions: "45cm x 25cm x 25cm",
    inStock: 3,
    category: "Ceramics",
    tags: ["Vase", "Gold", "Luxury", "Home Decor"],
  };
  
  const [selectedColor, setSelectedColor] = useState({ name: 'Mahogany', value: '#8A5E3C', hex: '#8A5E3C' });
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const productRef = useRef(null);
  const { toast } = useToast();
  const { addToCart } = useCart();
  
  const relatedProducts = getRelatedProducts(product.id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);
  
  useEffect(() => {
    // Reset state when product changes
    setQuantity(1);
    setActiveImageIndex(0);
    setShowMore(false);
  }, [productId]);
  
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
    addToCart(product, quantity);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  
  const incrementQuantity = () => {
    if (quantity < product.inStock) setQuantity(quantity + 1);
  };
  
  const colors = [
    { name: 'Mahogany', value: '#8A5E3C', hex: '#8A5E3C' },
    { name: 'Cobalt Blue', value: '#1E4D8C', hex: '#1E4D8C' },
    { name: 'Emerald Green', value: '#046307', hex: '#046307' },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12" ref={productRef}>
        <div className="flex items-center text-sm mb-6 text-gray-500">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/products" className="hover:text-gold transition-colors">Products</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-700">{product.title}</span>
        </div>
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            {product.images && product.images.length > 0 ? (
              <div>
                <div className="h-[500px] md:h-[600px] bg-cream rounded-lg overflow-hidden shadow-lg mb-4">
                  {activeImageIndex === 0 && product.id ? (
                    <ProductViewer3D 
                      productTitle={product.title} 
                      productId={product.id}
                      color={selectedColor.value} 
                    />
                  ) : (
                    <img 
                      src={product.images[activeImageIndex].src}
                      alt={product.images[activeImageIndex].alt}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                
                {product.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`w-20 h-20 border-2 rounded overflow-hidden flex-shrink-0 ${
                          activeImageIndex === index ? 'border-gold' : 'border-gray-200'
                        }`}
                      >
                        <img 
                          src={image.src}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                    
                    {/* 3D view thumbnail */}
                    <button
                      onClick={() => setActiveImageIndex(0)}
                      className={`w-20 h-20 border-2 rounded overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center ${
                        activeImageIndex === 0 ? 'border-gold' : 'border-gray-200'
                      }`}
                    >
                      <span className="text-xs font-medium">3D View</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-[500px] md:h-[600px] bg-cream rounded-lg overflow-hidden shadow-lg">
                <ProductViewer3D 
                  productTitle={product.title} 
                  productId={product.id}
                  color={selectedColor.value} 
                />
              </div>
            )}
          </div>
          
          <div className="flex flex-col justify-center">
            <motion.div 
              className="product-animate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex items-center mb-2">
                <span className="bg-gold/20 text-gold text-xs px-2 py-0.5 rounded">
                  {product.category}
                </span>
                {product.inStock <= 3 && product.inStock > 0 && (
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded ml-2">
                    Only {product.inStock} left
                  </span>
                )}
              </div>
              
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
                {product.rating} ({product.reviews.length} reviews)
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
              className="text-gray-700 mb-8 product-animate line-clamp-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {product.description}
            </motion.p>
            
            <motion.div 
              className="mb-8 product-animate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="font-medium mb-3">Colors:</h3>
              <div className="flex space-x-3">
                {colors.map((color) => (
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
                    disabled={quantity >= product.inStock}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  {product.inStock} available
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8 product-animate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Button 
                className="bg-gold hover:bg-gold-dark text-white px-8 py-6 text-lg flex items-center flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2" size={20} />
                Add to Cart
              </Button>
              
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-6 text-lg"
              >
                <Heart className="mr-2" size={20} />
                Save
              </Button>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-3 gap-4 mb-8 product-animate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex flex-col items-center p-3 bg-cream/20 rounded-lg text-center">
                <Truck className="h-6 w-6 mb-2 text-gold" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-cream/20 rounded-lg text-center">
                <Package className="h-6 w-6 mb-2 text-gold" />
                <span className="text-sm">Secure Packaging</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-cream/20 rounded-lg text-center">
                <Shield className="h-6 w-6 mb-2 text-gold" />
                <span className="text-sm">30-Day Guarantee</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full grid grid-cols-4 mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="bg-cream/10 p-6 rounded-lg">
              <h2 className="text-2xl font-serif mb-4">Product Description</h2>
              <p className="mb-4">{product.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="font-medium text-lg mb-3">Materials</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {product.materials?.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-3">Features</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {product.features?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="details" className="bg-cream/10 p-6 rounded-lg">
              <h2 className="text-2xl font-serif mb-4">Product Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="border-b pb-2 flex justify-between">
                  <span className="font-medium">Dimensions</span>
                  <span className="text-gray-600">{product.dimensions}</span>
                </div>
                {product.details?.map((detail, index) => {
                  const parts = detail.split(': ');
                  return (
                    <div key={index} className="border-b pb-2 flex justify-between">
                      <span className="font-medium">{parts[0]}</span>
                      <span className="text-gray-600">{parts[1] || parts[0]}</span>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="bg-cream/10 p-6 rounded-lg">
              <h2 className="text-2xl font-serif mb-4">Shipping Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg mb-1">Delivery</h3>
                  <p className="text-gray-700">Free standard shipping on all orders. Premium shipping options available at checkout.</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 text-sm">
                    <li>Standard Shipping: 5-7 business days</li>
                    <li>Express Shipping: 2-3 business days</li>
                    <li>Premium Shipping: 1-2 business days</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-1">Returns</h3>
                  <p className="text-gray-700">We offer a 30-day return policy for all unused and unopened items.</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 text-sm">
                    <li>Returns must be initiated within 30 days of delivery</li>
                    <li>Items must be in original condition and packaging</li>
                    <li>Return shipping cost is the customer's responsibility</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-1">Art Handling</h3>
                  <p className="text-gray-700">All artwork is professionally packaged to ensure safe delivery. Our team of art handlers takes extra precautions when packaging and shipping valuable pieces.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="bg-cream/10 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif">Customer Reviews</h2>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} out of 5
                  </span>
                </div>
              </div>
              
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{review.userName}</h3>
                      <span className="text-gray-500 text-sm">{review.date}</span>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(review.rating) ? "text-gold fill-gold" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="bg-royal hover:bg-royal-dark text-white">
                  Write a Review
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-serif mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <Link to={`/products/${related.id}`} className="block h-48 overflow-hidden">
                    {related.images && related.images.length > 0 ? (
                      <img
                        src={related.images[0].src}
                        alt={related.images[0].alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        No Image
                      </div>
                    )}
                  </Link>
                  
                  <div className="p-4">
                    <Link to={`/products/${related.id}`} className="block">
                      <h3 className="font-serif hover:text-gold transition-colors">{related.title}</h3>
                    </Link>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-lg font-medium">${related.price.toLocaleString()}</span>
                      <Button 
                        size="sm" 
                        className="bg-gold hover:bg-gold-dark text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(related, 1);
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
