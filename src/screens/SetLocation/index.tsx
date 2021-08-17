import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../config/Assets';
import {StackNavigationProp} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../App';

type SetLocationScreenNavigationProp = StackNavigationProp<
  TRootStackParamList,
  'SetLocation'
>;

type Props = {
  navigation: SetLocationScreenNavigationProp;
};
const SetLocation = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Assets.back} />
        </TouchableOpacity>
        <Text style={styles.txtBio}>Set Your Location</Text>
        <Text style={styles.txtEx}>
          This data will be displayed in your account {'\n'}profile for
          secrurity
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.payBtn}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={Assets.pin}
              style={{marginRight: 14, marginLeft: 11}}
            />
            <Text style={styles.txtSection}>Your Location</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.setLocation}>
              <Text style={styles.txtSection}>Set Location</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.btn}>
          <LinearGradient
            colors={['#53E88B', '#15BE77']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.linearButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignupSuccess')}>
              <Text style={styles.txtAcc}>Next</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default SetLocation;

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
    lineHeight: 17,
    letterSpacing: 0.5,
    color: '#000000',
  },
  payBtn: {
    backgroundColor: '#FFF',
    width: 342,
    height: 147,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 22,
    marginBottom: 20,
    justifyContent: 'space-around',
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
  setLocation: {
    width: 322,
    height: 57,
    borderRadius: 15,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#5A6CEA',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 3,
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
