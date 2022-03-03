import { Page } from "components/Buttons";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import styles from "./PageHandler.module.css";

export function PageHandler({ next, prev, current, children }) {
  console.log({ prev, next });
  return (
    <>
      <div className={styles.pageButtons}>
        <Page onClick={prev}>
          <BiChevronLeft
            className={`${styles.icon} ${prev ? styles.active : ""}`}
          />
        </Page>
        <span className={styles.pageNumber}>{current}</span>
        <Page onClick={next} Icon={BiChevronRight}>
          <BiChevronRight
            className={`${styles.icon} ${next ? styles.active : ""}`}
          />
        </Page>
      </div>

      {children}

      <div className={styles.pageButtons}>
        <Page onClick={prev}>
          <BiChevronLeft
            className={`${styles.icon} ${prev ? styles.active : ""}`}
          />
        </Page>
        <span className={styles.pageNumber}>{current}</span>
        <Page onClick={next}>
          <BiChevronRight
            className={`${styles.icon} ${next ? styles.active : ""}`}
          />
        </Page>
      </div>
    </>
  );
}
