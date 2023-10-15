import { LabelStyle} from 'components/App.styled';
import { FilterContainer } from './Filter.styled';
import { useDispatch, useSelector } from "react-redux";
import { filterSet, getFilter } from "redux/filterSlice";
import { Input } from './Filter.styled'

export const Filter = () => {
    const dispatch = useDispatch();
    const filterPhoneBook = useSelector(getFilter);

    const onChangeFilter = (event) => {
        const { value } = event.currentTarget;
        dispatch(filterSet(value))
    };
    
    return (
      <FilterContainer>
        <LabelStyle>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                placeholder = "search"
                value={filterPhoneBook}
                title="Enter the name"
                required
                onChange={onChangeFilter}
            />
        </LabelStyle>
        </FilterContainer>
    );
};