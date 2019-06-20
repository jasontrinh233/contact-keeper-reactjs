import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
   const contactContext = useContext(ContactContext);

   // Global state
   const { current, addContact, updateContact, clearCurrent } = contactContext;

   // Component state
   const [contact, setContact] = useState({
      name: "",
      email: "",
      phone: "",
      type: "personal"
   });

   // Life cycle
   useEffect(() => {
      if (current !== null) {
         setContact(current);
      } else {
         // clear form
         setContact({
            name: "",
            email: "",
            phone: "",
            type: "personal"
         });
      }
   }, [contactContext, current]);

   const { name, email, phone, type } = contact;

   // onChange handler
   const onChange = e =>
      setContact({ ...contact, [e.target.name]: e.target.value });

   // onSubmit handler
   const onSubmit = e => {
      e.preventDefault();

      if (current === null) {
         addContact(contact); // add
      } else {
         updateContact(contact); // update
         clearAll();
      }
   };

   // clearAll handler
   const clearAll = () => {
      clearCurrent();
   };

   return (
      <form onSubmit={onSubmit}>
         <h2 className="text-primary">
            {current ? "Edit Contact" : "Add Contact"}
         </h2>
         <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={onChange}
         />
         <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={onChange}
         />
         <input
            type="text"
            name="phone"
            value={phone}
            placeholder="Phone"
            onChange={onChange}
         />
         <h5>Contact Type</h5>
         <input
            type="radio"
            name="type"
            value="personal"
            checked={type === "personal"}
            onChange={onChange}
         />{" "}
         Personal{" "}
         <input
            type="radio"
            name="type"
            value="professional"
            checked={type === "professional"}
            onChange={onChange}
         />{" "}
         Professional{" "}
         <div>
            <input
               className="btn btn-primary btn-block"
               type="submit"
               value={current ? "Update Contact" : "Add Contact"}
            />
         </div>
         {current && (
            <div>
               <button className="btn btn-light btn-block" onClick={clearAll}>
                  Clear
               </button>
            </div>
         )}
      </form>
   );
};

export default ContactForm;
