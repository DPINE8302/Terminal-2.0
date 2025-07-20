import React from 'react'
import clsx from 'clsx'
import useStore from '../store/useStore'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useStore()

  const themes = [
    { id: 'matrix', label: 'Matrix', className: 'theme-matrix' },
    { id: 'fire', label: 'Fire', className: 'theme-fire-btn' },
    { id: 'ice', label: 'Ice', className: 'theme-ice-btn' },
    { id: 'neon', label: 'Neon', className: 'theme-neon-btn' },
    { id: 'error', label: 'Error', className: 'theme-error-btn' },
    { id: 'inverse', label: 'Inverse', className: 'theme-inverse-btn' }
  ]

  return (
    <div className="theme-switcher">
      {themes.map((themeOption) => (
        <button
          key={themeOption.id}
          className={clsx(
            'theme-button',
            themeOption.className,
            { active: theme === themeOption.id }
          )}
          onClick={() => setTheme(themeOption.id)}
          title={`${themeOption.label} Theme`}
          aria-label={`Switch to ${themeOption.label} theme`}
        />
      ))}
    </div>
  )
}

export default ThemeSwitcher