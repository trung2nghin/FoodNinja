import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../config/Assets';
import {StackNavigationProp} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../App';

type VerificationScreenNavigationProp = StackNavigationProp<
  TRootStackParamList,
  'Verification'
>;

type Props = {
  navigation: VerificationScreenNavigationProp;
};

const Verification = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source={Assets.back} />
        <Text style={styles.txtBio}>Enter 4-digit{'\n'}Verification code</Text>
        <Text style={styles.txtEx}>
          Code send to + 6282045****. This code will{'\n'}expired in 01:30
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={styles.txtInputBar}>
          <Text style={styles.txt}>1</Text>
          <Text style={styles.txt}>9</Text>
          <Text style={styles.txt}>2</Text>
          <Text style={styles.txt}>3</Text>
        </View>
      </View>

      <View>
        <View style={styles.btn}>
          <LinearGradient
            colors={['#53E88B', '#15BE77']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.linearButton}>
            <TouchableOpacity onPress={() => navigation.navigate('ViaMethod')}>
              <Text style={styles.txtAcc}>Next</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  info: {
    paddingTop: 38,
    paddingLeft: 25,
  },
  txtBio: {
    fontSize: 25,
    lineHeight: 33,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#09051C',
    marginTop: 20,
    paddingLeft: 11,
  },
  txtEx: {
    fontSize: 12,
    lineHeight: 22,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#000000',
    paddingLeft: 11,
    marginTop: 19,
    marginBottom: 38,
  },
  txtInputBar: {
    backgroundColor: '#FFF',
    width: 347,
    height: 103,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 22,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: 'rgb(90, 108, 234)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 3,
  },
  txt: {
    fontSize: 35,
    lineHeight: 50,
    color: '#09051C',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  btn: {
    alignItems: 'center',
  },
  linearButton: {
    height: 57,
    width: 157,
    borderRadius: 15,
    marginBottom: 16,
    marginTop: 270,
    justifyContent: 'center',
  },

  txtAcc: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
  },
});
