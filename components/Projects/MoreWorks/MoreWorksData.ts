export interface Work {
  title: string,
  technologies: string[],
  codeLink: string,
  demoLink: string,
  descripton: string
}

interface MoreWorks {
  TorysDiner: Work
}

export const MoreWorks: MoreWorks = {
  TorysDiner: {
    title: "Tory's Diner",
    technologies: [
      'React',
      'Javascript',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'GIMP'
    ],
    codeLink: 'https://github.com/PaxtonSchmidt/Torys-Diner',
    demoLink: 'https://torys-diner.pages.dev/',
    descripton: `A simplistic frontend site built for an incredible cafe in Boquete, Panama.`,
  }
}