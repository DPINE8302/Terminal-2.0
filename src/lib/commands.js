import { portfolio } from '../data/portfolio'

export const commandNames = ['help', 'home', 'whoami', 'about', 'skills', 'projects', 'achievements', 'creative', 'contact', 'socials', 'clear', 'theme', 'date', 'github', 'instagram', 'youtube']
const windows = { about: ['about', 'About Win'], whoami: ['about', 'About Win'], skills: ['skills', 'Skills'], projects: ['projects', 'Selected projects'], achievements: ['achievements', 'Experience'], creative: ['creative', 'Creative work'], contact: ['contact', 'Contact & socials'], socials: ['contact', 'Contact & socials'], home: ['home', 'Welcome'] }

export function parseCommand(raw) {
  const [name = '', arg = ''] = raw.trim().toLowerCase().split(/\s+/)
  if (!name) return { type: 'empty' }
  if (name === 'clear') return { type: 'clear' }
  if (name === 'help') return { type: 'output', lines: ['Available commands:', commandNames.join(' · '), 'Tip: use Tab to complete a command.'] }
  if (name === 'date') return { type: 'output', lines: [new Date().toLocaleString()] }
  if (name === 'theme') return ['dark', 'light', 'amber'].includes(arg) ? { type: 'theme', theme: arg, lines: [`Theme set to ${arg}.`] } : { type: 'output', lines: ['Usage: theme dark | light | amber'] }
  if (['github', 'instagram', 'youtube'].includes(name)) return { type: 'link', url: portfolio.socials[name], lines: [`Opening ${name}…`] }
  if (windows[name]) return { type: 'window', window: { id: windows[name][0], title: windows[name][1] }, lines: [`Opening ${windows[name][1].toLowerCase()}…`] }
  return { type: 'unknown', lines: [`command not found: ${name}`, "Type 'help' to list available commands."] }
}
