/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, MapPin, Plus } from "lucide-react";

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-xs uppercase tracking-[0.3em] text-primary mb-8 flex items-center gap-2">
    <span className="font-mono">&gt; {title}</span>
  </h2>
);

const SkillBar = ({ label, percentage }: { label: string; percentage: number }) => (
  <div className="space-y-3">
    <div className="flex justify-between font-mono text-xs tracking-wider">
      <span className="text-slate-400">{label}</span>
      <span className="text-primary">{percentage}%</span>
    </div>
    <div className="progress-bar">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="progress-fill" 
      />
    </div>
  </div>
);

const ProjectCard = ({ title, tags, description }: { title: string; tags: string; description: string }) => (
  <motion.div 
    whileHover={{ y: -2 }}
    className="p-6 border border-primary/20 bg-primary/5 rounded-sm glow-border group cursor-default"
  >
    <div className="flex justify-between items-start mb-3">
      <h3 className="font-mono font-bold text-primary group-hover:text-white transition-colors text-sm">
        {title}
      </h3>
      <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-1 rounded border border-secondary/20 font-mono tracking-tighter">
        {tags}
      </span>
    </div>
    <p className="text-slate-400 font-mono text-xs leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 selection:bg-primary/30 selection:text-white">
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-dark/90 backdrop-blur-md border border-primary/20 p-10 md:p-20 rounded-sm relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

        {/* Header */}
        <header className="border-b border-white/5 pb-10 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl mb-3 font-mono text-white tracking-tighter font-bold">
              Johnny Guo
            </h1>
            <p className="text-lg text-primary font-mono opacity-80 tracking-tight">
              Developer
            </p>
          </div>
          <div className="text-xs text-slate-400 font-mono space-y-3 md:text-right tracking-wider">
            <a 
              href="mailto:jinliangguo2018@gmail.com"
              className="flex items-center md:justify-end gap-3 hover:text-primary transition-colors cursor-pointer"
            >
              <span>jinliangguo2018@gmail.com</span>
              <Mail size={14} />
            </a>
            <a 
              href="https://x.com/recycle_rockets"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center md:justify-end gap-3 hover:text-primary transition-colors cursor-pointer"
            >
              <span>recycle_rockets</span>
              <XIcon size={14} />
            </a>
            <p className="flex items-center md:justify-end gap-3">
              <span>Bay Area, CA / US</span>
              <MapPin size={14} />
            </p>
          </div>
        </header>

        {/* Summary */}
        <section className="border-b border-white/5 pb-12 mb-12">
          <SectionHeader title="intro" />
          <p className="text-slate-300 leading-relaxed max-w-4xl font-mono text-sm tracking-wide">
            I’m a developer and tech enthusiast dedicated to the intersection of AI-driven toolsets, robust cybersecurity, and the precision of algorithmic security trading.
          </p>
        </section>

        {/* Highlights */}
        <section className="border-b border-white/5 pb-10 mb-10">
          <SectionHeader title="Pics" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="aspect-square bg-dark border border-secondary/20 rounded-sm overflow-hidden group hover:border-secondary/50 transition-all cursor-crosshair"
              >
                <img 
                  alt={`Highlight ${i}`} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" 
                  src={`/images/pic${i}.jpg`}
                  onError={(e) => {
                    // Fallback to placeholder if local image is missing
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/project${i}/400/400`;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="border-b border-white/5 pb-10 mb-10">
          <SectionHeader title="Experiences" />
          <div className="space-y-6">
            {[
              { role: "Senior Developer", company: "Apple", period: "Aug 2020 – Present" },
              { role: "Security analyst covering TMT sectors", company: "Part-time job", period: "Feb 2023 – Present" },
              { role: "Software engineer", company: "SLB", period: "July 2018 – Aug 2020" },
              { role: "Research Developer", company: "Tencent AI lab", period: "May 2017 – Aug 2017" }
            ].map((job, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center group">
                <h3 className="text-base font-bold font-mono text-white group-hover:text-primary transition-colors">
                  {job.role} <span className="text-slate-500 font-normal mx-2">|</span> {job.company}
                </h3>
                <span className="text-accent font-mono text-xs tracking-widest mt-1 sm:mt-0 opacity-80">
                  {job.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="border-b border-white/5 pb-10 mb-10">
          <SectionHeader title="Professionals" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Languages */}
            <div>
              <h3 className="text-xs font-mono text-secondary mb-6 border-b border-white/5 pb-2 uppercase tracking-[0.2em] font-bold">
                analysis coveraged sectors
              </h3>
              <div className="space-y-5">
                <SkillBar label="Semiconductor" percentage={85} />
                <SkillBar label="Software and Tech" percentage={99} />
                <SkillBar label="Consumer Goods" percentage={60} />
              </div>
            </div>

            {/* Frameworks */}
            <div className="md:pl-8">
              <h3 className="text-xs font-mono text-secondary mb-6 border-b border-white/5 pb-2 uppercase tracking-[0.2em] font-bold">
                AI tools
              </h3>
              <ul className="text-xs text-slate-400 space-y-4 font-mono tracking-wider">
                {["Codex", "OpenClaw", "AI Studio", "Stitch"].map((item) => (
                  <li key={item} className="flex items-center gap-3 group cursor-default">
                    <Plus size={10} className="text-accent group-hover:rotate-90 transition-transform" />
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infrastructure */}
            <div>
              <h3 className="text-xs font-mono text-secondary mb-6 border-b border-white/5 pb-2 uppercase tracking-[0.2em] font-bold">
                General tools
              </h3>
              <ul className="text-xs text-slate-400 space-y-4 font-mono tracking-wider">
                {["DOCKER/K8S", "AWS/GCP/Azure", "Oracle/Cassandra/Redis", "Flink/Kafka/Spark"].map((item) => (
                  <li key={item} className="flex items-center gap-3 group cursor-default">
                    <Plus size={10} className="text-accent group-hover:rotate-90 transition-transform" />
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="border-b border-white/5 pb-10 mb-10">
          <SectionHeader title="Personal Projects" />
          <div className="grid grid-cols-1 gap-6">
            <ProjectCard 
              title="A fund specializing in artificial intelligence"
              tags="MU / TSM / NVDA"
              description="Started from 2023, heavy stake on AI stocks like NVDA, TSM, MU, APP, PLTR etc, move to Semis started from 2025, 67% returned in 2025 with extreme low fallback risk"
            />
            <ProjectCard 
              title="AI-Powered stock signals pipeline"
              tags="Codex / Open Claw / AI Studio"
              description="AI-powered signal tool automates market analysis by correlating macro indicators (CME rates), liquidity volatility, and social-media-derived sentiment into actionable trading intelligence."
            />
          </div>
        </section>

        {/* Education */}
        <section>
          <SectionHeader title="Education" />
          <div className="flex flex-col sm:flex-row justify-between items-start">
            <div>
              <h3 className="text-lg font-mono text-white font-bold">Master of Electric and Computer Science</h3>
              <p className="text-slate-400 font-mono text-xs mt-1">Carnegie Mellon University</p>
            </div>
            <div className="text-slate-500 font-mono text-xs sm:text-right mt-4 sm:mt-0 space-y-2">
              <p className="text-slate-300">Graduated 2018</p>
              <p className="text-primary/70">GPA: 3.9/4.0</p>
            </div>
          </div>
        </section>
      </motion.main>

      {/* Footer */}
      <footer className="text-center mt-16 text-slate-600 font-mono text-[11px] uppercase tracking-[0.4em] opacity-50">
        © 2024 Professional Portfolio • Built with Tailwind CSS
      </footer>
    </div>
  );
}
