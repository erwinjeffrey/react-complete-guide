import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';
import withClass from './../../../hoc/withClass';

class Person extends Component {
  /*
  In order to run with props correctly, in case you're building a lib
  and you want people to know what types of props to send to:
  npm install --save prop-types
  */

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}
        <p key="i1" onClick={this.props.click}>
          I' am a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);
