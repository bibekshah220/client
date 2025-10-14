import React from "react";
import type { UseFormRegister } from "react-hook-form";

import { LuAsterisk } from "react-icons/lu";

interface IProps {
  label: string;
  id: string;

  placeholder?: string;
  name: "email" | "password";
  type?: "text" | "email" | "password" | "date";
  register: UseFormRegister<{ email: string; password: string }>;
}

const Input: React.FC<IProps> = ({
  id,
  label,
  type = "text",
  register,
  name,
  placeholder = "Enter something ",
}) => {
  return (
    <div>
      <div className="flex">
        <label className="text-[16px] text-gray-700 font-semibold" htmlFor={id}>
          {label}
        </label>
        <LuAsterisk className="text-red-500" />
      </div>
      <input
        className="focus:outline-blue-500 mt-1 w-full py-3 px-2 border  rounded-md border-gray-300 text-[16px] placeholder:text-[16px] placeholder:text-gray-400"
        placeholder={placeholder}
        {...register(name)}
        type={type}
        id={id}
        name={name}
      />
    </div>
  );
};

export default Input;
