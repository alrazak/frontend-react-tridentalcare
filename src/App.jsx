import React from "react";
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import CustomCard from "./components/header/subheader/Card";
import Body from "./components/body/Body";
import Testimoni from "./components/body/Testimonial";
import Question from "./components/body/Question";
import Contact from "./components/body/Contact";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div>
            <CustomNavbar />
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/card" element={<CustomCard />} />
                {/* Tambahkan route untuk Body, Testimoni, Contact, Footer jika diperlukan */}
            </Routes>
            <Body />
            <Testimoni />
            <Question />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

