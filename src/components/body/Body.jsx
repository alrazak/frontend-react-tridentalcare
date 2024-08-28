import React from 'react';

function MainComponent() {
    return (
        <div>
            <div className="container-body">
                <h3 className="font-weight-bold mb-4">Fasilitas Memadai</h3>
                <div className="photoItem">
                    <img src="/image1.jpg" alt="Photo 1" className="photo" />
                    <div className="info">
                        <h2 className="title">Alat Berkualitas</h2>
                        <p className="description">
                            Alat yang digunakan bersih dan terawat, tersedia camera yang terhubung ke monitor.
                        </p>
                    </div>
                </div>
                <div className="photoItem">
                    <div className="info">
                        <h2 className="title">Sikat Gigi Berkualitas</h2>
                        <p className="description">
                            Sikat gigi yang menggunakan pasta alami dapat menjaga kesehatan gigi.
                        </p>
                    </div>
                    <img src="/image2.jpg" alt="Photo 2" className="photo" />
                </div>
                <div className="photoItem">
                    <img src="/image3.jpg" alt="Photo 3" className="photo" />
                    <div className="info">
                        <h2 className="title">Kontrol Rutin</h2>
                        <p className="description">
                            Kontrol rutin 6 bulan sekali dapat mengurangi risiko tumbuhnya karang gigi.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .container-body {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    padding: 20px 10%;
                    margin: 50px;
                }                   
                .container-body h3 {
                    text-align: center;
                    margin-bottom: 1.5rem;
                    font-weight: bold;
                }
                .photoItem {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    border: 1px;
                    border-radius: 8px;
                    padding: 10px;
                    background-color: #EEEDEB;
                }
                .photo {
                    max-width: 500px;
                    height: auto;
                    border-radius: 8px;
                }
                .info {
                    max-width: 500px;
                }
                .title {
                    font-size: 2.5rem;
                    color: #333;
                    margin-bottom: 10px;
                    text-align: center;
                }
                .description {
                    font-size: 2rem;
                    color: #666;
                    text-align: center;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .container {
                        padding: 10px 5%;
                    }
                    .photoItem {
                        flex-direction: column;
                        text-align: center;
                    }
                    .photoItem.reverse {
                        flex-direction: column;
                    }
                    .photo {
                        max-width: 100%;
                        width: 100%;
                    }
                    .info {
                        max-width: 100%;
                    }
                    .title {
                        font-size: 1.5rem;
                    }
                    .description {
                        font-size: 1.2rem;
                    }
                }

                @media (max-width: 480px) {
                    .title {
                        font-size: 1.2rem;
                    }
                    .description {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default MainComponent;
