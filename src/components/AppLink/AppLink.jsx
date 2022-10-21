import React from "react";
import { Link } from "react-router-dom";
import styles from "./applink.module.scss";

const AppLink = ({ label, to, scrollTop }) => {
  const getStyle = () => {
    if (label.toLowerCase() === "ler mais")
      return `${styles.appLink} ${styles.readNow}`;

    return `${styles.appLink}`;
  };

  return (
    <Link
      className={getStyle()}
      to={to}
      onClick={() => (scrollTop ? window.scrollTo(0, 0) : null)}
    >
      {label}
    </Link>
  );
};

export default AppLink;
