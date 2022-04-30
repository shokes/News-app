import { FaTrashAlt } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import moment from 'moment';
import { Fade, Bounce } from 'react-awesome-reveal';
const Story = function ({
  title,
  points,
  num_comments,
  author,
  url,
  objectID,
  created_at,
}) {
  const { handleRemove } = useGlobalContext();
  const date = moment(created_at).format('MMMM Do YYYY');

  return (
    <Bounce triggerOnce>
      <section className='container'>
        <div className='story-box'>
          <h4>{title}</h4>
          <div>
            <p>{points} points</p>
            <p>{num_comments} commented</p>
            <p>{date}</p>
            <p> written by {author}</p>
          </div>
          <div className='story-functions'>
            <a
              className='read-more'
              href={url}
              target='_blank'
              rel='noreferrer'
            >
              Read more...
            </a>
            <button
              className='btn-remove'
              onClick={() => handleRemove(objectID)}
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </section>
    </Bounce>
  );
};

export default Story;
