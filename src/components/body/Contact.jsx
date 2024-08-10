import React from "react";

function Contact() {
    return (
        <div id="contact" className="row d-flex justify-content-center mt-5">
            <h3 className="card-title fw-bold text-center mb-3">Jadwal Operasional Klinik</h3>
            <div className="col-md-6">
                <div className="card mb-4 bg-primary text-white shadow-sm">
                    <div className="card-body text-center">
                        
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
    )
}

export default Contact;