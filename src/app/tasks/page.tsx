import Navbar from "../_components/home/Navbar";
import TaskHero from "./TaskHero";

export default function Tasks(){
    return (
        <div className="bg-center bg-cover bg-[url('/background.jpg')] min-w-screen min-h-screen overflow-x-hidden">
            <Navbar/>
            <TaskHero/>
        </div>
    )
}