import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

function Send({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center p-2 h-24 w-24 bg-cyan-300 text-slate-900 rounded-r-lg hover:cursor-pointer"
    >
      <RiSendPlaneFill className="text-4xl" />
    </button>
  );
}

export default Send;
