import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { WindowPanel } from '../components/WindowPanel';
import { ProjectCard } from '../components/ProjectCard';
import { Bunny } from '../components/Bunny';

export const Projects = ({ onSelectProject }) => {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'Full-Stack Web / Collaboration Engine', 'AI / Machine Learning', 'Developer Tools / Productivity', 'Desktop GUI / Python'];

  // Preserve explicit intentional order: Skulk (#1), Urban Heat AI (#2), DeadlineClock (#3), Expense Tracker (#4)
  const sortedProjects = [...projectsData].sort((a, b) => a.order - b.order);

  // Featured Projects (Skulk & Urban Heat AI)
  const featuredProjects = sortedProjects.filter(p => p.featured);
  // Other Projects (DeadlineClock & Expense Tracker)
  const otherProjects = sortedProjects.filter(p => !p.featured);

  return (
    <div className="projects-page" style={{ display: 'grid', gap: '1.5rem' }}>
      
      <WindowPanel 
        title="SYS::PROJECTS_DIRECTORY" 
        badge="SYSTEMS & EXPERIMENTS"
        action={<Bunny size="sm" label="PEEK" />}
      >
        <div style={{ marginBottom: '1.25rem' }}>
          <h2 style={{ margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)', fontSize: '1.4rem', color: 'var(--text-primary)' }}>
            PROJECTS & TECHNICAL WORK
          </h2>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            Collaborative web platforms, machine learning applications, productivity software, and desktop GUI applications. Click any project to inspect its architectural case study.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {categories.map((cat, idx) => {
            const isActive = filter === cat;
            return (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                style={{
                  background: isActive ? 'var(--accent-red)' : 'var(--bg-tertiary)',
                  color: isActive ? '#ffffff' : 'var(--text-primary)',
                  border: isActive ? '1px solid var(--border-bright)' : '1px solid var(--border-color)',
                  padding: '0.35rem 0.65rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-xs)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </WindowPanel>

      {/* Featured Primary Projects Grid (Skulk & Urban Heat AI) */}
      <div>
        <h3 style={{ margin: '0 0 0.75rem 0', fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--text-accent)' }}>
          ★ PRIMARY FEATURED PROJECTS
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {featuredProjects
            .filter((p) => filter === 'ALL' || p.category === filter)
            .map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onSelect={onSelectProject}
                featured={true}
              />
            ))}
        </div>
      </div>

      {/* Additional Projects (DeadlineClock & Expense Tracker) */}
      {otherProjects.filter((p) => filter === 'ALL' || p.category === filter).length > 0 && (
        <div style={{ marginTop: '0.5rem' }}>
          <h3 style={{ margin: '0 0 0.75rem 0', fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--text-accent)' }}>
            🧪 ADDITIONAL PROJECTS & DEVELOPMENT HISTORY
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {otherProjects
              .filter((p) => filter === 'ALL' || p.category === filter)
              .map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onSelect={onSelectProject} 
                  featured={false}
                />
              ))}
          </div>
        </div>
      )}

    </div>
  );
};
