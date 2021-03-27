// import { useParams } from 'react-router-dom';
// import { profileEndPoint } from '../constants';
// import useFetch from '../common/hooks/useFetch';

import { useDispatch } from 'react-redux';
import { getProfile } from '../redux/actions';

const StockDetails = () => {
  const dispatch = useDispatch();
  // const { symbol } = useParams();
  // const { data } =
  // useFetch(`${profileEndPoint}/${symbol}?apikey=${process.env.REACT_APP_STOCKS_API_KEY}`);
  // localStorage.setItem('profile', JSON.stringify(data));
  // console.log(data);
  const data = JSON.parse(localStorage.getItem('profile'));
  dispatch(getProfile(data));

  return (
    <section className="stock-details">
      { data && (
        <>
          <h2>{data[0].companyName}</h2>
          <p>{data[0].description}</p>
          <div>
            <h3>Stock details</h3>
            <h1>
              Exchange:
              {' '}
              {data[0].exchange}
            </h1>
            <h3>
              Price:
              {' '}
              {data[0].price}
            </h3>
            <h3>
              Price Range:
              {' '}
              {data[0].range}
            </h3>
            <h4>
              Sector:
              {' '}
              {data[0].sector}
            </h4>
            <h4>
              Industry:
              {' '}
              {data[0].industry}
            </h4>
            <h5>
              Website:
              {data[0].website}
            </h5>
            <h6>
              Symbol:
              {' '}
              {data[0].symbol}
            </h6>
            <h5>
              Currency:
              {' '}
              {data[0].currency}
            </h5>
            <h5>
              Country:
              {' '}
              {data[0].country}
            </h5>
            <h5>
              ISIN:
              {' '}
              {data[0].isin}
            </h5>
            <img src={data[0].image} alt="profile-icon" style={{ width: 100, height: 100 }} />
          </div>
          This is gonna have the details of each stock (Defines the layout)
        </>
      )}
    </section>
  );
};

export default StockDetails;
