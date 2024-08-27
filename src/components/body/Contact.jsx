import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
        <div id="contact" className="contact-section text-center py-5">
            <h3 className="font-weight-bold mb-4">Jadwal Operasional Klinik</h3>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card mb-5 custom-card">
                            <div className="card-body custom-card-body">
                                <p className="card-text">Senin - Jumat: 10.00 - 21.00 WIB</p>
                                <p className="card-text">Sabtu: 10.00 - 18.00 WIB</p>
                                <p className="card-text">Minggu/hari libur: Tutup</p>
                            </div>
                            <div className="card-footer custom-card-footer">
                                <p className="card-text">Instagram : @tri.dentalcare | Email : info.tridentalcare@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// CSS
const styles = `
    .contact-section {
        background-color: #ddd;
    }

    .custom-card {
        background-color: #007bff;
        border-color: white;
    }

    .custom-card-body {
        background-color: white;
        color: #333;
    }

    .custom-card-footer {
        background-color: #007bff;
        color: white;
    }
`;

// Menyisipkan CSS ke dalam dokumen
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Contact;