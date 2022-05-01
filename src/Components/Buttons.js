import { useGlobalContext } from '../context';

const Button = function () {
  const { page, numOfPages, handlePage, loading } = useGlobalContext();

  return (
    <section className='buttons-flex'>
      <button
        disabled={loading}
        className='btn'
        onClick={() => handlePage('dec')}
      >
        prev
      </button>
      <div className='pages-desc'>
        {page + 1} of {numOfPages}
      </div>

      <button
        disabled={loading}
        className='btn'
        onClick={() => handlePage('inc')}
      >
        next
      </button>
    </section>
  );
};

export default Button;
