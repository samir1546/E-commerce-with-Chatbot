import { LogIn, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { replace, useLocation, useNavigate } from "react-router";
import { toast, ToastContainer, Bounce } from "react-toastify";

const Login = () => {
    const Navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log("LOGIN DATA:", data);
        reset();
        toast.success('🎉 Login Successful!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    };




    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden p-4">
            {/* <div className="absolute top-20">
                {message && (
                    <div className="mb-4 flex items-center gap-3 rounded-lg border border-yellow-400/40 bg-yellow-400/10 px-4 py-3 text-sm text-red-600 shadow-sm animate-pulse">
                        <ShieldCheck size={20} className="text-red-600" />
                        <span className="font-medium">
                            {message}
                        </span>
                    </div>
                )}
            </div> */}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <div className="absolute top-0 left-0 w-[600px] h-[300px] bg-yellow-400/30 blur-[160px]" />

            <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-yellow-400/30 blur-[160px]" />
            <div className="relative p-5 border-2 border-dashed border-yellow-400/40 rounded-tl-4xl rounded-br-4xl z-10">

                <div className="flex w-full max-w-4xl rounded-tl-4xl rounded-br-4xl bg-white/10 backdrop-blur-lg shadow-2xl overflow-hidden border border-yellow-400/30">
                    <div className="hidden md:flex flex-col justify-center items-start gap-4 w-1/2 bg-gradient-to-br from-[#111] to-[#1c1c1c] text-white p-10">
                        <ShieldCheck size={40} className="text-yellow-400" />
                        <h1 className="text-3xl font-bold leading-tight">Welcome Back!</h1>
                        <p className="text-gray-300 text-lg">
                            Login securely and explore your dashboard
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="w-full md:w-1/2 bg-white/80 text-black p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                            <LogIn size={28} /> Login to Account
                        </h2>

                        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="block text-sm text-slate-800 mb-1">
                                    Email
                                </label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    type="email"
                                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-slate-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                                    placeholder="you@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm text-black mb-1">
                                    Password
                                </label>
                                <input
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        }
                                    })}
                                    type="password"
                                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-slate-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                                    placeholder="••••••••"
                                />
                                {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
                            </div>

                            <button type="submit" className="relative group w-full py-2 rounded-full border-2 border-black overflow-hidden font-semibold shadow-lg">
                                <span className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                                <span className="relative z-10 text-black group-hover:text-black">
                                    Login
                                </span>
                            </button>

                        </form>

                        <p className="mt-6 text-center text-sm text-black">
                            Don’t have an account?{" "}
                            <span
                                onClick={() => Navigate("/signup")}
                                className="underline cursor-pointer hover:text-yellow-700"
                            >
                                Sign up
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Login;

