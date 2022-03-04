import { useSelector } from 'react-redux';
import ErrorItem from './ErrorItem';

export default function Errors() {
  const { errors } = useSelector((state) => state.errors);

  return (
    <ul className="messages">
      {errors.map((error) => (
        <ErrorItem id={error.id} name={error.name} message={error.message} />
      ))}
    </ul>
  );
}
