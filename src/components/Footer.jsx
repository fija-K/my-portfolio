import React from 'react';
import { personalInfo, currentlyInfo } from '../data/portfolioData';
import { Bunny } from './Bunny';
import { useTheme } from '../context/ThemeContext';

export const Footer = ({ onOpenResume, setActiveTab }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer 
      style={{
        background: 'var(--bg-secondary)',
        borderTop: isDark ? '2px solid var(--border-color)' : '3px dashed var(--border-focus)',
        padding: '2rem 1rem 3rem 1rem',
        marginTop: '3rem'
      }}
    >
      <div 
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          alignItems: 'start'
        }}
      >
        {/* Identity & Mascot */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Bunny size="sm" />
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--text-primary)' }}>
              {isDark ? personalInfo.execName : personalInfo.name.toLowerCase()}
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            {personalInfo.title}
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h4 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-accent)' }}>
            SITE MAP
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
            <span onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', color: 'var(--text-primary)' }}>▶ HOME</span>
            <span onClick={() => setActiveTab('about')} style={{ cursor: 'pointer', color: 'var(--text-primary)' }}>▶ ABOUT</span>
            <span onClick={() => setActiveTab('projects')} style={{ cursor: 'pointer', color: 'var(--text-primary)' }}>▶ PROJECTS</span>
            <span onClick={() => setActiveTab('skills')} style={{ cursor: 'pointer', color: 'var(--text-primary)' }}>▶ SKILLS & DSA</span>
            <span onClick={() => setActiveTab('achievements')} style={{ cursor: 'pointer', color: 'var(--text-primary)' }}>▶ ACHIEVEMENTS</span>
            <span onClick={() => setActiveTab('contact')} style={{ cursor: 'pointer', color: 'var(--text-primary)' }}>▶ CONTACT</span>
          </div>
        </div>

        {/* Hit Counter & System Status */}
        <div>
          <h4 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-accent)' }}>
            WEB 1.0 HIT COUNTER
          </h4>
          <div className="hit-counter-box" style={{ marginBottom: '0.75rem' }}>
            VISITORS: {currentlyInfo.visitorCount}
          </div>
          <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            React & CSS Variables • Dual Visual Modes (Cyber Y2K / Web 1.0 Scrapbook)
          </p>
        </div>

        {/* Actions */}
        <div>
          <h4 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-accent)' }}>
            ACTIONS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <button className="retro-btn retro-btn-primary" onClick={onOpenResume} style={{ fontSize: '0.75rem' }}>
              📄 OPEN RESUME
            </button>
            <button 
              className="retro-btn retro-btn-secondary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ fontSize: '0.75rem' }}
            >
              ▲ BACK TO TOP
            </button>
          </div>
        </div>
      </div>

      <div 
        style={{ 
          textAlign: 'center', 
          marginTop: '2rem', 
          paddingTop: '1rem', 
          borderTop: '1px solid var(--border-color)', 
          fontSize: '0.75rem', 
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)' 
        }}
      >
        © {new Date().getFullYear()} {personalInfo.name.toUpperCase()} • built with ❤ and lots of caffeine 🍓
      </div>
    </footer>
  );
};
