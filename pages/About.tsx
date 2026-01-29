import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import '../styles/about.css';

const InteractiveBook: React.FC<{ front: string; back: string; title: string; subtitle: string; amazonLink?: string }> = ({ front, back, title, subtitle, amazonLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative group perspective-2000 w-full max-w-[320px] aspect-[3/4] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        animate={{ rotateY: isFlipped ? -180 : 0 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front Cover */}
        <div className="absolute inset-0 backface-hidden z-20 shadow-2xl rounded-r-md overflow-hidden border border-slate-100 bg-slate-100">
          <img src={front} alt="Front Cover" className="w-full h-full object-contain" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
            <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-blue-400 mb-2">Authored Work</span>
            <h3 className="text-xl font-serif italic text-white leading-tight">{title}</h3>
          </div>
        </div>

        {/* Back Cover */}
        <div className="absolute inset-0 backface-hidden z-10 shadow-2xl rounded-l-md overflow-hidden border border-slate-100 bg-slate-100 rotate-y-180">
          <img src={back} alt="Back Cover" className="w-full h-full object-contain" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex flex-col justify-end p-6">
            <div className="flex flex-col items-center space-y-4">
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-blue-400">Available Now</span>
              {amazonLink && (
                <a 
                  href={amazonLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] transition-all transform hover:scale-105"
                >
                  Buy on Amazon
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Spine */}
        <div className="absolute left-0 top-0 w-8 h-full bg-slate-900 origin-left -rotate-y-90 shadow-inner flex items-center justify-center">
          <span className="text-[6px] text-white/40 font-bold uppercase tracking-widest -rotate-90 whitespace-nowrap">
            {title} — PAWANKUMAR RAI
          </span>
        </div>
      </motion.div>
      
      <div className="mt-6 text-center">
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-700 animate-pulse">Click to {isFlipped ? 'view front' : 'view back'}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full bg-white overflow-hidden overflow-x-hidden">
      {/* Refined Hero / Story Section */}
      <section className="relative section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 mb-12"
          >
            <div className="flex items-center gap-3">
              <motion.span initial={{ width: 0 }} whileInView={{ width: 30 }} className="h-px bg-blue-700" transition={{ duration: 1 }} />
              <span className="text-blue-700 font-bold tracking-[0.4em] uppercase text-[7px]">ANIVID Research and Development Private Limited</span>
            </div>
            <h1 className="text-responsive-4xl font-serif text-slate-900 leading-tight tracking-tighter">
              Pawankumar Rai, PhD<br/><span className="italic text-slate-400">Founder and Director</span>
            </h1>
          </motion.div>

          <div className="grid-responsive lg:grid-cols-2 gap-12 items-start mb-24">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-responsive-2xl font-serif italic text-slate-800">Our Story</h2>
                <p className="text-responsive-base text-slate-600 font-light leading-relaxed text-justify-pro">
                  ANIVID Research and Development Private Limited was founded with a clear purpose, to transform diagnostics by making them faster, simpler, and more accessible. Under the visionary leadership of Pawankumar Rai, ANIVID emerged as a platform where scientific rigor meets social impact.
                </p>
                <p className="text-responsive-base text-slate-600 font-light leading-relaxed text-justify-pro">
                  The company brings together expertise in chemistry, biosensing, electronics, and digital technologies to develop innovative diagnostic tools that address critical healthcare and safety challenges.
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-responsive-xl font-serif italic text-slate-800 mb-3">A Vision by Pawankumar Rai</h3>
                  <p className="text-responsive-base text-slate-600 font-light leading-relaxed text-justify-pro">
                    Pawankumar Rai envisioned ANIVID as more than a company, it is a mission to democratize diagnostics. His vision is rooted in the belief that early detection saves lives, and that advanced diagnostic technologies should not be limited by geography, infrastructure, or affordability.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              className="flex items-center justify-center h-full"
            >
              <div className="relative group">
                <img 
                  src="/unnamed.jpg" 
                  alt="Pawankumar Rai - ANIVID Founder" 
                  className="img-responsive max-h-[300px] sm:max-h-[400px] grayscale object-contain transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Authored Works Section */}
        <div className="border-t border-slate-50 pt-12 md:pt-16">
          <div className="text-center mb-12">
            <span className="text-blue-700 font-bold tracking-[0.5em] uppercase text-[7px] mb-2 block">Authorship & Publications</span>
            <h2 className="text-responsive-3xl font-serif italic text-slate-900">Authored Works</h2>
            <p className="text-responsive-sm text-slate-500 font-light mt-4 text-justify-pro max-w-3xl mx-auto">
              A comprehensive collection of scientific literature and research insights authored by our founder, documenting the journey of translational research and biosensor innovation.
            </p>
          </div>

          <div className="grid-responsive md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-items-center">
            <InteractiveBook 
              title="" 
              subtitle="The Science of Access" 
              front="/book/unnamed (1).jpg"
              back="/book/unnamed (2).jpg"
              amazonLink="https://www.amazon.com/dp/B0XXXXXXX"
            />
            <InteractiveBook 
              title="" 
              subtitle="Molecular Engineering" 
              front="/book/unnamed (3).jpg"
              back="/book/unnamed (4).jpg"
              amazonLink="https://www.amazon.com/dp/B0XXXXXXX"
            />
            <InteractiveBook 
              title="" 
              subtitle="Field Diagnostics" 
              front="/book/unnamed (5).jpg"
              back="/book/unnamed (6).jpg"
              amazonLink="https://www.amazon.com/dp/B0XXXXXXX"
            />
            <InteractiveBook 
              title="" 
              subtitle="Healthcare Innovation" 
              front="/book/unnamed (7).jpg"
              back="/book/unnamed (8).jpg"
              amazonLink="https://www.amazon.com/dp/B0XXXXXXX"
            />
          </div>
        </div>

        {/* Achievements Section */}
        <section className="py-16 px-8 md:px-24 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-blue-700 font-bold tracking-[0.5em] uppercase text-[7px] mb-2 block">Recognition & Excellence</span>
              <h2 className="text-3xl font-serif italic text-slate-900">Achievements</h2>
              <p className="text-sm text-slate-500 font-light mt-4">
                Pawankumar Rai has been consistently recognized for his contributions to scientific innovation, translational research, and creative science communication.
              </p>
            </motion.div>

            <div className="space-y-12">
              {[
                {
                  year: "2021",
                  title: "Young Scientist Award",
                  organization: "SHEN International Research Awards on Science, Health, and Engineering",
                  description: "This award recognized Mr. Rai's pioneering research in biosensor development and his commitment to solving real-world healthcare and food safety challenges through innovation."
                },
                {
                  year: "2021",
                  title: "Research Excellence Award",
                  organization: "Biotech Research Society of India (BRSI)",
                  description: "The award acknowledged his impactful work on developing paper-based sensors and electrochemical platforms for field diagnostics and environmental monitoring."
                },
                {
                  year: "2023",
                  title: "Best Logo Award",
                  organization: "Association of Food Scientists and Technologists (India) – AFST(I)",
                  description: "Mr. Rai's winning design reflected scientific creativity and visual impact, symbolizing safety, traceability, and innovation in food science."
                }
              ].map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="relative group"
                >
                  <div className="relative bg-white border border-slate-100 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-500 preserve-3d">
                    {/* Decorative corner element */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-lg opacity-50" />
                    
                    {/* Award year badge */}
                    <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {achievement.year}
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-serif italic text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">
                        {achievement.organization}
                      </p>
                      
                      <p className="text-sm text-slate-600 font-light leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 text-center"
            >
              <p className="text-sm text-slate-500 font-light italic max-w-2xl mx-auto">
                Several poster and presentation awards have also been credited to his name. These accolades reflect his consistent excellence in communicating scientific ideas effectively.
              </p>
            </motion.div>
          </div>
        </section>
      </section>

      {/* Professional Background Section */}
      <section className="py-16 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-blue-700 font-bold tracking-[0.5em] uppercase text-[7px] mb-2 block">Professional Journey</span>
            <h2 className="text-3xl font-serif italic text-slate-900">Background & Expertise</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-base text-slate-600 font-light leading-relaxed mb-6">
              Pawankumar Rai is a Project Scientist-II at CSIR–Indian Institute of Toxicology Research, Lucknow, India. With multidisciplinary experience spanning pharmaceutics, biosensor technology, and analytical method development, he is recognized for contributions to healthcare diagnostics, food safety, and environmental biosensing.
            </p>

            <p className="text-base text-slate-600 font-light leading-relaxed mb-6">
              He completed his Bachelor of Pharmacy from JNU and subsequently obtained his Master of Pharmacy from Gujarat Technological University (GTU), where he strengthened his expertise in formulation science, drug delivery and translational pharmaceutics.
            </p>

            <p className="text-base text-slate-600 font-light leading-relaxed mb-6">
              Before joining CSIR-IITR, he held research positions at IIT-Kanpur, Uttar Pradesh, and ICAR–Directorate of Medicinal and Aromatic Plant Research, Anand, Gujarat. His work integrates formulation science, electrochemical sensing platforms, and point-of-care diagnostics to bridge laboratory innovation with accessible, field-ready solutions.
            </p>

            <p className="text-base text-slate-600 font-light leading-relaxed">
              He is also the Founder & Director of ANIVID Research and Development Private Limited, a translational science startup developing smart, affordable biosensors for low-resource settings, advancing public health and agro-food quality monitoring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Patents Section */}
      <section className="py-16 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="section-header">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Intellectual Property
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Patents
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            A portfolio of innovative patents reflecting our commitment to advancing diagnostic technologies and scientific research.
          </motion.p>
        </div>

        <div className="patents-grid">
          {[
            {
              number: "Indian Patent 566952",
              title: "A ready to use test strip for the rapid visual detection of cyanide and use thereof",
              authors: "Pawankumar Rai, Srishti Mehrotra, Sandeep K Sharma",
              date: "Granted: 29/05/2025",
              status: "granted"
            },
            {
              number: "Indian Patent 561317",
              title: "A test strip for the rapid detection of nitrate and nitrite in aqueous medium and use thereof",
              authors: "Pawankumar Rai, Srishti Mehrotra, Sandeep K Sharma",
              date: "Granted: 27/02/2025",
              status: "granted"
            },
            {
              number: "Indian Patent 435794",
              title: "A chemical composition for detection of furfural and hydroxymethylfurfural in food commodities and process for detection thereof",
              authors: "Pawankumar Rai, Srishti Mehrotra, Sandeep K Sharma",
              date: "Granted: 27/06/2023",
              status: "granted"
            },
            {
              number: "202411061597",
              title: "A novel process and product thereof for the semi-quantitative analysis of Hemoglobin",
              authors: "Pawankumar Rai, Narayan Bhaskar, Sandeep K. Sharma",
              date: "Filed: 13/08/2024",
              status: "pending"
            },
            {
              number: "202411089108",
              title: "A process for the preparation of bio-based multi-analyte sensing platform and product thereof",
              authors: "Pawankumar Rai, Srishti Mehrotra, Smriti Priya, Sandeep K. Sharma",
              date: "Filed: 18/11/2024",
              status: "pending"
            },
            {
              number: "202311051602",
              title: "Design, instrumentation and working of a hand-held platform device for on-site detection of meat authenticity and microbial contamination",
              authors: "Smriti Priya, Navjot Kumar, Prabeen Kumar Padhy, Pawankumar Rai, Sandeep K. Sharma, P C Panchariya",
              date: "Filed: 31/07/2023",
              status: "pending"
            }
          ].map((patent, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02
              }}
              className="patent-card interactive-element"
            >
              <div className="patent-number">{patent.number}</div>
              <h3 className="patent-title">{patent.title}</h3>
              <p className="patent-authors">{patent.authors}</p>
              <div className="patent-date">{patent.date}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 px-8 md:px-24 max-w-7xl mx-auto bg-slate-50">
        <div className="section-header">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Scientific Literature
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Publications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            Peer-reviewed research publications contributing to the advancement of sensing technologies and food science.
          </motion.p>
        </div>

        <div className="publications-grid">
          {[
            {
              journal: "Trends in Food Science & Technology",
              title: "Potential of sensing interventions in the life cycle assessment of fruits and fruit juices",
              authors: "Rai, P., Mehrotra, S., & Sharma, S. K.",
              year: "2024",
              doi: "10.1016/j.tifs.2024.104614",
              impactFactor: "15.1"
            },
            {
              journal: "Microchemical Journal",
              title: "Advancements in enzyme-based wearable sensors for health monitoring",
              authors: "Mehrotra, S., Rai, P., Saxena, A., Priya, S., Sharma, S. K.",
              year: "2024",
              doi: "10.1016/j.microc.2024.110250",
              impactFactor: "4.8"
            },
            {
              journal: "Electrochemistry Communications",
              title: "Ion-selective paper-based chromogenic strip and electrochemical sensor for the detection of ammonium ions",
              authors: "Rai P., Singh A. K., Mehrotra S., Sharma S. K.",
              year: "2024",
              doi: "10.1016/j.elecom.2024.107757",
              impactFactor: "4.7"
            },
            {
              journal: "Food Chemistry (Oxford)",
              title: "A multiplex DNA probe-based method for simultaneous identification of adulteration in meat samples",
              authors: "Singh Yadav S, Tariq R, Kumar Padhy P, Saxena A, Rai P, Srivastava V, Kumar N, Kumar Sharma S, Priya S.",
              year: "2024",
              doi: "10.1016/j.fochms.2024.100200",
              impactFactor: "3.3"
            },
            {
              journal: "RSC Analytical Methods",
              title: "A polylactic acid–carbon nanofiber-based electro-conductive sensing material and paper-based colorimetric sensor for detection of nitrates",
              authors: "Rai P., Mehrotra S., Gautam K., Verma R., Anbumani S., Patnaik S., Priya S., Sharma S. K.",
              year: "2024",
              doi: "10.1039/D3AY02069J",
              impactFactor: "3.1"
            },
            {
              journal: "RSC Analytical Methods",
              title: "A paper-based chromogenic strip and electrochemical sensor for the detection of butter yellow",
              authors: "Rai, P., Mehrotra, S., Verma, S., & Sharma, S. K.",
              year: "2024",
              doi: "10.1039/D3AY01928D",
              impactFactor: "3.1"
            },
            {
              journal: "Journal of Food Science and Technology",
              title: "Development of a positive pressure-based instrumentation for efficient solid phase extraction",
              authors: "Rai,P., Mehrotra, S., Lahane, V., Yadav, A. K., & Sharma, S. K.",
              year: "2024",
              doi: "10.1007/s13197-024-06010-3",
              impactFactor: "2.6"
            },
            {
              journal: "RSC Analytical Methods",
              title: "A QR code-integrated chromogenic paper strip for detection of hydrogen peroxide in aqueous samples",
              authors: "Rai, P., Verma, S., Mehrotra, S., & Sharma, S. K.",
              year: "2023",
              doi: "10.1039/D3AY01584J",
              impactFactor: "3.1"
            },
            {
              journal: "Food Chemistry",
              title: "Chitosan-carbon nanofiber based disposable bioelectrode for electrochemical detection of oxytocin",
              authors: "Mehrotra, S., Rai, P., Gautam, K., Saxena, A., Verma, R., Lahane, V., Singh, S., Singh, A., Patnaik, S., Anbumani, S., Priya, S., Sharma, S. K.",
              year: "2023",
              doi: "10.1016/j.foodchem.2023.135965",
              impactFactor: "8.8"
            },
            {
              journal: "Carbohydrate Polymers",
              title: "Polylactic acid/tapioca starch/banana peel-based material for colorimetric and electrochemical biosensing applications",
              authors: "Rai, P., Mehrotra, S., Gautam, K., Kar, A. K., Saxena, A., Patnaik, S., Patnaik, S., Anbumani, S., Pandey, A., Priya, S., Sharma, S. K.",
              year: "2022",
              doi: "10.1016/j.carbpol.2022.120368",
              impactFactor: "10.7"
            },
            {
              journal: "Food Chemistry",
              title: "Sensor-integrated biocomposite membrane for food quality assessment",
              authors: "Rai, P., Verma, S., Mehrotra, S., Priya, S., & Sharma, S. K.",
              year: "2022",
              doi: "10.1016/j.foodchem.2022.134180",
              impactFactor: "8.8"
            },
            {
              journal: "International Journal of Molecular Sciences",
              title: "Development and Clinical Validation of RT-LAMP-Based Lateral-Flow Devices and Electrochemical Sensor for Detecting Multigene Targets in SARS-CoV-2",
              authors: "Saxena, A.; Rai, P.; Mehrotra, S.; Baby, S.; Singh, S.; Srivastava, V.; Priya, S.; Sharma, S.K.",
              year: "2022",
              doi: "10.3390/ijms232113105",
              impactFactor: "6.2"
            },
            {
              journal: "LWT",
              title: "Development of a paper-based chromogenic strip and electrochemical sensor for the detection of tannic acid in beverages",
              authors: "Rai, P., Mehrotra, S., & Sharma, S. K.",
              year: "2022",
              doi: "10.1016/j.lwt.2022.113999",
              impactFactor: "6.1"
            },
            {
              journal: "Food Chemistry",
              title: "Challenges in assessing the quality of fruit juices: Intervening role of biosensors",
              authors: "Rai, P., Mehrotra, S., & Sharma, S. K.",
              year: "2022",
              doi: "10.1016/j.foodchem.2022.132825",
              impactFactor: "8.8"
            },
            {
              journal: "Food Chemistry",
              title: "A quick and simple paper-based method for detection of furfural and 5-hydroxymethylfurfural in beverages and fruit juices",
              authors: "Mehrotra, S., Rai, P., & Sharma, S. K.",
              year: "2022",
              doi: "10.1016/j.foodchem.2021.131532",
              impactFactor: "8.8"
            },
            {
              journal: "Environmental Technology & Innovation",
              title: "A rapid and sensitive colorimetric method for the detection of cyanide ions in aqueous samples",
              authors: "Rai, P., Mehrotra, S., Raj, A., & Sharma, S. K.",
              year: "2021",
              doi: "10.1016/j.eti.2021.101973",
              impactFactor: "7.8"
            },
            {
              journal: "Bioresource Technology",
              title: "Recent advances in the sustainable design and applications of biodegradable polymers",
              authors: "Rai, P., Mehrotra, S., Priya, S., Gnansounou, E., & Sharma, S. K.",
              year: "2021",
              doi: "10.1016/j.biortech.2021.124739",
              impactFactor: "11.4"
            },
            {
              journal: "The Pharma Innovation Journal",
              title: "Formulation of low smoke herbal mosquito repellent sticks by using different essential oils",
              authors: "Trivedi A., Rai, Rai P., & Jitendra K.",
              year: "2018",
              doi: null,
              impactFactor: "5.4"
            },
            {
              journal: "Journal of Glycobiology",
              title: "Current Insights in Mammalian Glycosylation: Implication of Glycoproteomics as Next-Generation Biomarkers in Diabetes Mellitus",
              authors: "Raghav, A., Ahmad, J., Khan, Z., Mishra, B., & Pawankumar, R.",
              year: "2017",
              doi: "10.4172/2168-958X.1000125",
              impactFactor: "1.2"
            },
            {
              journal: "International Journal of Medical and Health Research",
              title: "Orally disintegrating tablets: A novel approach for medication",
              authors: "Rai, P., Modi K.",
              year: "2018",
              doi: null,
              impactFactor: "0.9"
            },
            {
              journal: "Journal of Applied Pharmaceutical Sciences",
              title: "Optimization of Melt in Mouth Tablets of Palonosetron HCl using 32 Full Factorial Design",
              authors: "Modi K., Rai, P., et. al.",
              year: "2016",
              doi: null,
              impactFactor: "1.2"
            },
            {
              journal: "International Journal of Pharmaceutical Research",
              title: "Formulation and Characterization of Sustained Release Dosage Form of Zaltoprofen using 32 Full Factorial Design",
              authors: "Rai, P., et. al",
              year: "2015",
              doi: null,
              impactFactor: "0.9"
            }
          ].map((publication, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              whileHover={{ 
                y: -15,
                rotateX: 3,
                rotateY: -3,
                scale: 1.02
              }}
              className="publication-card interactive-element"
            >
              <div className="publication-impact-factor">IF: {publication.impactFactor}</div>
              <div className="publication-journal">{publication.journal}</div>
              <h3 className="publication-title">{publication.title}</h3>
              <p className="publication-authors">{publication.authors}</p>
              <div className="publication-meta">Published in {publication.year}</div>
              {publication.doi ? (
                <a 
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-doi"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    window.open(`https://doi.org/${publication.doi}`, '_blank', 'noopener,noreferrer');
                  }}
                >
                  DOI: {publication.doi}
                </a>
              ) : (
                <div className="publication-doi-no-link">No DOI available</div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50 text-center relative overflow-hidden">
        <motion.div animate={{ opacity: [0.01, 0.02, 0.01] }} transition={{ duration: 10, repeat: Infinity }} className="absolute inset-0 flex items-center justify-center font-serif text-[15vw] md:text-[12vw] text-slate-900/5 pointer-events-none select-none">
          VISION & MISSION
        </motion.div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-lg md:text-xl lg:text-2xl font-serif italic text-slate-600 leading-relaxed">
            "ANIVID Research and Development Private Limited is a pioneering Indian startup founded by Mr. Pawankumar Rai, who also serves as its Director. With a deep-rooted vision to revolutionize healthcare and food safety through innovation, ANIVID specializes in the development of cutting-edge, first-of-its-kind sensor technologies that are affordable, accessible, and tailored for real-world impact."
          </h2>
          <div className="mt-6 h-px w-12 bg-blue-700/30 mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default About;