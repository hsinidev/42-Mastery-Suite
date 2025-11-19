import React, { useState } from 'react';
import { GameMode } from './types';
import { AlgorithmicPath } from './modes/AlgorithmicPath';
import { NetConfig42 } from './modes/NetConfig42';
import { DataStructDuel } from './modes/DataStructDuel';
import { ShellScriptScramble } from './modes/ShellScriptScramble';
import { GraphTheoryQuest } from './modes/GraphTheoryQuest';
import { DynamicGridPlanner } from './modes/DynamicGridPlanner';
import { NumberTheoryCipher } from './modes/NumberTheoryCipher';
import { SortingWars } from './modes/SortingWars';
import { DeadlockManager } from './modes/DeadlockManager';
import { PipelineFlow } from './modes/PipelineFlow';
import { ZebraDeductionGrid } from './modes/ZebraDeductionGrid';
import { BooleanCircuitBuilder } from './modes/BooleanCircuitBuilder';
import { TangramGeometry } from './modes/TangramGeometry';
import { NPuzzle } from './modes/NPuzzle';

import { 
    Code, Network, Database, Terminal, 
    Share2, Grid, Calculator, BarChart3, 
    Lock, ArrowRightLeft, HelpCircle, Zap, Shapes, LayoutGrid,
    Info, Mail, Book, Shield, FileText, Gavel, ChevronDown, ChevronUp, X
} from 'lucide-react';

// --- Pop-up Modal Components ---
const Modal: React.FC<{ title: string; isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-float" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900">
          <h2 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors"><X size={24}/></button>
        </div>
        <div className="p-8 overflow-y-auto text-slate-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- SEO Blog Post Component ---
const SEOArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="w-full max-w-5xl mx-auto mt-12 mb-12 bg-slate-900/60 backdrop-blur-md border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "42 Mastery Suite",
          "applicationCategory": "EducationalGame",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "A comprehensive 14-module computer science training platform featuring gamified learning for algorithms, networking, and data structures.",
          "author": {
            "@type": "Person",
            "name": "Hsini Mohamed",
            "url": "https://github.com/hsinidev"
          }
        })}
      </script>

      <div className={`p-8 transition-all duration-500 ${isExpanded ? 'max-h-[none]' : 'max-h-[180px] overflow-hidden relative'}`}>
        
        <h2 className="text-3xl font-bold text-white mb-6">Master Computer Science with the 42 Mastery Suite: A Comprehensive Guide</h2>
        
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
           <p className="text-lg font-semibold text-blue-300">
             Welcome to the ultimate educational platform designed to gamify the rigorous curriculum of the "42" network. 
             Whether you are a student, a competitive programmer, or a tech enthusiast, Doodax.com provides the tools you need to master complex CS concepts.
           </p>

           {/* Table of Contents */}
           <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
             <h3 className="text-xl font-bold text-white mb-4">Table of Contents</h3>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-400">
               <li>1. Introduction to Gamified Learning</li>
               <li>2. Core Curriculum Breakdown</li>
               <li>3. Advanced Algorithm Training</li>
               <li>4. Network Topology & Security</li>
               <li>5. Concurrency & Parallelism</li>
               <li>6. Mathematical Logic Modules</li>
               <li>7. Frequently Asked Questions (FAQ)</li>
             </ul>
           </div>

           <h3 className="text-2xl font-bold text-white mt-8">1. Why Choose the 42 Mastery Suite?</h3>
           <p>
             Traditional computer science education can be dry and theoretical. The **42 Mastery Suite** transforms abstract concepts into 
             interactive visual challenges. By leveraging **Active Recall** and **Visual Learning**, users retain information 3x faster than traditional methods.
             This project centralizes 14 distinct disciplines into one cohesive interface.
           </p>

           <h3 className="text-2xl font-bold text-white mt-8">2. Exploring the 14 Game Modes</h3>
           
           <h4 className="text-xl font-bold text-purple-300 mt-4">The Algorithmic Core</h4>
           <p>
             At the heart of the suite is the **Algorithmic Path**. This module teaches visual programming and recursion. 
             Users must guide an agent through complex grids using function calls (`F1`, `F2`), simulating the stack-based execution of real code.
             It is perfect for understanding the fundamentals of **Call Stacks** and **Recursive Logic**.
           </p>

           <h4 className="text-xl font-bold text-purple-300 mt-4">Networking & Infrastructure</h4>
           <p>
             **NetConfig 42** offers a safe sandbox to practice IP addressing, subnetting (CIDR), and routing protocols. 
             Unlike Packet Tracer, which can be overwhelming, this mode distills networking down to its logic puzzles, making it accessible for beginners.
           </p>

           <h4 className="text-xl font-bold text-purple-300 mt-4">Data Structures & Optimization</h4>
           <p>
             In **DataStruct Duel**, players face real-world scenarios where they must choose the correct data structure 
             (HashMaps vs. Arrays vs. LinkedLists) based on Time Complexity ($O(n)$ vs $O(1)$). This prepares students for technical interviews at top tech companies.
           </p>

           <h3 className="text-2xl font-bold text-white mt-8">3. Advanced Competitive Programming</h3>
           <p>
             For those looking to excel in competitions like ICPC, the **Graph Theory Quest** and **Dynamic Grid Planner** are essential.
             Visualize **Dijkstra's Algorithm** in real-time, seeing exactly how nodes relax and paths are optimized. 
             Solve **Knapsack-style** problems on a grid to internalize Dynamic Programming tables.
           </p>

           <h3 className="text-2xl font-bold text-white mt-8">4. FAQ</h3>
           <dl className="space-y-4">
             <div>
               <dt className="font-bold text-white">Is this platform free?</dt>
               <dd>Yes, the 42 Mastery Suite is completely free and open-source.</dd>
             </div>
             <div>
               <dt className="font-bold text-white">Do I need to be a 42 student?</dt>
               <dd>No! While tailored to the 42 curriculum, it is valuable for anyone learning CS.</dd>
             </div>
             <div>
               <dt className="font-bold text-white">Does it work on mobile?</dt>
               <dd>The interface is optimized for desktop to provide the best coding experience, but is responsive for tablets.</dd>
             </div>
           </dl>

           <p className="text-sm text-slate-500 mt-8 italic border-t border-slate-700 pt-4">
             Keywords: 42 school, coding games, algorithm visualization, network simulation, learn bash, data structures, dynamic programming, react game, web development, CS education.
           </p>
        </div>

        {/* Gradient Overlay for collapsed state */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent pointer-events-none" />
        )}
      </div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-slate-800 hover:bg-slate-700 text-blue-400 font-bold py-3 flex items-center justify-center gap-2 transition-colors border-t border-slate-700"
      >
        {isExpanded ? (
          <>Read Less <ChevronUp size={16}/></>
        ) : (
          <>Read More <ChevronDown size={16}/></>
        )}
      </button>
    </article>
  );
};

