export const profile = {
  name: 'Ashok Priyadarshi',
  title: 'SDE-2 - Backend Engineer',
  location: 'Gurugram, India',
  email: 'ashok.bit99@gmail.com',
  github: 'https://github.com/zetacollab',
  linkedin: 'https://www.linkedin.com/in/ashok-priyadarshi-2449b2165',
  summary: 'I build scalable backend services focused on reliability, identity lifecycle, and high-throughput pipelines.',
  skills: ['Java', 'Spring Boot', 'Kafka', 'gRPC', 'PostgreSQL', 'Redis', 'AWS', 'Maven', 'Git'],
  experience: [
    {
      role: 'SDE-2',
      org: 'Truminds Software Systems',
      time: 'Mar 2024 - Present',
      bullets: [
        'SCIM-compliant provisioning with Apache Scimple; bulk import & continuous sync from Microsoft Entra.',
        'Reliability: end-to-end tracing, non-blocking gRPC retries, Kafka hardening + reprocessing.',
        'Award: "True Ace" (2024), top 1% performer.'
      ]
    },
    {
      role: 'SDE-1',
      org: 'Truminds Software Systems',
      time: 'Jul 2022 - Mar 2024',
      bullets: [
        'Fine-grained access control for tenant-aware permissions.',
        'Consolidated multiple bot manager services into one scalable module; improved response times.',
        'Bulk CSV onboarding for non-CRM tenants with a flexible schema mapping layer.',
        'Monitoring for 22 scheduled jobs for proactive troubleshooting.'
      ]
    }
  ],
  projects: [
    {
      name: 'Automated Certificate Mailing API',
      tags: ['Java', 'Spring Boot', 'JPA', 'RDS'],
      description: 'CSV-driven workflow to automate certificate mailing at scale.',
      links: [{ label: 'GitHub', href: 'https://github.com/zetacollab' }]
    },
    {
      name: 'Workshop Attendee Multipart API',
      tags: ['Java', 'Spring Boot'],
      description: 'Multipart ingestion API to store and process workshop attendees.',
      links: [{ label: 'GitHub', href: 'https://github.com/zetacollab' }]
    },
    {
      name: 'Facial Gesture Recognition GUI (CNN)',
      tags: ['Deep Learning', 'GUI'],
      description: 'Interactive GUI for facial gesture recognition using a CNN model.',
      links: [{ label: 'GitHub', href: 'https://github.com/zetacollab' }]
    }
  ],
  publications: [
    'Weld defect localization in friction stir welding process - Welding in the World / Springer (2020)',
    'Continuous monitoring and feedback-based real-time control of defects in friction stir welding - Science and Technology of Welding and Joining (2021)'
  ]
}
