"use client";

import React, { useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";

function Likes() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex items-center gap-2 text-2xl">
      <div>200</div>
      <div className="py-4 transition delay-150 duration-300 ease-in-out">
        {isLiked ? (
          <BiSolidLike onClick={toggleLike} />
        ) : (
          <BiLike onClick={toggleLike} />
        )}
      </div>
    </div>
  );
}

export default Likes;
