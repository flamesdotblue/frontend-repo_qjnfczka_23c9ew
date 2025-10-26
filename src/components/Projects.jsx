import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Mysore Cultural Capital',
    desc: 'An immersive web experience celebrating the heritage of Mysore with interactive storytelling and visuals.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'MEGAMING',
    desc: 'A modern landing and dashboard concept for a gaming platform with real-time elements and playful motion.',
    stack: ['Next.js', 'WebSockets', 'UI/UX'],
    link: '#',
  },
  {
    title: 'Audio-Enhanced CNN Framework',
    desc: 'Deep learning framework augmenting vision with audio cues for robust classification in noisy environments.',
    stack: ['Python', 'TensorFlow', 'Signal Proc.'],
    link: '#',
  },
  {
    title: 'Text-to-Braille Device',
    desc: 'Assistive device pipeline converting text to tactile output with a focus on accessibility and affordability.',
    stack: ['IoT', 'Embedded', 'Python'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E3F2FD]/50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-3xl font-bold text-[#212121] sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl border border-white/60 bg-white/70 p-6 shadow-md backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-[#212121]">{p.title}</h3>
                <span className="rounded-full bg-[#7E57C2]/10 px-3 py-1 text-xs font-medium text-[#7E57C2]">Preview</span>
              </div>
              <p className="mt-3 text-sm text-[#555555]">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#3949AB]/10 px-3 py-1 text-xs font-medium text-[#3949AB]">{tag}</span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100" style={{ boxShadow: 'inset 0 0 0 2px rgba(126,87,194,0.25)' }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
