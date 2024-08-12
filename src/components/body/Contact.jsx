import React from "react";

function Contact() {
    return (
        <div id="contact" className="bg-black text-center py-5">
            <h3 className="text-white fw-bold mb-4">Jadwal Operasional Klinik</h3>
            <div className="container d-flex justify-content-center">
                <div className="card mb-5 bg-primary text-white" style={{ maxWidth: '600px', width: '100%' }}>
                    <div className="card-body bg-white text-black text-center">
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
    );
}

export default Contact;
