import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiGlobe } from 'react-icons/fi'
import TypedText from '../TypedText'
import contentData from '../../data/content.json'

const ContactContent = () => {
  const { contact } = contentData

  const contactItems = [
    { icon: FiMail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: FiPhone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone}` },
    { icon: FiMapPin, label: 'Location', value: contact.location, href: null }
  ]

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', href: contact.social.github },
    { icon: FiGlobe, label: 'Website', href: contact.social.website },
    { icon: FiGlobe, label: 'Instagram', href: contact.social.instagram },
    { icon: FiGlobe, label: 'Photography', href: contact.social.photography },
    { icon: FiGlobe, label: 'YouTube', href: contact.social.youtube },
    { icon: FiGlobe, label: 'Wikipedia', href: contact.social.wikipedia }
  ]

  return (
    <div className="content-section">
      <div className="content-title">
        <TypedText strings={['$ contact --info']} typeSpeed={100} showCursor={false} />
      </div>

      <div className="content-text" style={{ marginBottom: '20px' }}>
        <TypedText 
          strings={[
            "Let's connect! I'm always open to discussing new opportunities, collaborations, or just having a chat about technology."
          ]} 
          typeSpeed={30} 
          showCursor={false}
        />
      </div>

      <div className="contact-grid">
        {contactItems.map((item, index) => (
          <div key={index} className="contact-item">
            <item.icon className="contact-icon" />
            <div>
              <div style={{ fontWeight: '600', color: 'var(--accent-color)', marginBottom: '4px' }}>
                {item.label}
              </div>
              {item.href ? (
                <a href={item.href} className="contact-link">
                  {item.value}
                </a>
              ) : (
                <span style={{ color: 'var(--text-color)' }}>{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="content-title" style={{ marginTop: '30px' }}>Social Links</div>
      <div className="contact-grid">
        {socialLinks.map((social, index) => (
          <div key={index} className="contact-item">
            <social.icon className="contact-icon" />
            <div>
              <div style={{ fontWeight: '600', color: 'var(--accent-color)', marginBottom: '4px' }}>
                {social.label}
              </div>
              <a 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                {social.href.replace('https://', '').replace('http://', '')}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="content-text" style={{ marginTop: '30px' }}>
        <div style={{ 
          border: '1px solid var(--border-color)', 
          padding: '15px', 
          background: 'var(--background-color-translucent)',
          borderRadius: '4px'
        }}>
          <div style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '10px' }}>
            Quick Connect:
          </div>
          <div style={{ marginBottom: '8px' }}>
            <span style={{ color: 'var(--primary-color)' }}>$</span> email {contact.email}
          </div>
          <div style={{ marginBottom: '8px' }}>
            <span style={{ color: 'var(--primary-color)' }}>$</span> github {contact.social.github}
          </div>
          <div>
            <span style={{ color: 'var(--primary-color)' }}>$</span> website {contact.social.website}
          </div>
        </div>
      </div>

      <div className="content-text" style={{ marginTop: '20px' }}>
        <TypedText 
          strings={[
            'Response time: Usually within 24 hours',
            'Preferred contact: Email or Instagram',
            'Time zone: UTC+7 (Bangkok, Thailand)'
          ]} 
          typeSpeed={40} 
          backSpeed={30}
          loop={true}
        />
      </div>
    </div>
  )
}

export default ContactContent