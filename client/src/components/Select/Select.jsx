import { useState } from 'react';
import { typesArray, getIconComponent } from 'utils';
import { BiChevronDown } from 'react-icons/bi';

import styles from './Select.module.css';

const DEFAULT = 'All!';

export default function Select({ onChange, def }) {
  const [selected, setSelected] = useState(def || DEFAULT);
  const [show, setShow] = useState(false);

  const handleState = () => setShow((old) => !old);

  const changeSelected = (type) => {
    setSelected(type);
    setShow((old) => !old);
    if (DEFAULT !== type) onChange(type);
    else onChange(null);
  };

  const SelectedIcon =
    selected !== DEFAULT ? getIconComponent(selected) : undefined;

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleState} className={styles.selected}>
        <div className={styles.selected_left}>
          {SelectedIcon && <SelectedIcon />}
          {selected}
        </div>
        <BiChevronDown />
      </button>
      <ul className={`${styles.options} ${show ? styles.show : ''}`}>
        {DEFAULT !== selected ? (
          <li key={DEFAULT}>
            <button
              className={styles.btn}
              onClick={() => changeSelected(DEFAULT)}
              type="button"
            >
              {DEFAULT}
            </button>
          </li>
        ) : null}

        {typesArray.map((type) => {
          const Icon = getIconComponent(type);
          return type !== selected ? (
            <li key={type}>
              <button
                type="button"
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
