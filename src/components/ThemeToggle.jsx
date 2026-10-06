import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * THEME TOGGLE BUTTON COMPONENT
 * 
 * Visually displays the Cyber Bunny (Dark mode with crimson visor/glasses) 
 * vs Pastel Bunny (Light mode with pink ears), with clear accessible labels.
 */
export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const tooltipText = isDark ? "Switch to Light Mode (Pastel Scrapbook)" : "Switch to Dark Mode (Cyber Y2K)";
  const ariaLabel = isDark ? "Toggle Light Mode" : "Toggle Dark Mode";

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle-btn ${className}`}
      aria-label={ariaLabel}
      title={tooltipText}
      style={{
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-focus)',
        borderRadius: 'var(--radius-xs)',
        padding: '0.35rem 0.65rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        fontWeight: 800,
        letterSpacing: '0.5px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        boxShadow: isDark ? '0 0 10px rgba(255,42,85,0.2)' : '2px 2px 0px #f093b5',
        transition: 'all 0.2s ease'
      }}
    >
      {/* Bunny Visual Avatar Badge */}
      <span 
        style={{
          width: '20px',
          height: '20px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: isDark ? 'rgba(255,42,85,0.15)' : '#fff0f5',
          border: isDark ? '1px solid #ff2a55' : '1px solid #e64980'
        }}
      >
        {isDark ? (
          /* Cyber Bunny Mini SVG with Visor/Glasses */
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <rect x="8" y="2" width="4" height="10" rx="1" fill="#1e2433" stroke="#ff2a55" strokeWidth="1" />
            <rect x="20" y="2" width="4" height="10" rx="1" fill="#1e2433" stroke="#ff2a55" strokeWidth="1" />
            <rect x="6" y="11" width="20" height="17" rx="4" fill="#141824" stroke="#ff2a55" strokeWidth="1" />
            <rect x="8" y="15" width="16" height="6" rx="2" fill="#000000" stroke="#ff2a55" strokeWidth="1" />
            <rect x="10" y="17" width="4" height="2" fill="#ff003c" />
            <rect x="18" y="17" width="4" height="2" fill="#ff003c" />
          </svg>
        ) : (
          /* Pastel Bunny Mini SVG */
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <rect x="8" y="2" width="4" height="10" rx="2" fill="#ffffff" stroke="#e64980" strokeWidth="1" />
            <rect x="20" y="2" width="4" height="10" rx="2" fill="#ffffff" stroke="#e64980" strokeWidth="1" />
            <rect x="9" y="4" width="2" height="7" rx="1" fill="#ffc9db" />
            <rect x="21" y="4" width="2" height="7" rx="1" fill="#ffc9db" />
            <rect x="5" y="11" width="22" height="17" rx="6" fill="#ffffff" stroke="#e64980" strokeWidth="1" />
            <circle cx="11" cy="17" r="1.5" fill="#2b2226" />
            <circle cx="21" cy="17" r="1.5" fill="#2b2226" />
          </svg>
        )}
      </span>

      {/* Clear Text Label & Active Mode Indicator */}
      <span style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)' }}>
        {isDark ? 'MODE: CYBER' : 'MODE: PASTEL'}
      </span>

      <span 
        style={{
          fontSize: '0.625rem',
          background: 'var(--badge-bg)',
          color: 'var(--badge-text)',
          padding: '0.08rem 0.3rem',
          border: 'var(--badge-border)',
          borderRadius: '2px'
        }}
      >
        {isDark ? 'DARK' : 'LIGHT'}
      </span>
    </button>
  );
};
