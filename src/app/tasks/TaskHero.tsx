"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function TaskHero() {

  const [tasks, setTasks] = useState<Task[]>([]);

    type Task = {
        id: number,
        task: string,
        description: string
    }

  useEffect(() => {
    axios
      .get("http://localhost:8080/tasks/all")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Can't find any tasks ", error);
      });
  }, []);

  return (
    <div className="mt-[200px] px-[30px] flex justify-center items-center">
      <div className="hover:scale-105 duration-300 bg-white/20 backdrop-blur-md border border-black w-[1000px] rounded-md py-[30px] px-[30px]">
        <h1 className="font-bold text-center text-2xl">
          You currently have {tasks.length} tasks
        </h1>
        
      </div>
    </div>
  );
}
