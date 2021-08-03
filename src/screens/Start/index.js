import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Assets from '../../config/Assets';

const Start = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={Assets.Pattern}/>
        <Image source={Assets.Logo} />
        <Text style={styles.textUp}>FoodNinja</Text>
        <Text style={styles.textDown}>Deliever Favorite Food</Text>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 200
  },
  textUp: {
    color: '#53E88B',
    fontSize: 40,
    lineHeight: 54,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  textDown: {
    color: '#09051C',
    fontWeight: '600',
    letterSpacing: 1,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: 'bold'
  },
});
