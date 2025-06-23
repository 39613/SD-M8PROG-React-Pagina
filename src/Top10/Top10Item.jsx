import styles from "./Top10Item.module.css";

export function Top10Item(props) {
  return (
    <li className={styles.book}>
      <div className={styles.number}>{props.number}</div>
      <div className={styles.bookInfo}>
        <a href={props.href}>{props.title}</a>
        <h4 className={styles.bookAuthor}>{props.author}</h4>
      </div>
    </li>
  );
}
