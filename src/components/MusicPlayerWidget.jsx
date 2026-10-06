import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const MusicPlayerWidget = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [notice, setNotice] = useState(false);

  const handlePlayClick = () => {
    setNotice(true);
    setTimeout(() => setNotice(false), 3000);
  };

  return (
    <div className="retro-window">
      <div className="retro-window-header">
        <div className="retro-window-title">
          <span style={{ color: 'var(--text-accent)' }}>🎵</span>
          <span>{isDark ? "NOW PLAYING // AUDIO_PLAYER" : "~ music player ~"}</span>
        </div>
        <span className="retro-badge" style={{ fontSize: '0.65rem' }}>
          EMPTY
        </span>
      </div>

      <div className="retro-window-body">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {/* Placeholder Vinyl / Cassette Box */}
          <div 
            style={{
              width: '44px',
              height: '44px',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-xs)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>🎧</span>
          </div>

          {/* Track Placeholder Info */}
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              NOW PLAYING
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              ♡ nothing yet
            </div>
          </div>

          {/* Play Action Button */}
          <button 
            onClick={handlePlayClick}
            className="retro-btn retro-btn-secondary"
            style={{
              padding: '0.35rem 0.65rem',
              fontSize: '0.725rem',
              borderRadius: 'var(--radius-xs)'
            }}
            title="Audio source pending attachment"
          >
            ▶ PLAY
          </button>
        </div>

        {notice && (
          <div style={{ marginTop: '0.5rem', fontSize: '0.7rem', color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>
            📌 AUDIO SOURCE PENDING: Real track file will be attached in a future update!
          </div>
        )}
      </div>
    </div>
  );
};
