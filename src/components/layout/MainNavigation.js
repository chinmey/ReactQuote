import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn
  const logoutHandler=()=>{
    authCtx.logout()
  }
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink to="/auth" activeClassName={classes.active}>
                Login
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/new-quote" activeClassName={classes.active}>
                Add a Quote
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
