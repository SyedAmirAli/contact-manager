// get all the contacts from local storage
export const initialContact = () =>
  JSON.parse(
    window.localStorage.getItem("contacts") ||
      JSON.stringify([
        { id: 1, name: "Ahnaf", email: "ahnaf@gmail.com", editable: false },
      ])
  );

// set all data into localStorage
export const setContactsInLocalStorage = (contacts) =>
  window.localStorage.setItem("contacts", JSON.stringify(contacts));
