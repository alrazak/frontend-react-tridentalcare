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
                    <div className="p-5 mb-4 bg-primary text-white rounded-3 shadow-sm">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Selamat Datang di Website Tri Dental Care Sidoarjo</h1>
                            <p className="col-md-12 fs-4">Melayani perapian gigi menggunakan behel sehat dan ditangani dengan dokter spesialis.</p>
                        </div>
                    </div>
                    <div className="container-fluid bg-primary rounded-3 text-white photo-grid py-4 mb-4">
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
                            title="drg. TRI JULIANTI, Sp.Ort" 
                            text="SPESIALIS ORTODENTIS" 
                            description="Dokter spesialis perapian gigi, melayani segala bentuk gigi untuk dirapikan menggunakn metode behel damon, behel lotus, dan behel konvensional. buka praktek selasa & kamis, sabtu dengan perjanjian." 
                        />
                        <ServiceCard 
                            title="drg. R.R PUSPITA SARI.M" 
                            text="SPESIALIS KONSERVASI GIGI" 
                            description="Dokter spesialis saraf gigi, perawatan saluran akar gigi, perawatan bertujuan untuk menyelamatkan gigi yang seharusnya memerlukan pencabutan. buka praktek senin sd kamis" 
                        />
                        <ServiceCard 
                            title="drg. FLORETTA C.D,Sp.Ort" 
                            text="SPESIALIS ORTODENTIS" 
                            description="Dokter spesialis perapian gigi, melayani segala bentuk gigi tidak rapi untuk dilakukan perawatan menggunakan behel sesuai jenis kondisi gigi. buka praktek selasa sd kamis" 
                        />
                        <ServiceCard 
                            title="drg. VIVIE JUWITA" 
                            text="SPESIALIS KONVERVASI GIGI" 
                            description="Dokter spesialis perawatan gigi, scalling karang gigi, dan perawatan tambal gigi berlubang untuk menyelamatkan gigi yang seharusnya memerlukan pencabutan. buka praktek senin, jumat, sabtu." 
                        />
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="card mb-4 bg-primary text-white shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Jadwal Operasional Klinik</h5>
                                    <p className="card-text">Senin - Jumat : 10.00 - 21.00 Wib</p>
                                    <p className="card-text">Sabtu : 10.00 - 18.00 Wib</p>
                                    <p className="card-text">Minggu/hari libur : Tutup</p>
                                </div>
                                <div className="bg-black text-white text-center shadow-sm">
                                    <p className="card-text">Instagram : @tri.dentalcare | Email : info.tridentalcare@gmail.com</p>
                                </div>
                            </div>
                        </div>
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