import React from "react";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={classes.navbar}>
      <h1 className={classes.title}>TODO Manager</h1>
    </div>
  );
}

export default NavBar;
