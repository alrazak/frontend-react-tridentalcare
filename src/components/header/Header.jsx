import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <div id="about">
            <div className="p-5 bg-white text-black shadow-sm">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Selamat Datang di Website Tri Dental Care Sidoarjo</h1>
                    <p className="col-md-12 fs-4">Melayani perapian gigi menggunakan behel sehat dan ditangani dengan dokter spesialis. Dengan fasilitas memadai dan peralatan selalu steril, kami berkompeten melayani perawatan behel gigi <Link to="/Card" className="text-black">selengkapnya..</Link> </p>
                </div>
            </div>
            
        </div>
    );
}

export default Header;
