import styles from "./cards.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function HomeCard({ name, color }: { name: string, color: string }) {
  return (
    <div className={` ${styles.homeCard}`}>
      <div className={` ${styles.homeCardColor} ${utilStyles[color]} `}></div>
      <div className={styles.homeCardTitle}>{name}</div>
    </div>
  );
}
