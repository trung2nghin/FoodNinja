import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import Assets from '../../config/Assets';

const widthScreen = Dimensions.get('window').width;
const Profile = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Image source={Assets.avatar} style={styles.img} />
          <View style={styles.info}>
            <View style={styles.member}>
              <Text style={{color: '#FEAD1D'}}>Member Gold</Text>
            </View>
            <View style={styles.vouchernoti}>
              <Text style={styles.txtName}>Anam Wusono</Text>
              <TouchableOpacity>
                <Image source={Assets.edit} style={styles.editIcon} />
              </TouchableOpacity>
            </View>

            <Text style={styles.txtEmail}>anamwp66@gmail.com</Text>
          </View>
          <Pressable style={styles.btnvoucher}>
            <Image
              source={Assets.voucher}
              style={{marginLeft: 21, marginRight: 25}}
            />
            <Text style={styles.txtvoucher}>You Have 3 Voucher</Text>
          </Pressable>
          <Text style={styles.title}>Favorite</Text>

          <View style={styles.containermain}>
            <View style={styles.containertree}>
              <Image source={Assets.spacy} style={styles.imgfood} />
            </View>
            <View style={styles.viewfood}>
              <Text style={styles.txtfood}>Spacy fresh crab</Text>
              <Text style={styles.txtactor}>Waroenk kita</Text>
              <Text style={styles.txtCost}>$ 35</Text>
            </View>
            <TouchableOpacity style={styles.btnbuy}>
              <Text style={styles.txtbuy}>Buy Again</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containermain}>
            <View style={styles.containertree}>
              <Image source={Assets.spacy} style={styles.imgfood} />
            </View>
            <View style={styles.viewfood}>
              <Text style={styles.txtfood}>Spacy fresh crab</Text>
              <Text style={styles.txtactor}>Waroenk kita</Text>
              <Text style={styles.txtCost}>$ 35</Text>
            </View>
            <TouchableOpacity style={styles.btnbuy}>
              <Text style={styles.txtbuy}>Buy Again</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containermain}>
            <View style={styles.containertree}>
              <Image source={Assets.spacy} style={styles.imgfood} />
            </View>
            <View style={styles.viewfood}>
              <Text style={styles.txtfood}>Spacy fresh crab</Text>
              <Text style={styles.txtactor}>Waroenk kita</Text>
              <Text style={styles.txtCost}>$ 35</Text>
            </View>
            <TouchableOpacity style={styles.btnbuy}>
              <Text style={styles.txtbuy}>Buy Again</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  img: {width: widthScreen, height: 320},
  info: {paddingLeft: 20, paddingTop: 8},
  member: {
    width: 111,
    height: 34,
    backgroundColor: '#fff4e0',
    borderRadius: 18.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  vouchernoti: {
    flexDirection: 'row',
    width: widthScreen - 60,
    justifyContent: 'space-between',
  },
  txtName: {
    fontSize: 27,
    lineHeight: 35,
    color: '#09051C',
    fontWeight: 'bold',
  },
  editIcon: {marginTop: 8},
  txtEmail: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
    color: '#3B3B3B', 
    opacity: 0.3,
  },
  btnvoucher: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 14,
    alignItems: 'center',
    width: widthScreen - 28,
    height: 64,
    borderRadius: 22,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#F4F4F4',
    shadowColor: 'rgb(90, 108, 234)',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 3,
  },
  txtvoucher: {
    fontSize: 15,
    lineHeight: 20,
    color: '#09051C',
    fontWeight: 'bold',
  },
  title: {
    marginTop: 20,
    marginLeft: 33,
    fontSize: 15,
    lineHeight: 20,
    color: '#09051C',
    fontWeight: 'bold',
  },
  containermain: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 14,
    alignItems: 'center',
    width: widthScreen - 28,
    height: 103,
    borderRadius: 22,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#F4F4F4',
    shadowColor: 'rgb(90, 108, 234)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 3,
  },
  containertree: {
    height: 103,
    justifyContent: 'center',
  },
  imgfood: {
    marginLeft: 21,
    marginRight: 17,
    width: 62,
    height: 62,
  },
  viewfood: {flex: 2, height: 103},
  txtfood: {
    marginTop: 19,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  txtactor: {
    marginTop: 1,
    marginBottom: 2,
    color: '#3B3B3B',
    opacity: 0.3,
    fontSize: 14,
    letterSpacing: 0.5,
  },
  txtCost: {
    fontSize: 19,
    lineHeight: 25,
    fontWeight: '700',
    color: '#53E88B',
  },
  btnbuy: {
    flex: 1,
    backgroundColor: '#21c45f',
    justifyContent: 'center',
    height: 29,
    borderRadius: 17.5,
    marginRight: 14,
  },
  txtbuy: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.5,
  },
});
