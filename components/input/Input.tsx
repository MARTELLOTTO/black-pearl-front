"use client";

import { HTMLInputTypeAttribute, useState } from "react";
import Icon from "@mdi/react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  icon: string;
}
export const Input = ({ type, placeholder, icon }: InputProps) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      style={{
        borderColor: `${isSelected ? "#6206D2" : "silver"}`,
      }}
      className="flex gap-4 items-center w-[90%] shadow-2xl border-[2px] border-slate-200 rounded-full h-[40px] px-3 font-semibold bg-white"
    >
      <Icon path={icon} size={1} />
      <input
        onFocus={() => setIsSelected(true)}
        onBlur={() => setIsSelected(false)}
        type={type}
        className="w-[90%] border-none h-full focus:outline-none placeholder:font-normal"
        placeholder={placeholder}
      />
    </div>
  );
};
