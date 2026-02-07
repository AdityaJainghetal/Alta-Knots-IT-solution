
// // src/pages/Services.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.9, ease: "easeOut" }
//   }
// };

// const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.15, delayChildren: 0.2 }
//   }
// };

// const cardHover = {
//   rest: {
//     scale: 1,
//     boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
//   },
//   hover: {
//     scale: 1.03,
//     boxShadow: "0 20px 25px -5px rgba(34, 211, 238, 0.3), 0 10px 10px -5px rgba(34, 211, 238, 0.2)",
//     transition: { duration: 0.4 }
//   }
// };

// const Service = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-100 overflow-hidden pb-24">
//       {/* Subtle animated background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-blue-950/10 to-transparent pointer-events-none"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-28">
//         {/* Hero Header */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="text-center mb-20 md:mb-28"
//         >
//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
//           >
//             <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
//               Our Services
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="mt-6 text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto font-light"
//           >
//             End-to-end IT excellence & premium BPO support — powering your business with innovation, scale and trust.
//           </motion.p>

//           <motion.div
//             variants={fadeInUp}
//             className="mt-8 h-1.5 w-32 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"
//           />
//         </motion.div>

//         {/* IT Services Section */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//           variants={staggerContainer}
//           className="mb-28 md:mb-40"
//         >
//           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
//             {/* Left Image – hover scale + glow */}
//             <motion.div
//               variants={fadeInUp}
//               whileHover="hover"
             
//               className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-cyan-900/40 shadow-xl"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
//                 alt="Modern Code & Dashboard"
//                 className="w-full h-96 lg:h-[620px] object-cover transition-transform duration-700"
//               />
//             </motion.div>

//             {/* Right Content */}
//             <div className="w-full lg:w-1/2 space-y-10">
//               <motion.h2
//                 variants={fadeInUp}
//                 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight"
//               >
//                 Information Technology Services
//               </motion.h2>

//               <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed">
//                 Full lifecycle support — from visionary development to mission-critical stability.
//               </motion.p>

//               {/* Glassmorphic Cards */}
//               <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
//                 {[
//                   { title: "Website & Enterprise Apps", desc: "Custom portals, dashboards & scalable enterprise solutions" },
//                   { title: "Testing & Deployment", desc: "Comprehensive QA, smooth launches & production readiness" },
//                   { title: "Long-term Maintenance (AMS)", desc: "Proactive updates, bug fixes & performance optimization" },
//                   { title: "Digital Transformation", desc: "Cloud migration, modernization & strategic consulting" },
//                   { title: "Government & PSU Projects", desc: "Secure portals, citizen services & long-term contracts" }
//                 ].map((item, i) => (
//                   <motion.div
//                     key={i}
//                     variants={fadeInUp}
//                     whileHover="hover"
                   
//                     className="bg-gray-900/50 backdrop-blur-xl border border-cyan-900/40 rounded-2xl p-7 hover:border-cyan-500/60 transition-all"
//                   >
//                     <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
//                     <p className="text-gray-400 text-base">{item.desc}</p>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* Tech Stack */}
//               <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-10">
//                 {['Java + Spring Boot', 'React / Angular', 'Node.js', 'MySQL / PostgreSQL', 'AWS / Azure / GCP'].map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-5 py-2.5 bg-cyan-950/50 border border-cyan-800/50 rounded-full text-cyan-300 text-sm font-medium shadow-sm backdrop-blur-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </motion.section>

//         {/* BPO Section */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//           variants={staggerContainer}
//         >
//           <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
//             {/* Right Image */}
//             <motion.div
//               variants={fadeInUp}
//               whileHover="hover"
              
//               className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-cyan-900/40 shadow-xl"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
//                 alt="Professional Call Center Team"
//                 className="w-full h-96 lg:h-[620px] object-cover transition-transform duration-700"
//               />
//             </motion.div>

//             {/* Left Content */}
//             <div className="w-full lg:w-1/2 space-y-10">
//               <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-cyan-400">
//                 Business Process Outsourcing (BPO)
//               </motion.h2>

//               <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed">
//                 Premium customer experience & operational excellence — voice, chat, email, cataloguing, L2 support & full infrastructure.
//               </motion.p>

//               {/* Glassmorphic Feature Cards */}
//               <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
//                 <motion.div variants={fadeInUp} whileHover="hover" className="bg-gray-900/50 backdrop-blur-xl border border-cyan-900/40 rounded-2xl p-7">
//                   <h3 className="text-xl font-semibold text-white mb-4">Voice • Chat • Email Support</h3>
//                   <ul className="space-y-3 text-gray-300">
//                     <li>• Inbound / Outbound voice with active listening</li>
//                     <li>• Real-time chat resolution</li>
//                     <li>• Structured email handling & documentation</li>
//                   </ul>
//                 </motion.div>

//                 <motion.div variants={fadeInUp} whileHover="hover" className="bg-gray-900/50 backdrop-blur-xl border border-cyan-900/40 rounded-2xl p-7">
//                   <h3 className="text-xl font-semibold text-white mb-4">Cataloguing & Data</h3>
//                   <ul className="space-y-3 text-gray-300">
//                     <li>• Rich product descriptions with SEO tags</li>
//                     <li>• Data validation & enrichment</li>
//                     <li>• Missing attributes & images correction</li>
//                   </ul>
//                 </motion.div>

