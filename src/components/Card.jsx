import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function CustomCard() {
  return (
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
                Dokter spesialis perapian gigi, melayani segala bentuk gigi untuk dirapikan menggunakn metode behel damon, behel lotus, dan behel konvensional. buka praktek selasa & kamis, sabtu dengan perjanjian.
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
      </Row>
    </Container>
  );
}

export default CustomCard;
