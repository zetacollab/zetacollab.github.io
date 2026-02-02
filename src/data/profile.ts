export const profile = {
  name: 'Ashok Priyadarshi',
  title: 'SDE-2 - Backend Engineer',
  location: 'Gurugram, India',
  email: 'ashok.bit99@gmail.com',
  github: 'https://github.com/zetacollab',
  linkedin: 'https://www.linkedin.com/in/ashok-priyadarshi-2449b2165',
  summary: 'I build scalable backend services focused on reliability, identity lifecycle, and high-throughput pipelines.',
  skills: [
    'Java',
    'Spring Boot',
    'Kafka',
    'gRPC',
    'PostgreSQL',
    'Redis',
    'AWS SQS',
    'AWS SNS',
    'AWS S3',
    'ECS (EC2)',
    'ECR',
    'Traefik',
    'Maven',
    'Git'
  ],
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
      name: 'Doorstep Palette',
      tags: [
        'Java 21',
        'Spring Boot',
        'AWS SQS/SNS/S3',
        'ECS (EC2)',
        'ECR',
        'Traefik',
        'PostgreSQL',
        'Razorpay',
        'Streamlit'
      ],
      description:
        'Decentralized, WhatsApp-first home paint preview platform that lets customers get previews of their own houses from anywhere. The chat flow captures images and requirements, triggers payment, assigns a color expert, and returns final previews. Built as event-driven microservices with SNS/SQS, S3 rehosting + presigned uploads, a Streamlit expert console, state-machine orchestration, strategy-based expert allocation, and idempotent webhook handling; deployed on ECS (EC2 launch type) with custom EC2 hosts, Traefik reverse proxy, and ECR.',
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
