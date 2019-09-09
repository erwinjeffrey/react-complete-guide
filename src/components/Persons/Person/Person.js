import React, { Component, Fragment } from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      // if you don't want to use an axuliary build component you could just
      //use the one that react provide, it work the same as our aux component
      <Fragment>
        <p key="i1" onClick={this.props.click}>
          I' am a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

export default Person;
