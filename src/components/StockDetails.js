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
          { data[0].companyName && <h2>{data[0].companyName}</h2> }
          { data[0].description && <p>{data[0].description}</p> }
          <div>
            <h3>Stock details</h3>
            {data[0].exchange && (
            <h1>
              Exchange:
              {' '}
              {data[0].exchange}
            </h1>
            )}
            {data[0].price && (
            <h3>
              Price:
              {' '}
              {data[0].price}
            </h3>
            )}
            {data[0].range && (
            <h3>
              Price Range:
              {' '}
              {data[0].range}
            </h3>
            )}
            { data[0].sector && (
            <h4>
              Sector:
              {' '}
              {data[0].sector }
            </h4>
            )}
            {data[0].industry && (
            <h4>
              Industry:
              {' '}
              {data[0].industry && data[0].industry}
            </h4>
            )}
            { data[0].website && (
            <h5>
              Website:
              {data[0].website}
            </h5>
            ) }
            {data[0].symbol && (
            <h6>
              Symbol:
              {' '}
              {data[0].symbol}
            </h6>
            )}
            {data[0].currency && (
            <h5>
              Currency:
              {' '}
              {data[0].currency}
            </h5>
            )}
            {data[0].country && (
            <h5>
              Country:
              {' '}
              {data[0].country}
            </h5>
            )}
            {data[0].isin && (
            <h5>
              ISIN:
              {' '}
              {data[0].isin}
            </h5>
            )}
            {data[0].image
              && <img src={data[0].image} alt="profile-icon" style={{ width: 100, height: 100 }} />}
          </div>
          This is gonna have the details of each stock (Defines the layout)
        </>
      )}
    </section>
  );
};

export default StockDetails;
