import { ContactItemStyle } from './ContactItem.styled';
// import PropTypes from 'prop-types';
import { ButtonStyle } from 'components/App.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/selectors';

export const ContactItem = ({ name, number, id  }) => {
    const contacts = useSelector(selectContacts);
    const [selectedContact, setSelectedContact] = useState(null);
    const [isValidImageUrl, setIsValidImageUrl] = useState(true);

    const dispatch = useDispatch();

    const onDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };
    return (
    <ContactItemStyle key={id}>
        <p>{name}: {number}</p>
        <ButtonStyle type="button" onClick={() => onDeleteContact(id)}>
            Delete
        </ButtonStyle>
    </ContactItemStyle>);
}

// return (
//     <ContactItemStyle key={id}>
//         <p>{name}: {number}</p>
//         <ButtonStyle type="button" onClick={() => onDeleteContact(id)}>
//             Delete
//         </ButtonStyle>
//     </ContactItemStyle>);
