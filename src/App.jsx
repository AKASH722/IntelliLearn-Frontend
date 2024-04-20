import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home.jsx";
import Python from "./components/Python.jsx";
import Java from "./components/Java.jsx";
import ReactPage from "./components/ReactPage.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx"; // Assuming router is exported

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        // isAuthenticated() ? (
                        //     <Home />
                        // ) : (
                        //     <Navigate to="/login" replace /> // Use replace to prevent infinite loops
                        // )
                        <Home/>
                    }
                />
                <Route path="/python" element={<Python/>}/>
                <Route path="/java" element={<Java/>}/>
                <Route path="/react" element={<ReactPage/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
