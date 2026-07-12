import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import useStore from './store/useStore'
describe('Terminal 2.0', () => {
  beforeEach(() => { useStore.setState({ windows: [], nextZ: 2, theme: 'dark' }); window.open = vi.fn() })
  it('renders verified identity and links', () => { render(<App/>); expect(screen.getByText('KIRATI RATTANAPORN')).toBeInTheDocument(); expect(screen.getByRole('button',{name:'projects'})).toBeInTheDocument() })
  it('opens and closes a window', async () => { const user=userEvent.setup(); render(<App/>); await user.click(screen.getByRole('button',{name:'about'})); expect(screen.getByLabelText('About Win window')).toBeInTheDocument(); await user.click(screen.getByLabelText('Close About Win')); expect(screen.queryByLabelText('About Win window')).not.toBeInTheDocument() })
  it('executes clear', async () => { const user=userEvent.setup(); render(<App/>); const input=screen.getByLabelText('Terminal command input'); await user.type(input,'help{enter}'); expect(screen.getByText('Available commands:')).toBeInTheDocument(); await user.type(input,'clear{enter}'); expect(screen.queryByText('Available commands:')).not.toBeInTheDocument() })
})
