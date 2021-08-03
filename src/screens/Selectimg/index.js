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

const Selectimg = () => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source={Assets.back} />
        <Text style={styles.txtBio}>Upload Your Photo {'\n'}Profile</Text>
        <Text style={styles.txtEx}>
          This data will be displayed in your account {'\n'}profile for
          secrurity
        </Text>
        <View>
          <TouchableOpacity style={styles.payBtn}>
              <Image source={Assets.gallery} />
              <Text style={styles.txtSection}>From Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.payBtn}>
              <Image source={Assets.camera} />
              <Text style={styles.txtSection}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.btn}>
          <LinearGradient
            colors={['#53E88B', '#15BE77']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.linearButton}>
            <TouchableOpacity style={styles.btnAcc}>
              <Text style={styles.txtAcc}>Next</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default Selectimg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  info: {
    paddingTop: 38,
    paddingLeft: 20,
  },
  txtBio: {
    fontSize: 25,
    lineHeight: 33,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#09051C',
    marginTop: 20,
    paddingLeft: 5,
  },
  txtEx: {
    fontSize: 12,
    lineHeight: 22,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#000000',
    paddingLeft: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  txtSection: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 25,
    color: '#000000',
    paddingTop: 4,
  },
  payBtn: {
    backgroundColor: '#FFF',
    width: 350,
    height: 129,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 22,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // boxshadow
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
    marginTop: 110,
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
