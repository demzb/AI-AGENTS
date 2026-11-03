'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, Bot, BrainCircuit, Code2, Compass, Filter, Github, LayoutGrid, Search, Sparkles, Workflow, Zap } from 'lucide-react';

type Agent = { name: string; description: string; category: string; stack: string; path: string; status: 'Ready to deploy' | 'In preparation'; featured?: boolean };
const agents: Agent[] = [
  { name: 'AI Deep Research Agent', description: 'Investigate complex questions with web research and a live workspace for tool results.', category: 'Research', stack: 'Next.js · LangGraph · CopilotKit', path: 'generative_ui_agents/ai-deep-research-agent', status: 'Ready to deploy', featured: true },
  { name: 'Generative UI Starter', description: 'A chat-driven workspace where an agent can create and update interactive boards.', category: 'Productivity', stack: 'Next.js · LangGraph · CopilotKit', path: 'generative_ui_agents/generative-ui-starter-project', status: 'In preparation' },
  { name: 'AI Financial Coach', description: 'Explore budgets, savings goals and debt plans through interactive cards.', category: 'Finance', stack: 'Next.js · CopilotKit', path: 'generative_ui_agents/ai-financial-coach-agent', status: 'In preparation' },
  { name: 'AI Dashboard Canvas', description: 'Turn a plain-language request into an interactive dashboard with charts.', category: 'Data & Analytics', stack: 'Next.js · Google ADK', path: 'generative_ui_agents/ai-dashboard-canvas-agent', status: 'In preparation' },
  { name: 'MCP Apps Showcase', description: 'Explore interactive applications powered by Model Context Protocol.', category: 'Developer Tools', stack: 'Next.js · MCP · AG-UI', path: 'generative_ui_agents/mcp-apps-generative-ui-showcase', status: 'In preparation' },
  { name: 'Shadcn Component Generator', description: 'Generate reusable interface components through an AI-assisted workflow.', category: 'Developer Tools', stack: 'Next.js · LangGraph · shadcn', path: 'generative_ui_agents/ai-shadcn-component-generator', status: 'In preparation' },
];
const categories = ['All agents', 'Research', 'Productivity', 'Finance', 'Data & Analytics', 'Developer Tools'];

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All agents');
  const visible = useMemo(() => agents.filter(a => (category === 'All agents' || a.category === category) && `${a.name} ${a.description} ${a.category} ${a.stack}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  return <main className="shell">
    <aside className="sidebar"><a className="brand" href="#top"><span className="brand-icon"><BrainCircuit size={21}/></span><span>DEM <b>LABS</b></span></a><div className="side-label">WORKSPACE</div><a className="nav active" href="#agents"><LayoutGrid size={17}/> Agent library</a><a className="nav" href="#categories"><Compass size={17}/> Discover</a><a className="nav" href="https://github.com/demzb/AI-AGENTS" target="_blank" rel="noreferrer"><Github size={17}/> Source repository <ArrowUpRight size={14}/></a><div className="side-bottom"><div className="side-orb"><Sparkles size={17}/></div><strong>Your AI workspace</strong><p>One home for the tools you build, test and launch.</p><span className="version">DEVELOPMENT PREVIEW</span></div></aside>
    <section className="main" id="top"><header className="topbar"><div className="crumb">Workspace <span>/</span> Agent library</div><a className="github-link" href="https://github.com/demzb/AI-AGENTS" target="_blank" rel="noreferrer"><Github size={16}/> View on GitHub <ArrowUpRight size={14}/></a></header>
      <section className="hero"><div className="eyebrow"><span className="pulse"/> YOUR AI COMMAND CENTRE</div><h1>Meet your next<br/><em>AI advantage.</em></h1><p className="hero-copy">Discover, organise and launch intelligent agents from one workspace. Your collection, all in one place.</p><div className="hero-stats"><div><strong>06</strong><span>Featured projects</span></div><i/><div><strong>05</strong><span>Categories</span></div><i/><div><strong>01</strong><span>Deployment configured</span></div></div><div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="core"><BrainCircuit size={46}/></div><span className="node node-a"><Bot size={18}/></span><span className="node node-b"><Workflow size={18}/></span><span className="node node-c"><Code2 size={18}/></span><span className="node node-d"><Zap size={18}/></span></div></section>
      <section className="library" id="agents"><div className="section-head"><div><div className="eyebrow muted">THE COLLECTION</div><h2>Agent library <span className="count">{visible.length.toString().padStart(2,'0')}</span></h2><p>Purpose-built AI tools, ready to explore.</p></div><div className="search"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search agents..." aria-label="Search agents"/></div></div>
      <div className="filters" id="categories"><span className="filter-icon"><Filter size={15}/></span>{categories.map(c=><button key={c} className={category===c?'selected':''} onClick={()=>setCategory(c)}>{c}</button>)}</div>
      <div className="cards">{visible.map((a,i)=><article className={`agent-card ${a.featured?'featured':''}`} key={a.name}><div className="card-top"><span className="agent-symbol">{a.category==='Research'?<Search/>:a.category==='Finance'?<Zap/>:a.category==='Data & Analytics'?<LayoutGrid/>:a.category==='Developer Tools'?<Code2/>:<Workflow/>}</span><span className={`status ${a.status==='Ready to deploy'?'ready':''}`}><i/>{a.status}</span></div><div className="card-category">{a.category.toUpperCase()}</div><h3>{a.name}</h3><p className="card-desc">{a.description}</p><div className="stack">{a.stack}</div><div className="card-footer"><span className="path">{a.path.split('/').slice(-1)[0]}</span><a href={`https://github.com/demzb/AI-AGENTS/tree/main/${a.path}`} target="_blank" rel="noreferrer">Explore project <ArrowUpRight size={15}/></a></div></article>)}</div>
      {visible.length===0&&<div className="empty">No agents match that search. Try another name or category.</div>}
      <footer><span>© 2026 DEM LABS</span><span>Built to make AI useful.</span></footer></section>
    </section>
  </main>;
}
