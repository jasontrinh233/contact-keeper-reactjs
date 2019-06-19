import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
   const contactContext = useContext(ContactContext);
   const text = useRef("");

   const { filtered, filterContacts, clearFilter } = contactContext;

   // Life cycle, re-render
   useEffect(() => {
      if (filtered === null) {
         text.current.value = "";
      }
   });

   // onChange handler
   const onChange = e => {
      if (text.current.value !== "") {
         filterContacts(e.target.value);
      } else {
         clearFilter();
      }
   };

   return (
      <form>
         <input
            type="text"
            placeholder="Search Contacts..."
            ref={text}
            onChange={onChange}
         />
      </form>
   );
};

export default ContactFilter;
