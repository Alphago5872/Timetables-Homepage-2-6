import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      <h1>Sign-In</h1>
      <h3>Sign in to your Newton’s timetables Account</h3>
      {props.children}
    </div>
  );
};

export default Card;
