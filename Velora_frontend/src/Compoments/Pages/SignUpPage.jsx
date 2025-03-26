import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

import "./SignUpPage.css";

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to toggle password visibility
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false); // State to toggle confirm password visibility

    const navigate = useNavigate(); // Initialize the navigate function

    // Validation Functions
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation Checks
        if (formData.name.length < 3) {
            toast.error("Name must be at least 3 characters long.");
            return;
        }

        if (!isValidEmail(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        if (!isValidPassword(formData.password)) {
            toast.error("Password must be at least 8 characters, include an uppercase letter, a number, and a special character.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:1234/api/auth/signup",
                {
                    fullName: formData.name,
                    email: formData.email,
                    password: formData.password,
                }
            );

            console.log("Signup successful:", response.data);
            toast.success("Signup successful! Please log in.");

            // Redirect to the login page after successful signup
            navigate("/login"); // Redirects to the login page
        } catch (error) {
            console.error("Signup failed:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Signup failed. Please try again.");
        }
    };

    return (
        <section className="signup-container">
            <Toaster position="top-right" reverseOrder={false} />
            <form className="signup-form" onSubmit={handleSubmit} aria-labelledby="signup-form-title">
                <h2 id="signup-form-title" className="field-title">Sign Up</h2>

                <fieldset className="input-group">
                    <legend className="sr-only">Full Name</legend>
                    <User size={20} />
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-label="Enter your full name"
                    />
                </fieldset>

                <fieldset className="input-group">
                    <legend className="sr-only">Email</legend>
                    <Mail size={20} />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-label="Enter your email address"
                    />
                </fieldset>

                <fieldset className="input-group">
                    <legend className="sr-only">Password</legend>
                    <Lock size={20} />
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        aria-label="Enter a password"
                    />
                    <button
                        type="button"
                        className="toggle-password-visibility"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        aria-label="Toggle password visibility"
                    >
                        {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </fieldset>

                <fieldset className="input-group">
                    <legend className="sr-only">Confirm Password</legend>
                    <Lock size={20} />
                    <input
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        aria-label="Confirm your password"
                    />
                    <button
                        type="button"
                        className="toggle-password-visibility"
                        onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                        aria-label="Toggle confirm password visibility"
                    >
                        {isConfirmPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </fieldset>

                <div className="signup-button-container">
                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                </div>

                <p className="signup-footer">
                    Already have an account? <Link to="/login">Log In</Link>
                </p>

            </form>
        </section>
    );
}

export default SignUpPage;
