import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/body/Contact";
import CustomCard from "./components/body/Card";
import Body from "./components/body/Body";
import Testimoni from "./components/body/Testimonial";

function App() {
    return (
        <div>
            <CustomNavbar />
            <Header />
            <CustomCard />
            <Body />
            <Testimoni />
            <Contact />
            <Footer />    
        </div>
    )
}

export default App;
