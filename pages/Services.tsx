
import React, { useEffect, useState, useRef } from 'react';
import { motion, animate, useInView, useScroll, useTransform } from 'framer-motion';

// Interactive Circular Progress Component
const CircularProgress = ({ value, label, color, size = 120 }: { value: number; label: string; color: string; size?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (displayValue / 100) * circumference;

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2.5,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      ease: [0.16, 1, 0.3, 1]
    });
    return () => controls.stop();
  }, [value]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center p-4 md:p-6 group"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size/2}
            cy={size/2}
            r={45}
            stroke="#e2e8f0"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx={size/2}
            cy={size/2}
            r={45}
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-serif text-slate-900 font-bold">
            {displayValue}<span className="text-sm text-slate-400">%</span>
          </span>
        </div>
      </div>
      <div className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-4 text-center">{label}</div>
    </motion.div>
  );
};

// Interactive Bar Chart Component
const BarChart = () => {
  const [visibleBars, setVisibleBars] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setVisibleBars(true);
    }
  }, [isInView]);

  const data = [
    { label: 'Research', value: 85, color: '#1e40af' },
    { label: 'Development', value: 92, color: '#3b82f6' },
    { label: 'Validation', value: 78, color: '#60a5fa' },
    { label: 'Production', value: 88, color: '#93bbfc' },
    { label: 'Market Ready', value: 95, color: '#dbeafe' }
  ];

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm"
    >
      <h3 className="text-lg font-serif text-slate-800 mb-6">Development Pipeline</h3>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">{item.label}</span>
              <span className="text-slate-800 font-medium">{item.value}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: visibleBars ? `${item.value}%` : 0 }}
                transition={{ duration: 1.5, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Animated Line Chart Component
const LineChart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const points = [
    { x: 0, y: 30 },
    { x: 20, y: 45 },
    { x: 40, y: 35 },
    { x: 60, y: 60 },
    { x: 80, y: 75 },
    { x: 100, y: 90 }
  ];

  const pathData = points.map((point, index) => 
    `${index === 0 ? 'M' : 'L'} ${point.x} ${100 - point.y}`
  ).join(' ');

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm"
    >
      <h3 className="text-lg font-serif text-slate-800 mb-6">Growth Trajectory</h3>
      <div className="relative h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Grid lines */}
          {[20, 40, 60, 80].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="#e2e8f0"
              strokeWidth="0.5"
            />
          ))}
          
          {/* Animated line */}
          <motion.path
            d={pathData}
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isVisible ? 1 : 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          />
          
          {/* Animated dots */}
          {points.map((point, index) => (
            <motion.circle
              key={index}
              cx={point.x}
              cy={100 - point.y}
              r="2"
              fill="#1e40af"
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
            />
          ))}
        </svg>
      </div>
      <div className="flex justify-between text-xs text-slate-500 mt-4">
        <span>2021</span>
        <span>2023</span>
        <span>2025</span>
      </div>
    </motion.div>
  );
};

