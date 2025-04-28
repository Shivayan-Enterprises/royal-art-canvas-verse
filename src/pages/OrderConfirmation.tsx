
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Package, Truck } from 'lucide-react';

const OrderConfirmation = () => {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto bg-cream/30 p-8 rounded-lg shadow-lg"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">Thank you for your purchase</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 mb-8">
            <div className="flex justify-between mb-4">
              <span className="text-gray-500">Order Number</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-500">Date</span>
              <span>{orderDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Status</span>
              <span className="text-green-600 font-medium">Confirmed</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-serif mb-4">Tracking Information</h2>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              <div className="flex mb-6 relative">
                <div className="w-6 h-6 rounded-full bg-gold z-10 mt-0.5"></div>
                <div className="ml-6">
                  <h3 className="font-medium">Order Placed</h3>
                  <p className="text-gray-600 text-sm">Your order has been confirmed</p>
                  <p className="text-gray-400 text-xs">{orderDate}</p>
                </div>
              </div>
              
              <div className="flex mb-6 relative">
                <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-200 z-10 mt-0.5"></div>
                <div className="ml-6">
                  <h3 className="font-medium">Processing</h3>
                  <p className="text-gray-600 text-sm">Your order is being prepared</p>
                </div>
              </div>
              
              <div className="flex relative">
                <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-200 z-10 mt-0.5"></div>
                <div className="ml-6">
                  <h3 className="font-medium">Shipping</h3>
                  <p className="text-gray-600 text-sm">Your order will be on its way soon</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-royal hover:bg-royal-dark text-white">
              <Link to="/order-tracking">
                <Package className="mr-2 h-4 w-4" />
                Track Order
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/products">
                <Truck className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
