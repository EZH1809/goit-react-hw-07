import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactItem}>
      <div>
        <span className={css.contactName}>
          <FaUser />
          {name}
        </span>
        <span className={css.contactNumber}>
          <FaPhone />
          {number}
        </span>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
