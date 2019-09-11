import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  /*Extending PureComponent instead of Component, you don't have to implement
  the  the shouldComponentUpdate , it will do it automatically will all
  the props check, the check any any change, I mean it will execute exact code below */

  /*static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }*/

  /*componentWillReceiveProps(props) {
    console.log('[Persons.js] componentWillReceiveProps');
  }*/

  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons
      || nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked) {
      return true;
    } else {
      return false;
    }
  }*/

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

  // before destroying the component, we can use it to do some cleanup work
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
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
          isAuth={this.props.isAuthenticated}
        />
      );
    });
  }
}

export default Persons;
