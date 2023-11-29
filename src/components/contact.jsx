import { images } from "../constant";
import { useContactsDispatch } from "../context/contactContext";
import { deleteContact, editContact } from "../context/actions";

const Contact = ({ contact }) => {
  const dispatch = useContactsDispatch();
  const { id, name, email } = contact;

  return (
    <>
      <h3 className="flex-1">Name : {name}</h3>
      <h3 className="flex-1">Email : {email}</h3>
      <div className="flex items-center justify-center gap-5 ">
        <button onClick={() => dispatch(editContact(contact))}>
          <img
            className="bg-yellow-500 p-1.5 duration-500 hover:bg-yellow-600 rounded-full shadow-[0px_2px_4px_0px_rgba(255,255,255,0.12)]"
            src={images.Edit}
            alt="edit"
          />
        </button>
        <button onClick={() => dispatch(deleteContact(id))}>
          <img
            className="bg-red-500 p-1.5 duration-500 hover:bg-red-600 rounded-full shadow-[0px_2px_4px_0px_rgba(255,255,255,0.12)]"
            src={images.Delete}
            alt="delete"
          />
        </button>
      </div>
    </>
  );
};

export default Contact;
