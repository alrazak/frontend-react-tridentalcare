import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Question() {
    return (
        <div className="container-question">
            <h3 className="title-question">FAQ</h3>
            <div className="container-faq">
                <div className="container-pertanyaan">
                    <p>Apa service yang diberikan klinik tri dental care?</p>
                </div>
                <div className="container-jawaban">
                    <p>Ada 3 service utama yaitu behel gigi, perawatan saluran akar, dan cabut gigi.</p>
                </div>
                <div className="container-pertanyaan">
                    <p>Berapa lama estimasi perawatan di klinik ini?</p>
                </div>
                <div className="container-jawaban">
                    <p>Perapian behel gigi tergantung jenis behel yang dipakai, estimasi paling cepat jika rutin kontrol 1 tahun selesai.</p>
                </div>
                <div className="container-pertanyaan">
                    <p>Dimana lokasi klinik tri dental care?</p>
                </div>
                <div className="container-jawaban">
                    <p>Jalan mojopahit no 96 sidoarjo, setelah RSUD Sidoarjo.</p>
                </div>
            </div>
        </div>
    )
}

const styles = `
    .container-question {
        margin: 20px auto;
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

    .container-pertanyaan, .container-jawaban {
        padding: 15px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .container-pertanyaan {
        font-weight: bold;
        background-color: #f1f1f1;
        
    }

    .container-jawaban {
        font-weight: bold;
    }
`;

export default Question;

// Inject CSS into the page
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);