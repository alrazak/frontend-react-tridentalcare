import React from 'react';

function Header() {
    return (
        <div id="about" className="about">
            <div className="container p-5 bg-white text-black shadow-sm">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Selamat Datang di Website Tri Dental Care Sidoarjo</h1>
                    <p className="col-md-12 fs-4">
                    Kami menyediakan layanan perapian gigi dengan behel yang sehat, ditangani oleh dokter spesialis. Dengan fasilitas yang memadai dan peralatan yang selalu steril, kami berkomitmen untuk memberikan perawatan behel gigi terbaik bagi Anda
                        <a href="/Card" className="text-black"> selengkapnya..</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

// CSS styles
const styles = `
.about {
    padding: 5rem;
    background-color: #EEEDEB;
    color: black;
}

.container {
    padding: 20px 10%;
    border-radius: 8px;
}

.title {
    font-weight: bold;
    font-size: 3rem;
}

.text {
    font-size: 1.25rem;
    margin-top: 1rem;
}

.link {
    color: black;
}
`;

// Append styles to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Header;
