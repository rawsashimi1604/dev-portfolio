import React, { useState } from "react";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

function MoreLink({ href = "#" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <a
        className="flex items-center space-x-2 hover:font-bold hover:text-gray-900"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <span className="font-medium">More</span>
        <BsArrowRight
          className={`
            transition-all duration-200 
            ${isHovered ? "translate-x-1" : ""}
          `}
        />
      </a>
    </Link>
  );
}

export default MoreLink;
