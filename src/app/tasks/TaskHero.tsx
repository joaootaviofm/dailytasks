"use client";
import axios from "axios";
import { useEffect, useState } from "react";

type Task = {
  id: string;
  task: string;
  description: string;
};
export default function TaskHero() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTask, setNewTask] = useState("");

  async function handleSubmit() {
    const taskAdded = {
      task: newTask,
    };

    try {
      if(taskAdded.task == ""){
        console.error("Can't add null task!")
        return
      }
      const response = await axios.post(
        "http://localhost:8080/tasks",
        taskAdded
      );
      setTasks((prev) => [...prev, response.data])
      setNewTask("");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding task.", error);
    }
  }

  async function handleDelete(id: string) {
    try {
      await axios.delete(`http://localhost:8080/tasks/delete/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Wasn't able to delete that!", error);
    }
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
    <div className="mt-[200px] flex items-center justify-center">
      <div className="min-w-[500px] max-w-[1000px] bg-white/20 rounded-lg backdrop-blur-md border border-black p-[30px] flex flex-col gap-[10px] mb-[20px]">
        <h1 className="font-bold text-2xl text-center mb-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
          {tasks.length == 0 ? "You have no tasks!" : "Just do it."}
        </h1>
        {tasks.length != 0 && (
          <div className="font-bold text-2xl text-center mb-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            <h1>*/{tasks.length} Tasks done.</h1>
          </div>
        )}
        <div className="relative flex items-center ">
          <input
            className="border border-black/50 rounded-r-md w-full px-5 py-2 bg-black/20 text-white outline-none"
            type="text"
            placeholder="Enter your task..."
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
          <button
            onClick={() => handleSubmit()}
            className="opacity-75 hover:opacity-100 duration-300 rounded-r-md bg-gradient-to-r from-[#9C83FF] to-[#80800] cursor-pointer px-5 py-2 absolute right-0 text-white"
          >
            Add
          </button>
        </div>
        <div className="mt-[20px] flex justify-center flex-col gap-5">
          {tasks.map((item) => (
            <div
              className="hover:cursor-default hover:scale-105 duration-300 bg-white/10 border rounded-md backdrop-blur-2xl flex items-center px-5 py-2"
              key={item.id}
            >
              <h1 className="flex-1 mr-[5px] text-white font-bold text-[20px]">
                {item.task}
              </h1>
              <div className="flex gap-[15px]">
                <button className="hover:text-green-500 bg-white/20 hover:bg-black/20 duration-300 rounded-md font-bold text-white cursor-pointer px-2 py-1">
                  Complete
                </button>
                <button className="hover:text-orange-400 bg-white/20 hover:bg-black/20 duration-300 rounded-md font-bold text-white cursor-pointer px-2 py-1">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="hover:text-red-500 bg-white/20 hover:bg-black/20 duration-300 rounded-md font-bold text-white cursor-pointer px-2 py-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
