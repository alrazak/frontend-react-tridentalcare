import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import CustomCard from "./components/Card";
import Body from "./components/Body";

function App() {
    return (
        <div>
            <CustomNavbar />
                <div className="container my-5">
                    <Header />
                    <Body />
                    <CustomCard />
                    <Contact />
                </div>
            <Footer />    
        </div>
    )
}

export default App;
