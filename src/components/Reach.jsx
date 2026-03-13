import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin, Send, MessageSquare } from 'lucide-react';

const Reach = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-4xl font-bold mb-4">Connect with <span className="gradient-text">Pegasus</span></h2>
          <p className="text-gray-400">Have questions about our robot or interested in sponsoring our journey? We would love to hear from you.</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 glass p-4 pr-8 w-fit hover:border-primary transition-all cursor-default">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Mail size={24} />
            </div>
            <div>
              <span className="text-xs text-gray-500 block">Email Us</span>
              <span className="font-bold">contact@pegasusprime.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4 glass p-4 pr-8 w-fit hover:border-secondary transition-all cursor-default">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
              <Instagram size={24} />
            </div>
            <div>
              <span className="text-xs text-gray-500 block">Follow on IG</span>
              <span className="font-bold">@pegasus97711v</span>
            </div>
          </div>

          <div className="flex items-center gap-4 glass p-4 pr-8 w-fit hover:border-accent transition-all cursor-default">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <MapPin size={24} />
            </div>
            <div>
              <span className="text-xs text-gray-500 block">Visit Our Lab</span>
              <span className="font-bold">Pegasus High School, Engineering Hall</span>
            </div>
          </div>
        </div>

        <div className="glass p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 gradient-bg opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
          <h3 className="text-2xl font-bold mb-4">Sponsorship Opportunity</h3>
          <p className="text-gray-400 leading-relaxed">
            Our team relies on corporate partners to cover competition fees, travel, and high-precision parts. 
            All sponsors receive logo placement on our robot and team shirts.
          </p>
        </div>
      </div>

      <div className="glass p-10 flex flex-col gap-8 shadow-xl">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <MessageSquare className="text-primary" /> Send a Message
        </h3>
        <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-400 ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-400 ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="hello@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-400 ml-1">Message</label>
            <textarea 
              rows="5" 
              placeholder="Tell us what's on your mind..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white resize-none"
              required
            ></textarea>
          </div>
          <button 
            type="submit"
            className="gradient-bg w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-primary/20"
          >
            Send Message <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reach;