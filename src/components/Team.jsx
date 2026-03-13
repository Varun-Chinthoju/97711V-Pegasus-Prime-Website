import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const teamMembers = [
  { name: 'Alex Thompson', role: 'Team Captain & Lead Builder', bio: 'Specializing in compound gear systems and drivetrain stability.', icon: 'AT' },
  { name: 'Jordan Chen', role: 'Lead Programmer', bio: 'Expert in PROS C++ and Odometry implementation.', icon: 'JC' },
  { name: 'Taylor Swift', role: 'Strategic Design & CAD', bio: 'Designing every component in Fusion 360 for perfect tolerance.', icon: 'TS' },
  { name: 'Sam Rivera', role: 'Outreach & Documentation', bio: 'Managing our Engineering Notebook and community impact.', icon: 'SR' },
];

const Team = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">Engineering <span className="gradient-text">Personnel</span></h2>
        <p className="text-slate-400">The technical core of Team 97711V, dedicated to cross-functional excellence in robotics design and software.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, i) => (
          <motion.div 
            key={i}
            className="glass p-8 flex flex-col items-center text-center group cursor-default border-slate-700/50 hover:border-indigo-500/50 transition-all shadow-xl shadow-indigo-500/5"
            whileHover={{ y: -5 }}
          >
            <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20">
              {member.icon}
            </div>
            <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
            <span className="text-indigo-400 text-[10px] font-bold mb-4 uppercase tracking-[0.2em]">{member.role}</span>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {member.bio}
            </p>
            <div className="flex gap-5 mt-auto">
              <Github size={16} className="text-slate-500 hover:text-white transition-colors cursor-pointer" />
              <Linkedin size={16} className="text-slate-500 hover:text-white transition-colors cursor-pointer" />
              <Twitter size={16} className="text-slate-500 hover:text-white transition-colors cursor-pointer" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;