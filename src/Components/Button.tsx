import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

var buttonWidth, buttonHeight, buttonFontSize, buttonMerginTop, buttonMerginLeft;

function Button(props: {text : string, width: number, height: number, fontSize: number, marginT: number, marginL: number}) {
  buttonWidth = props.width;
  buttonHeight = props.height;
  buttonFontSize = props.fontSize;
  buttonMerginTop = props.marginT;
  buttonMerginLeft = props.marginL;

  const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: buttonMerginTop,
        marginLeft: buttonMerginLeft,
        justifyContent: 'center',
        alignItems: 'center',
        width: buttonWidth,
        height: buttonHeight,
        backgroundColor: '#2EC331',
        borderRadius: 10,
    },

    buttonTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: buttonFontSize,
        fontFamily: 'Pass through',
    }
  })
  
  return (
      <View style={ styles.buttonStyle }>
        <Text style={ styles.buttonTextStyle }>{props.text}</Text>
    </View>
  )
}

export default Button;