import Navbar from "../_components/home/Navbar";
import CreateHero from "./CreateHero";

export default function Create(){
    return (
        <div className="bg-center bg-[url('/background.jpg')] min-w-screen min-h-screen overflow-x-hidden">
            <Navbar/>
            <CreateHero/>
        </div>
    )
}