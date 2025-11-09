import { Link, useNavigate } from "react-router";
import Input from "../common/ui/inputs/input";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../common/ui/buttons/button";
import { LiaSignInAltSolid } from "react-icons/lia";
import { loginSchema } from "../../schemas/auth.schema";
import { loginUser } from "../../api/auth.api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import type { ILogin } from "../../@types/auth.types";

const LoginForm = () => {
  const navigate = useNavigate();

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
    mode: "all",
  });

  // using mutation hook
  const { mutate } = useMutation({
    mutationFn: loginUser,
    onSuccess: (response: { message: string }) => {
      toast.success(response?.message || "Login successful");
      //! on success navigate to home page
      navigate("/", {
        replace: true,
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error?.message || "Something went wrong");
    },
  });

  const onSubmit = (data: ILogin) => {
    mutate(data);
  };

  return (
    <div className="mt-6 w-full h-full">
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
        <div className="w-full h-full flex flex-col gap-8">
          {/* email input */}
          <Input
            required
            error={errors?.email?.message}
            name={"email"}
            register={register}
            label="Email"
            id="email"
            placeholder="johndoe@gmail.com"
            type="email"
          />

          {/* password input */}
          <Input
            required
            error={errors?.password?.message}
            name={"password"}
            register={register}
            label="Password"
            id="password"
            placeholder="xxxxxxxxxxx"
            type="password"
          />
        </div>

        <div className="w-full">
          <Button
            icon={<LiaSignInAltSolid size={28} />}
            label="Sign In"
            type={"submit"}
          />
        </div>
        <div>
          <p className="text-center mt-2 text-gray-700">
            Don't have an Account?
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
