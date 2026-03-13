import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Activity, Zap, Shield } from 'lucide-react';

const Build = () => {
  const [flywheel, setFlywheel] = useState(0);
  const [intake, setIntake] = useState(0);
  const [torque, setTorque] = useState(0);

  // Derived state for the visualizer
  const flywheelColor = useMemo(() => {
    if (flywheel > 2500) return '#818cf8'; // Lighter indigo
    if (flywheel > 1000) return '#6366f1'; // Primary indigo
    return '#475569'; // Slate
  }, [flywheel]);

  const drivetrainSpeed = useMemo(() => {
    if (torque === 0) return 0;
    return 10 - (torque / 5); 
  }, [torque]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-4">System <span className="gradient-text">Configuration</span></h2>
          <p className="text-slate-400">Simulate robot performance by adjusting subsystem parameters in real-time.</p>
        </div>

        <div className="glass p-10 flex flex-col gap-12 border-slate-700/50">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="font-bold flex items-center gap-2 text-slate-300 uppercase text-xs tracking-widest"><Zap size={14} className="text-indigo-400" /> Flywheel Velocity</label>
              <span className="font-mono text-indigo-400 text-xl font-bold">{flywheel} <span className="text-xs text-slate-500">RPM</span></span>
            </div>
            <input 
              type="range" min="0" max="3600" value={flywheel}
              onChange={(e) => setFlywheel(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="font-bold flex items-center gap-2 text-slate-300 uppercase text-xs tracking-widest"><Activity size={14} className="text-indigo-400" /> Intake Efficiency</label>
              <span className="font-mono text-indigo-400 text-xl font-bold">{intake}<span className="text-xs text-slate-500">%</span></span>
            </div>
            <input 
              type="range" min="0" max="100" value={intake}
              onChange={(e) => setIntake(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="font-bold flex items-center gap-2 text-slate-300 uppercase text-xs tracking-widest"><Shield size={14} className="text-indigo-400" /> Drivetrain Torque</label>
              <span className="font-mono text-indigo-400 text-xl font-bold">{torque} <span className="text-xs text-slate-500">Nm</span></span>
            </div>
            <input 
              type="range" min="0" max="50" value={torque}
              onChange={(e) => setTorque(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="relative w-96 h-96 flex items-center justify-center glass border-slate-700/30 rounded-full shadow-2xl shadow-indigo-500/5">
          {/* Technical Grid Overlay for Visualizer */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

          {/* Drivetrain Circle */}
          <motion.div 
            className="absolute inset-12 border border-dashed rounded-full opacity-30"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: drivetrainSpeed || 0, 
              repeat: Infinity, 
              ease: "linear"
            }}
            style={{ 
              borderColor: torque > 0 ? '#6366f1' : '#334155',
              display: torque > 0 ? 'block' : 'none'
            }}
          />
          
          {/* Flywheel Visualizer */}
          <motion.div 
            className="w-40 h-40 border-4 rounded-full flex items-center justify-center relative"
            animate={{ rotate: flywheel }}
            transition={{ duration: 0.1, ease: "linear" }}
            style={{ 
              borderColor: flywheelColor,
              borderTopColor: 'transparent',
            }}
          >
            <div className="absolute inset-0 border border-indigo-500/10 rounded-full scale-150" />
            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
          </motion.div>

          {/* Intake Visualizer */}
          <motion.div 
            className="absolute bottom-12 h-1 bg-indigo-500/50 rounded-full"
            animate={{ width: 100 + (intake * 1.2) }}
            style={{ 
              boxShadow: intake > 50 ? '0 0 20px rgba(99, 102, 241, 0.2)' : 'none'
            }}
          />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 w-full max-w-sm">
          <div className="glass p-5 text-center border-slate-700/50">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-2 font-bold">Est. Velocity</span>
            <span className="font-mono font-bold text-lg text-white">{(flywheel * 0.08).toFixed(1)} <span className="text-xs opacity-50">m/s</span></span>
          </div>
          <div className="glass p-5 text-center border-slate-700/50">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-2 font-bold">Power Draw</span>
            <span className="font-mono font-bold text-lg text-white">{(torque * 0.4 + intake * 0.1).toFixed(1)} <span className="text-xs opacity-50">A</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;