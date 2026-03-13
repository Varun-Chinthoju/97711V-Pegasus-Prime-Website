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
        className="mb-8 p-3 glass rounded-2xl flex gap-4 border-slate-700/50"
      >
        <span className="flex items-center gap-2 text-sm font-semibold px-4 py-1.5 gradient-bg rounded-xl text-white shadow-lg shadow-indigo-500/20">
          <Zap size={14} /> VEX Robotics
        </span>
        <span className="flex items-center gap-2 text-sm font-semibold px-4 py-1.5 bg-slate-800/50 rounded-xl text-slate-400">
          97711V Pegasus Prime
        </span>
      </motion.div>

      <motion.h1 
        className="text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Precision Engineering. <br />
        <span className="gradient-text text-cyan-400">Intelligent</span> Design.
      </motion.h1>

      <motion.p 
        className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        We are a competitive VEX robotics team dedicated to technical mastery and 
        innovation in autonomous systems.
      </motion.p>

      <motion.div 
        className="flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <button 
          onClick={() => onNavigate('code')}
          className="gradient-bg px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-indigo-500/20"
        >
          Initialize Terminal <ChevronRight size={20} />
        </button>
        <button 
          onClick={() => onNavigate('team')}
          className="glass px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-slate-800/50 transition-all active:scale-95 border-slate-700/50"
        >
          Meet the Team
        </button>
      </motion.div>

      <motion.div 
        className="mt-24 grid grid-cols-3 gap-8 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="glass p-8 text-left border-slate-700/50 group hover:border-indigo-500/50 transition-colors">
          <Cpu className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-bold text-xl mb-2 text-white">PROS Kernel</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Advanced C++ architecture utilizing the PROS kernel for real-time motor control and scheduling.</p>
        </div>
        <div className="glass p-8 text-left border-slate-700/50 group hover:border-indigo-500/50 transition-colors">
          <Zap className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-bold text-xl mb-2 text-white">Odometry</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Sub-millimeter accuracy using three-wheel tracking and inertial sensor fusion algorithms.</p>
        </div>
        <div className="glass p-8 text-left border-slate-700/50 group hover:border-indigo-500/50 transition-colors">
          <Bot className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-bold text-xl mb-2 text-white">Fusion 360</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Iterative CAD modeling ensuring optimal weight distribution and structural integrity.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;