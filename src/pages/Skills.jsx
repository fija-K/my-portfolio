import React from 'react';
import { skillsData } from '../data/portfolioData';
import { WindowPanel } from '../components/WindowPanel';
import { DsaSection } from '../components/DsaSection';

export const Skills = () => {
  return (
    <div className="skills-page" style={{ display: 'grid', gap: '1.5rem' }}>
      
      <WindowPanel title="SYS::TECHNICAL_SKILLS" badge="STACK & TOOLS">
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', fontSize: '1.4rem', color: 'var(--text-primary)' }}>
            TECHNICAL SKILLS & COMPETENCIES
          </h2>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            Structured breakdown of programming languages, machine learning frameworks, databases, and developer infrastructure. Categorized by functional experience.
          </p>
        </div>
      </WindowPanel>

      {/* Categorized Skills Grid */}
      <div style={{ display: 'grid', gap: '1.25rem' }}>
        {skillsData.map((group, groupIdx) => (
          <WindowPanel key={groupIdx} title={group.category} badge={`GROUP_${groupIdx + 1}`}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
              {group.items.map((skill, skillIdx) => {
                const isComfortable = skill.level === 'COMFORTABLE';
                const isLearning = skill.level === 'LEARNING';

                return (
                  <div 
                    key={skillIdx}
                    style={{
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-color)',
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-xs)',
                      display: 'flex',
                      flexDirection: 'column',
                      justify: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                        <span style={{ fontSize: '0.95rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>
                          {skill.name}
                        </span>
                        <span 
                          style={{
                            fontSize: '0.65rem',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 700,
                            padding: '0.15rem 0.4rem',
                            borderRadius: '2px',
                            background: isComfortable ? 'var(--badge-bg)' : isLearning ? 'rgba(255,193,7,0.12)' : 'var(--bg-secondary)',
                            color: isComfortable ? 'var(--badge-text)' : isLearning ? '#ffc107' : 'var(--text-muted)',
                            border: isComfortable ? 'var(--badge-border)' : '1px solid var(--border-color)'
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </WindowPanel>
        ))}
      </div>

      {/* DSA Section Component */}
      <DsaSection />

    </div>
  );
};
