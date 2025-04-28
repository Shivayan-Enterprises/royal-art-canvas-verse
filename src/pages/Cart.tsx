
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart, X } from 'lucide-react';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Royal Gold-Trimmed Vase',
      price: 3200,
      quantity: 1,
      image: '/path-to-image.jpg'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-8 text-center">Shopping Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="space-y-8">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-4 p-4 bg-cream/50 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-serif">{item.name}</h3>
                    <p className="text-gold-dark">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
              
              <div className="mt-8 p-6 bg-cream/30 rounded-lg">
                <div className="flex justify-between text-xl mb-4">
                  <span>Total:</span>
                  <span className="font-semibold">${3200}</span>
                </div>
                <Button className="w-full bg-gold hover:bg-gold-dark text-white">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h2 className="text-2xl font-serif mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Add some masterpieces to your cart</p>
              <Button className="bg-gold hover:bg-gold-dark text-white">
                Continue Shopping
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Cart;
