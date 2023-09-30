'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import profileImage from 'public/profile.png'
import { navbarData } from '@/config/data/NavbarComponent'
import { TextLengthCssPropery } from './TextLengthCssProperty'

import './navbar.css'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (<>
    <header className="w-full bg-gradient-to-t from-slate-900 to-slate-700 t">
      <div className="mx-auto block max-w-7xl lg:justify-center justify-between p-6 lg:px-8 h-48 w-full">
        <div className="type-writer-container absolute w-full top-0.5 left-1/2 mt-16 px-6 lg:px-8 xl:text-center">
          <span className="text-white type-writer text-lg md:text-4xl type-writer mx-auto delay-[3000ms]" style={{ '--textLength': navbarData.typeWriterText.length } as TextLengthCssPropery }>
            {navbarData.typeWriterText}
          </span>
        </div>
        <div className="absolute overflow-hidden top-0 left-0 w-full h-48 z-[110]">
          <ul className="squares absolute top-0 left-0 w-full h-48 px-6 lg:px-8">
            <li className="left-[5%] w-[60px] h-[60px]"></li>
            <li className="left-[10%] w-[20px] h-[20px]"></li>
            <li className="max-md:hidden left-[15%] w-[40px] h-[40px]"></li>
            <li className="left-[20%] w-[15px] h-[15px]"></li>
            <li className="left-[25%] w-[50px] h-[50px]"></li>
            <li className="max-md:hidden left-[35%] w-[80px] h-[80px]"></li>
            <li className="left-[40%] w-[60px] h-[60px]"></li>
            <li className="left-[48%] w-[20px] h-[20px]"></li>
            <li className="left-[53%] w-[25px] h-[25px]"></li>
            <li className="max-md:hidden left-[59%] w-[45px] h-[45px]"></li>
            <li className="max-md:hidden left-[65%] w-[20px] h-[20px]"></li>
            <li className="left-[70%] w-[60px] h-[60px]"></li>
            <li className="left-[75%] w-[52px] h-[52px]"></li>
            <li className="max-md:hidden left-[85%] w-[60px] h-[60px]"></li>
            <li className="left-[90%] w-[25px] h-[25px]"></li>
          </ul>
        </div>
      </div>
    </header>

    <div className="sticky top-0 w-full bg-gradient-to-t from-black to-slate-900 lg:h-28 flex">
      <nav className="w-full mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 h-full" aria-label="Global">
        <div className="flex lg:flex-1 items-center">
          <Image className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full top-3 max-[280px]:hidden" src={profileImage} alt="Logo" />
        </div>

        {/* Mobile navbar*/}
        <div className="float-right flex justify-center lg:hidden h-10 w-14">
          <button
            className="inline-flex items-center justify-center rounded-sm text-white w-12 h-10"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon strokeWidth="1.5" aria-hidden="true" />
          </button>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-[300] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-end justify-end">
                <button
                  type="button"
                  className="-m-2 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navbarData.links.map((link) => (
                      <Link key={link.label} href={link.href} className="-mx-3 block px-8 py-2 text-lg leading-7 text-black hover:text-blue-800 hover:bg-gray-200 font-semibold">{link.label}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>

        {/* Desktop navbar*/}
        <div className="hidden lg:flex lg:gap-x-4 h-20">
          {navbarData.links.map((link) => (
            <Link key={link.label} href={link.href} className="text-xl leading-7 text-white px-4 h-full flex items-center hover:font-semibold">{link.label}</Link>
          ))}
        </div>
      </nav>
    </div>
  </>)
}
