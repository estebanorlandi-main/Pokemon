import { useState } from "react";
import { Pokeball } from "components/Pokeball/Pokeball";

import styles from "./SearchBar.module.css";

export const SearchBar = ({ onSearch }) => {
  const [inputs, setInputs] = useState({ search: "" });

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
      <button type="submit">
        <Pokeball size="xsm" />
      </button>
    </form>
  );
};
