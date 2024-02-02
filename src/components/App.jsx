import React, { Component } from 'react';

import Section from './Section/Section.jsx';
import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import Filter from './Filter/Filter.jsx';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleRepeat = contact => {
    let arr = [];
    arr = this.state.contacts.map(cur => cur.name);
    if (arr.includes(contact.name)) {
      return alert(`${contact.name} is arleady in contacts`);
    }
    return this.setState(prevState => ({
      contacts: [{ ...contact }, ...prevState.contacts],
    }));
  };

  handleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const filtredContact = this.filteredContacts();
    return (
      <Section title="Phonebook">
        <ContactForm onSubmit={this.handleRepeat} />

        <ContactList contacts={filtredContact} handleDelete={this.handleDelete}>
          <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        </ContactList>
      </Section>
    );
  }
}
