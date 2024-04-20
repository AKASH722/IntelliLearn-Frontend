import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const BASE_URL = 'http://192.168.138.46:8080/';


const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData({...loginData, [name]: value});
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: null,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(loginData);
            setLoginData({username: '', password: ''});
            navigate('/');
        } catch (error) {
            // Handle error response from server
            if (error.message.includes('Invalid credentials')) {
                setErrors({username: 'Invalid username or password', password: 'Invalid username or password'});
            } else {
                console.log(error.message);
            }
        }
    };

    // API call for login
    const login = async (data) => {
        try {
            const response = await fetch(BASE_URL + 'v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const responseData = await response.json();
            console.log('Logged in successfully:', responseData);

            // Store token or user data as needed (e.g., save token in local storage)
            const {token} = responseData;
            if (token) {
                localStorage.setItem('jwtToken', token);
            }

        } catch (error) {
            throw new Error('Login failed: ' + error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Login</h2>

                <form onSubmit={handleSubmit}>
                    {/* Login form */}
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="username">Username:</label>
                        <input
                            className={`w-full p-2 bg-gray-700 rounded ${errors.username ? 'border-red-500' : ''}`}
                            type="text"
                            name="username"
                            id="username"
                            value={loginData.username}
                            onChange={handleChange}
                            required
                        />
                        {errors.username && (
                            <p className="text-red-500 mt-1">{errors.username}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="password">Password:</label>
                        <input
                            className={`w-full p-2 bg-gray-700 rounded ${errors.password ? 'border-red-500' : ''}`}
                            type="password"
                            name="password"
                            id="password"
                            value={loginData.password}
                            onChange={handleChange}
                            required
                        />
                        {errors.password && (
                            <p className="text-red-500 mt-1">{errors.password}</p>
                        )}
                    </div>

                    <button
                        className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700"
                        type="submit"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center mt-4">
                    Don't have an account?{' '}
                    <button
                        className="text-blue-500 hover:underline"
                        onClick={() => navigate('/signup')}
                    >
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
