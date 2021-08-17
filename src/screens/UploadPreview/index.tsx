import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../config/Assets';
import {StackNavigationProp} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../App';

type SignUpScreenNavigationProp = StackNavigationProp<
  TRootStackParamList,
  'UploadPreview'
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const UploadPreview = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Assets.back} style={{marginLeft: 25}} />
        </TouchableOpacity>
        <Text style={styles.txtBio}>Upload Your Photo {'\n'}Profile</Text>
        <Text style={styles.txtEx}>
          This data will be displayed in your account {'\n'}profile for
          secrurity
        </Text>
        <View style={{alignItems: 'center'}}>
          <Image source={Assets.Photo} />
          <TouchableOpacity>
            {/* <Image source={Assets.close} style={{backgroundColor:'red'}} /> */}
          </TouchableOpacity>
          <View style={styles.btn}>
            <LinearGradient
              colors={['#53E88B', '#15BE77']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.linearButton}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SetLocation')}>
                <Text style={styles.txtAcc}>Next</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UploadPreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  info: {
    paddingTop: 38,
  },
  txtBio: {
    fontSize: 25,
    lineHeight: 33,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#09051C',
    marginTop: 20,
    paddingLeft: 25,
  },
  txtEx: {
    fontSize: 12,
    lineHeight: 22,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#000000',
    paddingLeft: 25,
    marginTop: 20,
    marginBottom: 45,
  },
  img: {
    backgroundColor: '#FFF',
    width: 245,
    height: 238,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 22,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    alignItems: 'center',
  },
  linearButton: {
    height: 57,
    width: 157,
    borderRadius: 15,
    marginBottom: 16,
    marginTop: 120,
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
