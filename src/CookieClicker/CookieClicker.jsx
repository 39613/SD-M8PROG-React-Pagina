import styles from "./CookieClicker.module.css";
import { useState } from "react";

export function CookieClicker() {
  const [score, setScore] = useState(0);
  const [grandmas, setGrandmas] = useState(0);

  function CookieClick() {
    setScore(score + 1 + grandmas);
    console.log(score);
  }

  let price = Math.floor(20 * 1.15 ** grandmas);
  function buyGrandma() {
    if (score >= price) {
      setGrandmas(grandmas + 1);
      setScore(score - price);
    }
  }

  return (
    <section className={styles.cookieClicker}>
      <button className={styles.cookie} onClick={CookieClick}></button>
      <div className={styles.container}>
        <div className={styles.score}>{score} Cookies</div>
      </div>
      <div className={styles.textDiv}>
        <label htmlFor="button">Grandmas: {grandmas} </label>
        <button className={styles.upgrade} onClick={buyGrandma}>
          Buy grandma
        </button>
        <p>price: {price}</p>
      </div>
    </section>
  );
}
