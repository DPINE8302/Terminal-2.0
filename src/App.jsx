import { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import useStore from './store/useStore'
import { commandNames, parseCommand } from './lib/commands'
import { portfolio } from './data/portfolio'

const shortcuts = ['about', 'projects', 'skills', 'creative', 'contact']

function PanelContent({ id }) {
  if (id === 'home') return <section><p className="eyeline">KIRATI / WIN</p><h2>Creative technologist<br />in progress.</h2><p className="lead">{portfolio.person.line}</p></section>
  if (id === 'about') return <section><p className="eyeline">IDENTITY</p><h2>{portfolio.person.name}</h2><p className="lead">{portfolio.person.summary}</p><dl><div><dt>Based</dt><dd>{portfolio.person.location}</dd></div><div><dt>School</dt><dd>{portfolio.person.school}</dd></div><div><dt>Major</dt><dd>{portfolio.person.major}</dd></div></dl><div className="tags">{portfolio.interests.map(x => <span key={x}>{x}</span>)}</div></section>
  if (id === 'skills') return <section><p className="eyeline">CAPABILITIES</p><h2>Skills & tools</h2><div className="skill-list">{Object.entries(portfolio.skills).map(([group, items]) => <div key={group}><h3>{group}</h3><p>{items.join(' · ')}</p></div>)}</div></section>
  if (id === 'projects') return <section><p className="eyeline">SELECTED WORK</p><h2>Projects</h2><div className="projects">{portfolio.projects.map(project => <article key={project.id}><div><p className="project-meta">{project.category} / {project.status}</p><h3>{project.name}</h3><p>{project.description}</p><small>{project.role} · {project.technologies.join(', ')}</small></div><nav>{project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Repository ↗</a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer">View ↗</a>}</nav></article>)}</div></section>
  if (id === 'achievements') return <section><p className="eyeline">EXPERIENCE</p><h2>Learning by doing.</h2>{portfolio.achievements.map(item => <article className="achievement" key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></article>)}</section>
  if (id === 'creative') return <section><p className="eyeline">CREATIVE PRACTICE</p><h2>Images, motion & story.</h2><p className="lead">Photography and filmmaking are where observation becomes narrative. The work is ongoing, practical, and personal.</p><a className="primary-link" href={portfolio.socials.photography} target="_blank" rel="noreferrer">Photography ↗</a><a className="primary-link" href={portfolio.socials.youtube} target="_blank" rel="noreferrer">YouTube ↗</a></section>
  return <section><p className="eyeline">CONNECT</p><h2>Find Win online.</h2><p className="lead">For project context and current work, use one of the verified public profiles below.</p>{Object.entries(portfolio.socials).map(([name, url]) => <a className="social-link" key={name} href={url} target="_blank" rel="noreferrer"><span>{name}</span><span>↗</span></a>)}</section>
}

function Window({ window }) {
  const nodeRef = useRef(null)
  const { closeWindow, minimizeWindow, focusWindow } = useStore()
  return <Draggable nodeRef={nodeRef} handle=".window-bar" bounds="parent" defaultPosition={{ x: 110 + (window.z % 3) * 32, y: 104 + (window.z % 3) * 28 }} disabled={matchMedia('(max-width: 720px)').matches}>
    <article ref={nodeRef} className={`window ${window.minimized ? 'minimized' : ''}`} style={{ zIndex: window.z }} onPointerDown={() => focusWindow(window.id)} aria-label={`${window.title} window`}>
      <header className="window-bar"><div className="window-controls"><button onClick={() => closeWindow(window.id)} aria-label={`Close ${window.title}`}/><button onClick={() => minimizeWindow(window.id)} aria-label={`Minimize ${window.title}`}/><i /></div><span>{window.title}</span><span className="drag-label">DRAG</span></header>
      {!window.minimized && <div className="window-content"><PanelContent id={window.id} /></div>}
    </article>
  </Draggable>
}

function TerminalInput() {
  const [value, setValue] = useState('')
  const [history, setHistory] = useState([])
  const [cursor, setCursor] = useState(-1)
  const [lines, setLines] = useState([{ command: 'whoami', output: ['KIRATI / WIN', 'Creative technologist in progress.', 'No risk. No story.'] }])
  const inputRef = useRef(null)
  const outputRef = useRef(null)
  const { openWindow, clearWindows, setTheme } = useStore()
  useEffect(() => { if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight }, [lines])
  const run = (raw) => {
    const result = parseCommand(raw)
    if (result.type === 'empty') return
    setHistory(items => [...items, raw]); setCursor(-1); setValue('')
    if (result.type === 'clear') { setLines([]); clearWindows(); return }
    setLines(items => [...items, { command: raw, output: result.lines || [] }])
    if (result.type === 'window') openWindow(result.window)
    if (result.type === 'theme') setTheme(result.theme)
    if (result.type === 'link') window.open(result.url, '_blank', 'noopener,noreferrer')
  }
  const keyDown = (event) => {
    if (event.key === 'Enter') run(value)
    if (event.key === 'ArrowUp' && history.length) { event.preventDefault(); const next = cursor < history.length - 1 ? cursor + 1 : cursor; setCursor(next); setValue(history[history.length - 1 - next]) }
    if (event.key === 'ArrowDown') { event.preventDefault(); const next = cursor - 1; setCursor(next); setValue(next < 0 ? '' : history[history.length - 1 - next]) }
    if (event.key === 'Tab') { event.preventDefault(); const hit = commandNames.find(command => command.startsWith(value.toLowerCase())); if (hit) setValue(hit) }
  }
  return <section className="terminal-panel" onClick={() => inputRef.current?.focus()} aria-label="Interactive terminal">
    <header className="terminal-bar"><div className="window-controls"><i/><i/><i/></div><span>win@terminal: ~</span><span>2.0.0</span></header>
    <div className="terminal-output" ref={outputRef} role="log" aria-live="polite">{lines.map((line, index) => <div className="history-line" key={`${line.command}-${index}`}><p><b>win@terminal:~$</b> {line.command}</p>{line.output.map((text, i) => <p className="output" key={i}>{text}</p>)}</div>)}</div>
    <label className="prompt"><span>win@terminal:~$</span><input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} onKeyDown={keyDown} autoCapitalize="none" autoComplete="off" spellCheck="false" aria-label="Terminal command input" autoFocus /></label>
  </section>
}

export default function App() {
  const { theme, windows, openWindow, setTheme } = useStore()
  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])
  return <main className="desktop">
    <header className="menubar"><button className="brand" onClick={() => openWindow({ id: 'home', title: 'Welcome' })}>WIN@TERMINAL</button><nav>{shortcuts.map(command => <button key={command} onClick={() => { const result = parseCommand(command); openWindow(result.window) }}>{command}</button>)}</nav><button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle light and dark theme">◐</button></header>
    <div className="workspace"><div className="intro"><p>KIRATI RATTANAPORN</p><h1>Creative<br/>technology,<br/><em>personally built.</em></h1><span>{portfolio.person.line}</span></div><TerminalInput />{windows.map(window => <Window key={window.id} window={window} />)}</div>
    <footer className="statusbar"><span><i/> AVAILABLE IN BANGKOK</span><span>TYPE ‘HELP’ TO BEGIN</span><span>TERMINAL 2.0</span></footer>
  </main>
}
