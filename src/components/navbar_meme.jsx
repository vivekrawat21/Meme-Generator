import React from "react";
import Meme from "../images/meme.png";
export default function navbar_meme(){
     
    return(
      <>
      
        
        <nav>
        <ul className=" flex bg-purple-400  justify-between  items-center h-[10vh]">
            <li>
           <img src={Meme} alt="meme" className="h-[10vh] pl-7 "  />
            </li>
            <li>
          <span className="text-3xl text-white font-extrabold"> Meme Generator </span>
            </li>
            <li>
          <span className="text-xl font-extrabold text-white  px-4">Project-3 React</span>
            </li>
        </ul>
  </nav>
        </>
    );
  };
 