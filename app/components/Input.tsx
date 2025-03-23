import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

function Input() {
  return (
    <div className="w-full flex ">
      <input
        className="bg-slate-800 resize-none focus-none outline-none p-5 grow rounded-l-lg text-2xl h-24 py-2 text-cyan-300"
        placeholder="One day, this line decided to write itself..."
      ></input>
      <button className="flex justify-center items-center p-2 h-24 w-24 bg-cyan-300 text-slate-900 rounded-r-lg">
        <RiSendPlaneFill className="text-4xl" />
      </button>
    </div>
  );
}

export default Input;
