import styles from "./cards.module.css";
import { ReactNode } from "react";

export default function ContentCard({ children }: { children: ReactNode }) {
  return (
    <div className={` ${styles.contentCard}`}>
      <article className={styles.contentArticle}>{children}</article>
    </div>
  );
}
