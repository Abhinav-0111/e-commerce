import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContextApi from "../../context/ContextApi";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseconfig";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

function Login() {
    const { loading, setloading } = useContext(ContextApi);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        setloading(true);
        try {
            const result = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            toast.success("Login Successful", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/e-commerce");
            setloading(false);
        } catch (error) {
            toast.error("Create your account first");
            setloading(false);
        }
    };
    return (
        <div className=" flex justify-center bg-black items-center h-screen">
            {loading && <Loader />}
            <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
                <div className="">
                    <h1 className="text-center text-white text-xl mb-4 font-bold">
                        Log In
                    </h1>
                </div>
                <div>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Password"
                    />
                </div>
                <div className=" flex justify-center mb-3">
                    <button
                        onClick={login}
                        className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
                    >
                        Log In
                    </button>
                </div>
                <div>
                    <h2 className="text-white text-center mt-7">
                        Don't have an account.
                        <Link
                            className=" text-yellow-500 ml-2 font-bold"
                            to={"/signup"}
                        >
                            Sign Up
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Login;
