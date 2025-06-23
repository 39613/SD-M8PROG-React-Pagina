import { CookieClicker } from "../CookieClicker/CookieClicker";
import { Pokemon } from "../pokemon/Pokemon";
import styles from "./game.module.css";

export function Game() {
  return (
    <main className={styles.mainGame}>
      {/* <h1>About</h1> */}
      <CookieClicker />
      <Pokemon />
    </main>
  );
}
