import React from 'react';

function MainComponent() {
    return (
        <div>
            <div className="container">
                <div className="photoItem">
                    <img src="/image1.jpg" alt="Photo 1" className="photo" />
                    <div className="info">
                        <h2 className="title">Alat Berkualitas</h2>
                        <p className="description">
                            Alat yang digunakan bersih dan terawat, tersedia camera yang terhubung ke monitor.
                        </p>
                    </div>
                </div>
                <div className="photoItem reverse">
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
                .container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    padding: 20px 10%;
                }
                .photoItem {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 10px;
                    background-color: #f9f9f9;
                }
                .photoItem.reverse {
                    flex-direction: row-reverse;
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
                    font-size: 2rem;
                    color: #333;
                    margin-bottom: 10px;
                    text-align: center;
                }
                .description {
                    font-size: 2rem;
                    color: #666;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}

export default MainComponent;
