import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../config/Assets';
import {StackNavigationProp} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../App';

type SignUpScreenNavigationProp = StackNavigationProp<
  TRootStackParamList,
  'SignupProcess'
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};
const SignupProcess = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source={Assets.back} />
        <Text style={styles.txtBio}>Fill in your bio to get {'\n'}started</Text>
        <Text style={styles.txtEx}>
          This data will be displayed in your account {'\n'}profile for
          secrurity
        </Text>
        <TextInput
          style={styles.txtInputBar}
          placeholder="First name"></TextInput>
        <TextInput
          style={styles.txtInputBar}
          placeholder="Last name"></TextInput>
        <TextInput
          style={styles.txtInputBar}
          placeholder="Mobile number"></TextInput>
      </View>
      <View>
        <View style={styles.btn}>
          <LinearGradient
            colors={['#53E88B', '#15BE77']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.linearButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PaymentMethod')}>
              <Text style={styles.txtAcc}>Next</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default SignupProcess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  info: {
    paddingTop: 38,
    paddingLeft: 14,
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
    marginBottom: 20,
  },
  txtInputBar: {
    backgroundColor: '#FFF',
    width: 347,
    height: 61,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 15,
    paddingLeft: 28,
    marginBottom: 20,
    shadowColor: 'rgb(90, 108, 234)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 3,
  },
  btn: {
    alignItems: 'center',
  },
  linearButton: {
    height: 57,
    width: 157,
    borderRadius: 15,
    marginBottom: 16,
    marginTop: 150,
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
