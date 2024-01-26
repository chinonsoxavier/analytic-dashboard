"use client"
import { ButtonWidgetProp } from "@/interface";
import React, { useEffect, useState } from "react";

const ButtonWidget = ({ title, type, containerStyles }: ButtonWidgetProp) => {
const [hovered, setHovered] = useState(false)
    
useEffect(() => {
    console.log(hovered);
}, [hovered]);


  return (
    <div
      id="ButtonWidget"
      // style={{transition:'all 1.3s'}}
      className={`ButtonWidget ${containerStyles} pointer relative whitespace-nowrap overflow-hidden rounded-[4px] py-[12px] px-8 flex items-center justify-center font-semibold w-40 `}
    >
      <button type={type || "button"}>{title}</button>
    </div>
  );
};

export default ButtonWidget;
