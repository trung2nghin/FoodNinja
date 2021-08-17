import React from 'react';
import Swiper from 'react-native-swiper';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
const widthScreen = Dimensions.get('window').width;
const widthImgBanner = widthScreen - 50;
const scaleImgBanner = 325 / 150;
const heightImgBanner = widthImgBanner / scaleImgBanner;

type IDataBanner = {
  id: string;
  img: ImageSourcePropType;
};

type Props = {
  dataBanner: IDataBanner[];
  autoplay: boolean;
};

const Banner = ({autoplay = true, dataBanner}: Props) => {
  return (
    <View style={styles.containerBanner}>
      <Swiper
        showsHorizontalScrollIndicator={false}
        autoplay={autoplay}
        loop
        paginationStyle={styles.paginationStyle}>
        {dataBanner.map((item, index) => {
          return (
            <View style={styles.pageBanner} key={index}>
              <Image source={item.img} style={styles.imgBanner} />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  containerBanner: {
    marginTop: 20,
    marginBottom: 25,
    height: heightImgBanner,
  },
  imgBanner: {
    width: widthImgBanner,
    height: heightImgBanner,
  },
  pageBanner: {
    width: widthScreen,
    paddingHorizontal: 25,
  },
  paginationStyle: {
    bottom: 4,
  },
});
