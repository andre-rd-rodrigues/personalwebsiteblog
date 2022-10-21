import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import styles from "./contactbutton.module.scss";

const ContactButton = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to="/contactos">
        <Icon icon="ph:calendar-check-thin" />
        agendar
      </Link>
    </div>
  );
};

export default ContactButton;
