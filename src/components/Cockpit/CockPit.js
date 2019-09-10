import React, { useEffect, useRef } from 'react';

import classes from './CockPit.css';

const cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // you make http request here...
    /*const timer = setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);*/
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, [props.persons]);

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

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red','bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>

      <button className={btnClass} onClick={props.clicked} ref={toggleBtnRef}>
        Toggle Person
      </button>
    </div>
  );
};
//React.memo: this is memoization to store a snapshot of this component
//and if it input changes it will render it.
export default React.memo(cockpit);
