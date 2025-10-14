import { Link } from "react-router";
import Input from "../common/ui/inputs/input";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  console.log(errors);

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
  };

  return (
    <div className="mt-6 w-full h-full">
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
        <div className="w-full h-full flex flex-col gap-8">
          {/* email input */}
          <Input
            name={"email"}
            label="Email"
            id="email"
            placeholder="johndoe@gmail.com"
            type="email"
            register={register}
          />

          {/* password input */}

          <Input
            name={"password"}
            label="Password"
            id="password"
            placeholder="xxxxxxxxxxx"
            type="password"
            register={register}
          />
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="cursor-pointer text-center text-white font-bold text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700 w-full mt-10 py-3.5 rounded-md"
          >
            Sign In
          </button>
        </div>
        <div>
          <p className="text-center mt-2 text-gray-700">
            Don't have an Account?{" "}
            <Link to={"/sign-up"}>
              <span className="cursor-pointer text-blue-600 mx-2 font-semibold">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
