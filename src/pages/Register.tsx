
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Register = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center">Create Account</h1>
          
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 bg-cream/30 p-8 rounded-lg"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="bg-white/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-white/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password"
                type="password"
                placeholder="Create a password"
                className="bg-white/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input 
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="bg-white/50"
              />
            </div>
            
            <Button className="w-full bg-gold hover:bg-gold-dark text-white">
              Create Account
            </Button>
            
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-gold hover:text-gold-dark">
                Sign in
              </a>
            </p>
          </motion.form>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Register;
