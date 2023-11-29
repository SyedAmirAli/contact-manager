import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from "./actionTypes";
import { setContactsInLocalStorage } from "./initialContact";

// get the next auto id
function nextId(state) {
  const maxId = state.reduce((acc, curr) => Math.max(curr.id, acc), -1);
  return maxId && maxId >= 0 ? maxId + 1 : 1;
}

const contactReducer = (contacts = [], action = {}) => {
  switch (action.type) {
    // add contact
    case ADD_CONTACT:
      const addCloneContacts = [
        ...contacts,
        {
          id: nextId(contacts),
          ...action.payload,
        },
      ];

      setContactsInLocalStorage(addCloneContacts);
      return addCloneContacts;

    // edit contact
    case EDIT_CONTACT:
      const editCloneContacts = contacts.map((contact) => {
        let c = {};
        if (contact.id === action.payload.id) {
          c = { ...contact, editable: true };
        } else {
          c = { ...contact, editable: false };
        }

        return c;
      });

      setContactsInLocalStorage(editCloneContacts);
      return editCloneContacts;

    // update contact
    case UPDATE_CONTACT:
      const updatedCloneContacts = contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return {
            id: contact.id,
            editable: false,
            name: action.payload.name,
            email: action.payload.email,
          };
        } else {
          return { ...contact, editable: false };
        }
      });

      setContactsInLocalStorage(updatedCloneContacts);
      return updatedCloneContacts;

    // delete contact
    case DELETE_CONTACT:
      const deleteCloneContacts = contacts.filter(
        (contact) => contact.id !== action.payload
      );

      setContactsInLocalStorage(deleteCloneContacts);
      return deleteCloneContacts;

    default:
      return contacts;
  }
};

export default contactReducer;
