import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Assets from '../../config/Assets';
import LinearGradient from 'react-native-linear-gradient';

const IntroNext = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={Assets.Illustration} />
      <Text style={styles.txtTitle}>Food Ninja is Where Your{'\n'}Comfort Food Lives</Text>
      <View>
        <Text style={styles.txtTitleSection}>
          Enjoy a fast and smooth food delivery at{'\n'}your doorstep
        </Text>
      </View>
      <View>
        <LinearGradient
          colors={['#53E88B', '#15BE77']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.linearButton}>
          <TouchableOpacity style={styles.btnNext}>
            <Text style={styles.txtNext}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default IntroNext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  img: {
    marginTop: 29,
    marginBottom: 21,
  },
  txtTitle: {
    color: '#09051C',
    fontSize: 22,
    lineHeight: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Viga-Regular'
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
    color: '#FEFEFF',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
  },
});
