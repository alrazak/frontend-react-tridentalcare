import React from 'react';

const Testimoni = () => {
  const testimonials = [
    {
      name: "Abdul Rozak",
      text: "Pengalaman saya dengan layanan dental care di sini sangat memuaskan. Dokter sangat profesional dan ramah. Saya merasa sangat diperhatikan dan hasil perawatannya luar biasa.",
      image: "https://via.placeholder.com/100?text=Abdul+Rozak"
    },
    {
      name: "Dina Maulidiya",
      text: "Sangat merekomendasikan dental care ini! Fasilitasnya bersih dan modern, dan timnya sangat ahli. Saya tidak merasa cemas sama sekali selama perawatan.",
      image: "https://via.placeholder.com/100?text=Dina+Maulidiya"
    },
    {
      name: "Rizal Hamdan",
      text: "Layanan yang luar biasa dan hasil yang memuaskan. Dokter menjelaskan setiap langkah dengan jelas dan memastikan saya merasa nyaman sepanjang waktu.",
      image: "https://via.placeholder.com/100?text=Rizal+Hamdan"
    }
  ];

  return (
    <section className="testimoni">
      <h3>Testimoni Pelanggan</h3>
      <div className="testimoni-container">
        {testimonials.map((testimoni, index) => (
          <div key={index} className="testimoni-item">
            <div className="testimoni-header">
              <h4>{testimoni.name}</h4>
              <img src={testimoni.image} alt={testimoni.name} className="testimoni-image" />
            </div>
            <div className="testimoni-text">
              <p>"{testimoni.text}"</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .testimoni {
          padding: 2rem;
          background-color: #EEEDEB;
          padding-top: 5rem;
          padding-bottom: 7rem;
        }

        .testimoni h3 {
          text-align: center;
          margin-bottom: 1.5rem;
          font-weight: bold;
        }

        .testimoni-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }

        .testimoni-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 300px;
          text-align: center;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          background-color: #fff;
        }

        .testimoni-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1rem;
        }

        .testimoni-image {
          border-radius: 50%;
          width: 100px;
          height: 100px;
          object-fit: cover;
          margin-top: 0.5rem;
        }

        .testimoni-text p {
          font-style: italic;
          margin: 0;
        }

        .testimoni-text h4 {
          margin: 0;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}

export default Testimoni;
