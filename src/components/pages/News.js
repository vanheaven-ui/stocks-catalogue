import { Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getNews } from '../../redux/actions';

const News = () => {
  const dispatch = useDispatch();
  // const { data: news } =
  // useFetch(`${process.env.REACT_APP_NEWS_API_KEY}apikey=
  // ${process.env.REACT_APP_STOCKS_API_KEY}`);
  // localStorage.setItem('news', JSON.stringify(news));
  const news = JSON.parse(localStorage.getItem('news'));
  dispatch(getNews(news));
  return (
    <section className="news">
      {news && news.map(item => (
        <article className="news-article" key={item.symbol}>
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
                {item.site && <h4>{item.site}</h4>}
                {item.url && <a href={item.url}>Website</a>}
              </div>
              <div className="news-img">
                {item.image && <img src={item.image} alt="news-hero" /> }
              </div>
              <div className="body">
                {item.text && <p>{item.text}</p>}
              </div>
            </div>
          </header>
        </article>
      ))}
    </section>
  );
};

export default News;
