
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-serif mb-8 text-center"
          >
            Contact Us
          </motion.h1>
          
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <Input placeholder="Your Name" className="w-full" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" className="w-full" />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="w-full h-32" />
            </div>
            <Button className="w-full bg-gold hover:bg-gold-light">
              Send Message
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Contact;
