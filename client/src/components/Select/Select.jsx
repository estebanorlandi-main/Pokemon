import { useState } from "react";
import { typesArray, getIconComponent } from "utils";
import { BiChevronDown } from "react-icons/bi";

import styles from "./Select.module.css";

const DEFAULT = "All!";

export function Select({ onChange }) {
  const [selected, setSelected] = useState(DEFAULT);
  const [show, setShow] = useState(false);

  const handleState = () => setShow((old) => !old);

  const changeSelected = (type) => {
    setSelected(type);
    setShow((old) => !old);
    if (DEFAULT !== type) onChange(type);
    else onChange(null);
  };

  return (
    <div className={styles.container}>
      <div onClick={handleState} className={styles.selected}>
        {selected} <BiChevronDown />
      </div>
      <ul className={`${styles.options} ${show ? styles.show : ""}`}>
        {DEFAULT !== selected ? (
          <li key={DEFAULT}>
            <button
              className={styles.btn}
              onClick={() => changeSelected(DEFAULT)}
            >
              {DEFAULT}
            </button>
          </li>
        ) : null}

        {typesArray.map((type, i) => {
          const Icon = getIconComponent(type);
          return type !== selected ? (
            <li key={type + i}>
              <button
                className={styles.btn}
                onClick={() => changeSelected(type)}
              >
                <Icon /> {type}
              </button>
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
}
