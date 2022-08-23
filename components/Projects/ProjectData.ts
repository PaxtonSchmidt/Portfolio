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
    role: `BugTracker enables users to track tickets, manage their projects, grow their teams, and coordinate with their teammates.`,
    difficulties: `The initial iteration of the app lacked a global state solution causing an array of issues that include a hard-to-manage tree of drilled props and repetitive requests to the server.`,
    solution: `A Redux state solution fixed both issues with some positive side effects. It increased the speed at which the application could horizontally expand, and I no longer had to backpedal and refactor when implementing a new feature that required the old state.`,
    notableFeatures: [
      'Registration',
      'Login',
      'Authentication with JSON Web Tokens',
      'Issue tracking with Tickets',
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
    role: `The goal of this project was to display my works clearly and concisely.`,
    difficulties: `The process of writing and reorganizing semantic CSS continues to slow my development process. While this has a lesser effect on a smaller project like this portfolio, I felt it could be an opportunity to learn Tailwindcss.`,
    solution: `The beauty of a class library like Tailwindcss is its synergy with ReactJS. Semantic CSS felt logical when I was writing pure HTML, but there is far less repeated markup in React components. For this reason, I could avoid linking elements with semantic CSS classes.`
  },
  TorysDiner: {
    title: "Tory's Diner",
    img: '../../public/btIMG.webP',
    codeLink: 'https://github.com/PaxtonSchmidt/Portfolio',
    technologies: [
      'ReactJS',
      'useContext',
      'Typescript',
      'Tailwindcss',
      'NextJS',
      'GIMP'
    ],
    role: `Making this page look nice took some focus.`,
    difficulties: `design blech`,
    solution: `implementing features`
  }
}