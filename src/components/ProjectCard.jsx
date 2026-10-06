import React from 'react';

export const ProjectCard = ({ project, onSelect, featured = false }) => {
  return (
    <div 
      className="retro-window"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: featured ? '1px solid var(--border-focus)' : 'var(--window-border)'
      }}
    >
      {/* Title Bar */}
      <div className="retro-window-header">
        <div className="retro-window-title">
          <span style={{ color: 'var(--text-accent)' }}>■</span>
          <span>{project.title || project.name}</span>
        </div>
        <span className="retro-badge" style={{ fontSize: '0.65rem' }}>
          {project.category}
        </span>
      </div>

      <div className="retro-window-body" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        
        {/* Project Technical Thumbnail Preview Box */}
        <div 
          style={{
            height: featured ? '120px' : '90px',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-xs)',
            marginBottom: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Grid Pattern Background */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.1,
              backgroundImage: 'radial-gradient(var(--text-accent) 1px, transparent 0)',
              backgroundSize: '12px 12px'
            }} 
          />

          <div style={{ zIndex: 1, textAlign: 'center' }}>
            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.2rem' }}>
              {project.id === 'skulk' ? '🌐' : project.id === 'urban-heat-ai' ? '🧠' : project.id === 'deadlineclock' ? '⏱️' : '📊'}
            </span>
            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-accent)', letterSpacing: '1px' }}>
              [{project.thumbnailTag || 'PROJECT_MODULE'}]
            </span>
          </div>
        </div>

        {/* Status indicator */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-accent)' }}>
            STATUS: {project.status}
          </span>
          {project.myRole && (
            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              {project.myRole}
            </span>
          )}
        </div>

        {/* Summary Description */}
        <p style={{ margin: '0 0 0.85rem 0', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', flex: 1 }}>
          {project.shortDescription || project.summary}
        </p>

        {/* Stack Tags */}
        {project.techStack && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '1rem' }}>
            {project.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  background: 'var(--badge-bg)',
                  color: 'var(--badge-text)',
                  padding: '0.15rem 0.4rem',
                  border: 'var(--badge-border)',
                  borderRadius: 'var(--radius-xs)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto', flexWrap: 'wrap' }}>
          <button 
            className="retro-btn retro-btn-primary" 
            style={{ flex: 1, fontSize: '0.75rem', padding: '0.45rem 0.6rem' }}
            onClick={() => onSelect(project)}
          >
            📋 VIEW CASE STUDY
          </button>
          
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="retro-btn retro-btn-secondary" 
              style={{ fontSize: '0.75rem', padding: '0.45rem 0.6rem' }}
              title="GitHub Code Repository"
            >
              💻 REPO
            </a>
          )}
          {project.liveDemo && (
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="retro-btn retro-btn-secondary" 
              style={{ fontSize: '0.75rem', padding: '0.45rem 0.6rem' }}
              title="Live Application Demo"
            >
              🚀 DEMO
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
