// // import React, { useCallback, useEffect, useRef, useState } from "react";
// // import Particles from "@tsparticles/react";
// // import { loadSlim } from "@tsparticles/slim";
// // import { motion } from "framer-motion";
// // import {
// //   ArrowRight,
// //   Code,
// //   Headphones,
// //   ShieldCheck,
// //   Users,
// //   Cloud,
// //   Zap,
// //   Target,
// //   Award,
// // } from "lucide-react";
// // import HeroSection from "./HeroSection";
// // import PhoneCarousel from "./Mobile/Fitnessapplanding";
// // import FitnessApp from "./Mobile/Fitnessapplanding";
// // import MobileOnboarding from "./Mobile/Mobilebraing";

// // // ────────────────────────────────────────────────
// // // Particles config with black and red theme
// // const particlesOptions = {
// //   fullScreen: { enable: true, zIndex: -1 },
// //   background: { color: { value: "transparent" } },
// //   fpsLimit: 60,
// //   interactivity: {
// //     events: {
// //       onClick: { enable: true, mode: "push" },
// //       onHover: { enable: true, mode: "repulse" },
// //       resize: true,
// //     },
// //     modes: {
// //       push: { quantity: 4 },
// //       repulse: { distance: 150, duration: 0.4 },
// //     },
// //   },
// //   particles: {
// //     color: { value: ["#dc2626", "#ef4444", "#f87171"] }, // red shades
// //     links: {
// //       color: "#dc2626",
// //       distance: 140,
// //       enable: true,
// //       opacity: 0.15,
// //       width: 1,
// //     },
// //     move: {
// //       direction: "none",
// //       enable: true,
// //       outModes: { default: "bounce" },
// //       random: true,
// //       speed: 1.2,
// //       straight: false,
// //     },
// //     number: { density: { enable: true, area: 800 }, value: 70 },
// //     opacity: { value: 0.3 },
// //     shape: { type: "circle" },
// //     size: { value: { min: 1, max: 3 } },
// //   },
// //   detectRetina: true,
// // };

// // // Animation variants
// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 60 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.8, ease: "easeOut" },
// //   },
// // };

// // const fadeInLeft = {
// //   hidden: { opacity: 0, x: -60 },
// //   visible: {
// //     opacity: 1,
// //     x: 0,
// //     transition: { duration: 0.8, ease: "easeOut" },
// //   },
// // };

// // const fadeInRight = {
// //   hidden: { opacity: 0, x: 60 },
// //   visible: {
// //     opacity: 1,
// //     x: 0,
// //     transition: { duration: 0.8, ease: "easeOut" },
// //   },
// // };

// // const scaleIn = {
// //   hidden: { opacity: 0, scale: 0.8 },
// //   visible: {
// //     opacity: 1,
// //     scale: 1,
// //     transition: { duration: 0.6, ease: "easeOut" },
// //   },
// // };

// // const staggerContainer = {
// //   hidden: {},
// //   visible: {
// //     transition: { staggerChildren: 0.15 },
// //   },
// // };

// // const About = () => {
// //   const particlesInit = useCallback(async (engine) => {
// //     await loadSlim(engine);
// //   }, []);

// //   const sectionRefs = useRef([]);
// //   const [inViewSections, setInViewSections] = useState([]);
// //   const [activeTestimonial, setActiveTestimonial] = useState(0);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setInViewSections((prev) => [
// //               ...new Set([...prev, entry.target.id]),
// //             ]);
// //           }
// //         });
// //       },
// //       { threshold: 0.15 }
// //     );

// //     sectionRefs.current.forEach((ref) => {
// //       if (ref) observer.observe(ref);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   // Auto-rotate testimonials
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setActiveTestimonial((prev) => (prev + 1) % 3);
// //     }, 5000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   const testimonials = [
// //     {
// //       text: "Alta Knots transformed our entire digital infrastructure. Their team delivered beyond expectations!",
// //       author: "Sarah Johnson",
// //       role: "CEO, TechStart Inc",
// //       rating: 5,
// //     },
// //     {
// //       text: "24/7 support that actually works. They're always there when we need them. True partners!",
// //       author: "Michael Chen",
// //       role: "CTO, GlobalSoft",
// //       rating: 5,
// //     },
// //     {
// //       text: "From concept to deployment in record time. Their expertise in mobile apps is unmatched.",
// //       author: "Priya Sharma",
// //       role: "Founder, AppVenture",
// //       rating: 5,
// //     },
// //   ];

// //   return (
// //     <>
// //       <HeroSection />
// //       <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
// //         {/* Particles Background */}
// //         <Particles
// //           id="tsparticles"
// //           init={particlesInit}
// //           options={particlesOptions}
// //           className="absolute inset-0 z-0"
// //         />

// //         {/* Red Gradient Overlays */}
// //         <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
// //           <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
// //           <div className="absolute bottom-40 left-0 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
// //           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />
// //         </div>

// //         {/* ==================== HERO SECTION ==================== */}
// //         <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
// //           {/* Animated background elements */}
// //           <div className="absolute inset-0 z-0">
// //             <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-black" />
// //             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[70%] bg-red-600/10 blur-3xl rounded-full opacity-70 animate-pulse" />

// //             {/* Floating geometric shapes */}
// //             <motion.div
// //               animate={{
// //                 y: [0, -20, 0],
// //                 rotate: [0, 180, 360],
// //               }}
// //               transition={{
// //                 duration: 20,
// //                 repeat: Infinity,
// //                 ease: "linear",
// //               }}
// //               className="absolute top-20 left-10 w-20 h-20 border-2 border-red-500/30 rounded-lg"
// //             />
// //             <motion.div
// //               animate={{
// //                 y: [0, 30, 0],
// //                 rotate: [0, -180, -360],
// //               }}
// //               transition={{
// //                 duration: 15,
// //                 repeat: Infinity,
// //                 ease: "linear",
// //               }}
// //               className="absolute bottom-40 right-20 w-16 h-16 border-2 border-red-600/20"
// //             />
// //           </div>

// //           <motion.div
// //             initial="hidden"
// //             animate="visible"
// //             variants={staggerContainer}
// //             className="relative z-10 max-w-6xl mx-auto text-center"
// //           >
// //             {/* Main Title with enhanced styling */}
// //             <motion.div variants={fadeInUp} className="mb-8">
// //               <motion.div
// //                 animate={{ scale: [1, 1.02, 1] }}
// //                 transition={{ duration: 2, repeat: Infinity }}
// //                 className="inline-block"
// //               >
// //                 <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 relative">
// //                   <span className="relative inline-block">
// //                     ALTA KNOTS
// //                     <motion.div
// //                       animate={{ scaleX: [0, 1] }}
// //                       transition={{ duration: 1, delay: 0.5 }}
// //                       className="absolute bottom-2 left-0 w-full h-2 bg-red-600 origin-left"
// //                     />
// //                   </span>
// //                 </h1>
// //               </motion.div>

// //               <motion.h2
// //                 variants={fadeInUp}
// //                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4"
// //               >
// //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500 animate-gradient">
// //                   Your Technology Partner
// //                 </span>
// //               </motion.h2>
// //             </motion.div>

// //             {/* Enhanced subtitle */}
// //             <motion.p
// //               variants={fadeInUp}
// //               className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
// //             >
// //               We build powerful, secure, and future-ready{" "}
// //               <span className="text-red-400 font-semibold relative inline-block">
// //                 IT & BPO solutions
// //                 <motion.span
// //                   animate={{ width: ["0%", "100%"] }}
// //                   transition={{ duration: 1, delay: 1 }}
// //                   className="absolute bottom-0 left-0 h-0.5 bg-red-400"
// //                 />
// //               </span>{" "}
// //               — so your business can focus on growth, not technology.
// //             </motion.p>
// //   <div className="container-xxl py-5" id="about">
// //       <div className="container py-5 px-lg-5">
// //         <div className="row g-5 align-items-center">

// //           {/* Left Content */}
// //           <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
// //             <h5 className="text-primary-gradient fw-medium">About App</h5>
// //             <h1 className="mb-4">#1 App For Your Fitness</h1>

// //             <p className="mb-4">
// //               Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
// //               Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo
// //               justo eirmod magna dolore erat amet.
// //             </p>

// //             <div className="row g-4 mb-4">
// //               <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
// //                 <div className="d-flex">
// //                   <i className="fa fa-cogs fa-2x text-primary-gradient flex-shrink-0 mt-1"></i>
// //                   <div className="ms-3">
// //                     <h2 className="mb-0">1234</h2>
// //                     <p className="text-primary-gradient mb-0">Active Install</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
// //                 <div className="d-flex">
// //                   <i className="fa fa-comments fa-2x text-secondary-gradient flex-shrink-0 mt-1"></i>
// //                   <div className="ms-3">
// //                     <h2 className="mb-0">1234</h2>
// //                     <p className="text-secondary-gradient mb-0">Clients Reviews</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <a
// //               href="#"
// //               className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3"
// //             >
// //               Read More
// //             </a>
// //           </div>

// //           {/* Right Image */}
// //           <div className="col-lg-6 text-center">
// //             <img
// //               className="img-fluid wow fadeInUp rounded-4 shadow"
// //               data-wow-delay="0.5s"
// //               src="https://img.freepik.com/free-photo/group-multinational-busy-people-working-office_146671-15658.jpg?semt=ais_hybrid&w=740&q=80"
// //               alt="Fitness App"
// //             />
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //             {/* Enhanced floating chat messages */}
// //             <motion.div variants={fadeInUp} className="relative mb-20">
// //               <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 flex-wrap">
// //                 {/* Message 1 - with phone-like design */}
// //                 <motion.div
// //                   whileHover={{ scale: 1.05, rotate: 0 }}
// //                   className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-red-600/30 rounded-3xl p-8 max-w-sm text-left shadow-2xl transform rotate-[-3deg] relative overflow-hidden group"
// //                 >
// //                   <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition-colors" />
// //                   <div className="relative z-10">
// //                     <div className="flex items-center gap-3 mb-4">
// //                       <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
// //                         <Zap className="w-5 h-5" />
// //                       </div>
// //                       <p className="text-red-400 font-bold text-lg">Alta Knots</p>
// //                     </div>
// //                     <p className="text-gray-100 text-base leading-relaxed">
// //                       Bonjour! Ready to transform your business with secure software & reliable support?
// //                     </p>
// //                     <div className="mt-4 flex gap-1">
// //                       {[...Array(3)].map((_, i) => (
// //                         <div key={i} className="w-2 h-2 bg-red-500 rounded-full opacity-50" />
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </motion.div>

// //                 {/* Message 2 */}
// //                 <motion.div
// //                   whileHover={{ scale: 1.05, rotate: 0 }}
// //                   className="bg-gradient-to-br from-red-950/50 to-black/90 backdrop-blur-xl border-2 border-red-500/40 rounded-3xl p-8 max-w-sm text-left shadow-2xl transform rotate-[4deg] relative overflow-hidden group"
// //                 >
// //                   <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-colors" />
// //                   <div className="relative z-10">
// //                     <div className="flex items-center gap-3 mb-4">
// //                       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
// //                         <Users className="w-5 h-5" />
// //                       </div>
// //                       <p className="text-red-300 font-bold text-lg">You</p>
// //                     </div>
// //                     <p className="text-gray-100 text-base leading-relaxed">
// //                       Yes! We need a strong website, mobile app & 24/7 BPO support...
// //                     </p>
// //                     <div className="mt-4 text-xs text-gray-500">Just now</div>
// //                   </div>
// //                 </motion.div>

// //                 {/* Message 3 */}
// //                 <motion.div
// //                   whileHover={{ scale: 1.05, rotate: 0 }}
// //                   className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-red-600/30 rounded-3xl p-8 max-w-sm text-left shadow-2xl transform rotate-[-2deg] md:mt-16 relative overflow-hidden group"
// //                 >
// //                   <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition-colors" />
// //                   <div className="relative z-10">
// //                     <div className="flex items-center gap-3 mb-4">
// //                       <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
// //                         <Target className="w-5 h-5" />
// //                       </div>
// //                       <p className="text-red-400 font-bold text-lg">Alta Knots</p>
// //                     </div>
// //                     <p className="text-gray-100 text-base leading-relaxed">
// //                       Perfect! Let's build it together — fast, secure & scalable. 🚀
// //                     </p>
// //                     <div className="mt-4 flex items-center gap-2">
// //                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
// //                       <span className="text-xs text-green-400">Online</span>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               </div>
// //             </motion.div>

// //             {/* Enhanced CTAs */}
// //             <motion.div
// //               variants={fadeInUp}
// //               className="flex flex-col sm:flex-row gap-6 justify-center items-center"
// //             >
// //               <motion.button
// //                 whileHover={{ scale: 1.08 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="group relative inline-flex items-center gap-4 px-12 py-7 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-xl font-bold transition-all duration-300 overflow-hidden shadow-lg shadow-red-900/50 hover:shadow-2xl hover:shadow-red-900/70"
// //               >
// //                 <span className="relative z-10">Start Building Your Future</span>
// //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
// //                 <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
// //               </motion.button>

// //               <motion.button
// //                 whileHover={{ scale: 1.08 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="group inline-flex items-center gap-3 px-10 py-6 border-2 border-red-600/60 hover:border-red-500 text-red-400 hover:text-red-300 rounded-full text-lg font-bold transition-all hover:bg-red-950/40 backdrop-blur-sm"
// //               >
// //                 See Our Solutions
// //                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// //               </motion.button>
// //             </motion.div>

