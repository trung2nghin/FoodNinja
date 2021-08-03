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

const ViaMethod = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source={Assets.back} />
        <Text style={styles.txtBio}>Forgot password?</Text>
        <Text style={styles.txtEx}>
          Select which contact details should we{'\n'}use to reset your password
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <Pressable style={styles.txtInputBar}>
          <Image source={Assets.Message} style={styles.img} />
          <View>
            <Text style={styles.txt}>Via sms:</Text>
            <Text style={styles.txtPrv}>**** **** 4235</Text>
          </View>
        </Pressable>
        <Pressable style={styles.txtInputBar}>
          <Image source={Assets.Email} style={styles.img} />
          <View>
            <Text style={styles.txt}>Via email:</Text>
            <Text style={styles.txtPrv}>**** @gmail.com</Text>
          </View>
        </Pressable>
      </View>

      <View>
        <View style={styles.btn}>
          <LinearGradient
            colors={['#53E88B', '#15BE77']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.linearButton}>
            <TouchableOpacity style={styles.btnAcc} onPress={() => navigation.navigate('Password')}>
              <Text style={styles.txtAcc}>Next</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default ViaMethod;

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
    marginBottom: 20,
  },
  txtInputBar: {
    backgroundColor: '#FFF',
    width: 347,
    height: 105,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'rgb(90, 108, 234)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 3,
  },
  txt: {marginBottom: 10, color: '#828282', fontSize: 16, lineHeight: 24},
  txtPrv: {marginBottom: 10, color: '#09051C', fontSize: 16, lineHeight: 24},
  img: {marginLeft: 25, marginRight: 20},
  btn: {
    alignItems: 'center',
  },
  linearButton: {
    height: 57,
    width: 157,
    borderRadius: 15,
    marginBottom: 16,
    marginTop: 190,
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
