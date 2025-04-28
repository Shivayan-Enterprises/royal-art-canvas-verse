
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <section 
        ref={heroRef} 
        className="relative h-screen flex items-center bg-cream-dark overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl" ref={textRef}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4">
              Experience Art in a New Dimension
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover masterpieces from renowned artists with immersive 3D viewing technology
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-gold hover:bg-gold-light text-white text-lg px-6 py-6"
                asChild
              >
                <Link to="/gallery">
                  Explore Gallery <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 text-lg px-6 py-6"
                asChild
              >
                <Link to="/exhibitions">
                  Current Exhibitions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Featured Collections</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Renaissance Masters",
                image: "https://images.unsplash.com/photo-1577083552678-be2245332683?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Classic artworks from the Renaissance period",
                price: "$5,000+"
              },
              {
                title: "Modern Sculptures",
                image: "https://images.unsplash.com/photo-1576773689115-5cd2b0223523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Contemporary sculptural masterpieces",
                price: "$2,500+"
              },
              {
                title: "Abstract Expressions",
                image: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Bold expressions of color and form",
                price: "$3,200+"
              }
            ].map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/collections/${collection.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="overflow-hidden rounded-lg shadow-md bg-white">
                    <div className="h-80 overflow-hidden">
                      <img 
                        src={collection.image} 
                        alt={collection.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-serif mb-2">{collection.title}</h3>
                      <p className="text-gray-600 mb-3">{collection.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-royal font-medium">{collection.price}</span>
                        <span className="text-gold group-hover:translate-x-1 transform transition-transform">
                          View Collection →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-royal text-royal hover:bg-royal hover:text-white"
              asChild
            >
              <Link to="/collections">View All Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Experience Art in 3D</h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="text-lg mb-6">
                Our revolutionary 3D viewing technology allows you to examine every detail of each masterpiece.
                Rotate, zoom, and explore our curated collection from all angles - bringing the gallery 
                experience directly to your home.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Examine intricate details with precision zoom",
                  "View sculptures from every angle with 360° rotation",
                  "Experience true-to-life colors and textures",
                  "Save favorite viewing angles and details"
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-gold mr-2">✓</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Button 
                className="bg-royal hover:bg-royal-dark text-white"
                asChild
              >
                <Link to="/products/royal-vase">
                  Try 3D Viewer <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-square bg-cream rounded-lg shadow-xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1577083552761-569295861fff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="3D Art Viewing Experience" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-royal text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Our Art Community</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive previews, exhibition announcements,
              and insights from our curators.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Button className="bg-gold hover:bg-gold-light text-white">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
