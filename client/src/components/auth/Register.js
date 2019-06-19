import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Register = () => {
   const authContext = useContext(AuthContext);
   const alertContext = useContext(AlertContext);

   // Global context state
   const { register, error, clearErrors } = authContext;
   const { setAlert, removeAlert } = alertContext;

   // Life cycle
   useEffect(() => {
      if (error === "User already exists") {
         setAlert(error, "danger");
         clearErrors();
      }
   }, [error]);

   // Component level state
   const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      password2: ""
   });

   const { name, email, password, password2 } = user;

   // onChange handler
   const onChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   // onSubmit handler
   const onSubmit = e => {
      e.preventDefault();

      // input validations
      if (name === "" || email === "" || password === "") {
         setAlert("Please enter all fields", "danger");
      } else if (password !== password2) {
         setAlert("Passwords do not match", "danger");
      } else {
         register({
            name,
            email,
            password
         });
      }
   };

   return (
      <div className="form-container">
         <h1>
            Account <span className="text-primary">Register</span>
         </h1>
         <form onSubmit={onSubmit}>
            <div className="form-group">
               <label htmlFor="name">Name</label>
               <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChange}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="email">Email Address</label>
               <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="password2">Confirm Password</label>
               <input
                  type="password"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                  required
               />
            </div>
            <input
               className="btn btn-primary btn-block"
               type="submit"
               value="Register"
            />
         </form>
      </div>
   );
};

export default Register;
