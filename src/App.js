import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";
function App() {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  //! Создание функции которая занесет внутрь массива contacts все наши объекты из newContact
  function handleNewContact(newContact) {
    let newContactArray = [...contacts];
    newContactArray.push(newContact);

    setContacts(newContactArray);
  }
  //! Функция для удаления определенного контакта
  function handleDelete(id) {
    let newContactArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactArray);
  }
  //! Функция редактирование контакта
  function handleEdit(index) {
    setIsEdit(true);
    setEditContact(contacts[index]);
  }

  function handleSaveEditedContact(newContact) {
    let newContactArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContacts(newContactArray);
    setIsEdit(false);
  }
  return (
    <div>
      <AddContact handleNewContact={handleNewContact} />

      <ContactList
        contacts={contacts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

      {isEdit ? (
        <EditContact
          editContact={editContact}
          handleSaveEditedContact={handleSaveEditedContact}
        />
      ) : null}
    </div>
  );
}

export default App;
