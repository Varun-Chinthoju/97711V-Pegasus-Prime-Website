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
        <h2 className="text-4xl font-bold mb-4">Community <span className="gradient-text">Impact</span></h2>
        <p className="text-gray-400">Pegasus Prime is more than just a team; we are advocates for STEM education and technological accessibility.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, i) => (
          <motion.div 
            key={i}
            className="glass p-8 flex gap-6 group hover:border-primary/50 transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: `${event.color}15`, color: event.color }}
            >
              <event.icon size={32} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-40 block mb-1">{event.date}</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
              <p className="text-gray-400 leading-relaxed">{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Outreach;