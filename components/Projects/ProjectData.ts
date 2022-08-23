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
  Portfolio: ProjectContent,
  TorysDiner: ProjectContent
}

export const ProjectsData = {
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
      'Sass'
    ],
    role: `The goal was to develop a ticket tracking website that allows a user to organize a team and track any and all issues on their projects. BugTracker solves this problem and gives users the ability to grow their team, organize their projects and coordinate with their teammates.`,
    difficulties: `The initial design of the site lacked a global state solution which resulted in issues including a hard-to-manage tree of drilled props and repetitive requests to the server.`,
    solution: `Not only did implementing a Redux state solution fix both of these issues, it also increased the speed at which the application could horizontally expand. I no longer had to back pedal and refactor when implementing a new feature that required old state, making it well worth the time invested in writing out the extra Redux boilerplate.`,
    notableFeatures: [
      'Registration',
      'Login',
      'Authentication with JSON Web Tokens',
      'Issue Tracking with Tickets',
      'Projects as collections of Tickets',
      'Teams as collections of Projects',
      'Role based Authorization',
      'Real time chats with SocketIO',
      'An easily accessible demo',
      'A team invite system'
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
      'HTML5'
    ],
    role: `Making this page look nice took some focus.`,
    difficulties: `design blech`,
    solution: `implementing features`
  },
  TorysDiner: {
    title: "Tory's Diner",
    img: '../../public/btIMG.webP',
    codeLink: 'https://github.com/PaxtonSchmidt/Portfolio',
    technologies: [
      'ReactJS',
      'Typescript',
      'Tailwindcss',
      'NextJS'
    ],
    role: `Making this page look nice took some focus.`,
    difficulties: `design blech`,
    solution: `implementing features`
  }
}