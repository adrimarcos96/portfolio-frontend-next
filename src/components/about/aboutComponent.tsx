import { SectionProps } from '@/models/props'

export function AboutComponent({ title, texts }: SectionProps) {

  return (
    <section className="w-full min-[981px]:flex min-[981px]:justify-center min-[981px]:items-center pb-10 bg-white">
      <div className="mt-14 max-w-7xl min-[981px]:flex min-[981px]:justify-center min-[981px]:items-center w-full">
        <div className="max-[981px]:w-auto min-[981px]:w-4/12 flex items-center justify-center min-[981px]:justify-start">
          <p className="min-[981px]:bg-slate-800/80 px-8 pl-14 py-8 text-5xl text-slate-800 min-[981px]:text-white text-center">{title}</p>
        </div>
        <div className="max-[981px]:w-auto min-[981px]:w-8/12 min-[981px]:border-l-slate-800 min-[981px]:border-l min-[981px]:flex min-[981px]:flex-col justify-center min-[981px]:pl-14 min-[981px]:py-5">
          {texts.map((text, index) => {
            const classes= `bg-slate-800/80 py-10 px-20 max-[981px]:px-10 min-[981px]:h-[120px] flex items-center max-[981px]:mx-5
            ${index + 1 < texts.length ? 'mb-8 max-[981px]:mb-4' : ''}`
            return (
              <div key={`about-container-${index}`} className={classes}>
                <span key="about-element-0" className="text-left text-xl text-white lg:text-2xl">{text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}