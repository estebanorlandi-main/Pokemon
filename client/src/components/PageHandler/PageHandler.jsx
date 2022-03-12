import { Page } from 'components/Buttons';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import styles from './PageHandler.module.css';

export default function PageHandler({ next, prev, current, children }) {
  if (!next && !prev) return children;

  return (
    <>
      {children}

      <div className={styles.pageButtons}>
        <Page onClick={prev}>
          <BiChevronLeft
            className={`${styles.icon} ${prev ? styles.active : ''}`}
          />
        </Page>
        <span className={styles.pageNumber}>{current}</span>
        <Page onClick={next}>
          <BiChevronRight
            className={`${styles.icon} ${next ? styles.active : ''}`}
          />
        </Page>
      </div>
    </>
  );
}
