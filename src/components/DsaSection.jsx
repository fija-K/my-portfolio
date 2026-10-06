import React from 'react';
import { dsaData } from '../data/portfolioData';
import { Bunny } from './Bunny';

export const DsaSection = () => {
  return (
    <div className="retro-window" style={{ marginTop: '1.5rem' }}>
      <div className="retro-window-header">
        <div className="retro-window-title">
          <span style={{ color: 'var(--text-accent)' }}>⚙</span>
          <span>DSA & ALGORITHMIC PROBLEM SOLVING JOURNEY</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Bunny size="sm" label="DSA" />
          <span className="retro-badge" style={{ fontSize: '0.65rem' }}>
            SKILLS :: DSA
          </span>
        </div>
      </div>

      <div className="retro-window-body">
        {/* Overview Banner */}
        <div 
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            padding: '0.85rem 1rem',
            borderRadius: 'var(--radius-xs)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            marginBottom: '1.25rem'
          }}
        >
          <div>
            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>
              PLATFORM & TRACK:
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {dsaData.overview.platform}
            </span>
          </div>

          <div>
            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>
              SOLVED COUNT:
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-accent)' }}>
              {dsaData.overview.solvedCount || "In Progress Tracking"}
            </span>
          </div>

          <div>
            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>
              CURRENT TOPIC FOCUS:
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {dsaData.overview.currentFocusTopic}
            </span>
          </div>

          <div>
            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>
              PRIMARY LANGUAGE:
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
              {dsaData.overview.primaryLanguage}
            </span>
          </div>
        </div>

        <h4 style={{ margin: '0 0 0.75rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          TOPICS & PROGRESS STATUS:
        </h4>

        {/* Topics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.75rem' }}>
          {dsaData.topics.map((item, idx) => {
            const isCompleted = item.status === 'COMPLETED';
            const isInProgress = item.status === 'IN_PROGRESS';

            return (
              <div 
                key={idx}
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-xs)',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.name}
                    </span>
                    <span 
                      style={{
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        padding: '0.1rem 0.35rem',
                        borderRadius: '2px',
                        background: isCompleted ? 'rgba(0,255,102,0.1)' : isInProgress ? 'var(--badge-bg)' : 'var(--bg-secondary)',
                        color: isCompleted ? '#00e664' : isInProgress ? 'var(--badge-text)' : 'var(--text-muted)',
                        border: isCompleted ? '1px solid rgba(0,255,102,0.3)' : '1px solid var(--border-color)'
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
