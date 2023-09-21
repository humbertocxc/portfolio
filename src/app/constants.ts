import { IProject } from "./types"

export const githubLink = "https://github.com/humbertocxc"
export const linkedinLink = "https://www.linkedin.com/in/humberto-mendonca-080317172"

export const routes = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/projects', name: 'projects' },
  // { path: '/notes', name: 'notes' },
]

export const projects: IProject[] = [
  {
    slug: 'capa-do-flamengo',
    images: ['/download.jpeg', '/download.jpeg', '/download.jpeg'],
    resume: 'capa do flamengo aqui',
    name: 'Flamengo',
    repo: 'https://github.com/humbertocxc/portfolio',
    link:'https://www.google.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna nec est tincidunt pulvinar. Quisque tincidunt nibh in nulla eleifend maximus. Mauris nec lectus nec tellus pretium luctus. Vivamus pellentesque vulputate tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam at nisi at lectus pellentesque sollicitudin. In massa eros, congue quis ante pretium, volutpat ullamcorper enim. Maecenas laoreet ullamcorper erat vel ullamcorper. Aliquam eget venenatis turpis. Integer sit amet nibh lorem. Morbi auctor pretium augue, in bibendum est elementum eu. Proin sit amet neque consequat, efficitur lacus eget, porta metus. In egestas lacinia felis varius imperdiet.'
  },
  {
    slug: 'foto-minha',
    images: ['/pfp.jpeg', '/download.jpeg', '/pfp.jpeg', '/pfp.jpeg', '/download.jpeg', '/pfp.jpeg', '/download.jpeg', '/pfp.jpeg', '/download.jpeg'],
    resume: 'minha foto de perfil',
    name: 'Eu',
    repo: 'https://github.com/humbertocxc/portfolio',
    link:'https://github.com/humbertocxc',
    description: 'Aliquam sollicitudin orci orci, quis commodo mi tincidunt sit amet. Duis feugiat augue quis leo feugiat tempus. Maecenas auctor odio eget augue dignissim tincidunt. Integer et maximus justo. Nam posuere nulla eu felis malesuada, ac auctor velit vehicula. Fusce vestibulum egestas mauris id interdum. Donec aliquam enim at feugiat dapibus. Sed sodales ut enim nec lobortis. Mauris nisi lacus, convallis eleifend arcu ac, placerat vulputate diam.'
  },
]
