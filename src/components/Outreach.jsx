import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, Presentation, Users2 } from 'lucide-react';

const events = [
  { 
    title: 'Middle School STEM Workshop', 
    date: 'Dec 2025', 
    desc: 'Taught 40+ students basic robotics principles and VEX IQ mechanics.', 
    icon: BookOpen,
    color: 'var(--primary)'
  },
  { 
    title: 'Regional Tech Expo', 
    date: 'Oct 2025', 
    desc: 'Showcased our robot and CAD designs to industry professionals and the public.', 
    icon: Globe,
    color: 'var(--secondary)'
  },
  { 
    title: 'Mentorship Program', 
    date: 'Ongoing', 
    desc: 'Mentoring local elementary teams to build a strong future for our robotics community.', 
    icon: Users2,
    color: 'var(--accent)'
  },
  { 
    title: 'Engineering Guest Lecture', 
    date: 'Jan 2026', 
    desc: 'Shared our PID and odometry research with the school engineering club.', 
    icon: Presentation,
    color: '#fbbf24'
  },
];

const Outreach = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">Community <span className="gradient-text">Operations</span></h2>
        <p className="text-slate-400">Pegasus Prime actively participates in community initiatives to broaden the impact of robotics education.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, i) => (
          <motion.div 
            key={i}
            className="glass p-8 flex gap-8 group border-slate-700/50 hover:border-indigo-500/50 transition-all shadow-xl shadow-indigo-500/5"
            whileHover={{ scale: 1.01 }}
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-slate-800/50 text-indigo-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-300 transition-colors"
            >
              <event.icon size={28} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block mb-2">{event.date}</span>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">{event.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Outreach;