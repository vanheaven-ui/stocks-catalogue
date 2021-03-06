import {
  Container, Badge, Col, Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from '../styles/details.module.css';

const StockDetails = () => {
  const data = useSelector((state) => state.stocks.profiles);
  const quotases = useSelector((state) => state.stocks.quotas);

  return (
    <section className={styles.stockDetails}>
      <Container>
        { data.length > 0 && quotases.length > 0 && (
          <>
            <div className="company-preview mb-3">
              <header className={styles.coHeader}>
                <Badge variant="light">
                  {data[0].image
                    && (
                    <img
                      src={data[0].image}
                      alt="profile-icon"
                      style={{ width: 100, height: 100 }}
                    />
                    )}
                </Badge>
                { data[0].companyName
                && (
                <h2>
                  {data[0].companyName}
                </h2>
                )}
              </header>
              <div className={styles.aboutCo}>
                <h3
                  style={{ width: 'max-content', textDecoration: 'underline' }}
                >
                  About Company:
                </h3>
                { data[0].description && <p>{data[0].description}</p> }
              </div>
            </div>
            <div
              className={styles.stockDetails}
              style={{ backgroundColor: '#f1f1e2', color: '#333' }}
            >
              <h2
                className={styles.stckHdr}
                style={{ width: 'max-content', margin: '0 auto 20px' }}
              >
                Stock details
                <Badge
                  variant="success"
                  style={{ marginLeft: 10 }}
                >
                  {data[0].symbol}
                </Badge>
              </h2>
              <Row>
                <Col sm={12} md={5} className={styles.stckDetails}>
                  {data[0].exchange && (
                  <h4>
                    <span style={{ color: '#d1450d' }}>On:</span>
                    {' '}
                    {data[0].exchange}
                  </h4>
                  )}
                  { data[0].sector && (
                  <h5>
                    <span style={{ fontWeight: '700' }}>Sector:</span>
                    {' '}
                    {data[0].sector }
                  </h5>
                  )}
                  {data[0].industry && (
                  <h5>
                    <span style={{ fontWeight: '700' }}>Industry:</span>
                    {' '}
                    {data[0].industry && data[0].industry}
                  </h5>
                  )}
                  { data[0].website && (
                  <h5>
                    <span style={{ fontWeight: '700' }}>Website:</span>
                    {' '}
                    <a href={data[0].website} target="_blank" rel="noreferrer">{data[0].website}</a>
                  </h5>
                  )}
                  {data[0].currency && (
                  <h5>
                    <span style={{ fontWeight: '700' }}>Currency:</span>
                    {' '}
                    {data[0].currency}
                  </h5>
                  )}
                  {data[0].country && (
                  <h5>
                    <span style={{ fontWeight: '700' }}>Country:</span>
                    {' '}
                    {data[0].country}
                  </h5>
                  )}
                  {data[0].isin && (
                  <h5>
                    <span style={{ fontWeight: '700' }}>ISIN:</span>
                    {' '}
                    {data[0].isin}
                  </h5>
                  )}
                  { data[0].lastDiv && (
                  <h5>
                    <span style={{ fontWeight: '700' }}>Last Dividend:</span>
                    {' '}
                    {data[0].lastDiv}
                  </h5>
                  )}

                  { data[0].lastDiv && (
                  <h5>
                    <span style={{ fontWeight: '700' }}>Market Cap:</span>
                    {' '}
                    {data[0].mktCap}
                  </h5>
                  )}

                  { data[0].lastDiv && (
                  <h5>
                    <span style={{ fontWeight: '700' }}>IPO Date:</span>
                    {' '}
                    {data[0].ipoDate}
                  </h5>
                  )}
                </Col>
                <Col sm={12} md={2} className={styles.priceDiv}>
                  {data[0].price && (
                  <h3 className={styles.price}>
                    Price:
                    {' '}
                    {data[0].price}
                  </h3>
                  )}
                </Col>
                <Col sm={12} md={5}>
                  <h2
                    style={{
                      backgroundColor: 'blueviolet',
                      color: '#fff',
                      padding: '3px 12px',
                    }}
                  >
                    Quota
                  </h2>
                  <div className={styles.quotas}>
                    { quotases[0].avgVolume && (
                    <h5>
                      <span style={{ fontWeigh: 700 }}>Avg. Volume:</span>
                      {' '}
                      {quotases[0].avgVolume}
                    </h5>
                    )}
                    { quotases[0].change && (
                    <h5>
                      <span style={{ fontWeigh: 700 }}>Change:</span>
                      {' '}
                      {quotases[0].change}
                    </h5>
                    )}
                    { quotases[0].changesPercentage && (
                    <h5>
                      <span style={{ fontWeigh: 700 }}>Changes %:</span>
                      {' '}
                      {quotases[0].changesPercentage}
                    </h5>
                    )}
                    { quotases[0].dayHigh && (
                    <h5>
                      <span style={{ fontWeigh: 700 }}>dayHigh:</span>
                      {' '}
                      {quotases[0].dayHigh}
                    </h5>
                    )}
                    { quotases[0].dayLow && (
                    <h5>
                      <span style={{ fontWeigh: 700 }}>dayLow:</span>
                      {' '}
                      {quotases[0].dayLow}
                    </h5>
                    ) }
                    { quotases[0].marketCap && (
                    <h5>
                      <span style={{ fontWeigh: 700 }}>marketCap:</span>
                      {' '}
                      {quotases[0].marketCap}
                    </h5>
                    )}
                    { quotases[0].open && (
                    <h5>
                      <span style={{ fontWeigh: 700 }}>open:</span>
                      {' '}
                      {quotases[0].open}
                    </h5>
                    )}
                    { quotases[0].previousClose && (
                    <h5>
                      <span style={{ fontWeigh: 700 }}>previousClose:</span>
                      {' '}
                      {quotases[0].previousClose}
                    </h5>
                    )}
                    { quotases[0].sharesOutstanding && (
                    <h5>
                      <span style={{ fontWeigh: 700 }}>sharesOutstanding:</span>
                      {' '}
                      {quotases[0].sharesOutstanding}
                    </h5>
                    )}
                    { quotases[0].volume && (
                    <h5>
                      <span style={{ fontWeigh: 700 }}>volume:</span>
                      {' '}
                      {quotases[0].volume}
                    </h5>
                    )}
                    { quotases[0].yearHigh && (
                    <h5>
                      <span style={{ fontWeigh: 700 }}>yearHigh:</span>
                      {' '}
                      {quotases[0].yearHigh}
                    </h5>
                    )}
                    { quotases[0].yearLow && (
                    <h5>
                      <span style={{ fontWeigh: 700 }}>yearLow:</span>
                      {' '}
                      {quotases[0].yearLow}
                    </h5>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default StockDetails;
