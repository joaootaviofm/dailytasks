import Hero from "./_components/home/Hero"
import Navbar from "./_components/home/Navbar"

export default function Home() {
  return (
    <div className="bg-center bg-[url('/background.jpg')] min-w-screen min-h-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
    </div>
  )
}
