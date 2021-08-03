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

const Chat = () => {
  return (
    <View style={styles.container}>
      <Image source={Assets.back} style={styles.icon} />
      <Text style={styles.txtBio}>Chat</Text>
      <View style={styles.info}>
        <TouchableOpacity style={styles.chatBtn}>
          <Image source={Assets.profilephoto} style={styles.img} />
          <View>
            <View style={styles.inside}>
              <Text style={styles.name}>Anamwp</Text>
              <Text style={styles.time}>20:00</Text>
            </View>
            <Text style={styles.mess}>Your Order Just Arrived!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatBtn}>
          <Image source={Assets.profilephoto1} style={styles.img} />
          <View>
            <View style={styles.inside}>
              <Text style={styles.name}>Guy Hawkins</Text>
              <Text style={styles.time}>20:00</Text>
            </View>
            <Text style={styles.mess}>Your Order Just Arrived!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatBtn}>
          <Image source={Assets.profilephoto2} style={styles.img} />
          <View>
            <View style={styles.inside}>
              <Text style={styles.name}>Leslie Alexander</Text>
              <Text style={styles.time}>20:00</Text>
            </View>
            <Text style={styles.mess}>Your Order Just Arrived!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  icon: {marginTop: 38, marginLeft: 25},
  info: {
    alignItems: 'center',
  },
  txtBio: {
    fontSize: 25,
    lineHeight: 33,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#09051C',
    marginTop: 20,
    paddingLeft: 25,
    paddingBottom: 12,
  },
  chatBtn: {
    backgroundColor: '#FFF',
    width: 335,
    height: 81,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 22,
    marginBottom: 20,
    flexDirection: 'row',
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
  img: {marginLeft: 8, marginRight: 18},
  name: {fontSize: 15, lineHeight: 20, color: '#09051C', fontWeight: '700'},
  inside: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 230,
  },
  time: {
    justifyContent: 'flex-end',
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.5,
    color: '#3B3B3B',
    opacity: 0.3,
  },
  mess: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.5,
    color: '#3B3B3B',
    opacity: 0.3,
  },
});
