import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { toast } from 'react-toastify';
import { toastifyOptions } from 'utils/toastifyOptions';
import { ContactItem } from "components/ContactItem/ContactItem"
import { ContactListStyle } from "./ContactsList.styled"
import { Info } from './ContactsList.styled';

// import { deleteContact } from 'redux/contacts/contacts-slice';
// import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
  selectFilter,
} from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const result = useSelector(selectFilteredContacts);

  const getFilteredContacts = data => {
    if (filter.toLowerCase() && !data.length) {
      toast.warn(`No contacts matching your request`, toastifyOptions);
    }
    return data;
  };

  const filteredContacts = getFilteredContacts(result);

  return (
    <>
      {isLoading && contacts?.length === 0}
      {error && !isLoading && <div>Ooops, error...</div>}
      {!filteredContacts?.length && !error && !isLoading && (
        <Info>Contacts not found</Info>
      )}
      {!error && !isLoading && filteredContacts?.length > 0 && (
        <ContactListStyle>
          {filteredContacts?.map(({ name, number, id }) => {
            return (
              <Fragment key={id}>
                <ContactItem
                  name={name}
                  phone={number}
                  id={id}
                />
              </Fragment>
            );
          })}
        </ContactListStyle>
      )}
    </>
  );
};