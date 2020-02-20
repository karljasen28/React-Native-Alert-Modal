import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddITem = ({title, addItem}) => {
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);

    return (
      <View>
          <TextInput placeholder="Add Item" style={ css.input } onChangeText={onChange} />
          <TouchableOpacity style={ css.btn } onPress={() => addItem(text)} >
              <Text style={ css.btnText }>
                    <Icon name="plus" size={20} /> Add Item
              </Text>
          </TouchableOpacity>
      </View>
    );
};

const css = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    }
});


export default AddITem;