import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin, Send, MessageSquare } from 'lucide-react';

const Reach = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-4xl font-bold mb-4">Direct <span className="gradient-text">Communication</span></h2>
          <p className="text-slate-400">Establish technical contact or inquire about sponsorship opportunities with Team 97711V.</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 glass p-5 pr-10 w-fit border-slate-700/50 hover:border-indigo-500/50 transition-all cursor-default">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
              <Mail size={22} />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">Inquiries</span>
              <span className="font-bold text-white">contact@pegasusprime.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4 glass p-5 pr-10 w-fit border-slate-700/50 hover:border-indigo-500/50 transition-all cursor-default">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
              <Instagram size={22} />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">Social Architecture</span>
              <span className="font-bold text-white">@pegasus97711v</span>
            </div>
          </div>

          <div className="flex items-center gap-4 glass p-5 pr-10 w-fit border-slate-700/50 hover:border-indigo-500/50 transition-all cursor-default">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
              <MapPin size={22} />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">Operational Base</span>
              <span className="font-bold text-white">Pegasus High, Engineering Hall</span>
            </div>
          </div>
        </div>

        <div className="glass p-8 relative overflow-hidden group border-slate-700/50">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 opacity-5 blur-3xl group-hover:opacity-10 transition-opacity" />
          <h3 className="text-xl font-bold mb-4 text-white">Sponsorship Protocol</h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            We partner with organizations to fuel our R&D and competition logistics. 
            Sponsors gain visibility through robot placement and our digital platforms.
          </p>
        </div>
      </div>

      <div className="glass p-10 flex flex-col gap-8 shadow-2xl border-slate-700/50">
        <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
          <MessageSquare className="text-indigo-400" size={24} /> Transmission
        </h3>
        <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert('Transmission Received.'); }}>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Identity</label>
            <input 
              type="text" 
              placeholder="Full Name"
              className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500/50 transition-colors text-white placeholder:text-slate-600"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Digital Address</label>
            <input 
              type="email" 
              placeholder="email@example.com"
              className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500/50 transition-colors text-white placeholder:text-slate-600"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Payload</label>
            <textarea 
              rows="5" 
              placeholder="Enter message..."
              className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500/50 transition-colors text-white resize-none placeholder:text-slate-600"
              required
            ></textarea>
          </div>
          <button 
            type="submit"
            className="gradient-bg w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-indigo-500/20"
          >
            Send Transmission <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reach;