import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const IntroAlert = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      { show && (
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading id="heading">
          <span role="img" aria-labelledby="heading">👋</span>
          Hey!, Welcome to stocks catalogue
        </Alert.Heading>
        <hr />
        <p style={{ fontSize: 16 }}>
          This is a Single Page Application(SPA) that consumes the
          {' '}
          <a
            href="https://financialmodelingprep.com/developer/docs/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'underline', fontWeight: 700 }}
          >
            financialmodelingprep API
            {' '}
          </a>
          to get real time stock trading details and news so that they are easily accessible.
          <br />
          <strong>Remember to use the filter to narrow down your browsing list.</strong>
          <br />
          Enjoy and make the best decision in this volatile business!
        </p>
      </Alert>
      )}
      { !show && (
      <Button variant="light" onClick={() => setShow(true)} id="greeting">
        <span role="img" aria-labelledby="greeting">👋</span>
        Greeting!
      </Button>
      )}
    </>
  );
};

export default IntroAlert;
