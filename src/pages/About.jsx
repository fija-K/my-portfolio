import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { WindowPanel } from '../components/WindowPanel';
import { Bunny } from '../components/Bunny';

export const About = ({ onOpenResume }) => {
  return (
    <div className="about-page" style={{ display: 'grid', gap: '1.5rem' }}>
      
      {/* Overview Window */}
      <WindowPanel title="SYS::ABOUT_IDENTITY" badge="BIOGRAPHY">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: '0 0 0.75rem 0', fontFamily: 'var(--font-mono)', fontSize: '1.4rem', color: 'var(--text-primary)' }}>
              ABOUT {personalInfo.name}
            </h2>
            {personalInfo.aboutRaw.map((para, idx) => (
              <p key={idx} style={{ margin: '0 0 0.75rem 0', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {para}
              </p>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Bunny size="lg" label="DEV" />
          </div>
        </div>
      </WindowPanel>

      {/* Grid: Education & Technical Focus */}
      <div className="grid-layout-dense">
        {/* Education Module */}
        <div className="col-6">
          <WindowPanel title="ACADEMICS & EDUCATION" badge="COLLEGE">
            <div style={{ display: 'grid', gap: '0.85rem' }}>
              {personalInfo.education.map((edu, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-xs)'
                  }}
                >
                  <span className="retro-badge" style={{ marginBottom: '0.5rem' }}>
                    {edu.duration}
                  </span>
                  <h3 style={{ margin: '0.35rem 0', fontFamily: 'var(--font-mono)', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                    {edu.degree}
                  </h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.5rem' }}>
                    {edu.institution}
                  </div>
                  <p style={{ margin: 0, fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </WindowPanel>
        </div>

        {/* Technical & Personal Focus */}
        <div className="col-6">
          <WindowPanel title="INTERESTS & MOTIVATION" badge="PERSPECTIVE">
            <div style={{ display: 'grid', gap: '0.6rem' }}>
              {personalInfo.interests.map((interest, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                    padding: '0.6rem 0.85rem',
                    borderRadius: 'var(--radius-xs)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ color: 'var(--text-accent)' }}>⚡</span>
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </WindowPanel>
        </div>
      </div>

      {/* Future Direction & Personal Interests */}
      <WindowPanel title="FUTURE DIRECTION & CREATIVE PHILOSOPHY" badge="BUILDING">
        <div className="grid-layout-dense">
          <div className="col-6">
            <h4 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-accent)' }}>
              🎯 LEARNING & BUILDING
            </h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Focused on mastering machine learning theory, algorithms, and full-stack software development. Continuously building projects to bridge ideas into functional applications.
            </p>
          </div>

          <div className="col-6">
            <h4 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-accent)' }}>
              ✨ CREATIVE INSPIRATION
            </h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Inspired by the concept of relentless creation and continuous invention. Balancing engineering rigor with an eye for design, fashion, and aesthetic expression.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'right' }}>
          <button className="retro-btn retro-btn-primary" onClick={onOpenResume}>
            📄 VIEW RESUME SUMMARY
          </button>
        </div>
      </WindowPanel>

    </div>
  );
};
