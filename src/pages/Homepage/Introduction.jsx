import React from "react";
import styles from "./homepage.module.scss";

const Introduction = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.logo} />
      <h1>Curiosity Gem</h1>
      <p>Uncover hidden gems of knowledge. Stay curious.</p>
      <button onClick={() => window.scroll(0, 500)}>start reading</button>
    </div>
  );
};

export default Introduction;
