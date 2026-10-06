import React from 'react';
import { currentlyInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const CurrentlyWidget = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="retro-window">
      <div className="retro-window-header">
        <div className="retro-window-title">
          <span style={{ color: 'var(--text-accent)' }}>●</span>
          <span>{isDark ? "SYS::CURRENTLY_STATUS" : "~ currently ~"}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          {/* Playful Web 1.0 Visitor Label */}
          <div 
            className="hit-counter-box" 
            title="Playful Web 1.0 Decorative Visitor Label"
          >
            {isDark ? `VISITORS: ${currentlyInfo.visitorCount}` : `VISITS TO MY LITTLE CORNER: ${currentlyInfo.visitorCount}`}
          </div>
        </div>
      </div>

      <div className="retro-window-body" style={{ display: 'grid', gap: '0.75rem' }}>
        <div>
          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>
            STATUS:
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-accent)' }}>
            {currentlyInfo.status}
          </span>
        </div>

        <div>
          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>
            CURRENT FOCUS:
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
            {currentlyInfo.currentFocus}
          </span>
        </div>

        <div>
          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>
            LEARNING:
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            {currentlyInfo.learning}
          </span>
        </div>

        <div>
          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>
            NOW LISTENING TO:
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            🎵 {currentlyInfo.listening}
          </span>
        </div>
      </div>
    </div>
  );
};
