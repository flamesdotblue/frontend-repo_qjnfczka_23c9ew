import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden">
      {/* Background gradient per spec */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E3F2FD] to-[#E8EAF6]" />

      {/* Content container */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col-reverse items-center gap-10 px-6 pt-16 pb-24 md:flex-row md:pt-24">
        {/* Text side */}
        <motion.div 
          className="z-10 w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full bg-white/70 px-4 py-1 text-xs font-medium text-[#3949AB] shadow-sm">
            Full Stack Developer • UI/UX Designer
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#212121] sm:text-5xl lg:text-6xl">
            Krishna Rv
          </h1>
          <p className="mt-3 text-lg text-[#555555] sm:text-xl">
            Bridging Design and Development
          </p>
          <p className="mt-4 max-w-prose text-[#555555]">
            From concept to code, I craft smooth, interactive digital experiences that feel effortless and look beautiful.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-full bg-[#7E57C2] px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#6f49b3]">View Projects</a>
            <a href="#contact" className="rounded-full border border-[#3949AB] px-6 py-3 text-sm font-semibold text-[#3949AB] shadow-sm transition hover:bg-[#3949AB] hover:text-white">Contact Me</a>
          </div>
        </motion.div>

        {/* Spline side */}
        <motion.div 
          className="relative z-0 w-full md:w-1/2 aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Spline 3D scene */}
          <Spline 
            scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" 
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft overlay gradient; pointer-events disabled so Spline stays interactive */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
