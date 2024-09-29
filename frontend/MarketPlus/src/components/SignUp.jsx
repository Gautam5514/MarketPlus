import "../App.css";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [sign, setSign] = useState({
        name: "",
        email: "",
        password: "",
    });


    const handleSignup = (e) => {
        setSign((currData) => {
            return { ...currData, [e.target.name]: e.target.value };
        });
    };

    const onClickHandle = (e) => {
        e.preventDefault();
        console.log(sign);
        setSign({
            name: "",
            email: "",
            password: "",
        });
        axios.post("http://localhost:3000/", {
            sign, 
        })
    

    
    };

    return (
        <>


            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25 sagars">
                    <h2>Signup</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="mb-1">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                onChange={handleSignup}
                                name="name"
                                value={sign.name}
                                placeholder="Enter Name"
                                autoComplete="off"
                                className="form-control rounded-0"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="mb-1">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="email"
                                onChange={handleSignup}
                                name="email"
                                value={sign.email}
                                placeholder="Enter Email"
                                autoComplete="off"
                                className="form-control rounded-0"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="mb-1">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                onChange={handleSignup}
                                name="password"
                                value={sign.password}
                                placeholder="Enter Password"
                                autoComplete="off"
                                className="form-control rounded-0"
                            />
                        </div>
                        <button
                            className="btn btn-dark w-100 rounded-0"
                            onClick={onClickHandle}
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="mb-2 mt-2">Already Have an Account</p>
                    <button className="btn w-100 btn-light rounded-0 ">
                        Log In
                    </button>
                </div>
            </div>
        </>
    );
};

export default Signup;
