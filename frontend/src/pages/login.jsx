import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
    const location = useLocation();

    const [logindata, setLogindata] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    function handlechange(e) {
        setLogindata({
            ...logindata,
            [e.target.name]: e.target.value
        });
    }

    const formsubmit = (e) => {
        e.preventDefault();

        const registerdata = location.state;

        console.log("Login data", logindata);
        console.log("Register data", registerdata);

        if (registerdata && logindata.username === registerdata.name && logindata.password === registerdata.password) {
            console.log("Login success");
            navigate("/dashboard", {
                state: logindata
            });
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-green-300 p-4">

            <form onSubmit={formsubmit} className="w-full max-w-md bg-green-200 p-8 rounded-xl shadow-xl">

                <h2 className="text-xl font-bold text-center mb-8 text-black">
                    Welcome Back,Good to see you!!
                </h2>

                <div className="mb-5">
                    <label htmlFor="username" className="block mb-2 text-black font-semibold">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        required
                        name="username"
                        value={logindata.username}
                        onChange={handlechange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-black font-semibold">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                        name="password"
                        value={logindata.password}
                        onChange={handlechange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>

                <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300">
                    Login
                </button>

            </form>
        </div>
    );
}

export default Login;