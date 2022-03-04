import { useState } from 'react';

import Pokeball from 'components/Pokeball/Pokeball';

import { Primary } from 'components/Buttons';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [inputs, setInputs] = useState({ search: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(inputs.search);
  };

  const onChange = ({ target: { name, value } }) => {
    setInputs({ [name]: value });
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <input
        name="search"
        value={inputs.search}
        onChange={onChange}
        autoComplete="off"
        placeholder="Search your Pokemon!"
      />
      <Primary className={styles.btn} type="submit">
        <Pokeball size="xsm" />
      </Primary>
    </form>
  );
}
