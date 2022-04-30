import { useGlobalContext } from '../context';
import Story from './Story';
import Loading from './Loading';

const Stories = function () {
  const { news, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <section className='stories-grid container'>
      {news.map((story) => {
        return <Story key={story.objectID} {...story} />;
      })}
    </section>
  );
};

export default Stories;
