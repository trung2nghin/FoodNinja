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
  'SignUp'
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const SignUp = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={Assets.Logo} />
        <Text style={styles.textUp}>FoodNinja</Text>
        <Text style={styles.textDown}>Deliever Favorite Food</Text>
      </View>
      <View style={styles.login}>
        <Text style={styles.txtLogin}>Login To Your Account</Text>
        <TextInput style={styles.txtInputBar} placeholder="Email"></TextInput>
        <TextInput
          style={styles.txtInputBar}
          placeholder="Password"></TextInput>
      </View>
      <Text style={styles.txtContinue}>Or continue with</Text>
      <View style={styles.content}>
        <TouchableOpacity style={styles.contentfb}>
          <Image source={Assets.facebook} />
          <Text style={styles.txtcontentfb}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentgg}>
          <Image source={Assets.google} />
          <Text style={styles.txtcontentgg}>Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('Verification')}>
        <Text style={styles.txtForgot}>Forgot Your Password</Text>
      </TouchableOpacity>
      <View>
        <View>
          <LinearGradient
            colors={['#53E88B', '#15BE77']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.linearButton}>
            <TouchableOpacity onPress={() => navigation.navigate('MainTab')}>
              <Text style={styles.txtbtnLogin}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
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
    paddingTop: 60,
  },
  txtLogin: {
    fontSize: 20,
    lineHeight: 26,
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
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
  txtContinue: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    // marginTop: 8,
    // marginBottom: 20,
  },
  content: {
    marginTop: 20,
    flexDirection: 'row',
  },
  contentfb: {
    width: 152,
    height: 57,
    marginRight: 21,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentgg: {
    width: 152,
    height: 57,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  txtcontentfb: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.5,
    color: '#09051C',
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginLeft: 13,
  },
  txtcontentgg: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.5,
    color: '#09051C',
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginLeft: 13,
  },
  txtForgot: {
    color: '#53E88B',
    fontWeight: '400',
    lineHeight: 20,
    fontSize: 12,
    fontStyle: 'normal',
    textDecorationLine: 'underline',
  },
  linearButton: {
    height: 57,
    width: 141,
    borderRadius: 15,
    marginBottom: 16,
    marginTop: 36,
    justifyContent: 'center',
  },
  txtbtnLogin: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
  },
});