// //             {/* Enhanced tagline */}
// //             <motion.div variants={fadeInUp} className="mt-16">
// //               <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-400">
// //                 {[
// //                   "Custom Software",
// //                   "Mobile Apps",
// //                   "Cloud Solutions",
// //                   "24×7 BPO Support",
// //                   "Enterprise Security",
// //                 ].map((item, idx) => (
// //                   <div key={idx} className="flex items-center gap-2">
// //                     <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
// //                     <span>{item}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           </motion.div>

// //           {/* Enhanced scroll indicator */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 2, duration: 1 }}
// //             className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
// //           >
// //             <div className="w-7 h-12 border-2 border-red-600/40 rounded-full flex justify-center pt-2 relative overflow-hidden">
// //               <motion.div
// //                 animate={{ y: [0, 16, 0] }}
// //                 transition={{ repeat: Infinity, duration: 2 }}
// //                 className="w-2 h-2 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
// //               />
// //             </div>
// //             <span className="text-xs text-gray-500 tracking-widest font-semibold">SCROLL DOWN</span>
// //           </motion.div>
// //         </section>

// //         {/* ==================== MAIN CONTENT SECTION ==================== */}
// //         <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 z-10">
// //           <motion.div
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: "-100px" }}
// //             variants={staggerContainer}
// //             className="max-w-7xl mx-auto"
// //           >
// //             {/* About Heading with decorative elements */}
// //             <motion.div variants={fadeInUp} className="text-center mb-20">
// //               <motion.div
// //                 animate={{ rotate: 360 }}
// //                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// //                 className="inline-block mb-6"
// //               >
// //                 <div className="w-20 h-20 border-4 border-red-600/30 rounded-full" />
// //               </motion.div>

// //               <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8">
// //                 ABOUT{" "}
// //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500">
// //                   ALTA KNOTS
// //                 </span>
// //               </h1>

// //               <motion.div
// //                 variants={fadeInUp}
// //                 className="max-w-4xl mx-auto space-y-6"
// //               >
// //                 <p className="text-2xl md:text-3xl text-gray-200 font-light">
// //                   Technology that connects. Solutions that deliver.
// //                   <span className="block text-red-400 font-semibold mt-2">
// //                     Partnerships that last.
// //                   </span>
// //                 </p>

// //                 <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
// //                   We are a team of passionate engineers, developers, and support specialists helping businesses grow through powerful, secure, and future-ready IT & BPO solutions.
// //                 </p>
// //               </motion.div>
// //             </motion.div>

// //             {/* Enhanced Stats Cards with phone-like design */}
// //             <motion.div
// //               variants={staggerContainer}
// //               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
// //             >
// //               {[
// //                 { number: "50+", label: "Projects Delivered", icon: Code, color: "from-red-600 to-red-700" },
// //                 { number: "24/7", label: "Support Coverage", icon: Headphones, color: "from-red-700 to-red-800" },
// //                 { number: "99.9%", label: "Uptime Commitment", icon: ShieldCheck, color: "from-red-600 to-red-700" },
// //                 { number: "100+", label: "Happy Clients", icon: Users, color: "from-red-700 to-red-800" },
// //               ].map((stat, idx) => (
// //                 <motion.div
// //                   key={idx}
// //                   variants={scaleIn}
// //                   whileHover={{ y: -10, scale: 1.05 }}
// //                   className="relative group"
// //                 >
// //                   {/* Card background with gradient */}
// //                   <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 to-black/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />

// //                   <div className="relative bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-xl border-2 border-red-600/20 rounded-3xl p-8 text-center hover:border-red-500/50 transition-all duration-300 overflow-hidden">
// //                     {/* Animated background circle */}
// //                     <motion.div
// //                       animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
// //                       transition={{ duration: 3, repeat: Infinity }}
// //                       className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br ${stat.color} rounded-full blur-2xl opacity-30`}
// //                     />

// //                     <div className="relative z-10">
// //                       <motion.div
// //                         whileHover={{ rotate: 360, scale: 1.2 }}
// //                         transition={{ duration: 0.6 }}
// //                         className="inline-block mb-6"
// //                       >
// //                         <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
// //                           <stat.icon className="w-8 h-8 text-white" />
// //                         </div>
// //                       </motion.div>

// //                       <h3 className="text-5xl md:text-6xl font-black text-white mb-3 group-hover:text-red-400 transition-colors">
// //                         {stat.number}
// //                       </h3>
// //                       <p className="text-lg text-gray-300 font-medium">{stat.label}</p>

// //                       {/* Progress bar */}
// //                       <motion.div
// //                         initial={{ width: 0 }}
// //                         whileInView={{ width: "100%" }}
// //                         transition={{ duration: 1, delay: idx * 0.2 }}
// //                         className="mt-4 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"
// //                       />
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </motion.div>

// //             {/* Mission Section with Phone Mockup Design */}

// //             {/* Core Values with enhanced cards */}
// //             <motion.div
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //               variants={staggerContainer}
// //               className="mb-32"
// //             >
// //               <motion.div variants={fadeInUp} className="text-center mb-16">
// //                 <h2 className="text-5xl md:text-6xl font-black mb-6">
// //                   Our Core{" "}
// //                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
// //                     Values
// //                   </span>
// //                 </h2>
// //                 <p className="text-xl text-gray-400 max-w-2xl mx-auto">
// //                   The principles that guide everything we do
// //                 </p>
// //               </motion.div>

// //               <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
// //                 {[
// //                   {
// //                     icon: ShieldCheck,
// //                     title: "Reliability",
// //                     desc: "We deliver consistent, high-quality results — on time, every time, with zero excuses.",
// //                     color: "from-red-600 to-red-700",
// //                   },
// //                   {
// //                     icon: Cloud,
// //                     title: "Innovation",
// //                     desc: "We embrace new technologies and creative thinking to give our clients a real competitive edge.",
// //                     color: "from-red-700 to-red-800",
// //                   },
// //                   {
// //                     icon: Users,
// //                     title: "True Partnership",
// //                     desc: "Your success is our success. We listen, understand, and grow together with every client.",
// //                     color: "from-red-600 to-red-700",
// //                   },
// //                 ].map((value, idx) => (
// //                   <motion.div
// //                     key={idx}
// //                     variants={scaleIn}
// //                     whileHover={{ y: -15, scale: 1.02 }}
// //                     className="relative group"
// //                   >
// //                     {/* Glowing background */}
// //                     <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 to-black/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />

// //                     <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-red-600/20 rounded-3xl p-10 text-center hover:border-red-500/50 transition-all duration-300 overflow-hidden">
// //                       {/* Animated background */}
// //                       <motion.div
// //                         animate={{
// //                           scale: [1, 1.5, 1],
// //                           rotate: [0, 180, 360],
// //                           opacity: [0.1, 0.2, 0.1],
// //                         }}
// //                         transition={{ duration: 10, repeat: Infinity }}
// //                         className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.color} rounded-full blur-3xl`}
// //                       />

// //                       <div className="relative z-10">
// //                         <motion.div
// //                           whileHover={{ rotate: 360, scale: 1.2 }}
// //                           transition={{ duration: 0.6 }}
// //                           className="inline-block mb-8"
// //                         >
// //                           <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-2xl`}>
// //                             <value.icon className="w-10 h-10 text-white" />
// //                           </div>
// //                         </motion.div>

// //                         <h4 className="text-3xl md:text-4xl font-black mb-6 group-hover:text-red-400 transition-colors">
// //                           {value.title}
// //                         </h4>
// //                         <p className="text-gray-300 text-lg leading-relaxed">
// //                           {value.desc}
// //                         </p>

// //                         {/* Decorative line */}
// //                         <motion.div
// //                           initial={{ scaleX: 0 }}
// //                           whileInView={{ scaleX: 1 }}
// //                           transition={{ duration: 0.8, delay: idx * 0.2 }}
// //                           className="mt-8 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent origin-center"
// //                         />
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </motion.div>

// //             {/* Testimonials Carousel */}
// //             <motion.div
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //               variants={fadeInUp}
// //               className="mb-32"
// //             >
// //               <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
// //                 What Our{" "}
// //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
// //                   Clients Say
// //                 </span>
// //               </h2>

// //               <div className="relative max-w-4xl mx-auto">
// //                 {/* Testimonial cards */}
// //                 <div className="relative h-[400px] md:h-[350px]">
// //                   {testimonials.map((testimonial, idx) => (
// //                     <motion.div
// //                       key={idx}
// //                       initial={{ opacity: 0, scale: 0.8 }}
// //                       animate={{
// //                         opacity: idx === activeTestimonial ? 1 : 0,
// //                         scale: idx === activeTestimonial ? 1 : 0.8,
// //                         zIndex: idx === activeTestimonial ? 10 : 0,
// //                       }}
// //                       transition={{ duration: 0.5 }}
// //                       className="absolute inset-0"
// //                     >
// //                       <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-red-600/30 rounded-3xl p-10 md:p-12 h-full flex flex-col justify-between">
// //                         {/* Stars */}
// //                         <div className="flex gap-2 mb-6">
// //                           {[...Array(testimonial.rating)].map((_, i) => (
// //                             <div key={i} className="w-6 h-6 text-red-500">★</div>
// //                           ))}
// //                         </div>

// //                         {/* Quote */}
// //                         <p className="text-2xl md:text-3xl text-gray-100 leading-relaxed mb-8 font-light italic">
// //                           "{testimonial.text}"
// //                         </p>

// //                         {/* Author */}
// //                         <div className="flex items-center gap-4">
// //                           <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
// //                             <span className="text-xl font-bold text-white">
// //                               {testimonial.author.charAt(0)}
// //                             </span>
// //                           </div>
// //                           <div>
// //                             <div className="text-lg font-bold text-white">
// //                               {testimonial.author}
// //                             </div>
// //                             <div className="text-sm text-gray-400">
// //                               {testimonial.role}
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   ))}
// //                 </div>

// //                 {/* Navigation dots */}
// //                 <div className="flex justify-center gap-3 mt-8">
// //                   {testimonials.map((_, idx) => (
// //                     <button
// //                       key={idx}
// //                       onClick={() => setActiveTestimonial(idx)}
// //                       className={`h-2 rounded-full transition-all ${
// //                         idx === activeTestimonial
// //                           ? "w-12 bg-red-500"
// //                           : "w-2 bg-gray-600 hover:bg-gray-500"
// //                       }`}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* Final CTA Section */}
// //             <motion.div
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //               variants={fadeInUp}
// //               className="text-center relative"
// //             >
// //               {/* Background glow */}
// //               <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 via-red-900/20 to-red-950/30 blur-3xl" />
// //             {/* <FitnessApp/> */}

// //             <MobileOnboarding/>

// //               <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border-2 border-red-600/30 rounded-[3rem] p-12 md:p-16 lg:p-20">
// //                 <motion.div
// //                   animate={{ scale: [1, 1.05, 1] }}
// //                   transition={{ duration: 2, repeat: Infinity }}
// //                   className="inline-block mb-8"
// //                 >
// //                   <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-2xl mx-auto">
// //                     <Zap className="w-12 h-12 text-white" />
// //                   </div>
// //                 </motion.div>

// //                 <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
// //                   Ready to build something{" "}
// //                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
// //                     great
// //                   </span>{" "}
// //                   together?
// //                 </h3>

// //                 <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
// //                   Let's transform your vision into reality. Our team is ready to start your project today.
// //                 </p>

// //                 <motion.button
// //                   whileHover={{ scale: 1.08 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   className="group inline-flex items-center gap-4 px-12 py-7 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-xl md:text-2xl font-black transition-all shadow-2xl shadow-red-900/50 hover:shadow-3xl hover:shadow-red-900/70 mx-auto"
// //                 >
// //                   LET'S START THE CONVERSATION
// //                   <motion.div
// //                     animate={{ x: [0, 5, 0] }}
// //                     transition={{ duration: 1.5, repeat: Infinity }}
// //                   >
// //                     <ArrowRight className="w-7 h-7" />
// //                   </motion.div>
// //                 </motion.button>

// //                 {/* Contact options */}
// //                 <div className="flex flex-wrap justify-center gap-8 mt-12 text-gray-400">
// //                   <div className="flex items-center gap-2">
// //                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
// //                     <span>Available 24/7</span>
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <div className="w-2 h-2 bg-red-500 rounded-full" />
// //                     <span>Response within 1 hour</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         </section>
// //       </div>
// //     </>
// //   );
// // };

// // export default About;

// import React, { useCallback, useEffect, useRef, useState } from "react";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Code,
//   Headphones,
//   ShieldCheck,
//   Users,
//   Cloud,
//   Zap,
//   Target,
// } from "lucide-react";
// import HeroSection from "./HeroSection";
// import MobileOnboarding from "./Mobile/Mobilebraing";
// import img4 from "../Component/Mobile/img/image2.png";
// import img5 from "../Component/Mobile/img/image11.png";
// // import FitnessApp from "./Mobile/Fitnessapplanding"; // uncomment if needed