//                 <motion.div variants={fadeInUp} whileHover="hover" className="bg-gray-900/50 backdrop-blur-xl border border-cyan-900/40 rounded-2xl p-7">
//                   <h3 className="text-xl font-semibold text-white mb-4">L2 (Level 2) Support</h3>
//                   <p className="text-gray-300">
//                     Advanced troubleshooting, root cause analysis & resolution for escalated issues.
//                   </p>
//                 </motion.div>

//                 <motion.div variants={fadeInUp} whileHover="hover" className="bg-gray-900/50 backdrop-blur-xl border border-cyan-900/40 rounded-2xl p-7">
//                   <h3 className="text-xl font-semibold text-white mb-4">Quality Assurance & Infrastructure</h3>
//                   <p className="text-gray-300">
//                     Regular audits, coaching, SOP/SLA compliance + fully equipped offices, telephony, high-speed network & backup systems.
//                   </p>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Final CTA */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-24 text-center"
//         >
//           <a
//             href="/contact"
//             className="inline-block px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-2 active:scale-95"
//           >
//             Ready to Transform Your Business? → Contact Us
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Service;

// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useCallback } from 'react';

// Particles Config (red theme)
const particlesOptions = {
  fullScreen: { enable: true, zIndex: -1 },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' },
      onClick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      repulse: { distance: 120, duration: 0.4 },
      push: { quantity: 4 },
    },
  },
  particles: {
    color: { value: ['#ef4444', '#f87171', '#dc2626', '#b91c1c'] },
    links: { color: '#ffffff', distance: 140, enable: true, opacity: 0.18, width: 1 },
    move: { enable: true, speed: 1.2, direction: 'none', random: true, outModes: 'bounce' },
    number: { density: { enable: true, area: 800 }, value: 70 },
    opacity: { value: 0.45, random: true },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)',
  },
  hover: {
    scale: 1.04,
    y: -8,
    boxShadow: '0 25px 50px -12px rgba(239, 68, 68, 0.4)',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const imageHover = {
  rest: { scale: 1.05 },
  hover: { scale: 1.12, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Service = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-gray-100 overflow-hidden">
      {/* Background Particles */}
      <Particles
        id="tsparticles-services"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/70 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-28">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-20 md:mb-32"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed"
          >
            End-to-end IT solutions & premium BPO services — empowering your business with innovation, reliability, and scale.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 h-1.5 w-36 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* IT Services Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-28 md:mb-40"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              variants={fadeInUp}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-red-900/40 shadow-2xl shadow-red-950/30 relative"
            >
              <motion.img
                variants={imageHover}
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                alt="Modern development & code"
                className="w-full h-96 lg:h-[620px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-10">
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent"
              >
                Information Technology Services
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed">
                Full-cycle development — from concept to deployment and long-term success.
              </motion.p>

              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Website & Enterprise Apps", desc: "Custom portals, dashboards, ERP & scalable solutions" },
                  { title: "Testing & Deployment", desc: "Automated & manual QA, CI/CD, smooth production rollout" },
                  { title: "Application Maintenance (AMS)", desc: "Proactive monitoring, updates, performance tuning" },
                  { title: "Digital Transformation", desc: "Cloud migration, legacy modernization, strategy" },
                  { title: "Government & PSU Projects", desc: "Secure systems, citizen portals, compliance-focused delivery" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    className="bg-gray-950/70 backdrop-blur-md border border-red-900/40 rounded-2xl p-7 hover:border-red-600/60 transition-all"
                  >
                    <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tech Stack */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-8">
                {['Java + Spring Boot', 'React / Next.js', 'Node.js', 'PostgreSQL / MongoDB', 'AWS / Azure'].map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2.5 bg-red-950/40 border border-red-800/50 rounded-full text-red-300 text-sm font-medium backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* BPO Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              variants={fadeInUp}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="w-full lg:w-1/2 rounded-3xl overflow-hidden border border-red-900/40 shadow-2xl shadow-red-950/30 relative"
            >
              <motion.img
                variants={imageHover}
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
                alt="Professional support team"
                className="w-full h-96 lg:h-[620px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-10">
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent"
              >
                Business Process Outsourcing (BPO)
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed">
                High-quality customer support, data operations & back-office excellence — 24/7 ready.
              </motion.p>

              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Voice • Chat • Email Support",
                    desc: "Inbound / outbound calls, live chat, structured email handling",
                  },
                  {
                    title: "Cataloguing & Data Enrichment",
                    desc: "Product descriptions, SEO tags, image validation, attribute correction",
                  },
                  {
                    title: "Level 2 (L2) Support",
                    desc: "Advanced troubleshooting, root cause analysis, escalated issue resolution",
                  },
                  {
                    title: "Quality & Infrastructure",
                    desc: "SLA compliance, regular audits, coaching, fully equipped call centers",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                variants={fadeInUp}
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="bg-gray-950/70 backdrop-blur-md border border-red-900/40 rounded-2xl p-7 hover:border-red-600/60 transition-all"
                  >
                    <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 text-center"
        >
          <a
            href="/contact"
            className="inline-block px-12 py-6 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white text-xl font-semibold rounded-2xl shadow-2xl shadow-red-900/50 transition-all transform hover:-translate-y-2 active:scale-95"
          >
            Ready to Elevate Your Business? → Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;