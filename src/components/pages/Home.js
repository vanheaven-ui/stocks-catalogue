import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import Hero from '../Hero';
import heroBar from '../../images/hero-bar.png';
import IntroAlert from '../IntroAlert';
import StockList from '../../containers/StockList';
import styles from '../../styles/hero.module.css';

const Home = () => (
  <section className={styles.home}>
    <section className="hero">
      <Container fluid>
        <Row className={styles.hRow}>
          <Col sm={12} lg={7} style={{ height: 'inherit' }} className={styles.pOffset}>
            <Hero />
          </Col>
          <Col
            sm={12}
            lg={5}
            style={{ height: 'inherit' }}
            className={`${styles.pOffset} ${styles.marginB}`}
          >
            <Card border="none" className="bg-dark text-light" style={{ height: 'inherit' }}>
              <Card.Img src={heroBar} alt="Card image" style={{ width: 300, margin: '0 auto' }} />
              <Card.ImgOverlay className={styles.pOffset}>
                <Card.Title className={styles.pOffset}>
                  <IntroAlert />
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>

    </section>
    <StockList />
  </section>
);

export default Home;
