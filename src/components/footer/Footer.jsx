import React from "react";

function Footer() {
    return (
        <footer style={{ background: "linear-gradient(to right, #007bff, #00aaff)" }} className="text-white pt-5">
            <div className="container text-center text-md-left">
                <div className="row">
                    {/* Logo dan Deskripsi Singkat */}
                    <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
                        <h5 className="mb-4 font-weight-bold">Tri Dental Care</h5>
                        <p>
                            Klinik perawatan gigi terpercaya Anda. Memberikan pelayanan dan perawatan terbaik untuk kesehatan gigi Anda.
                        </p>
                    </div>

                    {/* Tautan Menu */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="mb-4 font-weight-bold">Tautan Cepat</h5>
                        <p><a href="#" className="text-white" style={{ textDecoration: "none" }}>Beranda</a></p>
                        <p><a href="#" className="text-white" style={{ textDecoration: "none" }}>Tentang Kami</a></p>
                        <p><a href="#" className="text-white" style={{ textDecoration: "none" }}>Layanan</a></p>
                        <p><a href="#" className="text-white" style={{ textDecoration: "none" }}>Kontak</a></p>
                    </div>

                    {/* Tautan Sosial Media */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="mb-4 font-weight-bold">Ikuti Kami</h5>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="#" className="text-white">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>

                    {/* Kontak dan Informasi */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="mb-4 font-weight-bold">Info Kontak</h5>
                        <p><i className="fas fa-home mr-3"></i> Jl. Mojopahit No.96, Setelah RSUD Sidoarjo</p>
                        <p><i className="fas fa-envelope mr-3"></i> info@tridentalcare.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 123 456 7890</p>
                    </div>
                </div>

                <hr />

                {/* Komponen Footer Sederhana */}
                <div className="card-footer py-2 text-white text-center">
                    <p className="card-text">&copy; 2024 Tri Dental Care. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
