const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
  culpa qui officia deserunt mollit anim id est laborum.`

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between pt-24 px-4">
      <h1>About</h1>
      <p className="text-justify mb-3">{text}</p>
      <p className="text-justify mb-3">{text}</p>
      <p className="text-justify mb-3">{text}</p>
    </div>
  )
}
