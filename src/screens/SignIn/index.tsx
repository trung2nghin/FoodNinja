import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../config/Assets';
import {StackNavigationProp} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../App';

type SignUpScreenNavigationProp = StackNavigationProp<
  TRootStackParamList,
  'SignIn'
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};
const SignIn = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={Assets.Logo} />
        <Text style={styles.textUp}>FoodNinja</Text>
        <Text style={styles.textDown}>Deliever Favorite Food</Text>
      </View>
      <View style={styles.login}>
        <Text style={styles.txtLogin}>Sign Up For Free</Text>
        <TextInput
          style={styles.txtInputBar}
          placeholder="User Name"></TextInput>
        <TextInput style={styles.txtInputBar} placeholder="Email"></TextInput>
        <TextInput
          style={styles.txtInputBar}
          placeholder="Password"></TextInput>
      </View>
      <View style={{marginLeft: 35, marginTop: 8}}>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Assets.check} />
          <Text style={styles.txtQues}>Keep Me Signed In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 18}}>
          <Image source={Assets.check} />
          <Text style={styles.txtQues}>Email Me About Special Pricing</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.btn}>
          <LinearGradient
            colors={['#53E88B', '#15BE77']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.linearButton}>
            <TouchableOpacity onPress={() => navigation.navigate('SignupProcess')}>
              <Text style={styles.txtAcc}>Create Account</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <TouchableOpacity style={{marginTop: 6}} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.txtForgot}>already have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  background: {
    backgroundColor: 'white',
    alignItems: 'center',
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
    letterSpacing: 1,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  login: {
    alignItems: 'center',
    paddingTop: 50,
  },
  txtLogin: {
    fontSize: 20,
    lineHeight: 26,
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 35,
  },
  txtInputBar: {
    backgroundColor: '#FFF',
    width: 325,
    height: 57,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 15,
    paddingLeft: 28,
    marginBottom: 12,
  },
  txtQues: {
    color: '#000000',
    fontWeight: '400',
    lineHeight: 20,
    fontSize: 12,
    fontStyle: 'normal',
    marginLeft: 35,
  },
  txtForgot: {
    color: '#53E88B',
    fontWeight: '400',
    lineHeight: 20,
    fontSize: 12,
    fontStyle: 'normal',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  btn: {
    alignItems: 'center',
  },
  linearButton: {
    height: 57,
    width: 175,
    borderRadius: 15,
    marginBottom: 12,
    marginTop: 20,
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
