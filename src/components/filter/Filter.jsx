import { useDispatch, useSelector } from 'react-redux';
import { FilterTitle } from './Filter.styled';
import { getQuery } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selector';

export default function FilterByName() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const getFilterQuery = event => {
    dispatch(getQuery(event.target.value));
  };

  return (
    <>
      <FilterTitle>Filter contacts by name</FilterTitle>
      <input
        onChange={getFilterQuery}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
      />
    </>
  );
}
