import React from "react";

function DentalComponent() {
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
        backgroundColor: "#007bff",
        color: "white",
        padding: "5rem",
        marginTop: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: 'border-box',
    },
    photoItem: {
        display: "flex",
        alignItems: "center",
        marginBottom: "30px",
        width: "100%",
        maxWidth: "900px",
        flexDirection: "row",
        justifyContent: "center",
        padding: "0 20px",
        boxSizing: 'border-box',
    },
    photoItemReverse: {
        display: "flex",
        alignItems: "center",
        marginBottom: "30px",
        width: "100%",
        maxWidth: "900px",
        flexDirection: "row-reverse",
        justifyContent: "center",
        padding: "0 20px",
        textAlign: "left",
        boxSizing: 'border-box',
    },
    photo: {
        width: "100%",
        maxWidth: "500px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "0 20px",
        boxSizing: 'border-box',
    },
    photoText: {
        fontSize: "2rem",
        padding: "15px 20px",
        flex: 1,
        margin: "0 20px",
        textAlign: "center",
        boxSizing: 'border-box',
    },
};

export default DentalComponent;

