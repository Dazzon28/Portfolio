import NavBar from "../NavBar/Navbar";
import FrontPage from "../FrontPage/FrontPage";
import Cards from "../Cards/Cards";
import Contacts from "../Contact/Contact";
import { useState } from "react";
const Home = ()=>{
    const [view,setView] = useState(false)
    return(
    <div id="home">
        <NavBar />
        <FrontPage />
        <Cards />
    </div>
    )
    
}

export default Home;