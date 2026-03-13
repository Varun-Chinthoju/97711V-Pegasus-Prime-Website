import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Users, Home as HomeIcon, Settings, Heart, Mail, ChevronRight } from 'lucide-react';
import Home from './components/Home';
import Team from './components/Team';
import Terminal from './components/Terminal';
import Build from './components/Build';
import Outreach from './components/Outreach';
import Reach from './components/Reach';

const tabs = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'code', label: 'Code', icon: TerminalIcon },
  { id: 'build', label: 'Build', icon: Settings },
  { id: 'outreach', label: 'Outreach', icon: Heart },
  { id: 'reach', label: 'Reach', icon: Mail },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && tabs.some(t => t.id === hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (id) => {
    setActiveTab(id);
    window.location.hash = id;
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home onNavigate={handleTabChange} />;
      case 'team': return <Team />;
      case 'code': return <Terminal />;
      case 'build': return <Build />;
      case 'outreach': return <Outreach />;
      case 'reach': return <Reach />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-7xl mx-auto glass flex items-center justify-between px-8 py-4 border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20">
              P
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white">
              Pegasus <span className="gradient-text">97711V</span>
            </span>
          </div>
          
          <ul className="flex items-center gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <li key={tab.id}>
                  <button
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-16 px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;