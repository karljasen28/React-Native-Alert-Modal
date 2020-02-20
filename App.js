import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
    const [items, setItems] = useState([
      { id: uuid(), text: 'Milk' },
      { id: uuid(), text: 'Eggs' },
      { id: uuid(), text: 'Brean' },
      { id: uuid(), text: 'Juice' },
    ]);

    const addItem = (text) => {
      if(!text) {
        Alert.alert(
          'Error',
          'Please enter an item',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
        );
      } else {
        setItems(prevItems => {
          return [{id: uuid(), text}, ...prevItems];
        });
      }
    };

    const deleteItem = (id) => {
      setItems(prevItems => {
        return prevItems.filter(item => item.id != id);
      });
    }

    return (
      <View style={ css.container }>
        <Header />
        
        <FlatList 
        data={items} 
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        />

        <AddItem addItem={addItem} />
        <Footer />
      </View>
    );
};


const css = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;