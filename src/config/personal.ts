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
      url: 'https://claboard.dev',
      description: 'Self-hosted Kanban board that turns tasks into working code using Claude CLI — live terminal, auto-queue, review & approve.',
      logo: '/projects/claude-board-icon.png',
      techStack: {
        'Frontend': [
          { name: 'React', icon: 'logos:react' },
          { name: 'Vite', icon: 'logos:vitejs' },
          { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
        ],
        'Backend': [
          { name: 'Rust', icon: 'logos:rust', iconClass: 'invert' },
          { name: 'Axum', icon: 'simple-icons:rust' },
          { name: 'Tokio', icon: 'simple-icons:rust' },
        ],
        'Desktop': [
          { name: 'Tauri', icon: 'simple-icons:tauri' },
        ],
        'Database': [
          { name: 'SQLite', icon: 'simple-icons:sqlite' },
        ],
        'AI / MCP': [
          { name: 'MCP SDK', icon: 'simple-icons:anthropic' },
        ],
        'Testing': [
          { name: 'Vitest', icon: 'logos:vitest' },
        ],
      }
    },
    {
      name: 'wmux',
      url: 'https://github.com/bahri-hirfanoglu/wmux',
      description: 'A native Windows terminal multiplexer — tmux for Windows. Create persistent terminal sessions that survive terminal closures, with pane splitting, detach/reattach, and tmux-style keybindings using ConPTY and Named Pipes.',
      logo: '/projects/wmux-icon.svg',
      techStack: {
        'Language': [
          { name: 'Rust', icon: 'logos:rust', iconClass: 'invert' },
        ],
        'Async Runtime': [
          { name: 'Tokio', icon: 'simple-icons:rust' },
        ],
        'CLI': [
          { name: 'Clap', icon: 'simple-icons:rust' },
        ],
        'Platform': [
          { name: 'Windows API (ConPTY)', icon: 'logos:microsoft-windows-icon' },
          { name: 'Named Pipes', icon: 'logos:microsoft-windows-icon' },
        ],
        'Serialization & Config': [
          { name: 'Serde', icon: 'simple-icons:rust' },
          { name: 'TOML', icon: 'simple-icons:toml' },
        ],
        'Observability': [
          { name: 'Tracing', icon: 'simple-icons:rust' },
        ],
      }
    },
    {
      name: 'mcpify',
      url: 'https://github.com/bahri-hirfanoglu/mcpify',
      description: 'Generate an MCP server from any OpenAPI spec. Let AI assistants interact with your REST APIs instantly.',
      logo: '/projects/mcpify-logo.png',
      techStack: {
        'Dil': [
          { name: 'TypeScript', icon: 'logos:typescript-icon' },
        ],
        'Çalışma Zamanı': [
          { name: 'Node.js', icon: 'logos:nodejs-icon' },
        ],
        'Çekirdek': [
          { name: 'MCP SDK', icon: 'simple-icons:anthropic' },
          { name: 'Swagger Parser', icon: 'logos:swagger' },
          { name: 'Commander.js', icon: 'logos:nodejs-icon' },
        ],
        'Test': [
          { name: 'Vitest', icon: 'logos:vitest' },
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