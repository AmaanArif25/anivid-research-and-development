
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface PostProps {
  post: {
    title: string;
    category: string;
    date: string;
    excerpt: string;
    img: string;
  };
  index: number;
}

const ParallaxPost: React.FC<PostProps> = ({ post, index }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect: image moves slightly slower/faster than the scroll
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.article 
      ref={containerRef}
      style={{ opacity }}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 lg:gap-24 items-center mb-32 md:mb-48`}
    >
      {/* Image Container with Parallax */}
      <div className="w-full md:w-1/2 relative aspect-[16/10] overflow-hidden rounded-sm shadow-2xl bg-slate-100 group">
        <motion.div 
          style={{ y, scale }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={post.img} 
            alt={post.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out" 
          />
        </motion.div>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-700" />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
        <motion.div 
          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-blue-700 text-[9px] font-bold uppercase tracking-[0.4em]">{post.category}</span>
            <span className="w-8 h-px bg-slate-200" />
            <span className="text-slate-400 text-[10px] uppercase tracking-widest">{post.date}</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-serif text-slate-800 leading-tight mb-6 hover:text-blue-700 transition-colors duration-500 cursor-pointer italic">
            {post.title}
          </h2>
          
          <p className="text-slate-500 font-light leading-relaxed text-base md:text-lg max-w-xl">
            {post.excerpt}
          </p>
          
          <div className="pt-8">
            <button className="group relative text-[10px] font-bold uppercase tracking-[0.4em] text-slate-900 pb-2">
              <span className="relative z-10">Read Publication</span>
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-900 origin-left"
                initial={{ scaleX: 0.2 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

const Blog: React.FC = () => {
  const posts = [
    {
      title: "The Future of Paper Biosensors in Rural Healthcare",
      category: "Innovation",
      date: "May 12, 2024",
      excerpt: "Exploring how affordable paper-based diagnostics can reach the last mile in healthcare delivery, empowering frontline workers with instant molecular insights.",
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Quantum Thoughts™: Bridging Chemistry and AI",
      category: "Research",
      date: "April 28, 2024",
      excerpt: "A deep dive into how neural networks are revolutionizing colorimetric signal interpretation, turning simple color shifts into high-fidelity medical data.",
      img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Sustainable Diagnostic Platforms",
      category: "Environmental",
      date: "March 15, 2024",
      excerpt: "Reducing medical waste through biodegradable, low-infrastructure sensing technologies designed for the circular economy of modern medicine.",
      img: "https://images.unsplash.com/photo-1532187875605-2fe358a3d4d2?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="w-full bg-white selection:bg-blue-50">
      {/* Dynamic Header */}
      <section className="relative pt-32 pb-20 px-8 md:px-24 overflow-hidden">
        {/* Subtle background text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif font-black pointer-events-none select-none whitespace-nowrap"
        >
          INSIGHTS
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-16 h-16 md:w-20 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-blue-700 shadow-lg">
                <img src="/logo/QUANTUM THOUGHTS.png" alt="Quantum Thoughts" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 italic tracking-tight">Quantum Thoughts<span className="text-lg md:text-xl lg:text-2xl font-sans font-medium ml-1 md:ml-2 text-slate-400 select-none" title="Trademarked">™</span></h1>
            </div>
            <div className="h-px w-24 bg-blue-700 mx-auto mb-8 opacity-40" />
            <p className="text-slate-400 uppercase tracking-[0.5em] text-[10px] font-bold">Scientific Publication & Insights</p>
          </motion.div>
        </div>
      </section>

      {/* Parallax Posts List */}
      <section className="px-8 md:px-24 max-w-7xl mx-auto py-20">
        <div className="flex flex-col">
          {posts.map((post, idx) => (
            <ParallaxPost key={idx} post={post} index={idx} />
          ))}
        </div>
      </section>

      {/* CTA Footer for Blog */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif text-slate-800 mb-8 italic leading-snug">
              Subscribe to our research digest for the latest in biotechnology and diagnostics.
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Institutional Email" 
                className="px-6 py-4 bg-white border border-slate-200 focus:outline-none focus:border-blue-700 font-serif italic text-lg sm:w-80"
              />
              <button className="bg-slate-900 text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-700 transition-all">
                Join Network
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
