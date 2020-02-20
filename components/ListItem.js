import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ListItem = ({item, deleteItem}) => {
    return (
      <TouchableOpacity style={ css.ListItem }>
        <View style={ css.ListItemView }>
            <Text style={ css.ListItemText }>
                {item.text}
            </Text>
            <Icon name="remove" size={20} color="crimson" onPress={() => deleteItem(item.id)} />
        </View>
      </TouchableOpacity>
    );
};

const css = StyleSheet.create({
    ListItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    ListItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ListItemText: {
        fontSize: 18,
    }
});

export default ListItem;