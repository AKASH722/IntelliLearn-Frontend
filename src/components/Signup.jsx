import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Handle input changes for signup form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear errors when changing input
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: null,
        }));
    };

    // Handle form submission for signup
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data

        try {
            await signup(formData);
            setFormData({
                username: '',
                email: '',
                password: ''
            });
            navigate('/login');
        } catch (error) {
            setErrors({ form: error.message });
        }
    };

    // Function to validate form data
    

    // API call for signup
    const signup = async (data) => {
        try {
            console.log('go')
            console.log(BASE_URL + 'v1/auth/register')
            const response = await fetch(BASE_URL + 'v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log(response)
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Signup failed');
            }

            const responseData = await response.json();
            console.log('Signed up successfully:', responseData);

            const { token } = responseData;
            if (token) {
                localStorage.setItem('jwtToken', token);
            }

        } catch (error) {
            throw new Error('Signup failed: ' + error.message);
        }
    };

    // API call for checking if email or username already exists
    const checkIfExists = async (field, value) => {
        try {
            const response = await fetch(`/api/check-${field}-exists?${field}=${value}`);
            const data = await response.json();

            if (data.exists) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`,
                }));
            }
        } catch (error) {
            console.error(`Failed to check ${field}:`, error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Signup</h2>

                <form onSubmit={handleSubmit}>
                    {/* Signup form */}
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="username">Username:</label>
                        <input
                            className={`w-full p-2 bg-gray-700 rounded ${errors.username ? 'border-red-500' : ''}`}
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        {errors.username && (
                            <p className="text-red-500 mt-1">{errors.username}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="email">Email:</label>
                        <input
                            className={`w-full p-2 bg-gray-700 rounded ${errors.email ? 'border-red-500' : ''}`}
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && (
                            <p className="text-red-500 mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="password">Password:</label>
                        <input
                            className={`w-full p-2 bg-gray-700 rounded ${errors.password ? 'border-red-500' : ''}`}
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700"
                        type="submit"
                    >
                        Signup
                    </button>
                </form>

                <p className="text-center mt-4">
                    Already have an account?{' '}
                    <button
                        className="text-blue-500 hover:underline"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Signup;
