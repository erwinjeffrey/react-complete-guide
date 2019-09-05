import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  /* Theare are update lifecycle, as we have creation lifecycle we do
  also have update lifecycle*/

  /*static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }*/

  // this an old licycle hook, it's no longer available in this version
  /*componentWillReceiveProps(props) {
    console.log('[Persons.js] componentWillReceiveProps');
  }*/

  // this lifecycle hook execute just before a component is updated
  // and decided if you want te component to be updated or not
  //here you can catch just before what will be the next props and the nextState
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  //execute right after render method
  //here you can compare your previous state with the next one
  //a typical example would be to save the last position of the scroll bar and
  //put it back in the same position after the component is updated
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // execute after the getSnapshotBeforeUpdate method
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpate');
    console.log(snapshot);
  }
  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
