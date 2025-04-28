
import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();
  
  // Extract unique categories from products
  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.artist.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif mb-8 text-center"
        >
          Our Collection
        </motion.h1>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-cream/20 p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-serif mb-4">Filter Collection</h2>
              
              <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium mb-2">Search</label>
                <div className="relative">
                  <Input
                    id="search"
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="h-4 w-4 text-gold focus:ring-gold"
                      />
                      <span className="ml-2 capitalize">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={selectedCategory === 'all' ? 'bg-gold/10' : ''}
                    onClick={() => setSelectedCategory('all')}
                  >
                    All Prices
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <Link to={`/products/${product.id}`} className="block">
                    <div className="h-64 overflow-hidden">
                      {product.images && product.images.length > 0 && (
                        <img 
                          src={product.images[0].src}
                          alt={product.images[0].alt}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                      )}
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <Link to={`/products/${product.id}`} className="block">
                      <h3 className="text-lg font-serif mb-1 hover:text-gold transition-colors">{product.title}</h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-2">By {product.artist}</p>
                    
                    <div className="flex items-center mb-2">
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
                    
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">${product.price.toLocaleString()}</span>
                      <Button 
                        size="sm" 
                        className="bg-gold hover:bg-gold-dark text-white"
                        onClick={() => addToCart(product, 1)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" /> Add
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <h3 className="text-xl font-serif mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                <Button 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                >
                  Reset Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
