import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  Pressable,
} from 'react-native';
import Assets from '../../config/Assets';
import {StackNavigationProp} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../App';

type OnboardingScreenNavigationProp = StackNavigationProp<
  TRootStackParamList,
  'Onboarding'
>;

type Props = {
  navigation: OnboardingScreenNavigationProp;
};
const widthScreen = Dimensions.get('window').width;
const Onboarding = ({navigation}: Props) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Intro')}>
      <ImageBackground source={Assets.Pattern} style={styles.background}>
        <View style={{alignItems: 'center'}}>
          <Image source={Assets.Logo} />
          <Text style={styles.textUp}>FoodNinja</Text>
          <Text style={styles.textDown}>Deliever Favorite Food</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    width: widthScreen,
    height: 370,
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
});
