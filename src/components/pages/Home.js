import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import Hero from '../Hero';
import StockList from '../StockList';
import heroBar from '../../images/hero-bar.png';
import IntroAlert from '../IntroAlert';

const Home = () => (
  <>
    <section className="hero">
      <Container fluid>
        <Row style={{ height: 362 }}>
          <Col sm={12} lg={7} style={{ height: 'inherit' }}>
            <Hero />
          </Col>
          <Col sm={12} lg={5} style={{ height: 'inherit' }}>
            <Card border="none" className="bg-dark text-light" style={{ height: 'inherit', verticleAlign: 'middle' }}>
              <Card.Img src={heroBar} alt="Card image" style={{ width: 300, margin: '0 auto' }} />
              <Card.ImgOverlay>
                <Card.Title>
                  <IntroAlert />
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>

    </section>
    <StockList />
  </>
);

export default Home;
