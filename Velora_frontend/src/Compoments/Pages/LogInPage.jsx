import React, { useState } from "react";
import axios from "axios";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import "./LoginPage.css";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const navigate = useNavigate();

    // Validation Functions
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation Checks
        if (!isValidEmail(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        if (!formData.password) {
            toast.error("Password is required.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:1234/api/auth/login",
                {
                    email: formData.email,
                    password: formData.password,
                }
            );

            console.log("Login successful:", response.data);
            toast.success("Login successful!");

            navigate("/"); 
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <section className="login-page-container">
            <Toaster position="top-right" reverseOrder={false} />
            <form className="login-page-form" onSubmit={handleSubmit} aria-labelledby="login-form-title">
                <h2 id="login-form-title" className="login-field-title">Log In</h2>

                <fieldset className="login-input-group">
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

                <fieldset className="login-input-group">
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
                        aria-label="Enter your password"
                    />
                    <button
                        type="button"
                        className="login-toggle-password-visibility"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        aria-label="Toggle password visibility"
                    >
                        {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </fieldset>

                <div className="login-button-container">
                    <button type="submit" className="login-page-button">
                        Log In
                    </button>
                </div>

                <p className="login-page-footer">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </section>
    );
}

export default LoginPage;
