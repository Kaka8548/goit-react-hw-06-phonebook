import ContactList from './phonebookSection/contactList/ContactList';
import { ContactForm } from './contactForm/ContactForm';
import Filter from './filter/Filter';
import { useSelector } from 'react-redux';
import { selectContact } from 'redux/contacts/selector';

export function App() {
  const contacts = useSelector(selectContact);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>There are no contacts in your contact list. Try to make one.</p>
      )}
    </div>
  );
}
