import { homePageData } from '@/config/data'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between pt-24 px-6 lg:px-4">
      <section className='min-[981px]:h-[300px] min-[981px]:flex min-[981px]:justify-center min-[981px]:items-center min-[981px]:mb-20 w-full mb-10'>
        <div className="max-[981px]:w-auto min-[981px]:w-3/12 flex items-center justify-center min-[981px]:justify-end">
          <p className="text-3xl lg:text-slate-800 mb-5 lg:text-6xl text-center">About me</p>
        </div>
        <div className='max-[981px]:hidden h-full w-0.5 bg-slate-800 mx-20'></div>
        <div className="max-[981px]:w-auto min-[981px]:w-8/12">
          <ul className='list-disc max-[981px]:pl-5 pl-12'>
            {homePageData.aboutMe.map((text: string, index: number) => <li key={`about-item-${index}`} className="text-left text-xl mb-6 text-slate-700 lg:text-3xl">{text}</li>)}
          </ul>
        </div>
      </section>

      <section className='min-[981px]:h-[300px] min-[981px]:flex min-[981px]:justify-center min-[981px]:items-center min-[981px]:mb-20 w-full mb-10'>
        <div className="min-[981px]:hidden max-[981px]:w-auto min-[981px]:w-3/12 flex items-center justify-center">
          <p className="text-3xl lg:text-slate-800 mb-5 lg:text-6xl text-center">Jobs</p>
        </div>
        <div className="max-[981px]:w-auto min-[981px]:w-8/12 min-[981px]:justify-end">
          <ol className='list-decimal max-[981px]:pl-5 pl-12'>
            {homePageData.experience.map((text: string, index: number) => <li key={`experience-item-${index}`} className="text-left text-xl mb-6 text-slate-700 lg:text-3xl">{text}</li>)}
          </ol>
        </div>
        <div className='max-[981px]:hidden h-full w-0.5 bg-slate-800 mx-20'></div>
        <div className="max-[981px]:hidden max-[981px]:w-auto min-[981px]:w-3/12 flex items-center justify-start">
          <p className="text-3xl lg:text-slate-800 mb-5 lg:text-6xl text-left">Jobs & Projects</p>
        </div>
      </section>
    </div>
  )
}
