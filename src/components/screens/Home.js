import React from 'react';
import * as C from '../../constants';
import { useSelector, useDispatch } from 'react-redux';

import { View, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  actionsContainer: { flex: 0.1 },
  selectionContainer: {}
});

export default function HomeScreen(props) {
  const selectedCategory = useSelector(store => store.selectedCategory);
  const categories = useSelector(store => store.availableSearchCategories);
  const dispatch = useDispatch();

  const setSelectedCategory = value => {
    dispatch({ type: C.SET_SELECTED_CATEGORY, value });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.25 }}></View>
      <View style={{ flex: 0.1 }}>
        <Picker
          enabled={true}
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCategory(itemValue)
          }
        >
          {categories.map((c, i) => (
            <Picker.Item key={i} label={c.label} value={c.value} />
          ))}
        </Picker>
      </View>
      <View style={{ flex: 0.25 }}></View>
      <View style={styles.actionsContainer}>
        <Button
          title="Play"
          onPress={() =>
            props.navigation.navigate(C.SCREENS.PLAY, { name: 'hi' })
          }
        />
      </View>
    </View>
  );
}
