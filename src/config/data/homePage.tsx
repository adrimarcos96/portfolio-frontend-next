const aboutMe: { title: string; texts: JSX.Element[] } = {
  title: 'About me',
  texts: [
    (<span key="about-element-0" className="text-left text-xl text-white lg:text-2xl">I am Adrián Marcos Quintana, I am 26 years old</span>),
    (<span key="about-element-1" className="text-left text-xl text-white lg:text-2xl">Informatic Engineer. I am open to acquiring new knowledge</span>),
    (<span key="about-element-2" className="text-left text-xl text-white lg:text-2xl">I hope to become a successful senior web developer and continue to grow as a developer every day</span>)
  ]
}

const experience: { title: string; texts: JSX.Element[] } = {
  title: 'Jobs & Projects',
  texts: [
    (<p key="job-element-0" className="text-left text-xl text-white lg:text-2xl">September, 2020 - January, 2023: Pogramming teacher at University of Matanzas, Cuba</p>),
    (<p key="job-element-1"className="text-left text-xl text-white lg:text-2xl">July, 2021 - present: Full-stack developer at 321 Ignition</p>),
    (<p key="job-element-2" className="text-left text-xl text-white lg:text-2xl">Adrian Marcos portfolio</p>)
  ]
}

export const homePageData = {
  aboutMe,
  experience
}
