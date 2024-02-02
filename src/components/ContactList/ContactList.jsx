import PropTypes from 'prop-types';
import {
  ContactsWrapper,
  ContactsTitle,
  ContactsList,
  ContactEement,
  DeleteBtn,
} from './ContactList.styled';
const ContactList = ({ contacts, handleDelete, children }) => {
  return (
    <ContactsWrapper>
      <ContactsTitle>Contacts</ContactsTitle>
      {children}
      <ContactsList>
        {contacts.map(contact => (
          <ContactEement key={contact.id} id={contact.id}>
            {contact.name}: {contact.number}{' '}
            <DeleteBtn id={contact.id} onClick={() => handleDelete(contact.id)}>
              Delete
            </DeleteBtn>
          </ContactEement>
        ))}
      </ContactsList>
    </ContactsWrapper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default ContactList;
