import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />
                <div className="container my-5">
                    <div className="row">
                        <ServiceCard 
                            title="Orthodontics" 
                            text="Straighten your teeth with our orthodontic services." 
                            description="We offer traditional braces, Invisalign, and other orthodontic treatments to help you achieve a perfect smile." 
                        />
                        <ServiceCard 
                            title="Teeth Whitening" 
                            text="Get a bright smile with our teeth whitening treatments." 
                            description="Our safe and effective teeth whitening treatments can give you a brighter, more confident smile." 
                        />
                        <ServiceCard 
                            title="Dental Implants" 
                            text="Replace missing teeth with durable dental implants." 
                            description="Our dental implants are designed to look and function like your natural teeth, providing a long-term solution for missing teeth." 
                        />
                        <ServiceCard 
                            title="General Dentistry" 
                            text="Comprehensive dental care for the entire family." 
                            description="From routine check-ups to advanced dental procedures, we offer a wide range of services to keep your family's smiles healthy." 
                        />
                    </div>
                </div>
            <Footer />    
        </div>
    )
}

export default App;