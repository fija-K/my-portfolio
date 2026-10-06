import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * REUSABLE BUNNY MASCOT COMPONENT
 * 
 * Features cute, organic idle hopping animation (anticipation -> hop -> squash/stretch -> pause -> ear twitch).
 * Dark Mode:  Cyber Bunny (dark body, crimson visor/glasses, antenna status LED)
 * Light Mode: Soft Pastel Bunny (cream body, pink ears, rosy blush, sparkle ribbon)
 * Both represent the EXACT SAME cute mascot character.
 */
export const Bunny = ({ 
  size = 'md', 
  label = '', 
  className = '', 
  status = 'idle',
  onEasterEggTrigger = null 
}) => {
  const { theme } = useTheme();
  const isCyber = theme === 'dark';

  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [speechMessage, setSpeechMessage] = useState(null);
  const [showToast, setShowToast] = useState(false);

  // Short personality-driven speech quotes
  const lightQuotes = [
    "hii 🐇",
    "you found me",
    "welcome to fija's corner ♡",
    "have you seen the projects yet?",
    "stay a while"
  ];

  const darkQuotes = [
    "...you're still here.",
    "SYSTEM STATUS: CURIOUS",
    "PROJECTS ARE SOMEWHERE AROUND HERE",
    "don't touch my files",
    "you found me."
  ];

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    const quotes = isCyber ? darkQuotes : lightQuotes;
    const selectedQuote = quotes[(newCount - 1) % quotes.length];
    setSpeechMessage(selectedQuote);

    // Trigger secret Easter egg on 5th click
    if (newCount === 5) {
      setShowToast(true);
      if (onEasterEggTrigger) onEasterEggTrigger();
      setTimeout(() => setShowToast(false), 4000);
    }

    // Hide normal speech after 3 seconds
    setTimeout(() => {
      setSpeechMessage(null);
    }, 3000);
  };

  const dimensions = {
    sm: { width: 34, height: 34, font: '0.65rem' },
    md: { width: 48, height: 48, font: '0.75rem' },
    lg: { width: 68, height: 68, font: '0.85rem' }
  }[size] || { width: 48, height: 48, font: '0.75rem' };

  return (
    <div 
      className={`bunny-wrapper ${className}`}
      role="img"
      aria-label={isCyber ? "Fija's Cyber Bunny mascot with glasses" : "Fija's Pastel Bunny mascot"}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        cursor: 'pointer',
        userSelect: 'none',
        position: 'relative'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      title={isCyber ? "Cyber Bunny // Click to interact" : "Pastel Bunny ~ Click me!"}
    >
      {/* Speech Bubble */}
      {speechMessage && (
        <div 
          style={{
            position: 'absolute',
            bottom: '108%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--bg-window)',
            color: 'var(--text-primary)',
            border: 'var(--window-border)',
            padding: '0.35rem 0.65rem',
            borderRadius: 'var(--radius-xs)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            zIndex: 20,
            boxShadow: 'var(--window-shadow)'
          }}
        >
          {speechMessage}
          <div 
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              borderWidth: '4px',
              borderStyle: 'solid',
              borderColor: 'var(--border-color) transparent transparent transparent'
            }}
          />
        </div>
      )}

      {/* Secret Easter Egg Achievement Toast */}
      {showToast && (
        <div 
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            background: 'var(--badge-bg)',
            border: 'var(--badge-border)',
            color: 'var(--badge-text)',
            padding: '0.65rem 1rem',
            borderRadius: 'var(--radius-xs)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            fontWeight: 700,
            zIndex: 99999,
            boxShadow: 'var(--window-shadow)'
          }}
        >
          ✨ achievement unlocked: <br />
          <span style={{ color: 'var(--text-primary)', fontSize: '0.85rem' }}>CURIOUS ENOUGH ♡</span>
        </div>
      )}

      {/* Organic Animated Bunny Graphic Container */}
      <div 
        className={`bunny-svg-inner ${status === 'loading' ? 'bunny-pulse' : isHovered ? 'bunny-hover' : 'bunny-idle'}`}
        style={{
          width: dimensions.width,
          height: dimensions.height,
          position: 'relative'
        }}
      >
        {isCyber ? (
          /* ================= DARK MODE: CYBER BUNNY (WITH VISOR/GLASSES) ================= */
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            {/* Cyber Ears */}
            <g className="bunny-ear-anim">
              <rect x="18" y="4" width="8" height="24" rx="2" fill="#1e2433" stroke="#ff2a55" strokeWidth="2" />
              <rect x="38" y="4" width="8" height="24" rx="2" fill="#1e2433" stroke="#ff2a55" strokeWidth="2" />
              <rect x="20" y="8" width="4" height="14" fill="#ff2a55" opacity="0.65" />
              <rect x="40" y="8" width="4" height="14" fill="#ff2a55" opacity="0.65" />
            </g>

            {/* Cyber Head */}
            <rect x="14" y="24" width="36" height="32" rx="6" fill="#141824" stroke="#ff2a55" strokeWidth="2" />
            
            {/* Cyber Glasses / Visor */}
            <rect x="18" y="32" width="28" height="10" rx="3" fill="#000000" stroke="#ff2a55" strokeWidth="1.5" />
            <rect x="22" y="35" width="8" height="4" rx="1" fill="#ff003c" />
            <rect x="34" y="35" width="8" height="4" rx="1" fill="#ff003c" />
            {isHovered && <circle cx="26" cy="37" r="1" fill="#ffffff" />}

            {/* Tech Mouth Node */}
            <line x1="30" y1="48" x2="34" y2="48" stroke="#ff5c8d" strokeWidth="2" strokeLinecap="round" />
            
            {/* Status Antenna LED */}
            <circle cx="32" cy="20" r="2" fill="#ff2a55">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        ) : (
          /* ================= LIGHT MODE: SOFT PASTEL BUNNY ================= */
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            {/* Soft Pastel Ears */}
            <g className="bunny-ear-anim">
              <rect x="18" y="4" width="9" height="24" rx="4.5" fill="#fff" stroke="#e64980" strokeWidth="2" />
              <rect x="37" y="4" width="9" height="24" rx="4.5" fill="#fff" stroke="#e64980" strokeWidth="2" />
              <rect x="20" y="8" width="5" height="16" rx="2.5" fill="#ffc9db" />
              <rect x="39" y="8" width="5" height="16" rx="2.5" fill="#ffc9db" />
            </g>

            {/* Soft Head */}
            <rect x="12" y="24" width="40" height="32" rx="12" fill="#ffffff" stroke="#e64980" strokeWidth="2" />
            
            {/* Eyes */}
            {isHovered ? (
              <>
                <path d="M 22 36 Q 26 32 30 36" stroke="#d6336c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M 34 36 Q 38 32 42 36" stroke="#d6336c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </>
            ) : (
              <>
                <circle cx="25" cy="36" r="3" fill="#2b2226" />
                <circle cx="39" cy="36" r="3" fill="#2b2226" />
                <circle cx="26" cy="35" r="1" fill="#ffffff" />
                <circle cx="40" cy="35" r="1" fill="#ffffff" />
              </>
            )}

            {/* Rosy Cheeks */}
            <ellipse cx="20" cy="42" rx="3.5" ry="2" fill="#ffb3c6" />
            <ellipse cx="44" cy="42" rx="3.5" ry="2" fill="#ffb3c6" />

            {/* Nose & Mouth */}
            <path d="M 32 40 L 30 42 L 34 42 Z" fill="#d6336c" />
            <path d="M 32 42 Q 30 46 28 44 M 32 42 Q 34 46 36 44" stroke="#d6336c" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Sparkle Ribbon */}
            <path d="M 14 26 L 20 22 L 18 28 Z" fill="#ff85a2" />
          </svg>
        )}
      </div>

      {label && (
        <span 
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: dimensions.font,
            fontWeight: 700,
            color: isCyber ? 'var(--text-accent-secondary)' : 'var(--text-accent)',
            background: 'var(--badge-bg)',
            border: 'var(--badge-border)',
            padding: '0.15rem 0.45rem',
            borderRadius: 'var(--radius-xs)'
          }}
        >
          {label}
        </span>
      )}

      {/* Organic Animation Styles */}
      <style>{`
        .bunny-idle {
          animation: bunnyOrganicHop 5.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }

        .bunny-hover {
          transform: translateY(-4px) scale(1.08);
          transition: transform 0.2s ease;
        }

        .bunny-pulse {
          animation: bunnyPulse 1.5s ease-in-out infinite alternate;
        }

        @keyframes bunnyPulse {
          0% { transform: scale(0.98); opacity: 0.8; }
          100% { transform: scale(1.05); opacity: 1; }
        }

        /* Organic hop sequence: anticipation -> hop -> squash/stretch -> pause -> ear twitch */
        @keyframes bunnyOrganicHop {
          0%, 75%, 100% { transform: translateY(0) scale(1, 1); }
          78% { transform: translateY(1px) scale(1.03, 0.96); }  /* anticipation */
          83% { transform: translateY(-7px) scale(0.95, 1.05); } /* hop rise */
          87% { transform: translateY(0) scale(1.05, 0.94); }   /* landing squash */
          91% { transform: translateY(-1px) scale(0.98, 1.02); } /* rebound */
        }

        .bunny-ear-anim {
          transform-origin: bottom center;
          animation: bunnyEarTwitch 5.5s ease-in-out infinite;
        }

        @keyframes bunnyEarTwitch {
          0%, 85%, 100% { transform: rotate(0deg); }
          88% { transform: rotate(-4deg); }
          92% { transform: rotate(4deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .bunny-idle, .bunny-pulse, .bunny-ear-anim {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};
