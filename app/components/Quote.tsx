import React from "react";
import { VT323 } from "next/font/google";
import Likes from "./Likes";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

function Quote() {
  return (
    <div className="flex flex-col">
      <div className={`${vt323.className} text-5xl text-cyan-300`}>
        Once, upon a time, there was a line. The line was a line.
      </div>
      <Likes />
    </div>
  );
}

export default Quote;
