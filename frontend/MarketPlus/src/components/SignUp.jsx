import "../App.css";
import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Signup = () => {
    const [sign, setSign] = useState({
        name: "",
        email: "",
        password: "",
    });

    // Handle input changes for the signup form
    const handleSignup = (e) => {
        const { name, value } = e.target;
        setSign((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const onClickHandle = async (e) => {
        e.preventDefault();
        console.log(sign);

         // Reset form fields after submission
        setSign({
            name: "",
            email: "",
            password: "",
        });

        try {
            // Send the signup data to the server
            await axios.post("http://localhost:3000/signin", {sign});
            alert("Signup successful!");
        } catch (error) {
            console.error("Error during signup:", error);
            alert("Signup failed. Please try again.");
        }

    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-4 rounded w-25 shadow sagars">
                <h2 className="text-center mb-4">Signup</h2>
                <form>
                    {/* Name input field */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
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
                            id="name"
                        />
                    </div>

                    {/* Email input field */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
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
                            id="email"
                        />
                    </div>

                    {/* Password input field */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
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
                            id="password"
                        />
                    </div>

                    {/* Signup button */}
                    <button
                        className="btn btn-dark w-100 rounded-0"
                        onClick={onClickHandle}
                    >
                        Sign Up
                    </button>
                </form>

                {/* Link to login */}
                <p className="text-center mt-3 mb-2">Already have an account?</p>
                <Link to={'/login'} className="btn w-100 btn-light rounded-0">
                    Log In
                </Link>
            </div>
        </div>
    );
};

export default Signup;
