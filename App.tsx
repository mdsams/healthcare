import React, { type PropsWithChildren } from 'react';
import { Text, useColorScheme } from 'react-native';
import Permission from './src/permission/permission';
import LogIn from './src/Screen/AuthPage/LogIn';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <LogIn />
    </>
  );
};

export default App;
