
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';

const About = () => {
  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-serif mb-12 text-center"
          >
            About SS Digital
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img 
                src="https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Gallery Interior" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg">
                Founded in 2020, SS Digital has become a premier destination for art enthusiasts 
                and collectors seeking extraordinary pieces that transcend time and tradition.
              </p>
              <p className="text-lg">
                Our curated collection features works from both emerging artists and established masters, 
                creating a dynamic space where traditional craftsmanship meets contemporary vision.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default About;
