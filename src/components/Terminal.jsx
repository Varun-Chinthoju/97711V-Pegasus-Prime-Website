import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const COMMANDS = {
  'help': 'Display list of all 50 available commands',
  'clear': 'Clear the terminal screen',
  'echo': 'Print the arguments to the terminal',
  'whoami': 'Print the current user (alex)',
  'date': 'Print current date and time',
  'pwd': 'Print working directory',
  'ls': 'List directory contents',
  'cd': 'Change directory',
  'cat': 'Read file contents',
  'mkdir': 'Create directory',
  'rm': 'Remove file',
  'touch': 'Create empty file',
  'sudo': 'Execute a command as superuser',
  'ping': 'Ping a server',
  'ifconfig': 'Display network configuration',
  'top': 'Display system processes',
  'history': 'Show command history',
  'exit': 'Close the terminal session',
  'reboot': 'Restart the system',
  'shutdown': 'Power off',
  'matrix': 'Enter the matrix',
  'fortune': 'Print a random quote',
  'cowsay': 'A cow says something',
  'sl': 'Steam locomotive',
  'neofetch': 'Show system information',
  'robot_status': 'Check Pegasus Prime core systems',
  'deploy_code': 'Push latest code to the brain',
  'run_auton': 'Execute 15s autonomous routine',
  'test_motors': 'Run motor diagnostics',
  'cal_sensors': 'Calibrate vision and inertial sensors',
  'log_errors': 'Display last 10 error codes',
  'set_pid': 'Tune PID controller constants',
  'fw_update': 'Update VEX brain firmware',
  'battery': 'Check battery percentage and health',
  'controller': 'Check connection to master controller',
  'competition': 'Enter match mode',
  'vision_feed': 'Stream camera feed',
  'intake_test': 'Run intake forwards and backwards',
  'flywheel_spin': 'Spin up flywheel to max RPM',
  'drive_fwd': 'Drive forward 1 meter',
  'turn_90': 'Turn 90 degrees right',
  'read_odom': 'Read odometry coordinates',
  'reset_odom': 'Zero out odometry',
  'team_info': 'Print details about team 97711V',
  'sponsor_us': 'Display sponsorship information',
  'hello_world': 'Basic sanity check',
  'rm_rf_slash': 'Do not try this at home',
  'sudo_make_me_a_sandwich': 'Okay.',
  'do_a_barrel_roll': 'Spin the interface',
  'coffee': 'Brewing a fresh cup...'
};

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    // Run help on start
    processCommand('help');
    inputRef.current?.focus();
  }, []);

  const processCommand = (cmdStr) => {
    const rawInput = cmdStr.trim();
    if (!rawInput && cmdStr !== 'help') return;

    const newHistory = [...history, { type: 'input', text: rawInput }];
    
    if (rawInput) {
      setCommandHistory(prev => [...prev, rawInput]);
      setHistoryIdx(-1);
    }

    const parts = rawInput.toLowerCase().split(' ');
    const cmd = parts[0];
    const args = parts.slice(1);

    let output = '';

    switch (cmd) {
      case 'help':
        output = 'Available Commands:\n===================\n' + 
                 Object.entries(COMMANDS).map(([k, v], i) => 
                   `${(i + 1).toString().padStart(2, '0')}. ${k.padEnd(25, ' ')} - ${v}`
                 ).join('\n');
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'whoami':
        output = 'alex (Captain of 97711V)';
        break;
      case 'date':
        output = new Date().toString();
        break;
      case 'ls':
        output = 'auton.cpp  main.cpp  include/  src/  pid_tuner.py  secret_strats.txt';
        break;
      case 'robot_status':
        output = 'Connecting to Brain...\nBrain: ONLINE\nBattery: 87%\nMotors: ALL NOMINAL\nSensors: CALIBRATED';
        break;
      case 'do_a_barrel_roll':
        document.body.style.transition = "transform 2s";
        document.body.style.transform = "rotate(360deg)";
        setTimeout(() => {
            document.body.style.transition = "";
            document.body.style.transform = "";
        }, 2000);
        output = 'Wheeeeeeee!';
        break;
      case 'matrix':
        output = 'Wake up, Neo...\nThe matrix has you...\nFollow the white rabbit.';
        break;
      default:
        if (COMMANDS[cmd]) {
          output = `Executing ${cmd}...\n(Simulated command finished successfully)`;
        } else {
          output = `zsh: command not found: ${cmd}`;
        }
    }

    setHistory([...newHistory, { type: 'output', text: output }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIdx = historyIdx === -1 ? commandHistory.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(newIdx);
        setInput(commandHistory[newIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx !== -1) {
        const newIdx = historyIdx + 1;
        if (newIdx >= commandHistory.length) {
          setHistoryIdx(-1);
          setInput('');
        } else {
          setHistoryIdx(newIdx);
          setInput(commandHistory[newIdx]);
        }
      }
    }
  };

  return (
    <div className="w-full h-[80vh] bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl flex flex-col font-mono border border-white/10">
      <div className="bg-[#333] px-4 py-2 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-gray-400 text-sm">alex@pegasus-prime: ~ (zsh)</span>
        <div className="w-12" />
      </div>
      
      <div 
        className="flex-grow p-6 overflow-y-auto text-[#00ff00] leading-relaxed whitespace-pre-wrap"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, i) => (
          <div key={i} className="mb-1">
            {line.type === 'input' ? (
              <div className="flex gap-2">
                <span className="text-cyan-400">➜  ~</span>
                <span className="text-white">{line.text}</span>
              </div>
            ) : (
              <div className="text-[#00ff00] opacity-90">{line.text}</div>
            )}
          </div>
        ))}
        <div className="flex gap-2 items-center">
          <span className="text-cyan-400">➜  ~</span>
          <input
            ref={inputRef}
            type="text"
            className="bg-transparent border-none outline-none text-white flex-grow font-mono"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Terminal;