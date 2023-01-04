import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Header(props: { text: string}) {
  return (
    <View style={ style.container }>
        <Text style={ style.textStyle }>{props.text}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '6%',
    borderColor: '#2EC331',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Abril Fatface',
    color:'#2EC331',
  }
})

export default Header;
