import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const css = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue',
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
    }
});

const Header = () => {
    return (
      <View style={ css.header }>
        <Text style={ css.text }>Shopping List</Text>
      </View>
    );
};

export default Header;