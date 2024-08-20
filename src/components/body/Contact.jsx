import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
        <div id="contact" style={{ backgroundColor: "#ddd" }} className="text-center py-5">
            <h3 className="font-weight-bold mb-4">Jadwal Operasional Klinik</h3>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card mb-5 bg-primary text-white">
                            <div className="card-body bg-white text-dark text-center">
                                <p className="card-text">Senin - Jumat: 10.00 - 21.00 WIB</p>
                                <p className="card-text">Sabtu: 10.00 - 18.00 WIB</p>
                                <p className="card-text">Minggu/hari libur: Tutup</p>
                            </div>
                            <div className="card-footer bg-primary text-white text-center">
                                <p className="card-text">Instagram: @tri.dentalcare | Email: info.tridentalcare@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
