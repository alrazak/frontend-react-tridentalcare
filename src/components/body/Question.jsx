import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Question() {
    // State untuk melacak pertanyaan mana yang sedang terbuka
    const [openIndex, setOpenIndex] = useState(null);

    // Fungsi untuk mengubah status terbuka/tutup
    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container-question">
            <h3 className="title-question">FAQ</h3>
            <div className="container-faq">
                <div className="faq-item">
                    <div className="container-pertanyaan" onClick={() => toggleAnswer(0)}>
                        <p>Apa saja layanan di Klinik Tri Dental Care?</p>
                        <span className="arrow">{openIndex === 0 ? '▲' : '▼'}</span>
                    </div>
                    {openIndex === 0 && (
                        <div className="container-jawaban">
                            <p>Pemeriksaan rutin, scaling, tambal gigi, perawatan saluran akar, kawat gigi, pemutihan gigi, dan veneer.</p>
                        </div>
                    )}
                </div>

                <div className="faq-item">
                    <div className="container-pertanyaan" onClick={() => toggleAnswer(1)}>
                        <p>Apakah menyediakan perawatan estetika?</p>
                        <span className="arrow">{openIndex === 1 ? '▲' : '▼'}</span>
                    </div>
                    {openIndex === 1 && (
                        <div className="container-jawaban">
                            <p>Ya, seperti pemutihan gigi, veneer, dan aligner.</p>
                        </div>
                    )}
                </div>

                <div className="faq-item">
                    <div className="container-pertanyaan" onClick={() => toggleAnswer(2)}>
                        <p>Berapa biaya pemeriksaan gigi?</p>
                        <span className="arrow">{openIndex === 2 ? '▲' : '▼'}</span>
                    </div>
                    {openIndex === 2 && (
                        <div className="container-jawaban">
                            <p>Biaya bervariasi tergantung layanan. Hubungi klinik untuk detail.</p>
                        </div>
                    )}
                </div>

                <div className="faq-item">
                    <div className="container-pertanyaan" onClick={() => toggleAnswer(3)}>
                        <p>Bagaimana cara membuat janji temu?</p>
                        <span className="arrow">{openIndex === 3 ? '▲' : '▼'}</span>
                    </div>
                    {openIndex === 3 && (
                        <div className="container-jawaban">
                            <p>Melalui telepon, WhatsApp, website, atau datang langsung ke klinik.</p>
                        </div>
                    )}
                </div>

                <div className="faq-item">
                    <div className="container-pertanyaan" onClick={() => toggleAnswer(4)}>
                        <p>Dimana lokasi klinik tri dental care?</p>
                        <span className="arrow">{openIndex === 4 ? '▲' : '▼'}</span>
                    </div>
                    {openIndex === 4 && (
                        <div className="container-jawaban">
                            <p>Jalan mojopahit no 96 sidoarjo, setelah RSUD Sidoarjo.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const styles = `
    .container-question {
        margin: 5% auto;
        max-width: 800px;
        padding: 20px;
        border-radius: 8px;
    }

    .title-question {
        text-align: center;
        margin-bottom: 25px;
        font-size: 24px;
        color: #333;
        font-weight: bold;
    }

    .container-faq {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .faq-item {
        position: relative;
    }

    .container-pertanyaan {
        font-weight: bold;
        background-color: #f1f1f1;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container-jawaban {
        padding: 15px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-top: 5px;
    }

    .arrow {
        font-size: 18px;
        color: #333;
    }
`;

// Inject CSS into the page
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Question;
