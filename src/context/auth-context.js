import React from 'react';

const authContext = React.createContext({
  authenticated: false,
  loging: () => {}
});

export default authContext;
