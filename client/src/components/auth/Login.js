import React, { useState } from "react";

const Login = () => {
   const [user, setUser] = useState({
      email: "",
      password: ""
   });

   const { email, password } = user;

   // onChange handler
   const onChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   // onSubmit handler
   const onSubmit = e => {
      e.preventDefault();
      // TODO: Login user
      console.log("Login submit");
   };

   return (
      <div className="form-container">
         <h1>
            Account <span className="text-primary">Login</span>
         </h1>
         <form onSubmit={onSubmit}>
            <div className="form-group">
               <label htmlFor="email">Email Address</label>
               <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
               />
            </div>
            <div className="form-group">
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
               />
            </div>
            <input
               className="btn btn-primary btn-block"
               type="submit"
               value="Login"
            />
         </form>
      </div>
   );
};

export default Login;
