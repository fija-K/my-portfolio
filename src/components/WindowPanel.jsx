import React, { useState } from 'react';

export const WindowPanel = ({ 
  title, 
  subtitle, 
  badge, 
  children, 
  className = '',
  action = null,
  collapsible = false
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`retro-window ${className}`}>
      <div className="retro-window-header">
        <div className="retro-window-title">
          <span style={{ color: 'var(--text-accent)' }}>■</span>
          <span>{title}</span>
          {subtitle && (
            <span style={{ opacity: 0.6, fontSize: '0.7rem', fontWeight: 400 }}>
              [{subtitle}]
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {badge && (
            <span className="retro-badge" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>
              {badge}
            </span>
          )}

          {action}

          <div className="retro-window-controls">
            <span 
              className="window-btn" 
              title={collapsible ? (collapsed ? "Expand window" : "Minimize window") : "Minimize"}
              onClick={() => collapsible && setCollapsed(!collapsed)}
            >
              _
            </span>
            <span className="window-btn" title="Maximize">□</span>
            <span 
              className="window-btn window-btn-close" 
              title={collapsible ? (collapsed ? "Expand window" : "Collapse window") : "Close"}
              onClick={() => collapsible && setCollapsed(!collapsed)}
            >
              ×
            </span>
          </div>
        </div>
      </div>

      {!collapsed && (
        <div className="retro-window-body">
          {children}
        </div>
      )}
    </div>
  );
};
