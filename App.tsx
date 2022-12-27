import React from 'react';
import { StatusBar, useColorScheme, View, Text, ActivityIndicator } from 'react-native';
import { Colors } from './src/Components/Theme';
import { AuthContext } from './src/Constants/Context';
import useCachedResources from './src/Hooks/CachedResources';
import Navigation from './src/Navigation/Index';
// import Permission from './src/permission/permission';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const { State, Dispatchers } = useCachedResources();

  if (State.isLoadingComplete) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#35B2E6' />
        <Text>Loading.....</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar
        barStyle='light-content'
        hidden={false}
        backgroundColor={Colors.LIGHT_GREY}
        translucent={false}
      />
      <AuthContext.Provider
        value={{
          State,
          ...Dispatchers,
        }}>
        <Navigation />
      </AuthContext.Provider>
    </>
  );
};

export default App;
