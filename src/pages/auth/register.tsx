import RegisterForm from "../../components/auth/register-form"


const RegisterPage = () => {

    return (
        <main className="h-full w-full flex items-center justify-center">
            <div className="border border-gray-400 rounded-lg   min-w-[600px] py-5 px-6 bg-white">
                {/* Heading */}
                <div>
                    <h1 className="mx-auto text-center font-bold text-3xl text-blue-600">Sign Up</h1>
                <p className="text-center mt-1 text-[16px] text-gray-700">Register New Accunt</p>
                </div>
                {/* register form */}
                <RegisterForm/>

           </div>
        </main>
    )
    
}

export default RegisterPage