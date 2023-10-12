import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/selectors';
import { Input, LabelDescr } from './Filter.styled';
import { LabelWrapper } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <LabelDescr>
      <LabelWrapper>
        Find contacts by name
      </LabelWrapper>
      <Input type="text" value={filter} onChange={changeFilter} placeholder="search" />
    </LabelDescr>
  );
}

export default Filter;