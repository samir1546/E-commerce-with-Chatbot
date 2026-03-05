import React from "react";
import { UserPlus, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Bounce, toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const onSubmit = (data) => {
    console.log("SignUp data : ", data);
    reset();
    toast.success('🎉 SignUp Successful!', {
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
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden p-4">
      <div className="absolute top-0 right-0 w-[600px] h-[300px] bg-yellow-400/30 blur-[160px]" />
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
      <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-yellow-400/30 blur-[160px]" />
      <div className="relative p-5 border-2 border-dashed border-yellow-400/40 rounded-tl-4xl rounded-br-4xl z-10">
        <div className="flex w-full max-w-4xl rounded-tl-4xl rounded-br-4xl text-black bg-white/10 backdrop-blur-lg shadow-2xl overflow-hidden border border-yellow-400/30">
          <div className="hidden md:flex flex-col justify-center items-start gap-4 w-1/2 bg-gradient-to-br from-[#111] to-[#1c1c1c] text-white p-10">
            <LockKeyhole size={40} className="text-yellow-400" />
            <h1 className="text-3xl font-bold leading-tight">
              Join the Family!
            </h1>
            <p className="text-gray-300 text-lg">
              Create your account and get started today
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white/80 text-black p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <UserPlus size={28} /> Create Account
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm text-black mb-1">
                  Full Name
                </label>
                <input
                  {...register("fullName", { required: "Name is required!" })}
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-slate-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="block text-sm text-black mb-1">
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
                {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
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

              <button className="relative group w-full py-2 rounded-full cursor-pointer border-2 border-black overflow-hidden font-semibold shadow-lg">
                <span className="absolute inset-0 bg-yellow-400 translate-y-full  group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 text-black">Sign Up</span>
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-black">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="underline cursor-pointer hover:text-yellow-700"
              >
                Log in
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
