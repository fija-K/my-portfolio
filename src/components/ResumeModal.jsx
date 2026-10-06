import React from 'react';
import { resumeData, personalInfo } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content retro-window" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '680px' }}
      >
        <div className="retro-window-header">
          <div className="retro-window-title">
            <span style={{ color: 'var(--text-accent)' }}>📄</span>
            <span>RESUME VIEWER // {personalInfo.name}</span>
          </div>
          <div className="retro-window-controls">
            <span className="window-btn window-btn-close" onClick={onClose}>×</span>
          </div>
        </div>

        <div className="retro-window-body">
          {/* Header Action Bar */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1rem',
              marginBottom: '1.25rem',
              borderBottom: '1px var(--card-border)',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontFamily: 'var(--font-mono)' }}>
                {personalInfo.name} — RESUME
              </h3>
              <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Status: {resumeData.status} • File: {resumeData.fileName}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a 
                href={resumeData.downloadUrl}
                download
                className="retro-btn retro-btn-primary"
                onClick={(e) => {
                  if (resumeData.downloadUrl === '#') {
                    e.preventDefault();
                    alert("Resume PDF Placeholder: Replace 'resumeData.downloadUrl' in src/data/portfolioData.js with your actual PDF URL once available.");
                  }
                }}
              >
                💾 DOWNLOAD PDF
              </a>
            </div>
          </div>

          {/* Placeholder Banner Notice */}
          <div 
            style={{
              background: 'var(--badge-bg)',
              border: 'var(--badge-border)',
              padding: '1rem',
              borderRadius: 'var(--radius-xs)',
              marginBottom: '1.5rem'
            }}
          >
            <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: 'var(--badge-text)' }}>
              📌 RESUME FILE PLACEHOLDER STATE
            </p>
            <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              The actual resume document file is currently pending upload. Once ready, place your resume PDF in the <code>public/</code> directory and update the link inside <code>src/data/portfolioData.js</code>.
            </p>
          </div>

          {/* Summary Overview */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-accent)' }}>
              SUMMARY HIGHLIGHTS:
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: '1.6' }}>
              {resumeData.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Footer Close */}
          <div style={{ textAlign: 'right', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <button className="retro-btn retro-btn-secondary" onClick={onClose}>
              CLOSE VIEWER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
