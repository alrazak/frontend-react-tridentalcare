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
                    <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Selamat Datang di Website Tri Dental Care Sidoarjo</h1>
                            <p className="col-md-12 fs-4">Melayani perapian gigi menggunakan behel sehat dan tidak menyebabkan gangguan pada mulut</p>
                        </div>
                    </div>
                    <div className="photo-grid mb-4">
                        <div className="photo-item">
                            <img src="/image1.jpg" alt="Photo 1" className="photo" />
                            <p className="photo-text">Alat yang digunakan bersih dan terawat, tersedia camera yang terhubung ke monitor</p>
                        </div>
                        <div className="photo-item">
                            <img src="/image2.jpg" alt="Photo 2" className="photo" />
                            <p className="photo-text">Sikat gigi yang menggunakan pasta alami dapat menjaga kesehatan gigi</p>
                        </div>
                        <div className="photo-item">
                            <img src="/image3.jpg" alt="Photo 3" className="photo" />
                            <p className="photo-text">Kontrol rutin 6 bulan sekali dapat mengurangi resiko tumbuhnya karang gigi</p>
                        </div>
                    </div>
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

const styles = `
.photo-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.photo-item {
    display: flex;
    align-items: center;
    gap: 20px;
}

.photo {
    width: 500px; /* Adjust the width as needed */
    height: 400px; /* Adjust the height as needed */
    object-fit: cover;
    border-radius: 10px;
}

.photo-text {
    flex: 1;
    text-align: center; /* Center align text vertically */
}
`;

// Add styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);