import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { WindowPanel } from '../components/WindowPanel';
import { Bunny } from '../components/Bunny';

export const Contact = ({ onOpenResume }) => {
  const [status, setStatus] = useState('IDLE'); // IDLE | SENDING | SENT
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('SENDING');

    setTimeout(() => {
      // Create mailto action string
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      setStatus('SENT');
    }, 600);
  };

  return (
    <div className="contact-page" style={{ display: 'grid', gap: '1.5rem' }}>
      
      <WindowPanel title="SYS::CONTACT_TERMINAL // GUESTBOOK" badge="DIRECT COMMUNICATION">
        <div className="grid-layout-dense">
          
          {/* Direct Channels */}
          <div className="col-5">
            <h2 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', fontSize: '1.3rem', color: 'var(--text-primary)' }}>
              LET'S CONNECT
            </h2>
            <p style={{ margin: '0 0 1.25rem 0', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Whether you want to discuss AI/ML projects, collaborate on software development, or discuss research opportunities, my inbox is open!
            </p>

            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div 
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  padding: '0.75rem 0.9rem',
                  borderRadius: 'var(--radius-xs)'
                }}
              >
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>
                  DIRECT EMAIL:
                </span>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-accent)', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}
                >
                  {personalInfo.email}
                </a>
              </div>

              <div 
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  padding: '0.75rem 0.9rem',
                  borderRadius: 'var(--radius-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>
                    GITHUB:
                  </span>
                  <a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}
                  >
                    {personalInfo.github.replace('https://', '')}
                  </a>
                </div>
                <span className="retro-badge" style={{ fontSize: '0.65rem' }}>CODE</span>
              </div>

              <div 
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  padding: '0.75rem 0.9rem',
                  borderRadius: 'var(--radius-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>
                    LINKEDIN:
                  </span>
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}
                  >
                    {personalInfo.linkedin.replace('https://', '')}
                  </a>
                </div>
                <span className="retro-badge" style={{ fontSize: '0.65rem' }}>NETWORK</span>
              </div>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
              <Bunny size="md" label="MESSAGE ADVISOR" />
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Response time: Usually within 24-48 hours
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-7">
            <h3 style={{ margin: '0 0 0.75rem 0', fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--text-accent)' }}>
              ✉ DISPATCH EMAIL NOTE
            </h3>

            {status === 'SENT' ? (
              <div 
                style={{
                  background: 'var(--badge-bg)',
                  border: 'var(--badge-border)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-xs)',
                  textAlign: 'center'
                }}
              >
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>✉</span>
                <h4 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', color: 'var(--badge-text)' }}>
                  MAIL CLIENT OPENED
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                  Your system email application has been launched with your drafted message to <code>{personalInfo.email}</code>.
                </p>
                <button 
                  className="retro-btn retro-btn-secondary" 
                  onClick={() => setStatus('IDLE')}
                  style={{ marginTop: '1rem', fontSize: '0.75rem' }}
                >
                  RESET FORM
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.85rem' }}>
                <div>
                  <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                    YOUR NAME:
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                      padding: '0.55rem 0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      borderRadius: 'var(--radius-xs)'
                    }}
                    placeholder="e.g. Alex Rivera"
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                    YOUR EMAIL ADDRESS:
                  </label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                      padding: '0.55rem 0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      borderRadius: 'var(--radius-xs)'
                    }}
                    placeholder="alex@example.com"
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                    SUBJECT:
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                      padding: '0.55rem 0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      borderRadius: 'var(--radius-xs)'
                    }}
                    placeholder="AI Project Collaboration / Software Query"
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                    MESSAGE CONTENT:
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                      padding: '0.55rem 0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      borderRadius: 'var(--radius-xs)'
                    }}
                    placeholder="Write your message here..."
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <button 
                    type="submit" 
                    className="retro-btn retro-btn-primary" 
                    style={{ flex: 1 }}
                    disabled={status === 'SENDING'}
                  >
                    {status === 'SENDING' ? 'LAUNCHING MAIL CLIENT...' : '✉ OPEN MAIL CLIENT'}
                  </button>
                  <button type="button" className="retro-btn retro-btn-secondary" onClick={onOpenResume}>
                    📄 RESUME
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </WindowPanel>

    </div>
  );
};
