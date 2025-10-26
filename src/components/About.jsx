import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8EAF6]/40 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2 
          className="text-3xl font-bold text-[#212121] sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>
        <motion.p
          className="mt-6 text-lg leading-relaxed text-[#555555]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          I’m Krishna Rv, a 4th-year B.Tech IT student at SRM University from Chennai. I specialize in Full Stack Development, UI/UX Design, and Cloud Computing. I love building products that feel delightful to use—where thoughtful design meets robust engineering. My focus is on creating smooth, accessible, and interactive experiences that solve real problems with clarity and elegance.
        </motion.p>
        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {[
            { title: 'Full Stack', desc: 'React, Node.js, APIs, databases' },
            { title: 'UI/UX', desc: 'Wireframes, prototypes, design systems' },
            { title: 'Cloud', desc: 'Deployments, CI/CD, monitoring' },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <h3 className="text-base font-semibold text-[#3949AB]">{item.title}</h3>
              <p className="mt-1 text-sm text-[#555555]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
