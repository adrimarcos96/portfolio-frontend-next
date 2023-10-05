import Link from 'next/link'
import Image from 'next/image'
import { navbarData } from '@/config/data/navbarComponentData'

export default function FooterComponent() {
  return (
    <footer className="w-full h-60 bg-neutral-800">
      <div className="max-w-7xl w-full h-full mx-auto flex flex-col items-center justify-center py-10">
        <p className="text-white text-lg sm:text-2xl max-[340px]:text-sm text-center">©2023 - Adrián Marcos Quintana</p>
        <div className="flex items-center justify-center max-w-7xl w-full mt-5">
          {navbarData.socialMedia.map((social, index) => {
            return (<Link key={`social-media-${index}`} target="_blank" className="block w-10 h-10 max-md:w-8 max-md:h-8 rounded-[3px] mr-5" href={social.href}>
              <Image src={social.icon} alt={social.alt} width={30} height={30} className="w-10 h-10 max-md:w-8 max-md:h-8 rounded p-1" style={{ backgroundColor: social.bgColor }} />
            </Link>)
          })}
        </div>
      </div>
    </footer>
  )
}
