import Input from "../common/ui/inputs/input"

const LoginForm = () => {
    return (
        <div className="mt-6 w-full h-full">
            {/* form */}
            <form className="w-full h-full">
                <div className="w-full h-full flex flex-col gap-8">
                    {/* email input */}
                    <Input label="Email" id="email" placeholder="johndoe@gmail.com" type="email" />


                    {/* password input */}

                    <Input label="Password" id="password" placeholder="xxxxxxxxxxx" type="password" />
                   
                </div>

                <div className="w-full">
                    <button className="cursor-pointer text-center text-white font-bold text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700 w-full mt-10 py-3.5 rounded-md">
                        Sign In
                    </button>
                </div>
                <div>
                    <p className="text-center mt-2 text-gray-700">Don't have an Account?<span className="cursor-pointer text-blue-600 mx-2 font-semibold">Sign Up</span></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm