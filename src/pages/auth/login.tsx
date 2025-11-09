import LoginForm from "../../components/auth/login-form";

const LoginPage = () => {
  return (
    <main className="h-full w-full flex items-center justify-center">
      <div className="border border-gray-400 rounded-lg   min-w-[500px] py-5 px-6 bg-white">
        {/* Heading */}
        <div>
          <h1 className="mx-auto text-center font-bold text-3xl text-blue-600">
            Sign In
          </h1>
          <p className="text-center mt-1 text-[16px] text-gray-700">
            Welcome Back
          </p>
        </div>
        {/* login form */}

        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
