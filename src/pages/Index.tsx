import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const { addToCart } = useCart();

  // Add Chhatrapati Shivaji Maharaj frame to featured products (if not already present)
  const shivajiFrame = {
    id: 'shivaji-frame',
    title: 'Chhatrapati Shivaji Maharaj Frame',
    artist: 'Royal Art',
    price: 2499, // Example price
    rating: 4.8,
    reviews: [{}, {}, {}, {}], // Example reviews (4 reviews)
    images: [
      {
        src: 'https://example.com/chhatrapati-shivaji-maharaj-frame.jpg', // Placeholder URL, replace with actual image path
      },
    ],
  };

  // Combine the Shivaji frame with existing featured products
  const updatedFeaturedProducts = [...featuredProducts, shivajiFrame].slice(0, 4); // Limit to 4 products for the grid

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.freepik.com/free-photo/shopping-bag-cart_23-2148879372.jpg?t=st=1746879194~exp=1746882794~hmac=f8f3fa136682c75b05311f54fd860635fced6fca87f3a24d1d6dee55646013e4&w=1380"
            alt="Luxury Art Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              Exquisite Art <span className="text-gold">Masterpieces</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl mb-8"
            >
              Discover unique artworks and luxury decor pieces for your home or collection
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild className="bg-gold hover:bg-gold-dark text-white px-8 py-6 text-lg">
                <Link to="/products">
                  Explore Collection
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-black px-8 py-6 text-lg">
                <Link to="/about">
                  About Our Gallery
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif">Featured Collection</h2>
            <Button asChild variant="ghost" className="text-gold hover:text-gold-dark">
              <Link to="/products" className="flex items-center">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {updatedFeaturedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/products/${product.id}`} className="block h-64 overflow-hidden">
                  {product.images && product.images.length > 0 ? (
                    <img 
                      src={product.images[0].src}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image Available</span>
                    </div>
                  )}
                </Link>
                
                <div className="p-4">
                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-xl font-serif mb-1 hover:text-gold transition-colors">{product.title}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-2">By {product.artist}</p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={i < Math.floor(product.rating) 
                            ? "h-4 w-4 text-gold fill-gold" 
                            : "h-4 w-4 text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviews.length})</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">${product.price.toLocaleString()}</span>
                    <Button 
                      size="sm" 
                      className="bg-gold hover:bg-gold-dark text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product, 1);
                      }}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" /> Add
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Collection Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Browse Our Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative h-80 group cursor-pointer"
            >
              <img 
                src="https://shivajimaharajfoundation.com/wp-content/uploads/2024/09/Chatrapati-shivaji-maharaj-1.jpeg"
                alt="Sculptures"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-white mb-2">Sculptures</h3>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <Link to="/products">View Collection</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative h-80 group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="Paintings"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-white mb-2">Paintings</h3>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <Link to="/products">View Collection</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative h-80 group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="Home Decor"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-white mb-2">Home Decor</h3>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <Link to="/products">View Collection</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-royal text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonials remain commented out as per original code */}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Join Our Collection</h2>
            <p className="mb-6">Subscribe to receive updates about new artwork, exclusive offers, and collection announcements.</p>
            
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Button className="bg-gold hover:bg-gold-dark text-white px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;