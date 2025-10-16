import React from "react";
import type { UseFormRegister } from "react-hook-form";

import { LuAsterisk } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

interface IProps {
  label: string;
  id: string;

  placeholder?: string;
  name: "email" | "password";
  type?: "text" | "email" | "password" | "date";
  error?: string;
  register: UseFormRegister<{ email: string; password: string }>;
}

const Input: React.FC<IProps> = ({
  id,
  label,
  type = "text",
  register,
  name,
  error,
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
      <div>
        <input
          className={twMerge(
            "focus:outline-blue-500 mt-1 w-full py-3 px-2 border  rounded-md border-gray-300 text-[16px] placeholder:text-[16px] placeholder:text-gray-400",
            error && "focus:outline-red-500 border-red-500 animate-pulse"
          )}
          placeholder={placeholder}
          {...register(name)}
          type={type}
          id={id}
          name={name}
        />
        <p className="mt-1 text-xs text-red-500 compiralize h-1">
          {" "}
          {error && error}
        </p>
      </div>
    </div>
  );
};

export default Input;
