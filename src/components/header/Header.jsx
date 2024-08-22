import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <div id="about">
            <div className="container p-5 bg-white text-black shadow-sm">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Selamat Datang di Website Tri Dental Care Sidoarjo</h1>
                    <p className="col-md-12 fs-4">
                        Melayani perapian gigi menggunakan behel sehat dan ditangani dengan dokter spesialis. Dengan fasilitas memadai dan peralatan selalu steril, kami berkompeten melayani perawatan behel gigi 
                        <Link to="/Card" className="text-black"> selengkapnya..</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

// CSS styles
const styles = {
    about: {
        padding: '5rem',
        backgroundColor: 'white',
        color: 'black',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    container: {
        padding: '20px 10%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '3rem',
    },
    text: {
        fontSize: '1.25rem',
        marginTop: '1rem',
    },
};

export default Header;
