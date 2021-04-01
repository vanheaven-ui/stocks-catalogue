import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import styles from '../styles/loading.module.css';

const Loading = ({ color }) => (
  <section className={styles.loading}>
    <span style={{ color: '#d1450d', textShadow: '1px 1px 1px #fff', fontSize: 20 }}>Loading...</span>
    <ReactLoading type="spinningBubbles" width={90} height={90} color={color} />
  </section>
);

Loading.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Loading;
