import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import TypedText from '../TypedText'
import contentData from '../../data/content.json'

const ProjectsContent = () => {
  const { projects } = contentData

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'var(--primary-color)'
      case 'In Development': return '#ffaa00'
      case 'Beta': return '#00bfff'
      default: return 'var(--text-color)'
    }
  }

  return (
    <div className="content-section">
      <div className="content-title">
        <TypedText strings={['$ projects --show-all']} typeSpeed={100} showCursor={false} />
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card">
            <div className="project-title">
              {project.name}
              <span 
                style={{ 
                  marginLeft: '10px', 
                  fontSize: '12px', 
                  color: getStatusColor(project.status),
                  border: `1px solid ${getStatusColor(project.status)}`,
                  padding: '2px 6px',
                  borderRadius: '2px'
                }}
              >
                {project.status}
              </span>
            </div>
            
            <div className="project-description">
              {project.description}
            </div>

            {project.features && (
              <div style={{ marginBottom: '15px' }}>
                <div style={{ fontWeight: '600', marginBottom: '8px', color: 'var(--accent-color)' }}>
                  Key Features:
                </div>
                {project.features.slice(0, 3).map((feature, fIndex) => (
                  <div key={fIndex} style={{ marginBottom: '4px', paddingLeft: '10px', position: 'relative', fontSize: '14px' }}>
                    <span style={{ position: 'absolute', left: '0', color: 'var(--primary-color)' }}>•</span>
                    {feature}
                  </div>
                ))}
                {project.features.length > 3 && (
                  <div style={{ fontSize: '14px', color: 'var(--accent-color)', marginTop: '5px' }}>
                    +{project.features.length - 3} more features...
                  </div>
                )}
              </div>
            )}

            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                <FiExternalLink style={{ marginRight: '5px' }} />
                Live Demo
              </a>
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                <FiGithub style={{ marginRight: '5px' }} />
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="content-text" style={{ marginTop: '20px' }}>
        <TypedText 
          strings={[
            `Found ${projects.length} projects in portfolio.`,
            'Each project showcases different aspects of my development skills.',
            'From full-stack applications to innovative UI experiments.'
          ]} 
          typeSpeed={30} 
          backSpeed={20}
          loop={true}
        />
      </div>
    </div>
  )
}

export default ProjectsContent