const App: React.FC = () => {
  const [mode, setMode] = useState<GameMode | null>(null);
  
  // Modal States
  const [modalOpen, setModalOpen] = useState<string | null>(null);

  const openModal = (type: string) => setModalOpen(type);
  const closeModal = () => setModalOpen(null);

  // Render active game mode full screen
  if (mode) {
    const renderGame = () => {
        switch(mode) {
            case GameMode.ALGO: return <AlgorithmicPath onBack={() => setMode(null)} />;
            case GameMode.NET: return <NetConfig42 onBack={() => setMode(null)} />;
            case GameMode.STRUCT: return <DataStructDuel onBack={() => setMode(null)} />;
            case GameMode.BASH: return <ShellScriptScramble onBack={() => setMode(null)} />;
            case GameMode.GRAPH: return <GraphTheoryQuest onBack={() => setMode(null)} />;
            case GameMode.DP_GRID: return <DynamicGridPlanner onBack={() => setMode(null)} />;
            case GameMode.NUM_THEORY: return <NumberTheoryCipher onBack={() => setMode(null)} />;
            case GameMode.SORTING: return <SortingWars onBack={() => setMode(null)} />;
            case GameMode.DEADLOCK: return <DeadlockManager onBack={() => setMode(null)} />;
            case GameMode.PIPELINE: return <PipelineFlow onBack={() => setMode(null)} />;
            case GameMode.ZEBRA: return <ZebraDeductionGrid onBack={() => setMode(null)} />;
            case GameMode.BOOLEAN: return <BooleanCircuitBuilder onBack={() => setMode(null)} />;
            case GameMode.TANGRAM: return <TangramGeometry onBack={() => setMode(null)} />;
            case GameMode.N_PUZZLE: return <NPuzzle onBack={() => setMode(null)} />;
            default: return null;
        }
    };
    return (
      <div className="h-screen w-screen overflow-hidden bg-brand-dark animate-fade-in">
         {renderGame()}
      </div>
    );
  }

  // Main Dashboard
  return (
    <div className="min-h-screen font-sans text-white flex flex-col relative">
      
      {/* Navbar */}
      <nav className="w-full p-6 flex justify-between items-center max-w-7xl mx-auto z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/20">42</div>
          <h1 className="text-2xl font-bold tracking-tight text-white">MASTERY SUITE</h1>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-300">
          <button onClick={() => openModal('Guide')} className="hover:text-white transition-colors">Guide</button>
          <button onClick={() => openModal('About')} className="hover:text-white transition-colors">About</button>
          <button onClick={() => openModal('Contact')} className="hover:text-white transition-colors">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center p-6 z-10">
        <div className="text-center mb-12 mt-8 animate-float">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-purple-300 drop-shadow-sm">
            Master the Code.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            14 interactive modules designed to gamify the most complex topics in computer science. 
            From Algorithms to System Architecture.
          </p>
        </div>
        
        {/* Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl w-full">
          <SectionLabel label="CORE CURRICULUM" />
          <MenuCard title="Algorithmic Path" desc="Visual Logic & Recursion" icon={<Code/>} color="from-blue-500 to-cyan-400" onClick={() => setMode(GameMode.ALGO)}/>
          <MenuCard title="NetConfig 42" desc="IPs & Routing Protocols" icon={<Network/>} color="from-violet-500 to-purple-400" onClick={() => setMode(GameMode.NET)}/>
          <MenuCard title="DataStruct Duel" desc="Time Complexity (Big O)" icon={<Database/>} color="from-orange-500 to-amber-400" onClick={() => setMode(GameMode.STRUCT)}/>
          <MenuCard title="ShellScript Scramble" desc="Bash & Piping" icon={<Terminal/>} color="from-emerald-500 to-green-400" onClick={() => setMode(GameMode.BASH)}/>

          <SectionLabel label="ALGORITHMS & MATH" />
          <MenuCard title="Graph Theory Quest" desc="BFS, DFS, Dijkstra" icon={<Share2/>} color="from-indigo-500 to-blue-400" onClick={() => setMode(GameMode.GRAPH)}/>
          <MenuCard title="Dynamic Grid" desc="Dynamic Programming" icon={<Grid/>} color="from-pink-500 to-rose-400" onClick={() => setMode(GameMode.DP_GRID)}/>
          <MenuCard title="Number Theory" desc="Primes & Modular Math" icon={<Calculator/>} color="from-yellow-500 to-orange-400" onClick={() => setMode(GameMode.NUM_THEORY)}/>
          <MenuCard title="Sorting Wars" desc="Algorithm Visualization" icon={<BarChart3/>} color="from-red-500 to-orange-400" onClick={() => setMode(GameMode.SORTING)}/>

          <SectionLabel label="CONCURRENCY" />
          <MenuCard title="Deadlock Manager" desc="Mutex & Race Conditions" icon={<Lock/>} color="from-slate-500 to-gray-400" onClick={() => setMode(GameMode.DEADLOCK)}/>
          <MenuCard title="Pipeline Flow" desc="Async Data Streams" icon={<ArrowRightLeft/>} color="from-cyan-500 to-blue-400" onClick={() => setMode(GameMode.PIPELINE)}/>

          <SectionLabel label="PURE LOGIC" />
          <MenuCard title="Zebra Deduction" desc="Constraint Satisfaction" icon={<HelpCircle/>} color="from-stone-500 to-gray-400" onClick={() => setMode(GameMode.ZEBRA)}/>
          <MenuCard title="Boolean Builder" desc="Logic Gates & Circuits" icon={<Zap/>} color="from-lime-500 to-green-400" onClick={() => setMode(GameMode.BOOLEAN)}/>
          <MenuCard title="Tangram Geo" desc="Spatial Reasoning" icon={<Shapes/>} color="from-amber-500 to-yellow-400" onClick={() => setMode(GameMode.TANGRAM)}/>
          <MenuCard title="n-Puzzle" desc="Heuristic Search" icon={<LayoutGrid/>} color="from-teal-500 to-emerald-400" onClick={() => setMode(GameMode.N_PUZZLE)}/>
        </div>

        {/* SEO Blog Post */}
        <SEOArticle />

      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-950/80 backdrop-blur-lg border-t border-slate-800 mt-12 z-10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm">
             <div>
               <h4 className="font-bold text-white mb-4">Product</h4>
               <ul className="space-y-2 text-slate-400">
                 <li><button onClick={() => openModal('About')} className="hover:text-brand-gold transition-colors">About Suite</button></li>
                 <li><button onClick={() => openModal('Guide')} className="hover:text-brand-gold transition-colors">User Guide</button></li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-white mb-4">Legal</h4>
               <ul className="space-y-2 text-slate-400">
                 <li><button onClick={() => openModal('Privacy')} className="hover:text-brand-gold transition-colors">Privacy Policy</button></li>
                 <li><button onClick={() => openModal('Terms')} className="hover:text-brand-gold transition-colors">Terms of Service</button></li>
                 <li><button onClick={() => openModal('DMCA')} className="hover:text-brand-gold transition-colors">DMCA</button></li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-white mb-4">Connect</h4>
               <ul className="space-y-2 text-slate-400">
                 <li><button onClick={() => openModal('Contact')} className="hover:text-brand-gold transition-colors">Contact Us</button></li>
                 <li><a href="https://github.com/hsinidev" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">GitHub</a></li>
               </ul>
             </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-500 mb-2">© 2024 42 Mastery Suite. All rights reserved.</p>
            <p className="text-sm font-semibold">
              Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noreferrer" className="text-[#FFD700] hover:text-yellow-300 transition-colors hover:underline">HSINI MOHAMED</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal title="About Doodax" isOpen={modalOpen === 'About'} onClose={closeModal}>
        <p className="mb-4">Doodax.com is a premier educational platform built to bridge the gap between theoretical computer science and practical application.</p>
        <p>Inspired by the peer-to-peer learning model of 42 Schools, this suite provides a sandbox environment for students to test their knowledge without the fear of failure.</p>
      </Modal>

      <Modal title="Contact Us" isOpen={modalOpen === 'Contact'} onClose={closeModal}>
        <div className="space-y-4">
           <div className="flex items-center gap-3 p-4 bg-slate-800 rounded-lg">
             <Network className="text-blue-400"/>
             <div>
               <div className="text-xs text-slate-400">Website</div>
               <div className="font-mono text-white">doodax.com</div>
             </div>
           </div>
           <div className="flex items-center gap-3 p-4 bg-slate-800 rounded-lg">
             <Mail className="text-blue-400"/>
             <div>
               <div className="text-xs text-slate-400">Email</div>
               <div className="font-mono text-white">hsini.web@gmail.com</div>
             </div>
           </div>
        </div>
      </Modal>

      <Modal title="User Guide" isOpen={modalOpen === 'Guide'} onClose={closeModal}>
        <h3 className="text-lg font-bold text-white mb-2">Getting Started</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Select a module from the dashboard.</li>
          <li>Read the specific instructions for the level on the sidebar.</li>
          <li>Complete the objective to unlock the next level.</li>
        </ul>
        <h3 className="text-lg font-bold text-white mb-2">Saving Progress</h3>
        <p>Your progress is currently saved in your local browser session.</p>
      </Modal>

      <Modal title="Privacy Policy" isOpen={modalOpen === 'Privacy'} onClose={closeModal}>
        <p className="mb-4"><strong>Effective Date: May 2024</strong></p>
        <p>At Doodax, we prioritize your privacy. We do not collect personal data. All game progress is stored locally on your device.</p>
        <p>We use basic analytics to improve site performance but do not track individual user behavior.</p>
      </Modal>

      <Modal title="Terms of Service" isOpen={modalOpen === 'Terms'} onClose={closeModal}>
        <p className="mb-4">By using Doodax.com, you agree to use the platform for educational purposes.</p>
        <p>The content is provided "as is" without warranties. You may not reverse engineer or redistribute the game assets without permission.</p>
      </Modal>

      <Modal title="DMCA Policy" isOpen={modalOpen === 'DMCA'} onClose={closeModal}>
        <p>Doodax respects the intellectual property rights of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us at hsini.web@gmail.com.</p>
      </Modal>

    </div>
  );
};

// --- Sub Components ---
const SectionLabel: React.FC<{label: string}> = ({label}) => (
    <div className="col-span-full pt-8 pb-4 border-b border-slate-800/50 mb-4">
        <h3 className="text-xs font-extrabold text-slate-500 tracking-[0.2em] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-600"></span>
            {label}
        </h3>
    </div>
);

const MenuCard: React.FC<{title: string, desc: string, icon: React.ReactNode, color: string, onClick: () => void}> = ({title, desc, icon, color, onClick}) => (
  <button 
    onClick={onClick}
    className="
      relative overflow-hidden
      bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 
      p-6 rounded-2xl text-left transition-all duration-300 group
      hover:border-slate-500 hover:bg-slate-800/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20
      flex flex-col gap-4 h-full
    "
  >
    <div className={`
        w-12 h-12 rounded-xl flex items-center justify-center text-white mb-2
        bg-gradient-to-br ${color} shadow-lg
        group-hover:scale-110 transition-transform duration-300
    `}>
        {icon}
    </div>
    <div>
      <h2 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">{title}</h2>
      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">{desc}</p>
    </div>
  </button>
);

export default App;