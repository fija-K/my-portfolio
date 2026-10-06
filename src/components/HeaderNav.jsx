import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { Bunny } from './Bunny';
import { useTheme } from '../context/ThemeContext';

export const HeaderNav = ({ activeTab, setActiveTab, onOpenResume }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', icon: '🏠' },
    { id: 'about', label: 'ABOUT', icon: '👧' },
    { id: 'projects', label: 'PROJECTS', icon: '🧰' },
    { id: 'skills', label: 'SKILLS', icon: '🌸' },
    { id: 'achievements', label: 'ACHIEVEMENTS', icon: '🏆' },
    { id: 'contact', label: 'CONTACT', icon: '✉' }
  ];

  return (
    <header 
      style={{
        background: 'var(--bg-secondary)',
        borderBottom: '2px solid var(--border-focus)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      {/* Top Reference Ribbon / Command Line Bar */}
      <div 
        style={{
          background: isDark ? '#000000' : 'var(--header-grad)',
          borderBottom: '1px solid var(--border-color)',
          padding: '0.2rem 1rem',
          fontSize: '0.7rem',
          fontFamily: 'var(--font-mono)',
          color: isDark ? 'var(--text-accent)' : 'var(--text-accent-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <span>
          {isDark ? `user@fija:~$ welcome to my digital space` : `❀ welcome to fija's little corner! ❀`}
        </span>
        <span>
          {isDark ? `time: ${timeStr || '01:47 AM'}` : `★ two modes. same world. ★`}
        </span>
      </div>

      <div 
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0.5rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}
      >
        {/* Brand & Mascot */}
        <div 
          onClick={() => setActiveTab('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            cursor: 'pointer'
          }}
        >
          <Bunny size="sm" />
          <div>
            <div 
              className={isDark ? "cyber-glitch cursor-blink" : ""}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.05rem',
                fontWeight: 900,
                letterSpacing: '0.5px',
                color: 'var(--text-primary)'
              }}
            >
              {isDark ? personalInfo.execName : personalInfo.name.toLowerCase()}
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>
              {personalInfo.title}
            </div>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileOpen(false);
                }}
                style={{
                  background: isActive ? 'var(--accent-red)' : 'var(--bg-tertiary)',
                  color: isActive ? '#ffffff' : 'var(--text-primary)',
                  border: isActive ? '1px solid var(--border-bright)' : '1px solid var(--border-color)',
                  padding: '0.4rem 0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-xs)',
                  transition: 'all 0.15s ease'
                }}
              >
                {!isDark && <span style={{ marginRight: '0.25rem' }}>{item.icon}</span>}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Highly Visible RESUME Action */}
          <button 
            className="retro-btn retro-btn-primary"
            onClick={onOpenResume}
            style={{ fontSize: '0.75rem', padding: '0.4rem 0.75rem' }}
          >
            📄 RESUME
          </button>

          {/* Theme Switcher */}
          <ThemeToggle />

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'var(--bg-tertiary)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              padding: '0.4rem 0.6rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              cursor: 'pointer'
            }}
          >
            {mobileOpen ? '✕' : '☰ MENU'}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div 
          style={{
            background: 'var(--bg-window)',
            borderTop: '1px solid var(--border-color)',
            padding: '0.75rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileOpen(false);
              }}
              style={{
                textAlign: 'left',
                background: activeTab === item.id ? 'var(--badge-bg)' : 'transparent',
                color: activeTab === item.id ? 'var(--badge-text)' : 'var(--text-primary)',
                border: 'none',
                padding: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <span style={{ marginRight: '0.5rem' }}>{item.icon}</span> {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle-btn { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
};
