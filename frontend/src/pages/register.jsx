import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/formschema/registerschema";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerschema)
    });

    function onSubmit1(data) {
        console.log(data);
        alert("Registration successful");
        navigate("/login", {
            state: data
        });
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-green-300 p-4">
            <form onSubmit={handleSubmit(onSubmit1)} className="w-full max-w-md bg-green-200 p-8 rounded-xl shadow-xl">

                <h2 className="text-3xl font-bold text-center mb-8 text-black-800">
                    Create Account
                </h2>

                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-black-700 font-semibold">
                        Name
                    </label>
                    <input id="name" type="text" placeholder="Enter your name" {...register("name")} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-black-700 font-semibold">
                        Email
                    </label>
                    <input id="email" type="email" placeholder="Enter your email" {...register("email")} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-black-700 font-semibold">
                        Password
                    </label>
                    <input id="password" type="password" placeholder="Enter your password" {...register("password")} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
                </div>

                <div className="mb-6">
                    <label htmlFor="age" className="block mb-2 text-black-700 font-semibold">
                        Age
                    </label>
                    <input id="age" type="number" placeholder="Enter your age" {...register("age")} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    <p className="text-red-500 text-sm mt-1">{errors.age?.message}</p>
                </div>

                <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300">
                    Register
                </button>

            </form>
        </div>
    );
}

export default Register;