import React from "react";

function Footer() {
    return (
        <footer style={{ background: "linear-gradient(to right, #007bff, #00aaff)" }} className="text-white pt-5">
            <div className="container text-center text-md-left">
                <div className="row">
                    {/* Logo dan Deskripsi Singkat */}
                    <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
                        <h5 className="mb-4 font-weight-bold text-decoration-underline">Tri Dental Care</h5>
                        <p>
                            Klinik perawatan gigi terpercaya Anda. Memberikan pelayanan dan perawatan terbaik untuk kesehatan gigi Anda.
                        </p>
                    </div>

                    {/* Tautan Menu */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="mb-4 font-weight-bold text-decoration-underline">Tautan Cepat</h5>
                        <p><a href="#" className="link-page text-white text-decoration-none">Beranda</a></p>
                        <p><a href="#" className="link-page text-white text-decoration-none">Tentang Kami</a></p>
                        <p><a href="#" className="link-page text-white text-decoration-none">Layanan</a></p>
                        <p><a href="#" className="link-page text-white text-decoration-none">Kontak</a></p>
                    </div>

                    {/* Tautan Sosial Media */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="mb-4 font-weight-bold text-decoration-underline">Ikuti Kami</h5>
                        <a href="https://www.facebook.com" target="_blank" className="social-link d-block mb-3">
                            <i className="fab fa-facebook fa-2x"></i> Facebook
                        </a>
                        <a href="https://www.twitter.com" target="_blank" className="social-link d-block mb-3">
                            <i className="fab fa-twitter fa-2x"></i> X
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className="social-link d-block mb-3">
                            <i className="fab fa-instagram fa-2x"></i> Instagram
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" className="social-link d-block mb-3">
                            <i className="fab fa-linkedin fa-2x"></i> LinkedIn
                        </a>
                    </div>

                    {/* Kontak dan Informasi */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="mb-4 font-weight-bold text-decoration-underline">Info Kontak</h5>
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

            {/* CSS di dalam JSX */}
            <style jsx>{`
                .social-link {
                    text-decoration: none;
                    color: white;
                    transition: color 0.3s;
                }

                .social-link:hover {
                    color: #ddd;
                }

                .link-page {
                    text-decoration: none;
                    color: white;
                    transition: color 0.3s;
                }

                .link-page:hover {
                    color: #ddd !important; /* Gunakan !important untuk memastikan gaya diterapkan */
                }
            `}</style>
        </footer>
    );
}

export default Footer;
