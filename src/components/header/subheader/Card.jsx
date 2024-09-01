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
            <p className="col-md-12 fs-4" style={{ textIndent: '1.5em', lineHeight: '1.6' }}>
              Klinik kami menyediakan layanan perapian gigi dengan behel, dikerjakan oleh dokter ortodonti berpengalaman. Kami memastikan perawatan berkualitas dengan fasilitas yang nyaman dan alat yang selalu disterilkan. Komitmen kami adalah memberikan perawatan yang aman dan efektif untuk meningkatkan kesehatan dan penampilan gigi Anda.
            </p>
            <br />
            <p className="col-md-12 fs-4" style={{ textIndent: '1.5em', lineHeight: '1.6' }}>
              Tim dokter spesialis kami memberikan perawatan ortodonti yang tepat, mulai dari kasus sederhana hingga kompleks. Setiap perawatan disesuaikan dengan kebutuhan unik pasien, memastikan hasil yang estetis dan fungsional. Kepercayaan pasien adalah prioritas utama kami.
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
