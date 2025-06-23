import { useState } from "react";
import styles from "./Questions.module.css";

export function Question(props) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <li className={styles.li} onClick={handleClick}>
      <h3 className={styles.vraag}>{props.Question}</h3>
      {open && <p className={styles.antwoord}>{props.Answer}</p>}
    </li>
  );
}
