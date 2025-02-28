/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function StyledLink({ location, children, icon: Icon }) {
  return (
    <NavLink
      to={location}
      className="flex gap-x-3 justify-start items-center text-lg font-light"
    >
      <Icon />
      {children}
    </NavLink>
  );
}

export default StyledLink;
