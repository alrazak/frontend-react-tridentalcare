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
        backgroundColor: "#007bff", // Warna latar belakang biru
        borderRadius: "10px",
        color: "white",
        padding: "2rem",
        marginBottom: "1.5rem",
        marginTop: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    photoItem: {
        display: "flex",
        alignItems: "center",
        marginBottom: "30px",
        width: "100%",
        maxWidth: "900px",
        flexDirection: "row", // Gambar di kiri, teks di kanan
        justifyContent: "center",
        padding: "0 20px",
    },
    photoItemReverse: {
        display: "flex",
        alignItems: "center",
        marginBottom: "30px",
        width: "100%",
        maxWidth: "900px",
        flexDirection: "row-reverse", // Gambar di kanan, teks di kiri
        justifyContent: "center",
        padding: "0 20px",
        textAlign: "left", // Teks rata kiri
    },
    photo: {
        width: "100%",
        maxWidth: "500px", // Ukuran gambar yang lebih besar
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "0 20px", // Jarak di kanan dan kiri gambar
    },
    photoText: {
        fontSize: "2rem", // Ukuran font yang lebih besar
        padding: "15px 20px",
        flex: 1,
        margin: "0 20px", // Jarak antara gambar dan teks
        textAlign: "center", // Teks rata tengah
    },
}

export default Body;



// Add styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