// // ────────────────────────────────────────────────
// // Particles config - black & red theme
// const particlesOptions = {
//   fullScreen: { enable: true, zIndex: -1 },
//   background: { color: { value: "transparent" } },
//   fpsLimit: 60,
//   interactivity: {
//     events: {
//       onClick: { enable: true, mode: "push" },
//       onHover: { enable: true, mode: "repulse" },
//       resize: true,
//     },
//     modes: {
//       push: { quantity: 4 },
//       repulse: { distance: 150, duration: 0.4 },
//     },
//   },
//   particles: {
//     color: { value: ["#dc2626", "#ef4444", "#f87171"] },
//     links: {
//       color: "#dc2626",
//       distance: 140,
//       enable: true,
//       opacity: 0.15,
//       width: 1,
//     },
//     move: {
//       direction: "none",
//       enable: true,
//       outModes: { default: "bounce" },
//       random: true,
//       speed: 1.2,
//       straight: false,
//     },
//     number: { density: { enable: true, area: 800 }, value: 70 },
//     opacity: { value: 0.3 },
//     shape: { type: "circle" },
//     size: { value: { min: 1, max: 3 } },
//   },
//   detectRetina: true,
// };

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const fadeInLeft = {
//   hidden: { opacity: 0, x: -60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const fadeInRight = {
//   hidden: { opacity: 0, x: 60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// const About = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const sectionRefs = useRef([]);
//   const [inViewSections, setInViewSections] = useState([]);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setInViewSections((prev) => [
//               ...new Set([...prev, entry.target.id]),
//             ]);
//           }
//         });
//       },
//       { threshold: 0.15 },
//     );

//     sectionRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % 3);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const testimonials = [
//     {
//       text: "Alta Knots transformed our entire digital infrastructure. Their team delivered beyond expectations!",
//       author: "Sarah Johnson",
//       role: "CEO, TechStart Inc",
//       rating: 5,
//     },
//     {
//       text: "24/7 support that actually works. They're always there when we need them. True partners!",
//       author: "Michael Chen",
//       role: "CTO, GlobalSoft",
//       rating: 5,
//     },
//     {
//       text: "From concept to deployment in record time. Their expertise in mobile apps is unmatched.",
//       author: "Priya Sharma",
//       role: "Founder, AppVenture",
//       rating: 5,
//     },
//   ];

//   return (
//     <>
//       {/* <HeroSection /> */}

//       <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
//         {/* Particles Background */}
//         <Particles
//           id="tsparticles"
//           init={particlesInit}
//           options={particlesOptions}
//           className="absolute inset-0 z-0"
//         />

//         {/* Red Gradient Overlays */}
//         <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
//           <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-40 left-0 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />
//         </div>

//         {/* ==================== HERO SECTION ==================== */}
//         <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
//           <div className="absolute inset-0 z-0">
//             <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-black" />
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[70%] bg-red-600/10 blur-3xl rounded-full opacity-70 animate-pulse" />
//           </div>

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="relative z-10 max-w-6xl mx-auto text-center"
//           >
//             <motion.div variants={fadeInUp} className="mb-8">
//               <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4">
//                 ALTA KNOTS
//               </h1>
//               <motion.h2
//                 variants={fadeInUp}
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4"
//               >
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500 animate-gradient">
//                   Your Technology Partner
//                 </span>
//               </motion.h2>
//             </motion.div>

//             <motion.p
//               variants={fadeInUp}
//               className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
//             >
//               We build powerful, secure, and future-ready{" "}
//               <span className="text-red-400 font-semibold relative inline-block">
//                 IT & BPO solutions
//               </span>{" "}
//               — so your business can focus on growth, not technology.
//             </motion.p>

         
// <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
//   {/* Text Content */}
//   <div className="w-full md:w-1/2">
//     <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
//       Building the <span className="text-primary">Future</span> of Business
//       Technology
//     </h3>

//     <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
//       At <span className="font-semibold text-white">Alta Knots</span>, we believe
//       technology should empower—not complicate. Our expert team delivers custom
//       software, mobile apps, cloud solutions, and 24/7 BPO support that drive real
//       business results.
//     </p>

//     <button className="mt-8 px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition">
//       Get Started
//     </button>
//   </div>

//   {/* Image */}
//   {/* <div className="w-full md:w-1/2 flex justify-center">
//     <img
//       src={img4}
//       alt="Tech Collaboration"
//       className="rounded-3xl w-full max-w-2xl shadow-2xl shadow-red-900/50"
//     />
//   </div> */}
//   <div className="w-full md:w-1/2 flex justify-center">
//   <img
//     src={img4}
//     alt="Tech Collaboration"
//     className="w-full max-w-2xl mt-6"
//   />
// </div>

// </div>




// <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
//   {/* Text Content */}
//   <div className="w-full md:w-1/2">
//     <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
//       Building the <span className="text-primary">Future</span> of Business
//       Technology
//     </h3>

//     <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
//       At <span className="font-semibold text-white">Alta Knots</span>, we believe
//       technology should empower—not complicate. Our expert team delivers custom
//       software, mobile apps, cloud solutions, and 24/7 BPO support that drive real
//       business results.
//     </p>

//     <button className="mt-8 px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition">
//       Get Started
//     </button>
//   </div>

//   {/* Image */}
//   {/* <div className="w-full md:w-1/2 flex justify-center">
//     <img
//       src={img4}
//       alt="Tech Collaboration"
//       className="rounded-3xl w-full max-w-2xl shadow-2xl shadow-red-900/50"
//     />
//   </div> */}
//   {/* <div className="w-full md:w-1/2 flex justify-center">
//   <img
//     src={img5}
//     alt="Tech Collaboration"
//     className="w-full max-w-2xl mt-6"
//   />
// </div> */}


// <div className="w-full md:w-1/2 flex justify-center bg-transparent">
//   <img
//     src={img5}
//     alt="Tech Collaboration"
//     className="w-full max-w-2xl mt-6 bg-transparent"
//   />
// </div>
// </div>



//             {/* Floating chat-style messages */}
//             <motion.div variants={fadeInUp} className="relative mb-20">
//               <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 flex-wrap">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 max-w-sm text-left shadow-2xl rotate-[-3deg]"
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
//                       <Zap className="w-5 h-5" />
//                     </div>
//                     <p className="text-red-400 font-bold text-lg">Alta Knots</p>
//                   </div>
//                   <p className="text-gray-100">
//                     Bonjour! Ready to transform your business with secure
//                     software & reliable support?
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-gradient-to-br from-red-950/50 to-black/90 backdrop-blur-xl border border-red-500/40 rounded-3xl p-8 max-w-sm text-left shadow-2xl rotate-[4deg]"
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
//                       <Users className="w-5 h-5" />
//                     </div>
//                     <p className="text-red-300 font-bold text-lg">You</p>
//                   </div>
//                   <p className="text-gray-100">
//                     Yes! We need a strong website, mobile app & 24/7 BPO
//                     support...
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 max-w-sm text-left shadow-2xl rotate-[-2deg] md:mt-16"
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
//                       <Target className="w-5 h-5" />
//                     </div>
//                     <p className="text-red-400 font-bold text-lg">Alta Knots</p>
//                   </div>
//                   <p className="text-gray-100">
//                     Perfect! Let's build it together — fast, secure & scalable.
//                     🚀
//                   </p>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* CTAs */}
//             <motion.div
//               variants={fadeInUp}
//               className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.08 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl font-bold shadow-lg shadow-red-900/50 hover:shadow-red-900/70 transition-all"
//               >
//                 Start Building Your Future
//                 <ArrowRight className="inline ml-3" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.08 }}
//                 className="px-10 py-6 border-2 border-red-600/60 rounded-full text-red-400 hover:bg-red-950/40 transition-all"
//               >
//                 See Our Solutions
//                 <ArrowRight className="inline ml-3" />
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* ==================== ABOUT SECTION ==================== */}
//         <section className="relative py-20 px-6 md:px-12 lg:px-24 z-10">
//           <div className="max-w-7xl mx-auto">
//             {/* About Us Intro */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={staggerContainer}
//               className="text-center mb-16"
//             >
//               <h2 className="text-5xl md:text-7xl font-black mb-6">
//                 ABOUT <span className="text-red-500">ALTA KNOTS</span>
//               </h2>
//               <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
//                 Technology that connects. Solutions that deliver. Partnerships
//                 that last.
//               </p>
//             </motion.div>

//             {/* Fitness App Style About Block */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={staggerContainer}
//               className="grid md:grid-cols-2 gap-12 items-center mb-24"
//             >
//               {/* Left - Text */}
//               <motion.div variants={fadeInLeft} className="space-y-6">
//                 <h5 className="text-red-400 font-semibold text-xl">
//                   About Our Solution
//                 </h5>
//                 <h2 className="text-4xl md:text-5xl font-bold">
//                   #1 App For Your Fitness
//                 </h2>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et
//                   eos labore. Clita erat ipsum et lorem et sit, sed stet no
//                   labore lorem sit clita duo justo eirmod magna dolore erat
//                   amet.
//                 </p>

//                 <div className="grid grid-cols-2 gap-8 my-8">
//                   <div className="flex items-start gap-4">
//                     <div className="text-red-500 text-4xl">1234</div>
//                     <p className="text-gray-400">Active Installs</p>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="text-red-500 text-4xl">1234</div>
//                     <p className="text-gray-400">Clients Reviews</p>
//                   </div>
//                 </div>

//                 <button className="px-10 py-4 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition">
//                   Read More →
//                 </button>
//               </motion.div>

//               {/* Right - Image */}
//               <motion.div variants={fadeInRight}>
//                 <img
//                   src="https://img.freepik.com/free-photo/group-multinational-busy-people-working-office_146671-15658.jpg?w=740"
//                   alt="Team working"
//                   className="rounded-2xl shadow-2xl w-full object-cover border border-red-900/30"
//                 />
//               </motion.div>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
//             >
//               {[
//                 { num: "50+", label: "Projects Delivered", icon: Code },
//                 { num: "24/7", label: "Support Coverage", icon: Headphones },
//                 { num: "99.9%", label: "Uptime Commitment", icon: ShieldCheck },
//                 { num: "100+", label: "Happy Clients", icon: Users },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   variants={scaleIn}
//                   className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 text-center"
//                 >
//                   <item.icon className="w-12 h-12 mx-auto mb-4 text-red-500" />
//                   <div className="text-4xl font-black mb-2">{item.num}</div>
//                   <p className="text-gray-400">{item.label}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Mobile Onboarding / Showcase */}
//             <div className="mb-24">
//               <MobileOnboarding />
//             </div>

//             {/* Testimonials */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="mb-24"
//             >
//               <h2 className="text-5xl font-black text-center mb-12">
//                 What Our <span className="text-red-500">Clients Say</span>
//               </h2>

//               <div className="relative max-w-4xl mx-auto h-80 md:h-72">
//                 {testimonials.map((t, idx) => (
//                   <motion.div
//                     key={idx}
//                     animate={{
//                       opacity: idx === activeTestimonial ? 1 : 0,
//                       scale: idx === activeTestimonial ? 1 : 0.9,
//                     }}
//                     transition={{ duration: 0.6 }}
//                     className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 border border-red-900/30 rounded-3xl p-10 flex flex-col justify-between"
//                   >
//                     <div className="flex gap-1 text-red-500 text-2xl">
//                       {"★".repeat(t.rating)}
//                     </div>
//                     <p className="text-2xl italic text-gray-100">"{t.text}"</p>
//                     <div>
//                       <p className="font-bold">{t.author}</p>
//                       <p className="text-gray-500 text-sm">{t.role}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="flex justify-center gap-3 mt-8">
//                 {testimonials.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setActiveTestimonial(i)}
//                     className={`h-3 rounded-full transition-all ${
//                       i === activeTestimonial
//                         ? "w-10 bg-red-600"
//                         : "w-3 bg-gray-700"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </motion.div>

//             {/* Final CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center py-20"
//             >
//               <h3 className="text-5xl md:text-6xl font-black mb-8">
//                 Ready to build something{" "}
//                 <span className="text-red-500">great</span> together?
//               </h3>
//               <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
//                 Let's turn your vision into reality. Our team is ready to start
//                 today.
//               </p>
//               <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl hover:shadow-red-900/70 transition">
//                 LET'S START THE CONVERSATION →
//               </button>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default About;

import React, { useCallback, useEffect, useRef, useState, Suspense } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Headphones,
  ShieldCheck,
  Users,
  Cloud,
  Zap,
  Target,
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, MeshDistortMaterial, Sphere, Box, Environment, PerspectiveCamera, useTexture } from "@react-three/drei";
import * as THREE from "three";
import HeroSection from "./HeroSection";
import MobileOnboarding from "./Mobile/Mobilebraing";
import img4 from "../Component/Mobile/img/image3.png";
import img5 from "../Component/Mobile/img/image11.png";

// ────────────────────────────────────────────────
// 3D Components
// ────────────────────────────────────────────────

// Animated 3D Sphere with distortion
const AnimatedSphere = ({ position, color }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

// Rotating Cube Array
const RotatingCubes = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  const cubes = [];
  const radius = 3;
  const count = 8;

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    
    cubes.push(
      <Box key={i} position={[x, 0, z]} args={[0.3, 0.3, 0.3]}>
        <meshStandardMaterial color="#dc2626" metalness={0.8} roughness={0.2} />
      </Box>
    );
  }

  return <group ref={groupRef}>{cubes}</group>;
};

// Floating Particles System
const FloatingParticles3D = () => {
  const particlesRef = useRef();
  const count = 200;
  
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    
    colors[i * 3] = 0.86;
    colors[i * 3 + 1] = 0.15;
    colors[i * 3 + 2] = 0.15;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} />
    </points>
  );
};

// 3D Text Logo
const Logo3D = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Text3D
        font="/fonts/helvetiker_bold.typeface.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-2, 0, 0]}
      >
        ALTA KNOTS
        <meshStandardMaterial color="#dc2626" metalness={0.9} roughness={0.1} />
      </Text3D>
    </Float>
  );
};

