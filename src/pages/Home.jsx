import React, { useState } from 'react';
import { personalInfo, projectsData, skillsData, achievementsData, recentUpdatesData } from '../data/portfolioData';
import { WindowPanel } from '../components/WindowPanel';
import { CurrentlyWidget } from '../components/CurrentlyWidget';
import { CurrentProjectWidget } from '../components/CurrentProjectWidget';
import { MusicPlayerWidget } from '../components/MusicPlayerWidget';
import { ProjectCard } from '../components/ProjectCard';
import { Bunny } from '../components/Bunny';
import { useTheme } from '../context/ThemeContext';

export const Home = ({ setActiveTab, onSelectProject, onOpenResume }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [guestbookNotes, setGuestbookNotes] = useState([
    { author: '_neo_coder', text: 'love the siteee <3' },
    { author: '_cyber_girl', text: 'so cute and cool!' }
  ]);
  const [newNote, setNewNote] = useState('');
  const [showSignForm, setShowSignForm] = useState(false);

  const handleAddGuestNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setGuestbookNotes([...guestbookNotes, { author: '_visitor', text: newNote }]);
    setNewNote('');
    setShowSignForm(false);
  };

  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <div className="home-page" style={{ display: 'grid', gap: '1.25rem' }}>
      
      {isDark ? (
        /* ==========================================================================
           PREVIOUS DARK MODE COMPOSITION (Clean Y2K Cyber Computer & AI Workspace)
           ========================================================================== */
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          
          {/* Hero Identity Window */}
          <WindowPanel 
            title={`${personalInfo.execName} // WORKSPACE_IDENTITY`} 
            subtitle="SYS_INIT"
            badge="AI/ML STUDENT • DEV"
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-block', marginBottom: '0.4rem' }}>
                  <span className="scrapbook-sticker font-mono">
                    [TECHNICAL PERSONAL WORKSPACE]
                  </span>
                </div>

                <h1 
                  className="cyber-glitch cursor-blink"
                  style={{ 
                    margin: '0 0 0.4rem 0', 
                    fontSize: '2.1rem', 
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 900,
                    letterSpacing: '-0.5px',
                    color: 'var(--text-primary)'
                  }}
                >
                  {personalInfo.execName}
                </h1>

                <div 
                  style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: 800, 
                    color: 'var(--text-accent)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '0.85rem'
                  }}
                >
                  {personalInfo.title}
                </div>

                <p style={{ margin: '0 0 1.25rem 0', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '720px' }}>
                  {personalInfo.bioShort}
                </p>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                  <button 
                    className="retro-btn retro-btn-primary"
                    onClick={() => setActiveTab('projects')}
                  >
                    🚀 EXPLORE PROJECTS
                  </button>
                  <button 
                    className="retro-btn retro-btn-secondary"
                    onClick={onOpenResume}
                  >
                    📄 VIEW RESUME
                  </button>
                  <button 
                    className="retro-btn retro-btn-secondary"
                    onClick={() => setActiveTab('contact')}
                  >
                    ✉ CONTACT
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
                <Bunny size="lg" label="ONLINE" />
                <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  {personalInfo.version}
                </span>
              </div>
            </div>
          </WindowPanel>

          {/* Asymmetrical 2-Column Desktop Grid */}
          <div className="grid-layout-dense">
            
            {/* Left Column: Currently, Music Player, Recent Activity */}
            <div className="col-4" style={{ display: 'grid', gap: '1.25rem' }}>
              
              {/* 1. Currently Status Widget */}
              <CurrentlyWidget />

              {/* 2. Active Music Player Widget */}
              <MusicPlayerWidget />

              {/* 3. Recent Activity Notes */}
              <WindowPanel title="RECENT_UPDATES" badge="LOG">
                <div style={{ display: 'grid', gap: '0.6rem' }}>
                  {recentUpdatesData.map((item, idx) => (
                    <div 
                      key={idx}
                      style={{
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        padding: '0.5rem 0.65rem',
                        borderRadius: 'var(--radius-xs)'
                      }}
                    >
                      <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-accent)', display: 'block' }}>
                        [{item.date}]
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-primary)', lineHeight: '1.3' }}>
                        {item.note}
                      </span>
                    </div>
                  ))}
                </div>
              </WindowPanel>

            </div>

            {/* Right Column: Active Sprint Project, Technologies Matrix, Featured Projects */}
            <div className="col-8" style={{ display: 'grid', gap: '1.25rem' }}>
              
              {/* 1. Dynamic Current Sprint Project (Urban Heat AI) */}
              <CurrentProjectWidget onSelectProject={onSelectProject} />

              {/* 2. Technology Snapshot */}
              <WindowPanel title="TECHNOLOGY_MATRIX" badge="STACK">
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {skillsData.map((group, i) => (
                    <div key={i}>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-accent)', display: 'block', marginBottom: '0.35rem' }}>
                        {group.category}
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {group.items.map((item, idx) => (
                          <span 
                            key={idx} 
                            style={{
                              fontSize: '0.75rem',
                              fontFamily: 'var(--font-mono)',
                              background: 'var(--badge-bg)',
                              color: 'var(--badge-text)',
                              border: 'var(--badge-border)',
                              padding: '0.15rem 0.45rem',
                              borderRadius: 'var(--radius-xs)'
                            }}
                          >
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div style={{ textAlign: 'right', marginTop: '0.5rem' }}>
                    <button 
                      className="retro-btn retro-btn-secondary" 
                      onClick={() => setActiveTab('skills')}
                      style={{ fontSize: '0.75rem' }}
                    >
                      VIEW ALL SKILLS & DSA ▶
                    </button>
                  </div>
                </div>
              </WindowPanel>

              {/* 3. Featured Projects Showcase */}
              <WindowPanel 
                title="FEATURED_PROJECTS // CASE_FILES" 
                badge="TOP WORK"
                action={
                  <button 
                    className="retro-btn retro-btn-secondary" 
                    onClick={() => setActiveTab('projects')}
                    style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}
                  >
                    ALL PROJECTS ({projectsData.length}) ▶
                  </button>
                }
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                  {featuredProjects.map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      onSelect={onSelectProject} 
                      featured={true}
                    />
                  ))}
                </div>
              </WindowPanel>

            </div>
          </div>

          {/* Selected Achievements Log */}
          <WindowPanel title="SELECTED_ACHIEVEMENTS // LOG" badge="LOG">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {achievementsData.map((ach) => (
                <div 
                  key={ach.id}
                  style={{
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                    padding: '0.85rem',
                    borderRadius: 'var(--radius-xs)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span className="retro-badge" style={{ fontSize: '0.65rem' }}>{ach.badge}</span>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{ach.date}</span>
                  </div>
                  <h4 style={{ margin: '0 0 0.35rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    {ach.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'right', marginTop: '1rem' }}>
              <button className="retro-btn retro-btn-secondary" onClick={() => setActiveTab('achievements')} style={{ fontSize: '0.75rem' }}>
                VIEW ALL ACHIEVEMENTS ▶
              </button>
            </div>
          </WindowPanel>

        </div>
      ) : (
        /* ==========================================================================
           LIGHT MODE REFERENCE COMPOSITION (Web 1.0 Personal Homepage Scrapbook)
           ========================================================================== */
        <div className="grid-3col-personal">
          
          {/* LEFT COLUMN */}
          <div style={{ display: 'grid', gap: '1rem' }}>
            
            {/* 1. Navigation Menu Widget */}
            <WindowPanel title="navigation" badge="MENU">
              <div style={{ display: 'grid', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.825rem' }}>
                <span onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', color: 'var(--text-accent)' }}>🏠 home</span>
                <span onClick={() => setActiveTab('about')} style={{ cursor: 'pointer' }}>👧 about me</span>
                <span onClick={() => setActiveTab('projects')} style={{ cursor: 'pointer' }}>🧰 projects</span>
                <span onClick={() => setActiveTab('skills')} style={{ cursor: 'pointer' }}>🌸 skills</span>
                <span onClick={() => setActiveTab('achievements')} style={{ cursor: 'pointer' }}>🏆 achievements</span>
                <span onClick={() => setActiveTab('contact')} style={{ cursor: 'pointer' }}>✉ contact</span>
              </div>
            </WindowPanel>

            {/* 2. Now Playing Audio Player */}
            <MusicPlayerWidget />

            {/* 3. Site Stats */}
            <WindowPanel title="site stats" badge="STATS">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
                  visitors
                </div>
                <div className="hit-counter-box" style={{ fontSize: '1rem', padding: '0.25rem 0.5rem', marginBottom: '0.35rem' }}>
                  001337
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                  since may 2024
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <Bunny size="sm" />
                </div>
              </div>
            </WindowPanel>

            {/* 4. Things I Love List */}
            <WindowPanel title="things i love" badge="PERSONAL">
              <div style={{ display: 'grid', gap: '0.35rem', fontSize: '0.8rem' }}>
                <div>♟ chess</div>
                <div>🍥 anime</div>
                <div>🎵 music</div>
                <div>🧠 psychology</div>
                <div>🔍 true crime docs</div>
                <div>🐰 bunnies</div>
              </div>
            </WindowPanel>

            {/* 5. Recent Update Note */}
            <WindowPanel title="recent update" badge="LOG">
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                <div style={{ color: 'var(--text-accent)' }}>feat: added heatmap generation module</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>8 minutes ago 🍓</div>
              </div>
            </WindowPanel>

          </div>

          {/* CENTER MAIN COLUMN */}
          <div style={{ display: 'grid', gap: '1rem' }}>
            
            {/* 1. welcome! Hero Window with Polaroid & Scrapbook Note */}
            <WindowPanel title="welcome!" badge="HOME">
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.25rem', alignItems: 'center' }}>
                {/* Pinned Polaroid Photo Frame */}
                <div className="polaroid-frame" style={{ width: '130px' }}>
                  <div className="washi-tape" />
                  <div 
                    style={{
                      width: '110px',
                      height: '120px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.5rem',
                      overflow: 'hidden'
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>🌸</span>
                  </div>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    fija ~ 2026
                  </span>
                </div>

                {/* Handwritten Scrapbook Note */}
                <div>
                  <h2 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--text-accent)' }}>
                    welcome!
                  </h2>
                  <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: '1.6' }}>
                    this is my personal space on the internet where i dump all my interests, projects, and random thoughts.
                  </p>
                  <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    made with ♡ and way too much caffeine.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-accent)' }}>
                      hope you like it here!
                    </span>
                    <Bunny size="sm" />
                  </div>
                </div>
              </div>
            </WindowPanel>

            {/* 2. Featured Projects Mini Windows */}
            <WindowPanel 
              title="featured projects" 
              badge="PROJECTS"
              action={
                <button className="retro-btn retro-btn-secondary" onClick={() => setActiveTab('projects')} style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem' }}>
                  view all projects →
                </button>
              }
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem' }}>
                {projectsData.slice(0, 3).map(p => (
                  <ProjectCard key={p.id} project={p} onSelect={onSelectProject} featured={true} />
                ))}
              </div>
            </WindowPanel>

            {/* 3. Currently Yellow Sticky Note Box */}
            <div className="sticky-note-yellow">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '0.9rem', color: '#b78103' }}>
                  📌 currently
                </span>
                <Bunny size="sm" />
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.825rem', color: '#5d4037', lineHeight: '1.6' }}>
                <li>learning Java + DSA (Dynamic Programming)</li>
                <li>building AI/ML projects (Urban Heat AI)</li>
                <li>exploring computer vision & Web engineering</li>
                <li>working on Skulk & Urban Heat AI</li>
                <li>goal: become ML engineer</li>
              </ul>
            </div>

            {/* 4. Guestbook Mini Module */}
            <WindowPanel title="guestbook" badge="COMMUNITY">
              <div>
                <div style={{ display: 'grid', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  {guestbookNotes.map((note, idx) => (
                    <div key={idx} style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', padding: '0.4rem 0.65rem', borderRadius: '2px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                      <span style={{ color: 'var(--text-accent)', fontWeight: 700 }}>&gt; {note.author}: </span>
                      <span>{note.text}</span>
                    </div>
                  ))}
                </div>

                {showSignForm ? (
                  <form onSubmit={handleAddGuestNote} style={{ display: 'flex', gap: '0.4rem' }}>
                    <input 
                      type="text"
                      required
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="write a cute note..."
                      style={{ flex: 1, padding: '0.35rem 0.55rem', border: '1px solid var(--border-color)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}
                    />
                    <button type="submit" className="retro-btn retro-btn-primary" style={{ fontSize: '0.7rem', padding: '0.35rem 0.6rem' }}>
                      POST
                    </button>
                  </form>
                ) : (
                  <button className="retro-btn retro-btn-secondary" onClick={() => setShowSignForm(true)} style={{ fontSize: '0.75rem' }}>
                    ✏ sign guestbook
                  </button>
                )}
              </div>
            </WindowPanel>

          </div>

          {/* RIGHT COLUMN */}
          <div style={{ display: 'grid', gap: '1rem' }}>
            
            {/* 1. Quick Links */}
            <WindowPanel title="quick links" badge="LINKS">
              <div style={{ display: 'grid', gap: '0.45rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>🐱 github</a>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("LeetCode profile URL will be supplied later."); }} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>💻 leetcode</a>
                <a href="#" onClick={(e) => { e.preventDefault(); onOpenResume(); }} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>📄 resume.pdf</a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>💼 linkedin</a>
              </div>
            </WindowPanel>

            {/* 2. Today's Mood Widget */}
            <WindowPanel title="today's mood" badge="MOOD">
              <div style={{ textAlign: 'center' }}>
                <Bunny size="md" />
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.35rem' }}>
                  focused
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  (and a lil tired) 🐰
                </div>
              </div>
            </WindowPanel>

            {/* 3. Tech Stack */}
            <WindowPanel title="tech stack" badge="STACK">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                {skillsData[0].items.map((s, idx) => (
                  <span key={idx} className="retro-badge" style={{ fontSize: '0.68rem', padding: '0.15rem 0.35rem' }}>
                    {s.name}
                  </span>
                ))}
              </div>
            </WindowPanel>

            {/* 4. Mini Month Calendar */}
            <WindowPanel title="calendar" badge="MAY 2026">
              <div>
                <div style={{ textAlign: 'center', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '0.4rem' }}>
                  may 2026
                </div>
                <div className="mini-calendar-grid">
                  <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                  <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div>
                  <div>8</div><div>9</div><div>10</div><div>11</div><div className="calendar-day-active">12</div><div>13</div><div>14</div>
                  <div>15</div><div>16</div><div>17</div><div>18</div><div>19</div><div>20</div><div>21</div>
                </div>
              </div>
            </WindowPanel>

            {/* 5. Achievements with Cute Bunny */}
            <WindowPanel title="achievements" badge="AWARDS">
              <div style={{ display: 'grid', gap: '0.4rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                <div>🌟 SIH 2024 - Participant</div>
                <div>🏆 Hackathon - Top 10%</div>
                <div>💻 LeetCode - 150+ problems</div>
                <div style={{ marginTop: '0.35rem', textAlign: 'center' }}>
                  <Bunny size="sm" />
                </div>
              </div>
            </WindowPanel>

          </div>

        </div>
      )}

    </div>
  );
};
