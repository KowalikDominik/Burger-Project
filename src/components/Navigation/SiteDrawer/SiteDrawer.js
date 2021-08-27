import React, { useRef, useEffect } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SiteDrawer.module.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SiteDrawer = (props) => {
  const navRef = useRef(null);

  useEffect(() => {
    /**
     * Hide sitedrawer if clicked on nav
     */
    function handleClickOutside(event) {
      if (navRef.current.contains(event.target)) {
        props.closed();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  let attechedClasses = [classes.SiteDrawer, classes.Close];
  if (props.open) attechedClasses = [classes.SiteDrawer, classes.Open];

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attechedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav ref={navRef}>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SiteDrawer;
