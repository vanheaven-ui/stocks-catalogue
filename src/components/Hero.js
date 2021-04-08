import { Card } from 'react-bootstrap';
import hero from '../images/hero.jpg';
import styles from '../styles/hero.module.css';

const Hero = () => (
  <Card className="bg-dark text-white">
    <Card.Img src={hero} alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title className={styles.cTitle}>
        INFORMATION FOR YOUR
        <br />
        NEXT STOCKS INVESTMENT
      </Card.Title>
    </Card.ImgOverlay>
  </Card>
);

export default Hero;
