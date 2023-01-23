import ContactList from './phonebookSection/contactList/ContactList';
import { ContactForm } from './contactForm/ContactForm';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { add, deleteItem } from 'redux/contacts/slice';
import { getQuery } from 'redux/contacts/slice';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.query);

  const addContact = (name, number) => {
    const isInContact = contacts.find(
      contact => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(add(newContact));
  };

  const getFilterQuery = event => {
    dispatch(getQuery(event.target.value));
  };

  const getFilteredList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const deleteContact = itemId => {
    dispatch(deleteItem(itemId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter handleChange={getFilterQuery} />
          <ContactList
            contacts={getFilteredList()}
            onDeleteBtnClick={deleteContact}
          />
        </>
      ) : (
        <p>There are no contacts in your contact list. Try to make one.</p>
      )}
    </div>
  );
}
