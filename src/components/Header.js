import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <p>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Go home
      </NavLink>
    </p>
    <p>
      <NavLink to="/create" activeClassName="is-active">
        Go Second
      </NavLink>
    </p>
    <p>
      <NavLink to="/help" activeClassName="is-active">
        Go help
      </NavLink>
    </p>
  </div>
);

export default Header;
