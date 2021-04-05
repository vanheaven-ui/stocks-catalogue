import { Card } from 'react-bootstrap';
import hero from '../images/hero.jpg';

const Hero = () => (
  <Card className="bg-dark text-white" style={{ height: 200 }}>
    <Card.Img src={hero} alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title style={{ fontSize: 48, textShadow: '3px 2px black' }}>
        INFORMATION FOR YOUR
        <br />
        NEXT STOCKS INVESTMENT
      </Card.Title>
    </Card.ImgOverlay>
  </Card>
);

export default Hero;
