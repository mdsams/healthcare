import React, { type PropsWithChildren } from 'react';
import { Text, useColorScheme } from 'react-native';
import Permission from './src/permission/permission';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <Text>sams</Text>
      <Permission />
    </>
  );
};

export default App;
