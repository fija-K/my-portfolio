import React from 'react';
import { projectsData } from '../data/portfolioData';

export const CurrentProjectWidget = ({ onSelectProject }) => {
  // Pull Urban Heat AI (order 2) or active sprint project directly from projectsData
  const activeProject = projectsData.find(p => p.id === 'urban-heat-ai') || projectsData[0];

  if (!activeProject) return null;

  return (
    <div className="retro-window">
      <div className="retro-window-header">
        <div className="retro-window-title">
          <span style={{ color: 'var(--text-accent)' }}>⚡</span>
          <span>CURRENT PROJECT // ACTIVE SPRINT</span>
        </div>
        <span className="retro-badge" style={{ fontSize: '0.65rem' }}>
          {activeProject.status}
        </span>
      </div>

      <div className="retro-window-body">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
            {activeProject.title}
          </h3>
          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
            {activeProject.category}
          </span>
        </div>

        <p style={{ margin: '0 0 0.65rem 0', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
          {activeProject.shortDescription}
        </p>

        {activeProject.myContribution && (
          <div 
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              padding: '0.5rem 0.75rem',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.78rem',
              color: 'var(--text-accent)',
              fontFamily: 'var(--font-mono)',
              marginBottom: '0.85rem'
            }}
          >
            📌 {activeProject.myContribution}
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            className="retro-btn retro-btn-primary" 
            style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
            onClick={() => onSelectProject && onSelectProject(activeProject)}
          >
            📋 VIEW CASE STUDY
          </button>
          {activeProject.github && (
            <a 
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn retro-btn-secondary"
              style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
            >
              💻 GITHUB
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
