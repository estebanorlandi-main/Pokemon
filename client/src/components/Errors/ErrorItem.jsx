import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { removeError } from 'redux/actions/errors';

export default function ErrorItem({ id, name, message }) {
  const dispatch = useDispatch();

  const ref = useRef(null);

  const remove = () => {
    dispatch(removeError(id));
  };

  useEffect(() => {
    /* const interval = setInterval(() => remove(), 1000);
    return () => clearInterval(interval); */
  }, [ref]);

  return (
    <button
      type="button"
      ref={ref}
      onClick={remove}
      className="message error"
      key={id}
    >
      <h3 className="title">{name}</h3>
      <p>{message}</p>
    </button>
  );
}
