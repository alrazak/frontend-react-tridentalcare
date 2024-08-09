import React from "react";

function Body() {
    return (
        <div style={styles.container}>
            <div style={styles.photoItem}>
                <img src="/image1.jpg" alt="Photo 1" style={styles.photo} />
                <p style={styles.photoText}>
                    Alat yang digunakan bersih dan terawat, tersedia camera yang terhubung ke monitor
                </p>
            </div>
            <div style={styles.photoItemReverse}>
                <p style={styles.photoText}>
                    Sikat gigi yang menggunakan pasta alami dapat menjaga kesehatan gigi
                </p>
                <img src="/image2.jpg" alt="Photo 2" style={styles.photo} />
            </div>
            <div style={styles.photoItem}>
                <img src="/image3.jpg" alt="Photo 3" style={styles.photo} />
                <p style={styles.photoText}>
                    Kontrol rutin 6 bulan sekali dapat mengurangi resiko tumbuhnya karang gigi
                </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: "#007bff", // Warna bg-primary
        borderRadius: "10px",
        color: "white",
        padding: "2rem",
        marginBottom: "1.5rem",
    },
    photoItem: {
        display: "flex",
        alignItems: "center",
        marginBottom: "30px",
    },
    photoItemReverse: {
        display: "flex",
        alignItems: "center",
        marginBottom: "30px",
        justifyContent: "flex-end", // Mengatur gambar tetap di kanan dan teks di kiri
        textAlign: "left", // Mengatur teks tetap rata kiri
    },
    photo: {
        width: "450px", // Lebar gambar yang lebih besar
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    photoText: {
        fontSize: "3rem",
        padding: "10px 15px",
        flex: 1,
        marginLeft: "20px", // Jarak antara gambar dan teks
        marginRight: "20px", // Jarak antara gambar dan teks
        textAlign: "center", // Rata tengah untuk teks
    },
}

export default Body;



// Add styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
