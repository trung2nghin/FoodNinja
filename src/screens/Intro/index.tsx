import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Assets from '../../config/Assets';
import LinearGradient from 'react-native-linear-gradient';
import {StackNavigationProp} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../App';

type SignUpScreenNavigationProp = StackNavigationProp<
  TRootStackParamList,
  'Intro'
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};
const Intro = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={Assets.intro} />
      <Text style={styles.txtTitle}>Find your Comfort{'\n'}Food here</Text>
      <View>
        <Text style={styles.txtTitleSection}>
          Here You Can find a chef or dish for every{'\n'}taste and color. Enjoy
        </Text>
      </View>
      <View>
        <LinearGradient
          colors={['#53E88B', '#15BE77']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.linearButton}>
          <TouchableOpacity onPress={() => navigation.navigate('IntroNext')}>
            <Text style={styles.txtNext}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  txtTitle: {
    color: '#09051C',
    fontSize: 22,
    lineHeight: 29,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txtTitleSection: {
    color: '#000000',
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 42,
  },

  linearButton: {
    // marginHorizontal: 25,
    height: 57,
    width: 157,
    borderRadius: 15,
    backgroundColor: 'red',
    marginBottom: 16,
    justifyContent: 'center',
  },
  txtNext: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
  },
});
