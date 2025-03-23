import React from "react";
import RecentQuote from "./RecentQuote";

import { Exo_2 } from "next/font/google";

const exo = Exo_2({
  weight: "400",
  subsets: ["latin"],
});

function Header() {
  return (
    <header className="p-4 flex justify-around border-b-2 bg-slate-800">
      <h1 className={`${exo.className} text-3xl`}>Write a line</h1>
      <RecentQuote />
    </header>
  );
}

export default Header;
