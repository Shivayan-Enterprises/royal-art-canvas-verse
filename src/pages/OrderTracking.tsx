
import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Package, Search, Truck } from 'lucide-react';

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNumber.trim()) {
      setIsTracking(true);
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif mb-8 text-center"
        >
          Track Your Order
        </motion.h1>
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-cream/30 p-8 rounded-lg shadow-lg mb-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="orderNumber">Order Number</Label>
                <div className="flex gap-2">
                  <Input
                    id="orderNumber"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="Enter your order number (e.g., ORD-123456)"
                    required
                    className="flex-1"
                  />
                  <Button type="submit" className="bg-gold hover:bg-gold-dark text-white">
                    <Search className="h-4 w-4 mr-2" /> Track
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
          
          {isTracking && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-serif">Order {orderNumber}</h2>
                  <p className="text-gray-500">Placed on {new Date().toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                    In Progress
                  </span>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Shipping Progress</h3>
                
                <div className="relative pb-12">
                  <div className="absolute left-2.5 top-0 h-full w-0.5 bg-gray-200"></div>
                  
                  <div className="relative flex items-start mb-8">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gold z-10">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Order Confirmed</h4>
                      <p className="text-gray-500 text-sm">April 28, 2025 - 10:30 AM</p>
                      <p className="text-gray-600 mt-1">Your order has been received and confirmed.</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start mb-8">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gold z-10">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Processing</h4>
                      <p className="text-gray-500 text-sm">April 28, 2025 - 2:45 PM</p>
                      <p className="text-gray-600 mt-1">Your order is being prepared and packaged.</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-gray-300 z-10">
                      <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-600">Shipping</h4>
                      <p className="text-gray-500 text-sm">Expected: April 30, 2025</p>
                      <p className="text-gray-600 mt-1">Your package will be handed to our delivery partner.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-cream/20 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Delivery Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Shipping Method</p>
                    <p className="font-medium">Express Delivery (2-3 business days)</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Tracking Number</p>
                    <p className="font-medium">TRK928374650123</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-500 mb-1">Shipping Address</p>
                    <p className="font-medium">
                      123 Art Gallery Lane, New York, NY 10001, United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button asChild className="bg-royal hover:bg-royal-dark text-white">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Truck className="mr-2 h-4 w-4" />
                    View Detailed Tracking
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OrderTracking;
