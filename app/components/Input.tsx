"use client";

import React from "react";
import Send from "./Send";

const send = function () {
  console.log("Sent!");
};

function Input() {
  return (
    <div className="w-full flex transform transition duration-100 ease-in-out">
      <input
        className="bg-slate-800 resize-none outline-none p-5 grow rounded-l-lg text-2xl h-24 py-2 text-cyan-300"
        placeholder="One day, this line decided to write itself..."
      ></input>
      <Send onClick={send} />
    </div>
  );
}

export default Input;
