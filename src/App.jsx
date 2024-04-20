import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Quiz from "./components/Quiz.jsx";
import VideoPlayer from "./components/VideoPlayer.jsx";
import TopicsList from "./components/TopicsList.jsx"; // Assuming router is exported

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
                        <>
                            <Home/>
                            {/*<Quiz />*/}
                            {/*<VideoPlayer videoUrl='https://www.youtube.com/watch?v=KcdE2e-6wNg'/>*/}
                            {/*<TopicsList />*/}
                        </>

                    }
                />
                {/*<Route path="/python" element={<Python/>}/>*/}
                {/*<Route path="/java" element={<Java/>}/>*/}
                {/*<Route path="/react" element={<ReactPage/>}/>*/}
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
