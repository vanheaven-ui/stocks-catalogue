import { useParams } from 'react-router-dom';
import StockDetails from '../../containers/StockDetails';

const Details = () => {
  const { symbol } = useParams();
  return (
    <>
      <StockDetails symbol={symbol} />
    </>
  );
};

export default Details;
