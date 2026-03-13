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
        <h2 className="text-4xl font-bold mb-4">Meet the <span className="gradient-text">Engineers</span></h2>
        <p className="text-gray-400">The brilliant minds behind Pegasus Prime, working together to redefine competitive excellence.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, i) => (
          <motion.div 
            key={i}
            className="glass p-8 flex flex-col items-center text-center group cursor-default hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
              {member.icon}
            </div>
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <span className="text-primary text-sm font-semibold mb-4 uppercase tracking-wider">{member.role}</span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {member.bio}
            </p>
            <div className="flex gap-4 mt-auto">
              <Github size={18} className="text-gray-500 hover:text-white cursor-pointer" />
              <Linkedin size={18} className="text-gray-500 hover:text-white cursor-pointer" />
              <Twitter size={18} className="text-gray-500 hover:text-white cursor-pointer" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;