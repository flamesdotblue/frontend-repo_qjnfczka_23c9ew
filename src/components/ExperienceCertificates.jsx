import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  { company: 'EduFin', role: 'Intern', learn: 'Built responsive interfaces and learned real-world agile workflows.' },
  { company: 'Retech', role: 'Intern', learn: 'Worked on API integrations and improved debugging and testing skills.' },
  { company: 'TVS Electronics', role: 'Intern', learn: 'Gained exposure to enterprise-grade systems and deployment practices.' },
  { company: 'Internforte', role: 'Intern', learn: 'Explored UI prototyping and iterative design with user feedback.' },
];

const certificates = [
  'Coursera',
  'Great Learning',
  'MindLuster',
  'Bloomberg',
];

const ExperienceCertificates = () => {
  return (
    <section id="experience" className="relative py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-3xl font-bold text-[#212121] sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {experiences.map((e, idx) => (
              <motion.div
                key={e.company}
                className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-[#212121]">{e.company}</h3>
                  <span className="text-sm font-medium text-[#3949AB]">{e.role}</span>
                </div>
                <p className="mt-2 text-sm text-[#555555]">{e.learn}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.h3 
              className="text-2xl font-semibold text-[#212121]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
            >
              Certificates
            </motion.h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {certificates.map((c, idx) => (
                <motion.div
                  key={c}
                  className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                >
                  <p className="text-sm font-medium text-[#3949AB]">{c}</p>
                  <p className="mt-1 text-xs text-[#555555]">Achievement and completion across top platforms.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCertificates;
