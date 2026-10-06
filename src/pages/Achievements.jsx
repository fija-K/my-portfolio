import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { WindowPanel } from '../components/WindowPanel';

export const Achievements = () => {
  return (
    <div className="achievements-page" style={{ display: 'grid', gap: '1.5rem' }}>
      
      <WindowPanel title="SYS::ACHIEVEMENTS_LOG" badge="MILESTONES">
        <div style={{ marginBottom: '1.25rem' }}>
          <h2 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', fontSize: '1.4rem', color: 'var(--text-primary)' }}>
            ACHIEVEMENTS & CERTIFICATIONS
          </h2>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            Hackathons, technical competitions, academic awards, and industry certifications. Structured log for tracking technical accomplishments.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {achievementsData.map((ach) => (
            <div 
              key={ach.id}
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                padding: '1.1rem',
                borderRadius: 'var(--radius-xs)',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '1rem',
                alignItems: 'start'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                <span className="retro-badge" style={{ fontSize: '0.7rem' }}>
                  {ach.badge}
                </span>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  {ach.date}
                </span>
              </div>

              <div>
                <h3 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  {ach.title}
                </h3>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.5rem' }}>
                  {ach.organization}
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions Banner for adding achievements */}
        <div 
          style={{
            marginTop: '1.5rem',
            background: 'var(--badge-bg)',
            border: 'var(--badge-border)',
            padding: '0.85rem 1rem',
            borderRadius: 'var(--radius-xs)',
            fontSize: '0.8rem',
            color: 'var(--badge-text)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          💡 EDITABLE PLACEHOLDER: To append new hackathons or certifications, simply add new entries to the <code>achievementsData</code> array inside <code>src/data/portfolioData.js</code>.
        </div>
      </WindowPanel>

    </div>
  );
};
