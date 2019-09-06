import React, { useEffect } from 'react';

import classes from './CockPit.css';

const cockpit = props => {
  // it execute for every render cycle, it is a react hook for funcional componet
  // combination of componentDidMount and componetDidUpdate
  //it's for the important lifecycle hook(those ones we use in the base class component)
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // you make http request here...
    const timer = setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000); // if we pass it [] an empty array, use effect will run once, for the first time and then never, this is equl to componentDidMount
    // will run before the component it destroy, it equivalents to ComponentWillUnmount in base class component
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, [props.persons]); //by using [props.persons],we're telling useeffect to run everytime persons change

  // this run  will in every update cycle with no arguments
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red','bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>

      <button className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  );
};

export default cockpit;
