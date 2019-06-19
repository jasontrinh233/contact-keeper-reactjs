import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
   const authContext = useContext(AuthContext);

   const { user } = AuthContext;

   if (!user) {
      return (
         <div className="navbar bg-primary">
            <h1>
               <i className={icon} /> {title}
            </h1>
            <ul>
               <li>
                  <Link to="/register">Register</Link>
               </li>
               <li>
                  <Link to="/login">Login</Link>
               </li>
            </ul>
         </div>
      );
   } else {
      return (
         <div className="navbar bg-primary">
            <h1>
               <i className={icon} /> {title}
            </h1>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
            </ul>
         </div>
      );
   }
};

// Define prop types
Navbar.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.string
};

// Default props
Navbar.defaultProps = {
   title: "Contact Keeper",
   icon: "fas fa-id-card-alt"
};

export default Navbar;
