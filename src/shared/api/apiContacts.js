import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6527f7da931d71583df1ab70.mockapi.io/contacts',
});

export const getAllContacts = () => contactsInstance.get('/');

export const deleteContact = id => {
  return contactsInstance.delete(`/${id}`);
};

export const addContact = data => {
  return contactsInstance.post('/', data);
};

export const editContact = data => {
  return contactsInstance.put(`/${data.id}`, {
    name: data.name,
    number: data.number,
  });
};