import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import { RiDeleteBin5Fill } from "react-icons/ri";
import ReactSwitch from "react-switch";

const ToDoMenu = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task) {
      const to_do = {
        id: list.length + 1,
        title: task,
        toggle: false,
      };
      setList([to_do, ...list]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    const filtered = list.filter((task) => task.id !== id);
    setList(filtered);
  };
  const toggleTask = (id) => {
    const updatedTask = list.map((task) =>
      task.id === id ? { ...task, toggle: !task.toggle } : task
    );
    setList(updatedTask);
  };

  return (
    <div className="mx-auto mt-8">
      <div className="flex items-center justify-center mb-4">
        <input
          className="w-[350px] border-2 border-green-300 bg-gradient-to-r from-sky-400 via-sky-700 to-indigo-300 font-bold rounded-md px-3 py-2 mr-3 placeholder:text-white"
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-blue-600 hover:bg-blue-800 font-bold px-2 py-2 rounded-md"
          onClick={addTask}
        >
          <GrFormAdd />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div
          className={`${
            list.length > 0 &&
            "bg-gradient-to-r from-sky-500 via-slate-500 to-sky-600 pt-2 pl-2 pr-2"
          }`}
        >
          {list.length === 0 ? (
            <h1 className="font-bold text-3xl text-blue-200">Add tasks</h1>
          ) : (
            list.map((task) => (
              <div
                className={`flex w-[350px] text-md font-bold items-center space-x-2 p-2 rounded-md mb-2
                ${task.toggle ? "bg-green-600 text-cyan-100" : "bg-blue-500"}`}
                key={task.id}
              >
                <h4
                  className={`flex-grow ${task.toggle ? "line-through" : ""}`}
                >
                  {task.title}
                </h4>
                <button
                  className="font-bold text-xl py-1 px-2 rounded"
                  onClick={() => deleteTask(task.id)}
                >
                  <RiDeleteBin5Fill />
                </button>
                <ReactSwitch
                  checked={task.toggle}
                  height={20}
                  width={40}
                  handleDiameter={18}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={() => toggleTask(task.id)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoMenu;
