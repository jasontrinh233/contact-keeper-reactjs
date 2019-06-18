import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
   // Context hook
   const contactContext = useContext(ContactContext);

   // State hook
   const [contact, setContact] = useState({
      name: "",
      email: "",
      phone: "",
      type: "personal"
   });

   const { name, email, phone, type } = contact;

   // onChange handler
   const onChange = e =>
      setContact({ ...contact, [e.target.name]: e.target.value });

   // onSubmit handler
   const onSubmit = e => {
      e.preventDefault();
      contactContext.addContact(contact); // add contact
      setContact({ // clear form
         name: "",
         email: "",
         phone: "",
         type: "personal"
      });
   };

   return (
      <form onSubmit={onSubmit}>
         <h2 className="text-primary">Add Contact</h2>
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
               value="Add Contact"
            />
         </div>
      </form>
   );
};

export default ContactForm;
