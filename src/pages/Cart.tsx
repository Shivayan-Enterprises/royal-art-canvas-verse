
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-8 text-center">Shopping Cart</h1>
          
          {items.length > 0 ? (
            <div className="space-y-8">
              {items.map((item) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-4 p-4 bg-cream/50 rounded-lg"
                >
                  <div className="w-24 h-24 overflow-hidden rounded">
                    {item.product.images && item.product.images.length > 0 ? (
                      <img
                        src={item.product.images[0].src}
                        alt={item.product.images[0].alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif">
                      <Link to={`/products/${item.product.id}`} className="hover:text-gold transition-colors">
                        {item.product.title}
                      </Link>
                    </h3>
                    <p className="text-gold-dark">${item.product.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="font-medium text-lg hidden md:block">
                    ${(item.product.price * item.quantity).toLocaleString()}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
              
              <div className="mt-8 p-6 bg-cream/30 rounded-lg">
                <div className="flex justify-between text-xl mb-2">
                  <span>Subtotal:</span>
                  <span className="font-semibold">${getCartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-gray-300 pt-4 mb-6">
                  <div className="flex justify-between text-2xl">
                    <span>Total:</span>
                    <span className="font-semibold">${getCartTotal().toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="sm:flex-1 bg-gold hover:bg-gold-dark text-white">
                    <Link to="/checkout">
                      Proceed to Checkout
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="sm:flex-1"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h2 className="text-2xl font-serif mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Add some masterpieces to your cart</p>
              <Button asChild className="bg-gold hover:bg-gold-dark text-white">
                <Link to="/products">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Cart;
