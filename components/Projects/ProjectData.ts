export interface ProjectContent {
  title: string,
  img: any,
  demoLink?: string,
  codeLink: string,
  technologies: string[],
  role: string,
  difficulties: string,
  solution: string,
  notableFeatures?: string[],
  additional?: string
}

interface ProjectsData {
  BugTracker: ProjectContent,
  Portfolio: ProjectContent
}

export const ProjectsData: ProjectsData = {
  BugTracker: { 
    title: 'BugTracker',
    img: '../../public/btIMG.webP',
    demoLink: 'https://www.bugtrackerapp.net/Demo',
    codeLink: 'https://github.com/PaxtonSchmidt/BT',
    technologies: [
      'ReactJS',
      'Typescript',
      'Redux',
      'NodeJS',
      'Express',
      'Socket.IO',
      'MySQL',
      'HTML5',
      'MUI',
      'CSS3',
      'Sass',
      'Git',
      'JSON Web Token'
    ],
    role: `BugTracker is a role-based issue tracking platform for professional development teams and small-time collaborators. People who create a team on BugTracker can invite their teammates, manage roles and organize projects. BugTracker concerns itself with tracking issues, so users can focus on solving problems.`,
    difficulties: `The initial iteration of the app lacked a global state solution causing an array of issues that include a hard-to-manage tree of drilled props and repetitive requests to the server.`,
    solution: `Redux fixed both issues with some positive side effects. It increased the speed at which the application could horizontally expand because I no longer had to backpedal and refactor when implementing a new feature that required the old state.`,
    notableFeatures: [
      'Registration',
      'Login',
      'Authentication with JSON Web Tokens',
      'Role based Authorization',
      'Real time chats with SocketIO',
      'An easily accessible demo',
      'A team invite system',
      'Issue tracking with Tickets',
      'Projects as collections of Tickets',
      'Teams as collections of Projects'
    ]
  },
  Portfolio: {
    title: 'Portfolio',
    img: '../../public/btIMG.webP',
    codeLink: 'https://github.com/PaxtonSchmidt/Portfolio',
    technologies: [
      'ReactJS',
      'NextJS',
      'Typescript',
      'Tailwindcss',
      'CSS3',
      'HTML5',
      'Git'
    ],
    role: `This portfolio is a quick representation of my development works so far.`,
    difficulties: `The process of writing and reorganizing semantic CSS continues to slow my development process. While this has a lesser effect on a small project like this portfolio, I felt it could be an opportunity to learn Tailwindcss.`,
    solution: `The beauty of a class library like Tailwindcss is its synergy with ReactJS. Semantic CSS felt logical when writing pure HTML, but abstracting markup into React components makes it feel redundant.`
  }
}