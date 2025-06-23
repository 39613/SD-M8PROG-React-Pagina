import { Question } from "./Questions";
import styles from "./FAQ.module.css";

export function FAQ() {
  return (
    <section className={styles.mainSection}>
      <section className={styles.vraagSection}>
        <h2 className={styles.Title}>Frequently Asked Questions</h2>
        <ul className={styles.list}>
          <Question
            Question="Hoe geruik je props in react?"
            Answer="Ik het weet niet, zoek het op"
          />
          <Question Question="Wat wil je later doen?" Answer="leven" />
          <Question Question="Hoe gaat het?" Answer="Goed!" />
          <Question
            Question="Wat zijn de nummers van pi?"
            Answer="3,14159 26535 89793 23846.."
          />
        </ul>
      </section>
    </section>
  );
}
