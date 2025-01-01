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
      logo: '/projects/altinmetre-logo.svg'
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