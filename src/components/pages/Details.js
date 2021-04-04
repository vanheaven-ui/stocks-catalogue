import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loading from '../Loading';
import StockDetails from '../../containers/StockDetails';
import { getProfile, getQuotas } from '../../redux/actions';
import { profileEndPoint } from '../../constants';
import useFetch1 from '../../common/hooks/useFetch1';

const Details = () => {
  const { symbol } = useParams();
  const id = symbol;
  const dispatch = useDispatch();
  const profileURL = `${profileEndPoint}/${id}?apikey=${process.env.REACT_APP_STOCKS_API_KEY}`;
  const qURL = `${process.env.REACT_APP_QUOTA_API_URL}${id}?apikey=${process.env.REACT_APP_STOCKS_API_KEY}`;

  const { data: profile, isLoading } = useFetch1(profileURL);
  const { data: quota } = useFetch1(qURL);

  console.log(profile);

  if (profile.length && quota.length) {
    console.log(profile);
    console.log(quota);
    localStorage.setItem('profile', JSON.stringify(profile));
    dispatch(getProfile(profile));
    localStorage.setItem('quotas', JSON.stringify(quota));
    dispatch(getQuotas(quota));
  }
  return (
    <>
      { isLoading && <Loading color="blue" /> }
      { !isLoading && <StockDetails /> }
    </>
  );
};

export default Details;
