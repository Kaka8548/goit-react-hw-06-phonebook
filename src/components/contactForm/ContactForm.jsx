import { useDispatch, useSelector } from 'react-redux';
import { AddContactBtn, Input, InputTitle, Form } from './ContactForm.styled';
import { useState } from 'react';
import { selectContact } from 'redux/contacts/selector';
import { nanoid } from 'nanoid';
import { add } from 'redux/contacts/slice';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();

  const createContact = event => {
    event.preventDefault();

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
    reset();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={createContact}>
      <InputTitle>Name</InputTitle>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={name}
      />
      <InputTitle>Number</InputTitle>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={number}
      />
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
}
