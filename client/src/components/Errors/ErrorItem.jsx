import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { removeError } from "redux/actions/errors";

export function ErrorItem({ id, name, message }) {
  const dispatch = useDispatch();

  const ref = useRef(null);

  const remove = () => {
    dispatch(removeError(id));
  };

  useEffect(() => {
    /*const interval = setInterval(() => remove(), 1000);
    return () => clearInterval(interval);*/
  }, [ref]);

  return (
    <li
      onAnimationEnd={console.log}
      ref={ref}
      onClick={remove}
      className="message error"
      key={id}
    >
      <div>
        <h3 className="title">{name}</h3>
        <p>{message}</p>
      </div>
      <button>X</button>
    </li>
  );
}
