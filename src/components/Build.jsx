import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Activity, Zap, Shield } from 'lucide-react';

const Build = () => {
  const [flywheel, setFlywheel] = useState(0);
  const [intake, setIntake] = useState(0);
  const [torque, setTorque] = useState(0);

  // Derived state for the visualizer
  const flywheelColor = useMemo(() => {
    if (flywheel > 2500) return '#ef4444'; // Red
    if (flywheel > 1000) return '#f59e0b'; // Amber
    return '#6366f1'; // Indigo
  }, [flywheel]);

  const drivetrainSpeed = useMemo(() => {
    if (torque === 0) return 0;
    return 10 - (torque / 5); // Faster animation with more torque
  }, [torque]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-4">Interactive <span className="gradient-text">Specs</span></h2>
          <p className="text-gray-400">Tune the virtual robot parameters to see real-time visual feedback of system performance.</p>
        </div>

        <div className="glass p-8 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="font-bold flex items-center gap-2"><Zap size={18} className="text-primary" /> Flywheel RPM</label>
              <span className="font-mono text-primary text-xl font-bold">{flywheel}</span>
            </div>
            <input 
              type="range" min="0" max="3600" value={flywheel}
              onChange={(e) => setFlywheel(parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="font-bold flex items-center gap-2"><Activity size={18} className="text-secondary" /> Intake Power (%)</label>
              <span className="font-mono text-secondary text-xl font-bold">{intake}%</span>
            </div>
            <input 
              type="range" min="0" max="100" value={intake}
              onChange={(e) => setIntake(parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="font-bold flex items-center gap-2"><Shield size={18} className="text-accent" /> Drivetrain Torque (Nm)</label>
              <span className="font-mono text-accent text-xl font-bold">{torque}</span>
            </div>
            <input 
              type="range" min="0" max="50" value={torque}
              onChange={(e) => setTorque(parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* Drivetrain Circle */}
          <motion.div 
            className="absolute inset-0 border-4 border-dotted rounded-full opacity-40"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: drivetrainSpeed || 0, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
            style={{ 
              borderColor: torque > 0 ? '#06b6d4' : '#334155',
              borderWidth: Math.max(2, torque / 5),
              display: torque > 0 ? 'block' : 'none'
            }}
          />
          
          {/* Static Chassis Frame */}
          <div className="absolute w-64 h-64 border-2 border-white/5 rounded-3xl" />

          {/* Flywheel Visualizer */}
          <motion.div 
            className="w-32 h-32 border-8 rounded-full flex items-center justify-center"
            animate={{ rotate: flywheel }}
            transition={{ duration: 0.1, ease: "linear" }}
            style={{ 
              borderColor: flywheelColor,
              borderTopColor: 'transparent',
              boxShadow: flywheel > 0 ? `0 0 40px ${flywheelColor}44` : 'none'
            }}
          >
            <div className="w-4 h-4 bg-white/20 rounded-full" />
          </motion.div>

          {/* Intake Visualizer */}
          <motion.div 
            className="absolute -bottom-4 h-6 rounded-full"
            animate={{ width: 140 + (intake * 0.8) }}
            style={{ 
              background: `linear-gradient(90deg, #ec4899 ${100-intake}%, #22c55e ${intake}%)`,
              boxShadow: intake > 50 ? '0 0 20px rgba(34, 197, 94, 0.3)' : 'none'
            }}
          />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 w-full max-w-sm">
          <div className="glass p-4 text-center">
            <span className="text-xs text-gray-500 block mb-1">Estimated Velocity</span>
            <span className="font-mono font-bold">{(flywheel * 0.08).toFixed(1)} m/s</span>
          </div>
          <div className="glass p-4 text-center">
            <span className="text-xs text-gray-500 block mb-1">Current Draw</span>
            <span className="font-mono font-bold">{(torque * 0.4 + intake * 0.1).toFixed(1)} A</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;