// Animated Ring
const AnimatedRing = ({ position }) => {
  const ringRef = useRef();
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      ringRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <mesh ref={ringRef} position={position}>
      <torusGeometry args={[1.5, 0.1, 16, 100]} />
      <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

// Pulsating Core
const PulsatingCore = () => {
  const coreRef = useRef();
  
  useFrame((state) => {
    if (coreRef.current) {
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.2;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={coreRef}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color="#dc2626"
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

// Main 3D Scene Component
const Scene3D = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#dc2626" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />
      <spotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#f87171"
      />

      <FloatingParticles3D />
      <PulsatingCore />
      <AnimatedRing position={[0, 0, 0]} />
      <RotatingCubes />
      
      <AnimatedSphere position={[-3, 2, -2]} color="#dc2626" />
      <AnimatedSphere position={[3, -2, -1]} color="#ef4444" />
      <AnimatedSphere position={[0, 3, 1]} color="#f87171" />
      
      <Environment preset="city" />
    </>
  );
};

// Stats Card 3D Component
const StatsCard3D = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[
        { pos: [-3, 0, 0], color: "#dc2626" },
        { pos: [-1, 0, 0], color: "#ef4444" },
        { pos: [1, 0, 0], color: "#f87171" },
        { pos: [3, 0, 0], color: "#fca5a5" },
      ].map((item, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <Box position={item.pos} args={[0.8, 1.2, 0.3]}>
            <meshStandardMaterial
              color={item.color}
              metalness={0.7}
              roughness={0.3}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
};

// Hero 3D Scene
const HeroScene3D = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
      />
      
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#dc2626" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#ef4444" />
      
      <StatsCard3D />
      <Environment preset="sunset" />
    </>
  );
};

// ────────────────────────────────────────────────
// Particles config - black & red theme
const particlesOptions = {
  fullScreen: { enable: true, zIndex: -1 },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 150, duration: 0.4 },
    },
  },
  particles: {
    color: { value: ["#dc2626", "#ef4444", "#f87171"] },
    links: {
      color: "#dc2626",
      distance: 140,
      enable: true,
      opacity: 0.15,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: true,
      speed: 1.2,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, value: 70 },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const About = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const sectionRefs = useRef([]);
  const [inViewSections, setInViewSections] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewSections((prev) => [
              ...new Set([...prev, entry.target.id]),
            ]);
          }
        });
      },
      { threshold: 0.15 },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      text: "Alta Knots transformed our entire digital infrastructure. Their team delivered beyond expectations!",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      rating: 5,
    },
    {
      text: "24/7 support that actually works. They're always there when we need them. True partners!",
      author: "Michael Chen",
      role: "CTO, GlobalSoft",
      rating: 5,
    },
    {
      text: "From concept to deployment in record time. Their expertise in mobile apps is unmatched.",
      author: "Priya Sharma",
      role: "Founder, AppVenture",
      rating: 5,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Particles Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />

        {/* Red Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 left-0 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />
        </div>

        {/* ==================== HERO SECTION WITH 3D ==================== */}
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
          {/* 3D Background Canvas */}
          <div className="absolute inset-0 z-0">
            <Canvas>
              <Suspense fallback={null}>
                <Scene3D />
              </Suspense>
            </Canvas>
          </div>

          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black/50 to-black/70" />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-6xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4">
                ALTA KNOTS
              </h1>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500 animate-gradient">
                  Your Technology Partner
                </span>
              </motion.h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              We build powerful, secure, and future-ready{" "}
              <span className="text-red-400 font-semibold relative inline-block">
                IT & BPO solutions
              </span>{" "}
              — so your business can focus on growth, not technology.
            </motion.p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Building the <span className="text-red-500">Future</span> of Business
                  Technology
                </h3>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                  At <span className="font-semibold text-white">Alta Knots</span>, we believe
                  technology should empower—not complicate. Our expert team delivers custom
                  software, mobile apps, cloud solutions, and 24/7 BPO support that drive real
                  business results.
                </p>

                <button className="mt-8 px-8 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition">
                  Get Started
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={img4}
                  alt="Tech Collaboration"
                  className="w-full max-w-2xl mt-6"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 mb-20">
              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Innovation Meets <span className="text-red-500">Excellence</span>
                </h3>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                  With cutting-edge technology and a client-first approach, we transform
                  businesses through seamless digital solutions. Experience the power of
                  innovation with <span className="font-semibold text-white">Alta Knots</span>.
                </p>

                <button className="mt-8 px-8 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition">
                  Learn More
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center bg-transparent">
                <img
                  src={img5}
                  alt="Tech Innovation"
                  className="w-full max-w-2xl mt-6 bg-transparent"
                />
              </div>
            </div>

            {/* Floating chat-style messages */}
            <motion.div variants={fadeInUp} className="relative mb-20">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 flex-wrap">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 max-w-sm text-left shadow-2xl rotate-[-3deg]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                      <Zap className="w-5 h-5" />
                    </div>
                    <p className="text-red-400 font-bold text-lg">Alta Knots</p>
                  </div>
                  <p className="text-gray-100">
                    Bonjour! Ready to transform your business with secure
                    software & reliable support?
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-red-950/50 to-black/90 backdrop-blur-xl border border-red-500/40 rounded-3xl p-8 max-w-sm text-left shadow-2xl rotate-[4deg]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <p className="text-red-300 font-bold text-lg">You</p>
                  </div>
                  <p className="text-gray-100">
                    Yes! We need a strong website, mobile app & 24/7 BPO
                    support...
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 max-w-sm text-left shadow-2xl rotate-[-2deg] md:mt-16"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                      <Target className="w-5 h-5" />
                    </div>
                    <p className="text-red-400 font-bold text-lg">Alta Knots</p>
                  </div>
                  <p className="text-gray-100">
                    Perfect! Let's build it together — fast, secure & scalable.
                    🚀
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl font-bold shadow-lg shadow-red-900/50 hover:shadow-red-900/70 transition-all"
              >
                Start Building Your Future
                <ArrowRight className="inline ml-3" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                className="px-10 py-6 border-2 border-red-600/60 rounded-full text-red-400 hover:bg-red-950/40 transition-all"
              >
                See Our Solutions
                <ArrowRight className="inline ml-3" />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* ==================== ABOUT SECTION ==================== */}
        <section className="relative py-20 px-6 md:px-12 lg:px-24 z-10">
          <div className="max-w-7xl mx-auto">
            {/* About Us Intro */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-7xl font-black mb-6">
                ABOUT <span className="text-red-500">ALTA KNOTS</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Technology that connects. Solutions that deliver. Partnerships
                that last.
              </p>
            </motion.div>

            {/* 3D Stats Section */}
            <div className="relative h-[400px] mb-24">
              <Canvas>
                <Suspense fallback={null}>
                  <HeroScene3D />
                </Suspense>
              </Canvas>
            </div>

            {/* Fitness App Style About Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-12 items-center mb-24"
            >
              {/* Left - Text */}
              <motion.div variants={fadeInLeft} className="space-y-6">
                <h5 className="text-red-400 font-semibold text-xl">
                  About Our Solution
                </h5>
                <h2 className="text-4xl md:text-5xl font-bold">
                  #1 Partner For Your Business Growth
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We deliver cutting-edge technology solutions that transform businesses.
                  From custom software development to 24/7 BPO support, our team ensures
                  your digital infrastructure is robust, scalable, and secure.
                </p>

                <div className="grid grid-cols-2 gap-8 my-8">
                  <div className="flex items-start gap-4">
                    <div className="text-red-500 text-4xl font-black">50+</div>
                    <p className="text-gray-400">Projects Delivered</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-red-500 text-4xl font-black">100+</div>
                    <p className="text-gray-400">Happy Clients</p>
                  </div>
                </div>

                <button className="px-10 py-4 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition">
                  Read More →
                </button>
              </motion.div>

              {/* Right - Image */}
              <motion.div variants={fadeInRight}>
                <img
                  src="https://img.freepik.com/free-photo/group-multinational-busy-people-working-office_146671-15658.jpg?w=740"
                  alt="Team working"
                  className="rounded-2xl shadow-2xl w-full object-cover border border-red-900/30"
                />
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
            >
              {[
                { num: "50+", label: "Projects Delivered", icon: Code },
                { num: "24/7", label: "Support Coverage", icon: Headphones },
                { num: "99.9%", label: "Uptime Commitment", icon: ShieldCheck },
                { num: "100+", label: "Happy Clients", icon: Users },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 text-center transform-gpu perspective-1000"
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-red-500" />
                  <div className="text-4xl font-black mb-2">{item.num}</div>
                  <p className="text-gray-400">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Onboarding / Showcase */}
            <div className="mb-24">
              <MobileOnboarding />
            </div>

            {/* Testimonials */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-24"
            >
              <h2 className="text-5xl font-black text-center mb-12">
                What Our <span className="text-red-500">Clients Say</span>
              </h2>

              <div className="relative max-w-4xl mx-auto h-80 md:h-72">
                {testimonials.map((t, idx) => (
                  <motion.div
                    key={idx}
                    animate={{
                      opacity: idx === activeTestimonial ? 1 : 0,
                      scale: idx === activeTestimonial ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 border border-red-900/30 rounded-3xl p-10 flex flex-col justify-between"
                  >
                    <div className="flex gap-1 text-red-500 text-2xl">
                      {"★".repeat(t.rating)}
                    </div>
                    <p className="text-2xl italic text-gray-100">"{t.text}"</p>
                    <div>
                      <p className="font-bold">{t.author}</p>
                      <p className="text-gray-500 text-sm">{t.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-3 rounded-full transition-all ${
                      i === activeTestimonial
                        ? "w-10 bg-red-600"
                        : "w-3 bg-gray-700"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <h3 className="text-5xl md:text-6xl font-black mb-8">
                Ready to build something{" "}
                <span className="text-red-500">great</span> together?
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Let's turn your vision into reality. Our team is ready to start
                today.
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl hover:shadow-red-900/70 transition">
                LET'S START THE CONVERSATION →
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;


// import React, { useCallback, useEffect, useRef, useState, Suspense } from "react";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Code,
//   Headphones,
//   ShieldCheck,
//   Users,
//   Cloud,
//   Zap,
//   Target,
//   Database,
//   Cpu,
//   Network,
//   Lock,
// } from "lucide-react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { 
//   OrbitControls, 
//   Float, 
//   Text3D, 
//   MeshDistortMaterial, 
//   Sphere, 
//   Box, 
//   Environment, 
//   PerspectiveCamera,
//   Stars,
//   Trail,
//   Cylinder,
//   Cone,
//   Torus,
//   useGLTF,
//   Html
// } from "@react-three/drei";
// import * as THREE from "three";
// import HeroSection from "./HeroSection";
// import MobileOnboarding from "./Mobile/Mobilebraing";
// import img4 from "../Component/Mobile/img/image2.png";
// import img5 from "../Component/Mobile/img/image11.png";

// // ────────────────────────────────────────────────
// // MOUSE-INTERACTIVE 3D COMPONENTS
// // ────────────────────────────────────────────────

// // Mouse Follower Component
// const MouseFollower = ({ mousePosition }) => {
//   const meshRef = useRef();
  
//   useFrame(() => {
//     if (meshRef.current && mousePosition.current) {
//       meshRef.current.position.x = THREE.MathUtils.lerp(
//         meshRef.current.position.x,
//         mousePosition.current.x * 5,
//         0.1
//       );
//       meshRef.current.position.y = THREE.MathUtils.lerp(
//         meshRef.current.position.y,
//         mousePosition.current.y * 5,
//         0.1
//       );
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <sphereGeometry args={[0.3, 32, 32]} />
//       <meshStandardMaterial
//         color="#dc2626"
//         emissive="#dc2626"
//         emissiveIntensity={0.5}
//         transparent
//         opacity={0.6}
//       />
//     </mesh>
//   );
// };

// // IT Network Nodes - Mouse Interactive
// const NetworkNode = ({ position, mousePosition, index }) => {
//   const meshRef = useRef();
//   const [hovered, setHovered] = useState(false);
  
//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
//       meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
//       if (mousePosition.current) {
//         const dx = mousePosition.current.x * 5 - meshRef.current.position.x;
//         const dy = mousePosition.current.y * 5 - meshRef.current.position.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
        
//         if (distance < 3) {
//           meshRef.current.position.x += dx * 0.01;
//           meshRef.current.position.y += dy * 0.01;
//         }
//       }
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={1} floatIntensity={2}>
//       <mesh
//         ref={meshRef}
//         position={position}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       >
//         <octahedronGeometry args={[hovered ? 0.4 : 0.3, 0]} />
//         <meshStandardMaterial
//           color={hovered ? "#ef4444" : "#dc2626"}
//           metalness={0.9}
//           roughness={0.1}
//           emissive={hovered ? "#ef4444" : "#dc2626"}
//           emissiveIntensity={hovered ? 0.8 : 0.3}
//         />
//       </mesh>
//     </Float>
//   );
// };

// // Data Stream Particles - Interactive
// const DataStream = ({ mousePosition }) => {
//   const particlesRef = useRef();
//   const count = 500;
  
//   const positions = new Float32Array(count * 3);
//   const colors = new Float32Array(count * 3);
//   const velocities = useRef(new Float32Array(count * 3));
  
//   for (let i = 0; i < count; i++) {
//     positions[i * 3] = (Math.random() - 0.5) * 30;
//     positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
//     positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    
//     velocities.current[i * 3] = (Math.random() - 0.5) * 0.02;
//     velocities.current[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
//     velocities.current[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    
//     colors[i * 3] = 0.86 + Math.random() * 0.1;
//     colors[i * 3 + 1] = 0.15 + Math.random() * 0.1;
//     colors[i * 3 + 2] = 0.15 + Math.random() * 0.1;
//   }

//   useFrame(() => {
//     if (particlesRef.current) {
//       const positions = particlesRef.current.geometry.attributes.position.array;
      
//       for (let i = 0; i < count; i++) {
//         positions[i * 3] += velocities.current[i * 3];
//         positions[i * 3 + 1] += velocities.current[i * 3 + 1];
//         positions[i * 3 + 2] += velocities.current[i * 3 + 2];
        
//         if (mousePosition.current) {
//           const dx = mousePosition.current.x * 5 - positions[i * 3];
//           const dy = mousePosition.current.y * 5 - positions[i * 3 + 1];
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < 2) {
//             velocities.current[i * 3] += dx * 0.0001;
//             velocities.current[i * 3 + 1] += dy * 0.0001;
//           }
//         }
        
//         if (Math.abs(positions[i * 3]) > 15) velocities.current[i * 3] *= -1;
//         if (Math.abs(positions[i * 3 + 1]) > 15) velocities.current[i * 3 + 1] *= -1;
//         if (Math.abs(positions[i * 3 + 2]) > 15) velocities.current[i * 3 + 2] *= -1;
//       }
      
//       particlesRef.current.geometry.attributes.position.needsUpdate = true;
//       particlesRef.current.rotation.y += 0.0005;
//     }
//   });

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={count}
//           array={positions}
//           itemSize={3}
//         />
//         <bufferAttribute
//           attach="attributes-color"
//           count={count}
//           array={colors}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.08}
//         vertexColors
//         transparent
//         opacity={0.8}
//         sizeAttenuation
//         blending={THREE.AdditiveBlending}
//       />
//     </points>
//   );
// };

// // Server Rack 3D Model
// const ServerRack = ({ position, mousePosition }) => {
//   const groupRef = useRef();
  
//   useFrame((state) => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      
//       if (mousePosition.current) {
//         groupRef.current.rotation.x = mousePosition.current.y * 0.3;
//         groupRef.current.rotation.z = mousePosition.current.x * 0.1;
//       }
//     }
//   });

//   return (
//     <group ref={groupRef} position={position}>
//       <Box args={[0.8, 2, 0.4]} position={[0, 0, 0]}>
//         <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
//       </Box>
      
//       {[...Array(6)].map((_, i) => (
//         <Box key={i} args={[0.7, 0.25, 0.35]} position={[0, -0.75 + i * 0.3, 0.05]}>
//           <meshStandardMaterial
//             color={i % 2 === 0 ? "#dc2626" : "#ef4444"}
//             metalness={0.8}
//             roughness={0.3}
//             emissive={i % 2 === 0 ? "#dc2626" : "#ef4444"}
//             emissiveIntensity={0.2}
//           />
//         </Box>
//       ))}
      
//       {[...Array(12)].map((_, i) => (
//         <Sphere
//           key={`light-${i}`}
//           args={[0.03, 16, 16]}
//           position={[-0.3 + (i % 4) * 0.2, -0.75 + Math.floor(i / 4) * 0.6, 0.25]}
//         >
//           <meshStandardMaterial
//             color="#00ff00"
//             emissive="#00ff00"
//             emissiveIntensity={Math.random() > 0.5 ? 1 : 0.2}
//           />
//         </Sphere>
//       ))}
//     </group>
//   );
// };

// // Cloud Computing Visual
// const CloudComputing = ({ position, mousePosition }) => {
//   const groupRef = useRef();
//   const [hovered, setHovered] = useState(false);
  
//   useFrame((state) => {
//     if (groupRef.current) {
//       groupRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.3;
      
//       if (mousePosition.current) {
//         const targetX = mousePosition.current.x * 2;
//         groupRef.current.rotation.y = THREE.MathUtils.lerp(
//           groupRef.current.rotation.y,
//           targetX,
//           0.05
//         );
//       }
//     }
//   });

//   return (
//     <group
//       ref={groupRef}
//       position={position}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//     >
//       <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
//         <meshStandardMaterial
//           color={hovered ? "#3b82f6" : "#60a5fa"}
//           transparent
//           opacity={0.7}
//           metalness={0.3}
//           roughness={0.4}
//         />
//       </Sphere>
//       <Sphere args={[0.4, 32, 32]} position={[-0.4, -0.1, 0]}>
//         <meshStandardMaterial
//           color={hovered ? "#3b82f6" : "#60a5fa"}
//           transparent
//           opacity={0.6}
//           metalness={0.3}
//           roughness={0.4}
//         />
//       </Sphere>
//       <Sphere args={[0.35, 32, 32]} position={[0.4, -0.1, 0]}>
//         <meshStandardMaterial
//           color={hovered ? "#3b82f6" : "#60a5fa"}
//           transparent
//           opacity={0.6}
//           metalness={0.3}
//           roughness={0.4}
//         />
//       </Sphere>
      
//       {hovered && (
//         <Html>
//           <div className="bg-black/80 text-white px-3 py-1 rounded text-xs whitespace-nowrap">
//             Cloud Solutions
//           </div>
//         </Html>
//       )}
//     </group>
//   );
// };

// // Cybersecurity Shield
// const SecurityShield = ({ position, mousePosition }) => {
//   const shieldRef = useRef();
//   const [active, setActive] = useState(false);
  
//   useFrame((state) => {
//     if (shieldRef.current) {
//       shieldRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      
//       const pulse = Math.sin(state.clock.getElapsedTime() * 2) * 0.1 + 1;
//       shieldRef.current.scale.set(pulse, pulse, pulse);
      
//       if (mousePosition.current) {
//         const dx = mousePosition.current.x * 5 - position[0];
//         const dy = mousePosition.current.y * 5 - position[1];
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         setActive(distance < 2);
//       }
//     }
//   });

//   return (
//     <mesh
//       ref={shieldRef}
//       position={position}
//       onPointerOver={() => setActive(true)}
//       onPointerOut={() => setActive(false)}
//     >
//       <cylinderGeometry args={[0.8, 0.8, 0.1, 6]} />
//       <meshStandardMaterial
//         color={active ? "#10b981" : "#059669"}
//         metalness={0.9}
//         roughness={0.1}
//         emissive={active ? "#10b981" : "#059669"}
//         emissiveIntensity={active ? 0.8 : 0.3}
//         wireframe={!active}
//       />
//     </mesh>
//   );
// };

// // Binary Code Rain
// const BinaryRain = ({ mousePosition }) => {
//   const groupRef = useRef();
  
//   useFrame((state) => {
//     if (groupRef.current && mousePosition.current) {
//       groupRef.current.rotation.y = mousePosition.current.x * 0.5;
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       {[...Array(30)].map((_, i) => (
//         <Float key={i} speed={1 + Math.random()} rotationIntensity={0.2} floatIntensity={3}>
//           <Cylinder
//             args={[0.02, 0.02, Math.random() * 2 + 1, 8]}
//             position={[
//               (Math.random() - 0.5) * 10,
//               (Math.random() - 0.5) * 10,
//               (Math.random() - 0.5) * 5,
//             ]}
//           >
//             <meshStandardMaterial
//               color="#00ff00"
//               emissive="#00ff00"
//               emissiveIntensity={0.5}
//               transparent
//               opacity={0.6}
//             />
//           </Cylinder>
//         </Float>
//       ))}
//     </group>
//   );
// };

// // Main Interactive IT Scene
// const ITScene3D = () => {
//   const mousePosition = useRef({ x: 0, y: 0 });
//   const { viewport } = useThree();

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       mousePosition.current = {
//         x: (event.clientX / window.innerWidth) * 2 - 1,
//         y: -(event.clientY / window.innerHeight) * 2 + 1,
//       };
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <>
//       <PerspectiveCamera makeDefault position={[0, 0, 12]} />
//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         autoRotate
//         autoRotateSpeed={0.3}
//         maxPolarAngle={Math.PI / 1.5}
//         minPolarAngle={Math.PI / 3}
//       />
      
//       {/* Lighting */}
//       <ambientLight intensity={0.4} />
//       <pointLight position={[10, 10, 10]} intensity={2} color="#dc2626" />
//       <pointLight position={[-10, -10, -10]} intensity={1} color="#ef4444" />
//       <spotLight
//         position={[0, 10, 0]}
//         angle={0.4}
//         penumbra={1}
//         intensity={2}
//         color="#f87171"
//         castShadow
//       />
//       <pointLight position={[0, 0, 5]} intensity={1} color="#60a5fa" />

//       {/* Interactive Elements */}
//       <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
//       <DataStream mousePosition={mousePosition} />
//       <MouseFollower mousePosition={mousePosition} />
//       <BinaryRain mousePosition={mousePosition} />
      
//       {/* Network Nodes */}
//       {[
//         [-4, 3, -2],
//         [4, 3, -1],
//         [-3, -2, 0],
//         [3, -2, 1],
//         [0, 4, -2],
//         [-5, 0, 2],
//         [5, 0, -3],
//         [0, -3, 2],
//       ].map((pos, i) => (
//         <NetworkNode
//           key={i}
//           position={pos}
//           mousePosition={mousePosition}
//           index={i}
//         />
//       ))}
      
//       {/* IT Infrastructure Elements */}
//       <ServerRack position={[-3, 0, -2]} mousePosition={mousePosition} />
//       <ServerRack position={[3, 0, -2]} mousePosition={mousePosition} />
//       <CloudComputing position={[0, 3, 0]} mousePosition={mousePosition} />
//       <SecurityShield position={[0, -2, 1]} mousePosition={mousePosition} />
      
//       {/* Connecting Lines */}
//       {[...Array(15)].map((_, i) => {
//         const start = new THREE.Vector3(
//           (Math.random() - 0.5) * 8,
//           (Math.random() - 0.5) * 8,
//           (Math.random() - 0.5) * 4
//         );
//         const end = new THREE.Vector3(
//           (Math.random() - 0.5) * 8,
//           (Math.random() - 0.5) * 8,
//           (Math.random() - 0.5) * 4
//         );
//         const points = [start, end];
//         const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
//         return (
//           <line key={`line-${i}`} geometry={geometry}>
//             <lineBasicMaterial
//               attach="material"
//               color="#dc2626"
//               transparent
//               opacity={0.2}
//             />
//           </line>
//         );
//       })}
      
//       <Environment preset="night" />
//     </>
//   );
// };

// // Stats 3D Scene with Mouse Interaction
// const Stats3DScene = () => {
//   const mousePosition = useRef({ x: 0, y: 0 });
  
//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       mousePosition.current = {
//         x: (event.clientX / window.innerWidth) * 2 - 1,
//         y: -(event.clientY / window.innerHeight) * 2 + 1,
//       };
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const StatsCube = ({ position, color, icon }) => {
//     const meshRef = useRef();
//     const [hovered, setHovered] = useState(false);
    
//     useFrame((state) => {
//       if (meshRef.current) {
//         meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
//         meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
        
//         if (mousePosition.current) {
//           const dx = mousePosition.current.x * 3 - position[0];
//           const dy = mousePosition.current.y * 3 - position[1];
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < 2) {
//             meshRef.current.scale.setScalar(1.2);
//           } else {
//             meshRef.current.scale.setScalar(1);
//           }
//         }
//       }
//     });

//     return (
//       <Float speed={2} rotationIntensity={1} floatIntensity={2}>
//         <mesh
//           ref={meshRef}
//           position={position}
//           onPointerOver={() => setHovered(true)}
//           onPointerOut={() => setHovered(false)}
//         >
//           <boxGeometry args={[0.8, 1.2, 0.3]} />
//           <meshStandardMaterial
//             color={color}
//             metalness={0.9}
//             roughness={0.1}
//             emissive={color}
//             emissiveIntensity={hovered ? 0.8 : 0.3}
//           />
//         </mesh>
//       </Float>
//     );
//   };

//   return (
//     <>
//       <PerspectiveCamera makeDefault position={[0, 0, 8]} />
//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         autoRotate
//         autoRotateSpeed={1}
//       />
      
//       <ambientLight intensity={0.3} />
//       <pointLight position={[5, 5, 5]} intensity={2} color="#dc2626" />
//       <pointLight position={[-5, -5, -5]} intensity={1} color="#ef4444" />
//       <spotLight position={[0, 8, 0]} angle={0.3} penumbra={1} intensity={1.5} color="#f87171" />
      
//       <StatsCube position={[-3, 0, 0]} color="#dc2626" icon="code" />
//       <StatsCube position={[-1, 0, 0]} color="#ef4444" icon="headphones" />
//       <StatsCube position={[1, 0, 0]} color="#f87171" icon="shield" />
//       <StatsCube position={[3, 0, 0]} color="#fca5a5" icon="users" />
      
//       <Environment preset="sunset" />
//     </>
//   );
// };

// // ────────────────────────────────────────────────
// // Particles config
// const particlesOptions = {
//   fullScreen: { enable: true, zIndex: -1 },
//   background: { color: { value: "transparent" } },
//   fpsLimit: 60,
//   interactivity: {
//     events: {
//       onClick: { enable: true, mode: "push" },
//       onHover: { enable: true, mode: "repulse" },
//       resize: true,
//     },
//     modes: {
//       push: { quantity: 4 },
//       repulse: { distance: 150, duration: 0.4 },
//     },
//   },
//   particles: {
//     color: { value: ["#dc2626", "#ef4444", "#f87171"] },
//     links: {
//       color: "#dc2626",
//       distance: 140,
//       enable: true,
//       opacity: 0.15,
//       width: 1,
//     },
//     move: {
//       direction: "none",
//       enable: true,
//       outModes: { default: "bounce" },
//       random: true,
//       speed: 1.2,
//       straight: false,
//     },
//     number: { density: { enable: true, area: 800 }, value: 70 },
//     opacity: { value: 0.3 },
//     shape: { type: "circle" },
//     size: { value: { min: 1, max: 3 } },
//   },
//   detectRetina: true,
// };

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const fadeInLeft = {
//   hidden: { opacity: 0, x: -60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const fadeInRight = {
//   hidden: { opacity: 0, x: 60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// const About = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const sectionRefs = useRef([]);
//   const [inViewSections, setInViewSections] = useState([]);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setInViewSections((prev) => [
//               ...new Set([...prev, entry.target.id]),
//             ]);
//           }
//         });
//       },
//       { threshold: 0.15 },
//     );

//     sectionRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % 3);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const testimonials = [
//     {
//       text: "Alta Knots transformed our entire digital infrastructure. Their team delivered beyond expectations!",
//       author: "Sarah Johnson",
//       role: "CEO, TechStart Inc",
//       rating: 5,
//     },
//     {
//       text: "24/7 support that actually works. They're always there when we need them. True partners!",
//       author: "Michael Chen",
//       role: "CTO, GlobalSoft",
//       rating: 5,
//     },
//     {
//       text: "From concept to deployment in record time. Their expertise in mobile apps is unmatched.",
//       author: "Priya Sharma",
//       role: "Founder, AppVenture",
//       rating: 5,
//     },
//   ];

//   return (
//     <>
//       <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
//         <Particles
//           id="tsparticles"
//           init={particlesInit}
//           options={particlesOptions}
//           className="absolute inset-0 z-0"
//         />

//         <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
//           <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-40 left-0 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />
//         </div>

//         {/* ==================== HERO SECTION WITH MOUSE-INTERACTIVE 3D ==================== */}
//         <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
//           <div className="absolute inset-0 z-0">
//             <Canvas shadows>
//               <Suspense fallback={null}>
//                 <ITScene3D />
//               </Suspense>
//             </Canvas>
//           </div>

//           <div className="absolute inset-0 z-0">
//             <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black/50 to-black/70" />
//           </div>

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="relative z-10 max-w-6xl mx-auto text-center"
//           >
//             <motion.div variants={fadeInUp} className="mb-8">
//               <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4">
//                 ALTA KNOTS
//               </h1>
//               <motion.h2
//                 variants={fadeInUp}
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4"
//               >
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500 animate-gradient">
//                   Your Technology Partner
//                 </span>
//               </motion.h2>
//             </motion.div>

//             <motion.p
//               variants={fadeInUp}
//               className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
//             >
//               We build powerful, secure, and future-ready{" "}
//               <span className="text-red-400 font-semibold relative inline-block">
//                 IT & BPO solutions
//               </span>{" "}
//               — so your business can focus on growth, not technology.
//             </motion.p>

//             <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
//               <div className="w-full md:w-1/2">
//                 <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
//                   Building the <span className="text-red-500">Future</span> of Business
//                   Technology
//                 </h3>

//                 <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
//                   At <span className="font-semibold text-white">Alta Knots</span>, we believe
//                   technology should empower—not complicate. Our expert team delivers custom
//                   software, mobile apps, cloud solutions, and 24/7 BPO support that drive real
//                   business results.
//                 </p>

//                 <button className="mt-8 px-8 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition">
//                   Get Started
//                 </button>
//               </div>

//               <div className="w-full md:w-1/2 flex justify-center">
//                 <img
//                   src={img4}
//                   alt="Tech Collaboration"
//                   className="w-full max-w-2xl mt-6 rounded-2xl shadow-2xl shadow-red-900/30"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 mb-20">
//               <div className="w-full md:w-1/2">
//                 <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
//                   Innovation Meets <span className="text-red-500">Excellence</span>
//                 </h3>

//                 <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
//                   With cutting-edge technology and a client-first approach, we transform
//                   businesses through seamless digital solutions. Experience the power of
//                   innovation with <span className="font-semibold text-white">Alta Knots</span>.
//                 </p>

//                 <button className="mt-8 px-8 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition">
//                   Learn More
//                 </button>
//               </div>

//               <div className="w-full md:w-1/2 flex justify-center bg-transparent">
//                 <img
//                   src={img5}
//                   alt="Tech Innovation"
//                   className="w-full max-w-2xl mt-6 bg-transparent rounded-2xl shadow-2xl shadow-red-900/30"
//                 />
//               </div>
//             </div>

//             {/* Floating chat-style messages */}
//             <motion.div variants={fadeInUp} className="relative mb-20">
//               <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 flex-wrap">
//                 <motion.div
//                   whileHover={{ scale: 1.05, rotate: -1 }}
//                   className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 max-w-sm text-left shadow-2xl rotate-[-3deg]"
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
//                       <Zap className="w-5 h-5" />
//                     </div>
//                     <p className="text-red-400 font-bold text-lg">Alta Knots</p>
//                   </div>
//                   <p className="text-gray-100">
//                     Bonjour! Ready to transform your business with secure
//                     software & reliable support?
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ scale: 1.05, rotate: 2 }}
//                   className="bg-gradient-to-br from-red-950/50 to-black/90 backdrop-blur-xl border border-red-500/40 rounded-3xl p-8 max-w-sm text-left shadow-2xl rotate-[4deg]"
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
//                       <Users className="w-5 h-5" />
//                     </div>
//                     <p className="text-red-300 font-bold text-lg">You</p>
//                   </div>
//                   <p className="text-gray-100">
//                     Yes! We need a strong website, mobile app & 24/7 BPO
//                     support...
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ scale: 1.05, rotate: -1 }}
//                   className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 max-w-sm text-left shadow-2xl rotate-[-2deg] md:mt-16"
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
//                       <Target className="w-5 h-5" />
//                     </div>
//                     <p className="text-red-400 font-bold text-lg">Alta Knots</p>
//                   </div>
//                   <p className="text-gray-100">
//                     Perfect! Let's build it together — fast, secure & scalable.
//                     🚀
//                   </p>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* CTAs */}
//             <motion.div
//               variants={fadeInUp}
//               className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.08 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl font-bold shadow-lg shadow-red-900/50 hover:shadow-red-900/70 transition-all"
//               >
//                 Start Building Your Future
//                 <ArrowRight className="inline ml-3" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.08 }}
//                 className="px-10 py-6 border-2 border-red-600/60 rounded-full text-red-400 hover:bg-red-950/40 transition-all"
//               >
//                 See Our Solutions
//                 <ArrowRight className="inline ml-3" />
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* ==================== ABOUT SECTION ==================== */}
//         <section className="relative py-20 px-6 md:px-12 lg:px-24 z-10">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={staggerContainer}
//               className="text-center mb-16"
//             >
//               <h2 className="text-5xl md:text-7xl font-black mb-6">
//                 ABOUT <span className="text-red-500">ALTA KNOTS</span>
//               </h2>
//               <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
//                 Technology that connects. Solutions that deliver. Partnerships
//                 that last.
//               </p>
//             </motion.div>

//             {/* 3D Stats Section with Mouse Interaction */}
//             <div className="relative h-[400px] mb-24">
//               <Canvas>
//                 <Suspense fallback={null}>
//                   <Stats3DScene />
//                 </Suspense>
//               </Canvas>
//             </div>

//             {/* About Block */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={staggerContainer}
//               className="grid md:grid-cols-2 gap-12 items-center mb-24"
//             >
//               <motion.div variants={fadeInLeft} className="space-y-6">
//                 <h5 className="text-red-400 font-semibold text-xl">
//                   About Our Solution
//                 </h5>
//                 <h2 className="text-4xl md:text-5xl font-bold">
//                   #1 Partner For Your Business Growth
//                 </h2>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   We deliver cutting-edge technology solutions that transform businesses.
//                   From custom software development to 24/7 BPO support, our team ensures
//                   your digital infrastructure is robust, scalable, and secure.
//                 </p>

//                 <div className="grid grid-cols-2 gap-8 my-8">
//                   <div className="flex items-start gap-4">
//                     <div className="text-red-500 text-4xl font-black">50+</div>
//                     <p className="text-gray-400">Projects Delivered</p>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="text-red-500 text-4xl font-black">100+</div>
//                     <p className="text-gray-400">Happy Clients</p>
//                   </div>
//                 </div>

//                 <button className="px-10 py-4 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition">
//                   Read More →
//                 </button>
//               </motion.div>

//               <motion.div variants={fadeInRight}>
//                 <img
//                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
//                   alt="Team working"
//                   className="rounded-2xl shadow-2xl w-full object-cover border border-red-900/30"
//                 />
//               </motion.div>
//             </motion.div>

//             {/* Stats Cards */}
//             <motion.div
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
//             >
//               {[
//                 { num: "50+", label: "Projects Delivered", icon: Code },
//                 { num: "24/7", label: "Support Coverage", icon: Headphones },
//                 { num: "99.9%", label: "Uptime Commitment", icon: ShieldCheck },
//                 { num: "100+", label: "Happy Clients", icon: Users },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   variants={scaleIn}
//                   whileHover={{ scale: 1.05, rotateY: 10 }}
//                   className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 text-center transform-gpu perspective-1000 cursor-pointer"
//                 >
//                   <item.icon className="w-12 h-12 mx-auto mb-4 text-red-500" />
//                   <div className="text-4xl font-black mb-2">{item.num}</div>
//                   <p className="text-gray-400">{item.label}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             <div className="mb-24">
//               <MobileOnboarding />
//             </div>

//             {/* Testimonials */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="mb-24"
//             >
//               <h2 className="text-5xl font-black text-center mb-12">
//                 What Our <span className="text-red-500">Clients Say</span>
//               </h2>

//               <div className="relative max-w-4xl mx-auto h-80 md:h-72">
//                 {testimonials.map((t, idx) => (
//                   <motion.div
//                     key={idx}
//                     animate={{
//                       opacity: idx === activeTestimonial ? 1 : 0,
//                       scale: idx === activeTestimonial ? 1 : 0.9,
//                     }}
//                     transition={{ duration: 0.6 }}
//                     className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 border border-red-900/30 rounded-3xl p-10 flex flex-col justify-between"
//                   >
//                     <div className="flex gap-1 text-red-500 text-2xl">
//                       {"★".repeat(t.rating)}
//                     </div>
//                     <p className="text-2xl italic text-gray-100">"{t.text}"</p>
//                     <div>
//                       <p className="font-bold">{t.author}</p>
//                       <p className="text-gray-500 text-sm">{t.role}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="flex justify-center gap-3 mt-8">
//                 {testimonials.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setActiveTestimonial(i)}
//                     className={`h-3 rounded-full transition-all ${
//                       i === activeTestimonial
//                         ? "w-10 bg-red-600"
//                         : "w-3 bg-gray-700"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </motion.div>

//             {/* Final CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center py-20"
//             >
//               <h3 className="text-5xl md:text-6xl font-black mb-8">
//                 Ready to build something{" "}
//                 <span className="text-red-500">great</span> together?
//               </h3>
//               <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
//                 Let's turn your vision into reality. Our team is ready to start
//                 today.
//               </p>
//               <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl hover:shadow-red-900/70 transition">
//                 LET'S START THE CONVERSATION →
//               </button>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default About;


// import React, { useCallback, useEffect, useRef, useState, Suspense } from "react";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Code,
//   Headphones,
//   ShieldCheck,
//   Users,
//   Cloud,
//   Zap,
//   Target,
//   Database,
//   Cpu,
//   Network,
//   Lock,
// } from "lucide-react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { 
//   OrbitControls, 
//   Float, 
//   Text3D, 
//   MeshDistortMaterial, 
//   Sphere, 
//   Box, 
//   Environment, 
//   PerspectiveCamera,
//   Stars,
//   Trail,
//   Cylinder,
//   Cone,
//   Torus,
//   useGLTF,
//   Html
// } from "@react-three/drei";
// import * as THREE from "three";
// import HeroSection from "./HeroSection";
// import MobileOnboarding from "./Mobile/Mobilebraing";
// import img4 from "../Component/Mobile/img/image2.png";
// import img5 from "../Component/Mobile/img/image11.png";

// // ────────────────────────────────────────────────
// // MOUSE-INTERACTIVE 3D COMPONENTS
// // ────────────────────────────────────────────────

// // Mouse Follower Component
// const MouseFollower = ({ mousePosition }) => {
//   const meshRef = useRef();
  
//   useFrame(() => {
//     if (meshRef.current && mousePosition.current) {
//       meshRef.current.position.x = THREE.MathUtils.lerp(
//         meshRef.current.position.x,
//         mousePosition.current.x * 5,
//         0.1
//       );
//       meshRef.current.position.y = THREE.MathUtils.lerp(
//         meshRef.current.position.y,
//         mousePosition.current.y * 5,
//         0.1
//       );
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <sphereGeometry args={[0.3, 32, 32]} />
//       <meshStandardMaterial
//         color="#dc2626"
//         emissive="#dc2626"
//         emissiveIntensity={0.5}
//         transparent
//         opacity={0.6}
//       />
//     </mesh>
//   );
// };

// // IT Network Nodes - Mouse Interactive
// const NetworkNode = ({ position, mousePosition, index }) => {
//   const meshRef = useRef();
//   const [hovered, setHovered] = useState(false);
  
//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
//       meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
//       if (mousePosition.current) {
//         const dx = mousePosition.current.x * 5 - meshRef.current.position.x;
//         const dy = mousePosition.current.y * 5 - meshRef.current.position.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
        
//         if (distance < 3) {
//           meshRef.current.position.x += dx * 0.01;
//           meshRef.current.position.y += dy * 0.01;
//         }
//       }
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={1} floatIntensity={2}>
//       <mesh
//         ref={meshRef}
//         position={position}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       >
//         <octahedronGeometry args={[hovered ? 0.4 : 0.3, 0]} />
//         <meshStandardMaterial
//           color={hovered ? "#ef4444" : "#dc2626"}
//           metalness={0.9}
//           roughness={0.1}
//           emissive={hovered ? "#ef4444" : "#dc2626"}
//           emissiveIntensity={hovered ? 0.8 : 0.3}
//         />
//       </mesh>
//     </Float>
//   );
// };

// // Data Stream Particles - Interactive
// const DataStream = ({ mousePosition }) => {
//   const particlesRef = useRef();
//   const count = 500;
  
//   const positions = new Float32Array(count * 3);
//   const colors = new Float32Array(count * 3);
//   const velocities = useRef(new Float32Array(count * 3));
  
//   for (let i = 0; i < count; i++) {
//     positions[i * 3] = (Math.random() - 0.5) * 30;
//     positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
//     positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    
//     velocities.current[i * 3] = (Math.random() - 0.5) * 0.02;
//     velocities.current[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
//     velocities.current[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    
//     colors[i * 3] = 0.86 + Math.random() * 0.1;
//     colors[i * 3 + 1] = 0.15 + Math.random() * 0.1;
//     colors[i * 3 + 2] = 0.15 + Math.random() * 0.1;
//   }

//   useFrame(() => {
//     if (particlesRef.current) {
//       const positions = particlesRef.current.geometry.attributes.position.array;
      
//       for (let i = 0; i < count; i++) {
//         positions[i * 3] += velocities.current[i * 3];
//         positions[i * 3 + 1] += velocities.current[i * 3 + 1];
//         positions[i * 3 + 2] += velocities.current[i * 3 + 2];
        
//         if (mousePosition.current) {
//           const dx = mousePosition.current.x * 5 - positions[i * 3];
//           const dy = mousePosition.current.y * 5 - positions[i * 3 + 1];
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < 2) {
//             velocities.current[i * 3] += dx * 0.0001;
//             velocities.current[i * 3 + 1] += dy * 0.0001;
//           }
//         }
        
//         if (Math.abs(positions[i * 3]) > 15) velocities.current[i * 3] *= -1;
//         if (Math.abs(positions[i * 3 + 1]) > 15) velocities.current[i * 3 + 1] *= -1;
//         if (Math.abs(positions[i * 3 + 2]) > 15) velocities.current[i * 3 + 2] *= -1;
//       }
      
//       particlesRef.current.geometry.attributes.position.needsUpdate = true;
//       particlesRef.current.rotation.y += 0.0005;
//     }
//   });

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={count}
//           array={positions}
//           itemSize={3}
//         />
//         <bufferAttribute
//           attach="attributes-color"
//           count={count}
//           array={colors}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.08}
//         vertexColors
//         transparent
//         opacity={0.8}
//         sizeAttenuation
//         blending={THREE.AdditiveBlending}
//       />
//     </points>
//   );
// };

// // Server Rack 3D Model
// const ServerRack = ({ position, mousePosition }) => {
//   const groupRef = useRef();
  
//   useFrame((state) => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      
//       if (mousePosition.current) {
//         groupRef.current.rotation.x = mousePosition.current.y * 0.3;
//         groupRef.current.rotation.z = mousePosition.current.x * 0.1;
//       }
//     }
//   });

//   return (
//     <group ref={groupRef} position={position}>
//       <Box args={[0.8, 2, 0.4]} position={[0, 0, 0]}>
//         <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
//       </Box>
      
//       {[...Array(6)].map((_, i) => (
//         <Box key={i} args={[0.7, 0.25, 0.35]} position={[0, -0.75 + i * 0.3, 0.05]}>
//           <meshStandardMaterial
//             color={i % 2 === 0 ? "#dc2626" : "#ef4444"}
//             metalness={0.8}
//             roughness={0.3}
//             emissive={i % 2 === 0 ? "#dc2626" : "#ef4444"}
//             emissiveIntensity={0.2}
//           />
//         </Box>
//       ))}
      
//       {[...Array(12)].map((_, i) => (
//         <Sphere
//           key={`light-${i}`}
//           args={[0.03, 16, 16]}
//           position={[-0.3 + (i % 4) * 0.2, -0.75 + Math.floor(i / 4) * 0.6, 0.25]}
//         >
//           <meshStandardMaterial
//             color="#00ff00"
//             emissive="#00ff00"
//             emissiveIntensity={Math.random() > 0.5 ? 1 : 0.2}
//           />
//         </Sphere>
//       ))}
//     </group>
//   );
// };

// // Cloud Computing Visual
// const CloudComputing = ({ position, mousePosition }) => {
//   const groupRef = useRef();
//   const [hovered, setHovered] = useState(false);
  
//   useFrame((state) => {
//     if (groupRef.current) {
//       groupRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.3;
      
//       if (mousePosition.current) {
//         const targetX = mousePosition.current.x * 2;
//         groupRef.current.rotation.y = THREE.MathUtils.lerp(
//           groupRef.current.rotation.y,
//           targetX,
//           0.05
//         );
//       }
//     }
//   });

//   return (
//     <group
//       ref={groupRef}
//       position={position}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//     >
//       <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
//         <meshStandardMaterial
//           color={hovered ? "#3b82f6" : "#60a5fa"}
//           transparent
//           opacity={0.7}
//           metalness={0.3}
//           roughness={0.4}
//         />
//       </Sphere>
//       <Sphere args={[0.4, 32, 32]} position={[-0.4, -0.1, 0]}>
//         <meshStandardMaterial
//           color={hovered ? "#3b82f6" : "#60a5fa"}
//           transparent
//           opacity={0.6}
//           metalness={0.3}
//           roughness={0.4}
//         />
//       </Sphere>
//       <Sphere args={[0.35, 32, 32]} position={[0.4, -0.1, 0]}>
//         <meshStandardMaterial
//           color={hovered ? "#3b82f6" : "#60a5fa"}
//           transparent
//           opacity={0.6}
//           metalness={0.3}
//           roughness={0.4}
//         />
//       </Sphere>
      
//       {hovered && (
//         <Html>
//           <div className="bg-black/80 text-white px-3 py-1 rounded text-xs whitespace-nowrap">
//             Cloud Solutions
//           </div>
//         </Html>
//       )}
//     </group>
//   );
// };

// // Cybersecurity Shield
// const SecurityShield = ({ position, mousePosition }) => {
//   const shieldRef = useRef();
//   const [active, setActive] = useState(false);
  
//   useFrame((state) => {
//     if (shieldRef.current) {
//       shieldRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      
//       const pulse = Math.sin(state.clock.getElapsedTime() * 2) * 0.1 + 1;
//       shieldRef.current.scale.set(pulse, pulse, pulse);
      
//       if (mousePosition.current) {
//         const dx = mousePosition.current.x * 5 - position[0];
//         const dy = mousePosition.current.y * 5 - position[1];
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         setActive(distance < 2);
//       }
//     }
//   });

//   return (
//     <mesh
//       ref={shieldRef}
//       position={position}
//       onPointerOver={() => setActive(true)}
//       onPointerOut={() => setActive(false)}
//     >
//       <cylinderGeometry args={[0.8, 0.8, 0.1, 6]} />
//       <meshStandardMaterial
//         color={active ? "#10b981" : "#059669"}
//         metalness={0.9}
//         roughness={0.1}
//         emissive={active ? "#10b981" : "#059669"}
//         emissiveIntensity={active ? 0.8 : 0.3}
//         wireframe={!active}
//       />
//     </mesh>
//   );
// };

// // Binary Code Rain
// const BinaryRain = ({ mousePosition }) => {
//   const groupRef = useRef();
  
//   useFrame((state) => {
//     if (groupRef.current && mousePosition.current) {
//       groupRef.current.rotation.y = mousePosition.current.x * 0.5;
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       {[...Array(30)].map((_, i) => (
//         <Float key={i} speed={1 + Math.random()} rotationIntensity={0.2} floatIntensity={3}>
//           <Cylinder
//             args={[0.02, 0.02, Math.random() * 2 + 1, 8]}
//             position={[
//               (Math.random() - 0.5) * 10,
//               (Math.random() - 0.5) * 10,
//               (Math.random() - 0.5) * 5,
//             ]}
//           >
//             <meshStandardMaterial
//               color="#00ff00"
//               emissive="#00ff00"
//               emissiveIntensity={0.5}
//               transparent
//               opacity={0.6}
//             />
//           </Cylinder>
//         </Float>
//       ))}
//     </group>
//   );
// };

// // Main Interactive IT Scene
// const ITScene3D = () => {
//   const mousePosition = useRef({ x: 0, y: 0 });
//   const { viewport } = useThree();

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       mousePosition.current = {
//         x: (event.clientX / window.innerWidth) * 2 - 1,
//         y: -(event.clientY / window.innerHeight) * 2 + 1,
//       };
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <>
//       <PerspectiveCamera makeDefault position={[0, 0, 12]} />
//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         autoRotate
//         autoRotateSpeed={0.3}
//         maxPolarAngle={Math.PI / 1.5}
//         minPolarAngle={Math.PI / 3}
//       />
      
//       {/* Lighting */}
//       <ambientLight intensity={0.4} />
//       <pointLight position={[10, 10, 10]} intensity={2} color="#dc2626" />
//       <pointLight position={[-10, -10, -10]} intensity={1} color="#ef4444" />
//       <spotLight
//         position={[0, 10, 0]}
//         angle={0.4}
//         penumbra={1}
//         intensity={2}
//         color="#f87171"
//         castShadow
//       />
//       <pointLight position={[0, 0, 5]} intensity={1} color="#60a5fa" />

//       {/* Interactive Elements */}
//       <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
//       <DataStream mousePosition={mousePosition} />
//       <MouseFollower mousePosition={mousePosition} />
//       <BinaryRain mousePosition={mousePosition} />
      
//       {/* Network Nodes */}
//       {[
//         [-4, 3, -2],
//         [4, 3, -1],
//         [-3, -2, 0],
//         [3, -2, 1],
//         [0, 4, -2],
//         [-5, 0, 2],
//         [5, 0, -3],
//         [0, -3, 2],
//       ].map((pos, i) => (
//         <NetworkNode
//           key={i}
//           position={pos}
//           mousePosition={mousePosition}
//           index={i}
//         />
//       ))}
      
//       {/* IT Infrastructure Elements */}
//       <ServerRack position={[-3, 0, -2]} mousePosition={mousePosition} />
//       <ServerRack position={[3, 0, -2]} mousePosition={mousePosition} />
//       <CloudComputing position={[0, 3, 0]} mousePosition={mousePosition} />
//       <SecurityShield position={[0, -2, 1]} mousePosition={mousePosition} />
      
//       {/* Connecting Lines */}
//       {[...Array(15)].map((_, i) => {
//         const start = new THREE.Vector3(
//           (Math.random() - 0.5) * 8,
//           (Math.random() - 0.5) * 8,
//           (Math.random() - 0.5) * 4
//         );
//         const end = new THREE.Vector3(
//           (Math.random() - 0.5) * 8,
//           (Math.random() - 0.5) * 8,
//           (Math.random() - 0.5) * 4
//         );
//         const points = [start, end];
//         const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
//         return (
//           <line key={`line-${i}`} geometry={geometry}>
//             <lineBasicMaterial
//               attach="material"
//               color="#dc2626"
//               transparent
//               opacity={0.2}
//             />
//           </line>
//         );
//       })}
      
//       <Environment preset="night" />
//     </>
//   );
// };

// // Stats 3D Scene with Mouse Interaction
// const Stats3DScene = () => {
//   const mousePosition = useRef({ x: 0, y: 0 });
  
//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       mousePosition.current = {
//         x: (event.clientX / window.innerWidth) * 2 - 1,
//         y: -(event.clientY / window.innerHeight) * 2 + 1,
//       };
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const StatsCube = ({ position, color, icon }) => {
//     const meshRef = useRef();
//     const [hovered, setHovered] = useState(false);
    
//     useFrame((state) => {
//       if (meshRef.current) {
//         meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
//         meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
        
//         if (mousePosition.current) {
//           const dx = mousePosition.current.x * 3 - position[0];
//           const dy = mousePosition.current.y * 3 - position[1];
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < 2) {
//             meshRef.current.scale.setScalar(1.2);
//           } else {
//             meshRef.current.scale.setScalar(1);
//           }
//         }
//       }
//     });

//     return (
//       <Float speed={2} rotationIntensity={1} floatIntensity={2}>
//         <mesh
//           ref={meshRef}
//           position={position}
//           onPointerOver={() => setHovered(true)}
//           onPointerOut={() => setHovered(false)}
//         >
//           <boxGeometry args={[0.8, 1.2, 0.3]} />
//           <meshStandardMaterial
//             color={color}
//             metalness={0.9}
//             roughness={0.1}
//             emissive={color}
//             emissiveIntensity={hovered ? 0.8 : 0.3}
//           />
//         </mesh>
//       </Float>
//     );
//   };

//   return (
//     <>
//       <PerspectiveCamera makeDefault position={[0, 0, 8]} />
//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         autoRotate
//         autoRotateSpeed={1}
//       />
      
//       <ambientLight intensity={0.3} />
//       <pointLight position={[5, 5, 5]} intensity={2} color="#dc2626" />
//       <pointLight position={[-5, -5, -5]} intensity={1} color="#ef4444" />
//       <spotLight position={[0, 8, 0]} angle={0.3} penumbra={1} intensity={1.5} color="#f87171" />
      
//       <StatsCube position={[-3, 0, 0]} color="#dc2626" icon="code" />
//       <StatsCube position={[-1, 0, 0]} color="#ef4444" icon="headphones" />
//       <StatsCube position={[1, 0, 0]} color="#f87171" icon="shield" />
//       <StatsCube position={[3, 0, 0]} color="#fca5a5" icon="users" />
      
//       <Environment preset="sunset" />
//     </>
//   );
// };

// // ────────────────────────────────────────────────
// // Particles config
// const particlesOptions = {
//   fullScreen: { enable: true, zIndex: -1 },
//   background: { color: { value: "transparent" } },
//   fpsLimit: 60,
//   interactivity: {
//     events: {
//       onClick: { enable: true, mode: "push" },
//       onHover: { enable: true, mode: "repulse" },
//       resize: true,
//     },
//     modes: {
//       push: { quantity: 4 },
//       repulse: { distance: 150, duration: 0.4 },
//     },
//   },
//   particles: {
//     color: { value: ["#dc2626", "#ef4444", "#f87171"] },
//     links: {
//       color: "#dc2626",
//       distance: 140,
//       enable: true,
//       opacity: 0.15,
//       width: 1,
//     },
//     move: {
//       direction: "none",
//       enable: true,
//       outModes: { default: "bounce" },
//       random: true,
//       speed: 1.2,
//       straight: false,
//     },
//     number: { density: { enable: true, area: 800 }, value: 70 },
//     opacity: { value: 0.3 },
//     shape: { type: "circle" },
//     size: { value: { min: 1, max: 3 } },
//   },
//   detectRetina: true,
// };

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const fadeInLeft = {
//   hidden: { opacity: 0, x: -60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const fadeInRight = {
//   hidden: { opacity: 0, x: 60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// const About = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const sectionRefs = useRef([]);
//   const [inViewSections, setInViewSections] = useState([]);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setInViewSections((prev) => [
//               ...new Set([...prev, entry.target.id]),
//             ]);
//           }
//         });
//       },
//       { threshold: 0.15 },
//     );

//     sectionRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % 3);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const testimonials = [
//     {
//       text: "Alta Knots transformed our entire digital infrastructure. Their team delivered beyond expectations!",
//       author: "Sarah Johnson",
//       role: "CEO, TechStart Inc",
//       rating: 5,
//     },
//     {
//       text: "24/7 support that actually works. They're always there when we need them. True partners!",
//       author: "Michael Chen",
//       role: "CTO, GlobalSoft",
//       rating: 5,
//     },
//     {
//       text: "From concept to deployment in record time. Their expertise in mobile apps is unmatched.",
//       author: "Priya Sharma",
//       role: "Founder, AppVenture",
//       rating: 5,
//     },
//   ];

//   return (
//     <>
//       <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
//         {/* Professional Tech Background Pattern */}
//         <div className="fixed inset-0 z-0 opacity-10">
//           <div 
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             }}
//           />
//         </div>

//         <Particles
//           id="tsparticles"
//           init={particlesInit}
//           options={particlesOptions}
//           className="absolute inset-0 z-0"
//         />

//         <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
//           <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-40 left-0 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl" />
//         </div>

//         {/* ==================== HERO SECTION WITH PROFESSIONAL BACKGROUND ==================== */}
//         <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
//           {/* Professional Hero Background Image */}
//           <div className="absolute inset-0 z-0">
//             <div 
//               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//               style={{
//                 backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
//               }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-red-950/70" />
//           </div>

//           {/* 3D Canvas Overlay */}
//           <div className="absolute inset-0 z-0 opacity-60">
//             <Canvas shadows>
//               <Suspense fallback={null}>
//                 <ITScene3D />
//               </Suspense>
//             </Canvas>
//           </div>

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="relative z-10 max-w-6xl mx-auto text-center"
//           >
//             <motion.div variants={fadeInUp} className="mb-8">
//               <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 drop-shadow-2xl">
//                 ALTA KNOTS
//               </h1>
//               <motion.h2
//                 variants={fadeInUp}
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4"
//               >
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500 animate-gradient drop-shadow-lg">
//                   Your Technology Partner
//                 </span>
//               </motion.h2>
//             </motion.div>

//             <motion.p
//               variants={fadeInUp}
//               className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg"
//             >
//               We build powerful, secure, and future-ready{" "}
//               <span className="text-red-400 font-semibold relative inline-block">
//                 IT & BPO solutions
//               </span>{" "}
//               — so your business can focus on growth, not technology.
//             </motion.p>

//             <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
//               <div className="w-full md:w-1/2">
//                 <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
//                   Building the <span className="text-red-500">Future</span> of Business
//                   Technology
//                 </h3>

//                 <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
//                   At <span className="font-semibold text-white">Alta Knots</span>, we believe
//                   technology should empower—not complicate. Our expert team delivers custom
//                   software, mobile apps, cloud solutions, and 24/7 BPO support that drive real
//                   business results.
//                 </p>

//                 <button className="mt-8 px-8 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-2xl shadow-red-900/50">
//                   Get Started
//                 </button>
//               </div>

//               <div className="w-full md:w-1/2 flex justify-center">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-2xl blur-2xl"></div>
//                   <img
//                     src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
//                     alt="Tech Team Collaboration"
//                     className="relative w-full max-w-2xl mt-6 rounded-2xl shadow-2xl shadow-red-900/30 border border-red-900/20"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 mb-20">
//               <div className="w-full md:w-1/2">
//                 <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
//                   Innovation Meets <span className="text-red-500">Excellence</span>
//                 </h3>

//                 <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
//                   With cutting-edge technology and a client-first approach, we transform
//                   businesses through seamless digital solutions. Experience the power of
//                   innovation with <span className="font-semibold text-white">Alta Knots</span>.
//                 </p>

//                 <button className="mt-8 px-8 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-2xl shadow-red-900/50">
//                   Learn More
//                 </button>
//               </div>

//               <div className="w-full md:w-1/2 flex justify-center bg-transparent">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-900/20 rounded-2xl blur-2xl"></div>
//                   <img
//                     src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
//                     alt="Modern Tech Workspace"
//                     className="relative w-full max-w-2xl mt-6 bg-transparent rounded-2xl shadow-2xl shadow-blue-900/30 border border-blue-900/20"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Floating chat-style messages */}
//             <motion.div variants={fadeInUp} className="relative mb-20">
//               <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 flex-wrap">
//                 <motion.div
//                   whileHover={{ scale: 1.05, rotate: -1 }}
//                   className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 max-w-sm text-left shadow-2xl rotate-[-3deg]"
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
//                       <Zap className="w-5 h-5" />
//                     </div>
//                     <p className="text-red-400 font-bold text-lg">Alta Knots</p>
//                   </div>
//                   <p className="text-gray-100">
//                     Bonjour! Ready to transform your business with secure
//                     software & reliable support?
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ scale: 1.05, rotate: 2 }}
//                   className="bg-gradient-to-br from-red-950/50 to-black/90 backdrop-blur-xl border border-red-500/40 rounded-3xl p-8 max-w-sm text-left shadow-2xl rotate-[4deg]"
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
//                       <Users className="w-5 h-5" />
//                     </div>
//                     <p className="text-red-300 font-bold text-lg">You</p>
//                   </div>
//                   <p className="text-gray-100">
//                     Yes! We need a strong website, mobile app & 24/7 BPO
//                     support...
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ scale: 1.05, rotate: -1 }}
//                   className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 max-w-sm text-left shadow-2xl rotate-[-2deg] md:mt-16"
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
//                       <Target className="w-5 h-5" />
//                     </div>
//                     <p className="text-red-400 font-bold text-lg">Alta Knots</p>
//                   </div>
//                   <p className="text-gray-100">
//                     Perfect! Let's build it together — fast, secure & scalable.
//                     🚀
//                   </p>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* CTAs */}
//             <motion.div
//               variants={fadeInUp}
//               className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.08 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl font-bold shadow-lg shadow-red-900/50 hover:shadow-red-900/70 transition-all"
//               >
//                 Start Building Your Future
//                 <ArrowRight className="inline ml-3" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.08 }}
//                 className="px-10 py-6 border-2 border-red-600/60 rounded-full text-red-400 hover:bg-red-950/40 transition-all backdrop-blur-sm"
//               >
//                 See Our Solutions
//                 <ArrowRight className="inline ml-3" />
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* ==================== ABOUT SECTION WITH BACKGROUND ==================== */}
//         <section className="relative py-20 px-6 md:px-12 lg:px-24 z-10">
//           {/* About Section Background */}
//           <div className="absolute inset-0 z-0 opacity-5">
//             <div 
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80')`,
//               }}
//             />
//           </div>

//           <div className="max-w-7xl mx-auto relative z-10">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={staggerContainer}
//               className="text-center mb-16"
//             >
//               <h2 className="text-5xl md:text-7xl font-black mb-6">
//                 ABOUT <span className="text-red-500">ALTA KNOTS</span>
//               </h2>
//               <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
//                 Technology that connects. Solutions that deliver. Partnerships
//                 that last.
//               </p>
//             </motion.div>

//             {/* 3D Stats Section with Mouse Interaction */}
//             <div className="relative h-[400px] mb-24 rounded-3xl overflow-hidden">
//               <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-20"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80')`,
//                 }}
//               />
//               <Canvas>
//                 <Suspense fallback={null}>
//                   <Stats3DScene />
//                 </Suspense>
//               </Canvas>
//             </div>

//             {/* About Block with Background */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={staggerContainer}
//               className="grid md:grid-cols-2 gap-12 items-center mb-24"
//             >
//               <motion.div variants={fadeInLeft} className="space-y-6">
//                 <h5 className="text-red-400 font-semibold text-xl">
//                   About Our Solution
//                 </h5>
//                 <h2 className="text-4xl md:text-5xl font-bold">
//                   #1 Partner For Your Business Growth
//                 </h2>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   We deliver cutting-edge technology solutions that transform businesses.
//                   From custom software development to 24/7 BPO support, our team ensures
//                   your digital infrastructure is robust, scalable, and secure.
//                 </p>

//                 <div className="grid grid-cols-2 gap-8 my-8">
//                   <div className="flex items-start gap-4">
//                     <div className="text-red-500 text-4xl font-black">50+</div>
//                     <p className="text-gray-400">Projects Delivered</p>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="text-red-500 text-4xl font-black">100+</div>
//                     <p className="text-gray-400">Happy Clients</p>
//                   </div>
//                 </div>

//                 <button className="px-10 py-4 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition shadow-2xl shadow-red-900/50">
//                   Read More →
//                 </button>
//               </motion.div>

//               <motion.div variants={fadeInRight}>
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-900/20 rounded-2xl blur-2xl"></div>
//                   <img
//                     src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
//                     alt="Professional Team Collaboration"
//                     className="relative rounded-2xl shadow-2xl w-full object-cover border border-red-900/30"
//                   />
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Stats Cards */}
//             <motion.div
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
//             >
//               {[
//                 { num: "50+", label: "Projects Delivered", icon: Code },
//                 { num: "24/7", label: "Support Coverage", icon: Headphones },
//                 { num: "99.9%", label: "Uptime Commitment", icon: ShieldCheck },
//                 { num: "100+", label: "Happy Clients", icon: Users },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   variants={scaleIn}
//                   whileHover={{ scale: 1.05, rotateY: 10 }}
//                   className="relative bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 text-center transform-gpu perspective-1000 cursor-pointer overflow-hidden group"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                   <item.icon className="w-12 h-12 mx-auto mb-4 text-red-500 relative z-10" />
//                   <div className="text-4xl font-black mb-2 relative z-10">{item.num}</div>
//                   <p className="text-gray-400 relative z-10">{item.label}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             <div className="mb-24">
//               <MobileOnboarding />
//             </div>

//             {/* Testimonials with Background */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="mb-24 relative"
//             >
//               <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-5 rounded-3xl"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')`,
//                 }}
//               />
              
//               <h2 className="text-5xl font-black text-center mb-12 relative z-10">
//                 What Our <span className="text-red-500">Clients Say</span>
//               </h2>

//               <div className="relative max-w-4xl mx-auto h-80 md:h-72">
//                 {testimonials.map((t, idx) => (
//                   <motion.div
//                     key={idx}
//                     animate={{
//                       opacity: idx === activeTestimonial ? 1 : 0,
//                       scale: idx === activeTestimonial ? 1 : 0.9,
//                     }}
//                     transition={{ duration: 0.6 }}
//                     className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 border border-red-900/30 rounded-3xl p-10 flex flex-col justify-between backdrop-blur-xl"
//                   >
//                     <div className="flex gap-1 text-red-500 text-2xl">
//                       {"★".repeat(t.rating)}
//                     </div>
//                     <p className="text-2xl italic text-gray-100">"{t.text}"</p>
//                     <div>
//                       <p className="font-bold">{t.author}</p>
//                       <p className="text-gray-500 text-sm">{t.role}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="flex justify-center gap-3 mt-8">
//                 {testimonials.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setActiveTestimonial(i)}
//                     className={`h-3 rounded-full transition-all ${
//                       i === activeTestimonial
//                         ? "w-10 bg-red-600"
//                         : "w-3 bg-gray-700"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </motion.div>

//             {/* Final CTA with Background */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center py-20 relative"
//             >
//               <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-10 rounded-3xl blur-sm"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80')`,
//                 }}
//               />
              
//               <h3 className="text-5xl md:text-6xl font-black mb-8 relative z-10">
//                 Ready to build something{" "}
//                 <span className="text-red-500">great</span> together?
//               </h3>
//               <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
//                 Let's turn your vision into reality. Our team is ready to start
//                 today.
//               </p>
//               <button className="px-12 py-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-2xl font-bold shadow-2xl hover:shadow-red-900/70 transition relative z-10">
//                 LET'S START THE CONVERSATION →
//               </button>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default About;