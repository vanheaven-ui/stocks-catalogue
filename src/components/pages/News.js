import { Badge, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useFetch1 from '../../common/hooks/useFetch1';
import { getNews } from '../../redux/actions';
import Loading from '../Loading';

const News = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useFetch1(`${process.env.REACT_APP_NEWS_API_KEY}apikey=${process.env.REACT_APP_STOCKS_API_KEY}`);

  if (data.length > 0) {
    dispatch(getNews(data));
  }

  const news = useSelector(state => state.stocks.news);
  return (
    <section className="news">
      { isLoading && <Loading color="green" /> }
      { !isLoading && news.length > 0 && (
        <Container style={{ backgroundColor: '#fff', textAlign: 'center' }}>
          {news && news.map(item => (
            <article className="news-article" key={item.url}>
              <header>
                { item.title && (
                <h2>
                  {item.title}
                  <Badge variant="danger">{item.symbol}</Badge>
                </h2>
                )}
                <div className="time-author">
                  {item.publishedDate && <small>{item.publishedDate}</small>}
                  <div className="author">
                    {item.site && (
                    <h4>
                      By:
                      {' '}
                      {item.site}
                    </h4>
                    )}
                    {item.url && <a href={item.url} target="_blank" rel="noreferrer">Source Url</a>}
                  </div>
                  <div className="news-img">
                    {item.image && <img src={item.image} alt="news-hero" className="w-100" /> }
                  </div>
                  <div className="body">
                    {item.text && <p>{item.text}</p>}
                  </div>
                </div>
              </header>
            </article>
          ))}
        </Container>
      )}
    </section>
  );
};

export default News;
