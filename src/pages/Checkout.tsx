
import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import { useCart } from '@/context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, CreditCard, MapPin, Truck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type CheckoutStep = 'shipping' | 'payment' | 'review';

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiryDate: '',
    cvv: '',
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-serif mb-6">Your Cart is Empty</h1>
          <p className="mb-8">You don't have any items in your cart to checkout.</p>
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('review');
  };

  const handleOrderSubmit = () => {
    // Simulate order processing
    toast({
      title: "Order Placed Successfully!",
      description: "Your order has been confirmed and will be shipped soon.",
    });
    
    // Clear the cart and redirect to confirmation page
    clearCart();
    navigate('/order-confirmation');
  };

  const renderStepIndicator = () => {
    const steps = [
      { id: 'shipping', label: 'Shipping', icon: <MapPin className="h-5 w-5" /> },
      { id: 'payment', label: 'Payment', icon: <CreditCard className="h-5 w-5" /> },
      { id: 'review', label: 'Review', icon: <Truck className="h-5 w-5" /> }
    ];
    
    return (
      <div className="flex justify-center mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className={`flex flex-col items-center ${currentStep === step.id ? 'text-gold' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep === step.id ? 'bg-gold text-white' : 'bg-gray-200 text-gray-600'}`}>
                {step.icon}
              </div>
              <span className="mt-2 text-sm">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="w-24 h-1 mx-2 bg-gray-200 my-auto">
                {currentStep !== 'shipping' && index === 0 && (
                  <div className="h-full bg-gold" style={{ width: '100%' }}></div>
                )}
                {currentStep === 'review' && index === 1 && (
                  <div className="h-full bg-gold" style={{ width: '100%' }}></div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderShippingForm = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-2xl font-serif mb-6">Shipping Information</h2>
      <form onSubmit={handleShippingSubmit} className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={shippingDetails.fullName}
            onChange={(e) => setShippingDetails({...shippingDetails, fullName: e.target.value})}
            required
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            value={shippingDetails.address}
            onChange={(e) => setShippingDetails({...shippingDetails, address: e.target.value})}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={shippingDetails.city}
              onChange={(e) => setShippingDetails({...shippingDetails, city: e.target.value})}
              required
            />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              value={shippingDetails.state}
              onChange={(e) => setShippingDetails({...shippingDetails, state: e.target.value})}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input
              id="zipCode"
              value={shippingDetails.zipCode}
              onChange={(e) => setShippingDetails({...shippingDetails, zipCode: e.target.value})}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={shippingDetails.phone}
              onChange={(e) => setShippingDetails({...shippingDetails, phone: e.target.value})}
              required
            />
          </div>
        </div>
        <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white">
          Continue to Payment <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </motion.div>
  );

  const renderPaymentForm = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-2xl font-serif mb-6">Payment Information</h2>
      <form onSubmit={handlePaymentSubmit} className="space-y-4">
        <div>
          <Label htmlFor="nameOnCard">Name on Card</Label>
          <Input
            id="nameOnCard"
            value={paymentDetails.nameOnCard}
            onChange={(e) => setPaymentDetails({...paymentDetails, nameOnCard: e.target.value})}
            required
          />
        </div>
        <div>
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            id="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value})}
            placeholder="XXXX XXXX XXXX XXXX"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input
              id="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={(e) => setPaymentDetails({...paymentDetails, expiryDate: e.target.value})}
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              value={paymentDetails.cvv}
              onChange={(e) => setPaymentDetails({...paymentDetails, cvv: e.target.value})}
              placeholder="XXX"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4 pt-4">
          <Button 
            type="button" 
            variant="outline"
            onClick={() => setCurrentStep('shipping')}
          >
            Back
          </Button>
          <Button type="submit" className="flex-1 bg-gold hover:bg-gold-dark text-white">
            Review Order <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </motion.div>
  );

  const renderOrderReview = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-2xl font-serif mb-6">Review Your Order</h2>
      
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-2">Shipping Address</h3>
        <div className="text-gray-600">
          <p>{shippingDetails.fullName}</p>
          <p>{shippingDetails.address}</p>
          <p>{shippingDetails.city}, {shippingDetails.state} {shippingDetails.zipCode}</p>
          <p>Phone: {shippingDetails.phone}</p>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-2">Payment Method</h3>
        <div className="flex items-center text-gray-600">
          <CreditCard className="h-5 w-5 mr-2" />
          <span>Card ending in {paymentDetails.cardNumber.slice(-4)}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-2">Order Summary</h3>
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.product.id} className="flex justify-between">
              <div>
                <span className="font-medium">{item.quantity} x </span>
                <span>{item.product.title}</span>
              </div>
              <span>${(item.product.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
          <div className="border-t pt-2 mt-2 font-medium flex justify-between">
            <span>Total</span>
            <span>${getCartTotal().toLocaleString()}</span>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-4 pt-4">
        <Button 
          type="button" 
          variant="outline"
          onClick={() => setCurrentStep('payment')}
        >
          Back
        </Button>
        <Button 
          type="button" 
          className="flex-1 bg-gold hover:bg-gold-dark text-white"
          onClick={handleOrderSubmit}
        >
          Place Order
        </Button>
      </div>
    </motion.div>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif mb-8 text-center"
        >
          Checkout
        </motion.h1>

        {renderStepIndicator()}
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {currentStep === 'shipping' && renderShippingForm()}
            {currentStep === 'payment' && renderPaymentForm()}
            {currentStep === 'review' && renderOrderReview()}
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow sticky top-24">
              <h3 className="text-xl font-serif mb-4">Order Summary</h3>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <div className="flex">
                      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden mr-3">
                        {item.product.images && item.product.images.length > 0 && (
                          <img 
                            src={item.product.images[0].src} 
                            alt={item.product.images[0].alt}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{item.product.title}</p>
                        <p className="text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span>${(item.product.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between font-medium text-lg mt-4">
                    <span>Total</span>
                    <span>${getCartTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
