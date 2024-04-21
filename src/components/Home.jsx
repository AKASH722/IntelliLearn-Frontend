import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import SecNav from './SecNav'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <SecNav/>

        </div>
    )
}

export default Home
