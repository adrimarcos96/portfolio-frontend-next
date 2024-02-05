import { homePageData } from '@/config/data/homePageData'
import { AboutComponent } from '@/components/about/aboutComponent'
import { ExperienceComponent } from '@/components/experience/experienceComponent'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between">
      <AboutComponent title={homePageData.aboutMe.title} texts={homePageData.aboutMe.texts} />

      <ExperienceComponent title={homePageData.experience.title} texts={homePageData.experience.texts}/>
    </div>
  )
}
