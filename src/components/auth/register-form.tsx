import { Link } from "react-router";
import Input from "../common/ui/inputs/input";

const RegisterForm = () => {
  return (
    <div className="mt-6 w-full h-full">
      {/* form */}
      <form className="w-full h-full">
        <div className="w-full h-full flex flex-col gap-8">
          {/* first & last name */}
          <div className="grid grid-cols-2 gap-3">
            {/* first Name */}

            <Input label="First Name" id="first_name" placeholder="John" />
            {/* last Name */}
            <Input label="Last Name" id="last_name" placeholder="Doe" />
          </div>

          {/* email input */}
          <Input
            label="Email"
            id="email"
            placeholder="johndoe@gmail.com"
            type="email"
          />

          {/* password input */}
          <Input
            label="Password"
            id="password"
            placeholder="xxxxxxxxxxx"
            type="password"
          />

          {/* confirm password input */}
          <Input
            label="Retype Password"
            id="confirm_password"
            placeholder="xxxxxxxxxxx"
            type="password"
          />

          {/* phone */}
          <Input
            label="Phone Number"
            id="phone"
            placeholder="9865374070"
            type="text"
          />
        </div>

        <div className="w-full flex justify-center items-center">
          <button className="w-full cursor-pointer text-center text-white font-bold text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700  mt-10 py-3.5 rounded-md">
            Sign Up
          </button>
        </div>
        <div>
          <p className="text-center mt-2 text-gray-700">
            Already have an Account?
            <Link to={"/sign-in"}>
              <span className="cursor-pointer text-blue-600 mx-2 font-semibold">
                Sign In
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
