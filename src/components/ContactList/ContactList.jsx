import React from "react";

const ContactList = (props) => {
  return (
    <div>
      {props.contacts.map((item, index) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.surname}</li>
          <li>{item.phone}</li>
          <li>
            <button onClick={() => props.handleDelete(item.id)}>
              Delete Contact
            </button>
            <button onClick={() => props.handleEdit(index)}>
              Edit Contact
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ContactList;
