import { useDispatch, useSelector } from 'react-redux';
import { ItemBtn, List, ListItem } from './ContactList.styled';
import { deleteItem } from 'redux/contacts/slice';
import { selectContact } from 'redux/contacts/selector';
import { selectFilter } from 'redux/filter/selector';

export default function ContactList() {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <>
      <List>
        {getFilteredList().map(el => (
          <ListItem key={el.id}>
            <p>
              {el.name}: {el.number}
            </p>
            <ItemBtn type="button" onClick={() => dispatch(deleteItem(el.id))}>
              Delete
            </ItemBtn>
          </ListItem>
        ))}
      </List>
    </>
  );
}
