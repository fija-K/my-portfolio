import React from 'react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content retro-window"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="retro-window-header">
          <div className="retro-window-title">
            <span style={{ color: 'var(--text-accent)' }}>⚡</span>
            <span>CASE STUDY // {project.title || project.name}</span>
          </div>
          <div className="retro-window-controls">
            <span className="window-btn window-btn-close" onClick={onClose}>×</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="retro-window-body" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
          {/* Header Info */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
              <span className="retro-badge">{project.category}</span>
              <span className="retro-badge" style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
                {project.status}
              </span>
              {project.myRole && (
                <span className="retro-badge" style={{ border: '1px solid var(--border-focus)' }}>
                  ROLE: {project.myRole}
                </span>
              )}
            </div>
            <h2 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', fontSize: '1.3rem', color: 'var(--text-primary)' }}>
              {project.title || project.name}
            </h2>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                TECHNOLOGY STACK:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {project.techStack.map((tech, i) => (
                  <span key={i} className="retro-badge" style={{ background: 'var(--bg-hover)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Case Study Sections (Only renders non-null fields) */}
          <div style={{ display: 'grid', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
            
            {project.motivation && (
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-accent)' }}>
                  01 // MOTIVATION & CONTEXT
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                  {project.motivation}
                </p>
              </div>
            )}

            {project.problem && (
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-accent)' }}>
                  02 // THE PROBLEM
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-accent)' }}>
                  03 // THE SOLUTION
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                  {project.solution}
                </p>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div>
                <h4 style={{ margin: '0 0 0.35rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-accent)' }}>
                  04 // KEY FEATURES & CAPABILITIES
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: '1.6' }}>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.myContribution && (
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-accent)' }}>
                  05 // MY CONTRIBUTION
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                  {project.myContribution}
                </p>
              </div>
            )}

            {project.architecture && (
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-accent)' }}>
                  06 // SYSTEM ARCHITECTURE
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                  {project.architecture}
                </p>
              </div>
            )}

            {project.results && (
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-accent)' }}>
                  07 // RESULT & OUTCOME
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                  {project.results}
                </p>
              </div>
            )}

            {/* Screenshots Display (renders placeholder notice if array is empty) */}
            {project.screenshots && project.screenshots.length > 0 ? (
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-accent)' }}>
                  SCREENSHOT GALLERY
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                  {project.screenshots.map((shot, idx) => (
                    <div key={idx} style={{ border: '1px solid var(--border-color)', padding: '0.5rem', background: 'var(--bg-tertiary)' }}>
                      {shot.src ? (
                        <img src={shot.src} alt={shot.alt || 'Project screenshot'} style={{ width: '100%', height: 'auto' }} />
                      ) : (
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>[Screenshot Placeholder]</span>
                      )}
                      {shot.caption && <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{shot.caption}</div>}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', flexWrap: 'wrap' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="retro-btn retro-btn-primary">
                💻 VIEW GITHUB REPO
              </a>
            )}
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="retro-btn retro-btn-secondary">
                🚀 LIVE DEMO
              </a>
            )}
            <button className="retro-btn retro-btn-secondary" onClick={onClose} style={{ marginLeft: 'auto' }}>
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
