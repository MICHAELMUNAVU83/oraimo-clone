import React from "react";

const NavBar = () => {
  return (
    <div id="scroll-container" className="bg-[#82E602] p-1">
      <div id="scroll-text" className="flex font-bold gap-2">
        Free shipping for orders over KES1500. Any other questions? Contact us
        at
        <a href="oraimo.co" className="text-blue-600  hover:underline">Care.ke@oraimo.com</a>
      </div>
    </div>
  );
};

export default NavBar;
