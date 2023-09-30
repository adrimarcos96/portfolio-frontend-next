import { homePageData } from '@/config/data/homePage'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between">
      <section className="w-full min-[981px]:flex min-[981px]:justify-center min-[981px]:items-center pb-10 bg-slate-200 -z-10 bg-no-repeat bg- bg-cover sm:bg-left bg-left bg-[url('/about.png')]">
        <div className="mt-14 max-w-7xl min-[981px]:flex min-[981px]:justify-center min-[981px]:items-center pb-10 w-full">
          <div className="max-[981px]:w-auto min-[981px]:w-4/12 flex items-center justify-center min-[981px]:justify-start">
            <p className="min-[981px]:bg-slate-800/80 px-8 pl-14 py-8 text-5xl text-slate-800 min-[981px]:text-white lg:text-5xl text-center">{homePageData.aboutMe.title}</p>
          </div>
          <div className="max-[981px]:w-auto min-[981px]:w-8/12 min-[981px]:border-l-slate-800 min-[981px]:border-l min-[981px]:flex min-[981px]:flex-col justify-center min-[981px]:pl-14 min-[981px]:py-5">
            {homePageData.aboutMe.texts.map((text: JSX.Element, index: number) => {
              const classes= `bg-slate-800/80 py-10 px-20 max-[981px]:px-10 min-[981px]:h-[120px] flex items-center max-[981px]:mx-5
              ${index + 1 < homePageData.aboutMe.texts.length ? 'mb-8 max-[981px]:mb-4' : ''}`
              return (
                <div key={`about-container-${index}`} className={classes}>{text}</div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="w-full min-[981px]:flex min-[981px]:justify-center min-[981px]:items-center pb-10">
        <div className="w-full h-full max-h-[700px] absolute -z-20 bg-fixed bg-no-repeat bg-cover sm:bg-left bg-left bg-[url('/jobs.jpg')] grayscale"></div>
        <div className="min-[981px]:mt-14 max-w-7xl min-[981px]:flex min-[981px]:flex-row-reverse min-[981px]:justify-center min-[981px]:items-center pb-10 w-full">
          <div className="max-[981px]:w-auto min-[981px]:w-4/12 min-[981px]:pl-10 flex items-center justify-center min-[981px]:justify-end">
            <p className="min-[981px]:bg-slate-800/80 py-8 px-8 text-5xl text-slate-800 min-[981px]:text-white lg:text-5xl text-center">{homePageData.experience.title}</p>
          </div>
          <div className="max-[981px]:w-auto min-[981px]:w-8/12 min-[981px]:border-r-white min-[981px]:border-r min-[981px]:flex min-[981px]:flex-col justify-center min-[981px]:pr-14 min-[981px]:py-5">
            {homePageData.experience.texts.map((text: JSX.Element, index: number) => {
              const classes= `bg-slate-800/80 py-10 px-20 max-[981px]:px-10 min-[981px]:h-[120px] flex items-center max-[981px]:mx-5
              ${index + 1 < homePageData.experience.texts.length ? 'mb-8 max-[981px]:mb-4' : ''}`
              return (
                <div key={`about-container-${index}`} className={classes}>{text}</div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
