import { Link } from "react-router";
import Input from "../common/ui/inputs/input";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../common/ui/buttons/button";
import { LiaSignInAltSolid } from "react-icons/lia";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email.")
    .required("Email is Required"),
  password: yup.string().required("password is rquired"),
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
            error={errors?.email?.message}
          />

          {/* password input */}

          <Input
            name={"password"}
            label="Password"
            id="password"
            placeholder="xxxxxxxxxxx"
            type="password"
            register={register}
            error={errors?.password?.message}
          />
        </div>

        <div className="w-full">
          <Button
            icon={<LiaSignInAltSolid size={28} />}
            label="Sign in"
            type={"submit"}
          />
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