// Featured Product Component with Video and Description
const FeaturedProduct: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const products = [
    {
      video: "/videos/grok-video-623b6740-b007-4304-bf00-3726b52a3656.mp4",
      readMoreImage: "/service/All Flyers_22112025_updated_page-0002.jpg",
      logo: "/tm/Screenshot 2026-01-31 000352.png",
      title: "HemScans+",
      description: "HemScans+ is a next-generation NFC-enabled, paper-based blood test strip designed for rapid and reliable sickle cell screening. Using chromogenic detection, it clearly identifies Hb and HbS markers from a single drop of blood and wirelessly transmits results to a smartphone via NFC. With instant digital readouts, secure cloud storage, and a clean medical interface, HemScans+ delivers smart, fast, and accurate diagnostics in a compact, point-of-care format."
    },
    {
      video: "/videos/grok-video-ad10dfeb-2a51-4dfb-a2da-0e079b78a3d4.mp4",
      readMoreImage: "/service/All Flyers_22112025_updated_page-0003.jpg",
      logo: "/tm/Screenshot 2026-01-31 000427.png",
      title: "PranaXpert",
      description: "PranaXpert is an innovative, paper-based chromogenic test strip designed for breath-based, non-invasive disease detection. By analyzing chemical markers from a single breath, it enables rapid multi-analyte screening for conditions such as tuberculosis, asthma, COPD, and kidney and liver dysfunction. Portable, affordable, and biodegradable, PranaXpert delivers fast, point-of-care diagnostics-transforming breath into actionable clinical insights."
    },
    {
      video: "public/videos/grok-video-195799f1-15ab-4c29-9302-6ee5e79fac62.mp4",
      readMoreImage: "/service/All Flyers_22112025_updated_page-0004.jpg",
      logo: "/tm/Screenshot 2026-01-31 010302.png",
      title: "MetAly5T™",
      description: "MetAly5T™ is a paper-based, chromogenic test strip engineered for rapid five-in-one detection of toxic heavy metals- arsenic, lead, cadmium, chromium, and mercury. With distinct reaction zones and clear colorimetric responses, it enables simple, reliable screening of environmental contamination. Designed for precision, portability, and visual clarity, MetAly5T™ delivers efficient multi-metal detection in a single, easy-to-use strip."
    },
    {
      video: "public/videos/grok-video-f5229812-5098-47b9-859a-38f071c68f4e.mp4",
      readMoreImage: "public/service/All Flyers_22112025_updated_page-0005.jpg",
      logo: "/tm/Screenshot 2026-01-31 010856.png",
      title: "ONEyTRA™",
      description: "ONEyTRA™ is a chromogenic, paper-based detection platform designed for rapid identification of adulteration in edible oils and ghee. Using precise colorimetric reactions, it visually differentiates pure samples from those containing chemical adulterants, artificial dyes, mixed oils, or animal-derived fats. With clear color references and easy interpretation, ONEyTRA™ offers a fast, reliable, and user-friendly solution for food safety and quality assurance."
    }
  ];

  const openModal = (imagePath: string) => {
    setModalImage(imagePath);
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="col-span-full mb-12"
      >
        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white border border-slate-100 rounded-lg p-6 md:p-8 shadow-sm ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Video Column */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="aspect-video rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={product.video} type="video/mp4" />
                  </video>
                </div>
              </motion.div>

              {/* Description Column */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.5em] text-blue-700 mb-3 block">Featured Product</span>
                  <div className="flex items-center mb-4">
                    {product.logo && (
                      <img 
                        src={product.logo} 
                        alt={`${product.title} logo`}
                        className="h-16 md:h-20 w-auto object-contain"
                      />
                    )}
                  </div>
                </div>
                
                <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed text-justify">
                  {product.description}
                </p>

                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openModal(product.readMoreImage)}
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors duration-300"
                >
                  <span>Read More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal for detailed image view */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <img 
              src={modalImage} 
              alt="Product Detailed Information" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const ProductItem: React.FC<{ title: string; caption: string; img: string }> = ({ title, caption, img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        whileHover={{ y: -10 }}
        className="group relative cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-[4/5] overflow-hidden rounded shadow-lg border border-slate-100 mb-4 md:mb-6 relative bg-slate-50">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
          />
          <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
        </div>
        <div className="space-y-1 md:space-y-2">
          <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-blue-700">{caption}</span>
          <h3 className="text-lg md:text-xl font-serif text-slate-800 italic">{title}</h3>
        </div>
      </motion.div>

      {/* Modal for full image view */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={img} 
              alt={title} 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
              onClick={() => setIsModalOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Services: React.FC = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, -50]);
  
  const products = [
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0001.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0002.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0003.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0004.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0005.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0006.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0007.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0008.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0009.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0010.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0011.jpg" }
  ];

  return (
    <div className="w-full bg-white selection:bg-blue-50 overflow-x-hidden">
      {/* Dynamic Hero Stats Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-50 overflow-hidden">
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.5em] text-blue-700 mb-3 block">Performance Metrics</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-slate-900">Excellence in Diagnostics</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <CircularProgress value={98} label="Accuracy" color="#1e40af" />
            <CircularProgress value={95} label="Clinical Validation" color="#3b82f6" />
            <CircularProgress value={99} label="Reliability" color="#60a5fa" />
          </div>
          
          {/* Additional Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "12+", label: "Patents Filed", color: "text-slate-900" },
              { value: "5+", label: "Products", color: "text-slate-900" },
              { value: "3+", label: "Years R&D", color: "text-slate-900" },
              { value: "50K+", label: "Tests Conducted", color: "text-slate-900" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100"
              >
                <div className={`text-2xl md:text-3xl font-serif ${stat.color} font-bold mb-2`}>
                  {stat.value}
                </div>
                <div className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Charts Section */}
      <section className="py-16 md:py-24 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.5em] text-blue-700 mb-3 block">Analytics</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-slate-900">Performance Insights</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BarChart />
            <LineChart />
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-8 md:py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <header className="mb-8 md:mb-12 text-center lg:text-left">
          <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.5em] text-blue-700 mb-3 block">Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-slate-900">Our Products</h2>
          <p className="text-sm md:text-base text-slate-500 font-light mt-4 max-w-xl mx-auto lg:mx-0">
            ANIVID offers end-to-end biosensor Research and Development services, from concept and prototyping to validation and scale-up, for academic, industrial, and government partners.
          </p>
        </header>

        <div className="space-y-12">
          <FeaturedProduct />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {products.map((p, i) => (
              <ProductItem key={i} title={p.title} caption={p.caption} img={p.img} />
            ))}
          </div>
        </div>
      </section>

      {/* Trademark Logo Slider */}
      <section className="py-12 md:py-16 bg-slate-50/30">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-blue-700 font-bold tracking-[0.5em] uppercase text-[7px] mb-2 block">Our Brands</span>
            <h2 className="text-3xl md:text-4xl font-serif italic text-slate-900">Trademarks</h2>
            <p className="text-sm md:text-base text-slate-500 font-light mt-4">Our innovative product portfolio</p>
          </motion.div>

          {/* Logo Slider */}
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-8 md:gap-12 items-center"
              animate={{
                x: [0, -800],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {[
                "/tm/Screenshot 2026-01-31 000352.png",
                "/tm/Screenshot 2026-01-31 000427.png", 
                "/tm/Screenshot 2026-01-31 010302.png",
                "/tm/Screenshot 2026-01-31 010856.png"
              ].map((logo, index) => (
                <motion.div
                  key={`first-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center p-4"
                >
                  <img 
                    src={logo} 
                    alt={`Trademark ${index + 1}`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
                "/tm/Screenshot 2026-01-31 000352.png",
                "/tm/Screenshot 2026-01-31 000427.png", 
                "/tm/Screenshot 2026-01-31 010302.png",
                "/tm/Screenshot 2026-01-31 010856.png"
              ].map((logo, index) => (
                <motion.div
                  key={`second-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center p-4"
                >
                  <img 
                    src={logo} 
                    alt={`Trademark ${index + 1}`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Capability Section */}
      <section className="py-6 md:py-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-slate-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Our Focus Areas Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6 md:space-y-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-slate-900 italic">Our Focus Areas</h2>
            <div className="space-y-4">
              {[
                "Rapid disease diagnostics",
                "Food adulteration and contamination detection",
                "Smart, NFC-enabled biosensing platforms",
                "Affordable healthcare solutions for rural and underserved populations"
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    rotateX: 2,
                    rotateY: 2
                  }}
                  className="group relative"
                >
                  <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-500 preserve-3d">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                    <p className="text-slate-700 font-light text-sm md:text-base relative z-10 group-hover:text-blue-700 transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ANIVID's Core Strength Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6 md:space-y-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-slate-900 italic">ANIVID's Core Strength</h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm"
            >
              <p className="text-slate-600 font-light text-sm md:text-base mb-6">
                ANIVID's core strength lies in its proprietary biosensor platforms, combining:
              </p>
              <div className="space-y-3">
                {[
                  "Paper-based chromogenic sensing chemistry",
                  "Multi-analyte detection systems",
                  "NFC-enabled data transfer",
                  "Image-based signal interpretation",
                  "Digital dashboards for real-time analysis"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{
                      x: 10,
                      scale: 1.01
                    }}
                    className="group relative overflow-hidden rounded-md"
                  >
                    <div className="bg-gradient-to-r from-slate-50 to-white border-l-2 border-transparent group-hover:border-blue-600 transition-all duration-300 py-3 px-4">
                      <p className="text-slate-600 font-light text-sm md:text-base group-hover:text-blue-700 transition-colors duration-300">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-slate-500 font-light text-sm md:text-base italic mt-6 pt-4 border-t border-slate-100"
              >
                These technologies enable rapid, reliable, and user-friendly diagnostics without the need for complex laboratory equipment.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
