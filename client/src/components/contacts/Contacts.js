import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
   const contactContext = useContext(ContactContext);

   const { contacts, filtered } = contactContext;

   if (contacts.length === 0) {
      return <h4>Please add a contact</h4>;
   }

   return (
      <Fragment>
         <TransitionGroup>
            {filtered !== null
               ? filtered.map(contact => (
                    <CSSTransition
                       classNames="item"
                       key={contact.id}
                       timeout={500}
                    >
                       <ContactItem contact={contact} />
                    </CSSTransition>
                 ))
               : contacts.map(contact => (
                    <CSSTransition
                       classNames="item"
                       key={contact.id}
                       timeout={500}
                    >
                       <ContactItem contact={contact} />
                    </CSSTransition>
                 ))}
         </TransitionGroup>
      </Fragment>
   );
};

export default Contacts;