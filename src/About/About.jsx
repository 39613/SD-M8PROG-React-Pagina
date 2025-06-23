import { AboutMe } from "../AboutMe/AboutMe";
import { Top10 } from "../Top10/Top10";
import styles from "./about.module.css";

export function About() {
  return (
    <main className={styles.mainAbout}>
      {/* <h1>About</h1> */}
      <AboutMe />
      <Top10 />
    </main>
  );
}
