import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function CustomCard() {
  const navigate = useNavigate();

  return (
    <>
      <div id="about" className="about">
        <div className="container p-5 bg-white text-black shadow-sm">
          <div className="container-fluid py-5">
            <p className="col-md-12 fs-4">
              Klinik kami menawarkan layanan perapian gigi yang menggunakan behel yang dirancang untuk menjaga kesehatan mulut dan gigi Anda. Proses perawatan ini dilakukan oleh dokter spesialis yang memiliki keahlian khusus di bidang ortodonti, sehingga Anda dapat merasa aman dan yakin bahwa perawatan dilakukan dengan standar tertinggi. Selain itu, kami juga dilengkapi dengan fasilitas yang memadai untuk menunjang kenyamanan dan efektivitas perawatan. Semua peralatan yang digunakan selalu disterilkan sesuai dengan prosedur medis, guna memastikan kebersihan dan mencegah infeksi. Dengan komitmen kami terhadap kualitas dan keselamatan, kami berupaya memberikan perawatan behel gigi terbaik yang dapat meningkatkan kesehatan dan penampilan gigi Anda.
            </p>
            <br />
            <p className="col-md-12 fs-4">
              Klinik kami dipimpin oleh tim dokter spesialis yang berpengalaman di bidang ortodonti, memastikan bahwa setiap pasien menerima perawatan yang tepat dan berkualitas tinggi. Dengan pengetahuan dan keahlian yang mendalam, dokter spesialis kami mampu menangani berbagai kebutuhan perapian gigi, dari kasus yang sederhana hingga yang lebih kompleks. Pendekatan yang digunakan selalu disesuaikan dengan kondisi unik setiap pasien, sehingga hasil yang diperoleh tidak hanya estetis, tetapi juga fungsional. Kepercayaan dan kepuasan pasien adalah prioritas kami, dan itulah mengapa setiap langkah perawatan dilakukan dengan penuh perhatian dan presisi oleh dokter-dokter yang telah terlatih dan tersertifikasi di bidangnya.
            </p>
          </div>
        </div>
      </div>

      <Container className="mt-5">
        <h3 className="fw-bold text-center mb-3">Dokter Spesialis</h3>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>drg. TRI JULIANTI, Sp.Ort</Card.Title>
                <Card.Text>SPESIALIS ORTODENTIS</Card.Text>
                <hr />
                <Card.Text>
                  Dokter spesialis perapian gigi, melayani segala bentuk gigi untuk dirapikan menggunakan metode behel damon, behel lotus, dan behel konvensional. buka praktek selasa & kamis, sabtu dengan perjanjian.
                </Card.Text>
                <Button variant="primary">Selengkapnya..</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>drg. R.R PUSPITA SARI.M</Card.Title>
                <Card.Text>SPESIALIS KONSERVASI GIGI</Card.Text>
                <hr />
                <Card.Text>
                  Dokter spesialis saraf gigi, perawatan saluran akar gigi, perawatan bertujuan untuk menyelamatkan gigi yang seharusnya memerlukan pencabutan. buka praktek senin sd kamis.
                </Card.Text>
                <Button variant="primary">Selengkapnya..</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>drg. FLORETTA C.D,Sp.Ort</Card.Title>
                <Card.Text>SPESIALIS ORTODENTIS</Card.Text>
                <hr />
                <Card.Text>
                  Dokter spesialis perapian gigi, melayani segala bentuk gigi tidak rapi untuk dilakukan perawatan menggunakan behel sesuai jenis kondisi gigi. buka praktek mulai selasa sd kamis.
                </Card.Text>
                <Button variant="primary">Selengkapnya..</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>drg. VIVIE JUWITA</Card.Title>
                <Card.Text>SPESIALIS KONVERVASI GIGI</Card.Text>
                <hr />
                <Card.Text>
                  Dokter spesialis perawatan gigi, scalling karang gigi, dan perawatan tambal gigi berlubang untuk menyelamatkan gigi yang seharusnya memerlukan pencabutan. buka praktek senin, jumat, sabtu.
                </Card.Text>
                <Button variant="primary">Selengkapnya..</Button>
              </Card.Body>
            </Card>
          </Col>
          <Button variant="primary" onClick={() => navigate('/')}>Kembali ke Home</Button>
        </Row>
      </Container>
    </>
  );
}

export default CustomCard;
