import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Requests from "./components/Requests";
import UserDetails from "./pages/UserDetails";
import Contact from "./pages/Contact";
import Post from "./pages/Post";

function App(){

    return(
        <>


          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Requests/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<Error/>}/>
            <Route path="/:username" element={<UserDetails/>}/>
            <Route path="/post/:id" element={<Post/>}/>

            <Route path="requests" element={<Requests/>}/>
          </Routes>
        </>
    )
}

export default App;