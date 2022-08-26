export default function NavHelper(navLink: string, scrollTo: boolean){
  if(scrollTo === true){
    const element = document.getElementById(navLink)
    return element?.scrollIntoView({ behavior: 'smooth' })
  } else {
    return window.open(navLink, '_blank')
  }
}