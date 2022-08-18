import { useState,useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Courses from "./components/Courses/Courses";
import Cards from "./components/Cards/Cards";
import OurApp from "./components/OurApp/OurApp";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";
import Loading from "./components/Loading/Loading";
function App() {
    const [mounting, setMounting] = useState(false);
    useEffect(() => {
        setMounting(true);
    }, []);
    return (
        <div className='App '>
            {mounting ? (
                <>
                    <Navbar />
                    <Intro />
                    <Courses />
                    <Cards />
                    <OurApp />
                    <Testimonials />
                    <Contact />
                    <Footer />
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default App;
