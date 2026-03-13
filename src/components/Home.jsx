import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Zap } from 'lucide-react';

const Home = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 p-3 glass rounded-2xl flex gap-4"
      >
        <span className="flex items-center gap-2 text-sm font-semibold px-4 py-1.5 gradient-bg rounded-xl text-white">
          <Zap size={14} /> VEX Robotics
        </span>
        <span className="flex items-center gap-2 text-sm font-semibold px-4 py-1.5 bg-white/5 rounded-xl text-gray-400">
          State Qualifiers 2026
        </span>
      </motion.div>

      <motion.h1 
        className="text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Engineering the <span className="gradient-text">Future</span> of Autonomous Robotics
      </motion.h1>

      <motion.p 
        className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Team 97711V - Pegasus Prime is dedicated to pushing the boundaries of VEX robotics through 
        advanced PID control, precision engineering, and collaborative innovation.
      </motion.p>

      <motion.div 
        className="flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <button 
          onClick={() => onNavigate('team')}
          className="gradient-bg px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all active:scale-95"
        >
          Explore Team <ArrowRight size={20} />
        </button>
        <button 
          onClick={() => onNavigate('code')}
          className="glass px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-white/10 transition-all active:scale-95"
        >
          <Bot size={20} /> View Code
        </button>
      </motion.div>

      <motion.div 
        className="mt-20 grid grid-cols-3 gap-8 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="glass p-6 text-left">
          <Cpu className="text-primary mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">PROS Native</h3>
          <p className="text-gray-400 text-sm">C++ code running on the PROS kernel for maximum performance.</p>
        </div>
        <div className="glass p-6 text-left">
          <Zap className="text-secondary mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">PID Control</h3>
          <p className="text-gray-400 text-sm">Custom tuned PID loops for perfectly accurate autonomous movements.</p>
        </div>
        <div className="glass p-6 text-left">
          <Bot className="text-accent mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">CAD Optimized</h3>
          <p className="text-gray-400 text-sm">Fully designed in Fusion 360 before a single screw was tightened.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;