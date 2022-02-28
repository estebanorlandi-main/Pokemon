import PageButton from "components/Buttons/PrimaryButton";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import styles from "./PageHandler.module.css";

export function PageHandler({ next, prev, current, children }) {
  return (
    <>
      <div className={styles.pageButtons}>
        <PageButton onClick={prev} Icon={BiChevronLeft} />
        <span className={styles.pageNumber}>{current}</span>
        <PageButton onClick={next} Icon={BiChevronRight} />
      </div>

      {children}

      <div className={styles.pageButtons}>
        <PageButton onClick={prev} Icon={BiChevronLeft} />
        <span className={styles.pageNumber}>{current}</span>
        <PageButton onClick={next} Icon={BiChevronRight} />
      </div>
    </>
  );
}
