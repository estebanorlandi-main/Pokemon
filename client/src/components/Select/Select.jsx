import { useState } from "react";
import { typesArray } from "utils";

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
        {selected}
      </div>
      {selected ? (
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
          {typesArray.map((type, i) =>
            type !== selected ? (
              <li key={type + i}>
                <button
                  className={styles.btn}
                  onClick={() => changeSelected(type)}
                >
                  {type}
                </button>
              </li>
            ) : null
          )}
        </ul>
      ) : null}
    </div>
  );
}
