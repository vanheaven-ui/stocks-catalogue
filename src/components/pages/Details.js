import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loading from '../Loading';
import StockDetails from '../../containers/StockDetails';
import { getProfile, getQuotas } from '../../redux/actions';
import { profileEndPoint } from '../../constants';
import useFetch1 from '../../common/hooks/useFetch1';

const Details = () => {
  const dispatch = useDispatch();
  const { symbol } = useParams();
  const id = symbol;
  const profileURL = `${profileEndPoint}/${id}?apikey=${process.env.REACT_APP_STOCKS_API_KEY}`;
  const qURL = `${process.env.REACT_APP_QUOTA_API_URL}${id}?apikey=${process.env.REACT_APP_STOCKS_API_KEY}`;

  const { data: profile, isLoading } = useFetch1(profileURL);
  const { data: quota } = useFetch1(qURL);

  if ((profile.length > 0) && (quota.length > 0)) {
    dispatch(getProfile(profile));
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
