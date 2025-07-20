import React from 'react'
import TypedText from '../TypedText'
import contentData from '../../data/content.json'

const SkillsContent = () => {
  const { skills } = contentData

  return (
    <div className="content-section">
      <div className="content-title">
        <TypedText strings={['$ skills --list']} typeSpeed={100} showCursor={false} />
      </div>

      <div className="skill-grid">
        <div className="skill-category">
          <div className="skill-category-title">Frontend</div>
          <ul className="skill-list">
            {skills.frontend.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <div className="skill-category-title">Backend</div>
          <ul className="skill-list">
            {skills.backend.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <div className="skill-category-title">Database</div>
          <ul className="skill-list">
            {skills.database.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <div className="skill-category-title">DevOps</div>
          <ul className="skill-list">
            {skills.devops.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <div className="skill-category-title">Tools</div>
          <ul className="skill-list">
            {skills.tools.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="content-text" style={{ marginTop: '20px' }}>
        <TypedText 
          strings={[
            'Proficient in modern web technologies...',
            'Always learning and adapting to new frameworks...',
            'Focused on clean, maintainable code...'
          ]} 
          typeSpeed={40} 
          backSpeed={20}
          loop={true}
        />
      </div>
    </div>
  )
}

export default SkillsContent