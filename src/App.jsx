import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ExperienceCertificates from './components/ExperienceCertificates';
import { Linkedin, Github, Globe, Mail } from 'lucide-react';

function App() {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:krishnarv@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="scroll-smooth min-h-screen bg-gradient-to-b from-[#E3F2FD] to-[#E8EAF6]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold text-[#212121]">Krishna Rv</a>
          <div className="hidden gap-6 md:flex">
            {[
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'contact', label: 'Contact' },
            ].map((l) => (
              <a key={l.id} href={`#${l.id}`} className="text-sm font-medium text-[#555555] hover:text-[#3949AB]">
                {l.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="rounded-full bg-[#3949AB] px-4 py-2 text-xs font-semibold text-white shadow hover:bg-[#2f3d98]">Let’s Talk</a>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <ExperienceCertificates />

        {/* Contact */}
        <section id="contact" className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#E8EAF6]/40 to-transparent" />
          <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#212121] sm:text-4xl">Contact</h2>
              <p className="mt-4 max-w-prose text-[#555555]">
                Have a project or idea in mind? I’m always excited to collaborate on meaningful, human-centered products.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-[#3949AB] px-4 py-2 text-sm font-medium text-[#3949AB] hover:bg-[#3949AB] hover:text-white"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-[#7E57C2] px-4 py-2 text-sm font-medium text-[#7E57C2] hover:bg-[#7E57C2] hover:text-white"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://www.behance.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-[#3949AB] px-4 py-2 text-sm font-medium text-[#3949AB] hover:bg-[#3949AB] hover:text-white"
                >
                  <Globe size={18} /> Behance
                </a>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-[#3949AB]" />
                <h3 className="text-lg font-semibold text-[#212121]">Send a message</h3>
              </div>
              <div className="mt-4 grid gap-4">
                <div>
                  <label className="text-sm font-medium text-[#555555]" htmlFor="name">Name</label>
                  <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-[#212121] shadow-sm focus:border-[#3949AB] focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#555555]" htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-[#212121] shadow-sm focus:border-[#3949AB] focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#555555]" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" required className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-[#212121] shadow-sm focus:border-[#3949AB] focus:outline-none" />
                </div>
                <button type="submit" className="mt-2 rounded-full bg-[#7E57C2] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#6f49b3]">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white/70 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row">
          <p className="text-sm text-[#555555]">© {new Date().getFullYear()} Krishna Rv. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#home" className="text-sm font-medium text-[#3949AB] hover:underline">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
