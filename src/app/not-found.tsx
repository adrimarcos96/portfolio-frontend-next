import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-7xl flex max-[400px]:block justify-center items-center pt-24 px-2 mx-auto">
      <div className="text-center">
        <p className="max-sm:text-xl sm:text-4xl text-slate-700 font-semibold">404</p>
        <p className="max-sm:text-lg sm:text-lg text-slate-700">Page not found</p>
      </div>

      <div className="bg-slate-700 w-px h-20 mx-4 max-[400px]:hidden"></div>

      <div className="text-center h-11 w-28 max-[400px]:w-full max-[400px]:mt-7">
        <Link
          href="/"
          className="block h-full w-28 max-[400px]:w-full rounded-sm text-white p-2.5 bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-200 hover:to-white hover:bg-white hover:text-slate-700 hover:border-slate-700 hover:border-2 hover:border-solid"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
