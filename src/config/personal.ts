export const personalInfo = {
  name: 'Bahri Hırfanoğlu',
  title: 'Software Engineer',
  social: {
    github: 'https://github.com/bahri-hirfanoglu',
    linkedin: 'https://www.linkedin.com/in/bahri-hirfanoglu/',
    twitter: 'https://twitter.com/bahrihrf',
  },
  email: 'bahrihirfanoglu@gmail.com',
  about: "I'm a software engineer, and I love what I do. I will continue doing it",
  projects: [
    {
      name: 'altinmetre.com',
      url: 'https://altinmetre.com',
      description: 'The project aims to provide users with the most affordable and up-to-date gold prices, helping them make informed decisions in foreign exchange and crypto markets with transparent and real-time data.',
      logo: '/projects/altinmetre-logo.svg',
      techStack: {
        'Frontend': [
          { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
          { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
        ],
        'Backend': [
          { name: 'Node.js', icon: 'logos:nodejs-icon' },
          { name: 'Fastify', icon: 'simple-icons:fastify' },
          { name: 'gRPC', icon: 'logos:grpc' },
          { name: 'RESTful', icon: 'eos-icons:api' },
          { name: 'WebSocket', icon: 'logos:websocket' },
        ],
        'Database / Cache': [
          { name: 'MongoDB', icon: 'logos:mongodb-icon' },
          { name: 'MongoDB ReplicaSet', icon: 'logos:mongodb-icon' },
          { name: 'Redis', icon: 'logos:redis' },
        ],
        'Container & Orchestration': [
          { name: 'Docker', icon: 'logos:docker-icon' },
          { name: 'Docker Swarm', icon: 'logos:docker-icon' },
        ],
        'Monitoring & Management': [
          { name: 'Grafana', icon: 'logos:grafana' },
          { name: 'Prometheus', icon: 'logos:prometheus' },
          { name: 'Portainer', icon: 'simple-icons:portainer' },
        ],
        'Version Control & CI/CD': [
          { name: 'GitLab', icon: 'logos:gitlab' },
          { name: 'Forge', icon: 'simple-icons:forge' },
        ],
        'Testing': [
          { name: 'Jest', icon: 'logos:jest' },
        ],
      }
    },
    {
      name: 'Claude Board',
      url: 'https://github.com/bahri-hirfanoglu/claude-board',
      description: 'Self-hosted Kanban board that turns tasks into working code using Claude CLI — live terminal, auto-queue, review & approve.',
      logo: '/projects/claude-board-icon.png',
      techStack: {
        'Frontend': [
          { name: 'React', icon: 'logos:react' },
          { name: 'Vite', icon: 'logos:vitejs' },
          { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
        ],
        'Backend': [
          { name: 'Node.js', icon: 'logos:nodejs-icon' },
          { name: 'Express', icon: 'simple-icons:express' },
          { name: 'Socket.IO', icon: 'simple-icons:socketdotio' },
        ],
        'Database': [
          { name: 'SQLite', icon: 'simple-icons:sqlite' },
        ],
        'Desktop': [
          { name: 'Electron', icon: 'logos:electron' },
        ],
        'Container': [
          { name: 'Docker', icon: 'logos:docker-icon' },
        ],
      }
    }
  ],
  recommendations: {
    books: [
      {
        title: 'Ikigai',
        author: 'Héctor García & Francesc Miralles',
        coverImage: '/books/ikigai.jpg'
      },
      {
        title: 'Matematiksel Düşünme',
        author: 'Cemal Yıldırım',
        coverImage: '/books/matematiksel-dusunme.jpg'
      }
    ],
    articles: [
      {
        title: 'Increasing Your Luck Surface Area',
        url: 'https://www.codusoperandi.com/posts/increasing-your-luck-surface-area',
        description: "The amount of serendipity that will occur in your life is directly proportional to the degree to which you do something you're passionate about combined with the total number of people to whom this is effectively communicated."
      }
    ]
  }
} as const 