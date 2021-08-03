import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Assets from '../../config/Assets';
import LinearGradient from 'react-native-linear-gradient';

const SignupSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={Assets.congra} style={{marginTop: 120}} />
      <Text style={styles.textUp}>Congrats!</Text>
      <Text style={styles.textDown}>Your Profile Is Ready To Use</Text>

      <LinearGradient
        colors={['#53E88B', '#15BE77']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.linearButton}>
        <TouchableOpacity
          style={styles.btnSearch}
          onPress={() => navigation.navigate('MainTab')}>
          <Text style={styles.txtBtn}>Try Order</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default SignupSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  textUp: {
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#53E88B',
    marginTop: 35,
  },
  textDown: {
    fontSize: 23,
    lineHeight: 30,
    fontStyle: 'normal',
    fontWeight: '600',
    marginTop: 12,
  },
  linearButton: {
    width: 157,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 220,
  },
  txtBtn: {
    fontSize: 17,
    lineHeight: 21,
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
});
