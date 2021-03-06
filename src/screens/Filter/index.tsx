import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../config/Assets';
import {RouteProp} from '@react-navigation/native';
import {TRootStackParamList} from '../../../App';
import debounce from 'lodash.debounce';

type FilterRouteProp = RouteProp<TRootStackParamList, 'Filter'>;

interface Props {
  route: FilterRouteProp;
}
const Section = ({title, data}: {title: string; data: any[]}) => {
  return (
    <View style={{marginHorizontal: 25}}>
      <Text style={styles.txtTitleSection}>{title}</Text>
      <View style={styles.gridListSection}>
        {data.map((item, index) => {
          return (
            <View style={styles.containerItem} key={index}>
              <Text style={styles.txtFilter}>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
const dataFilterFood = ['Cake', 'Soup', 'Main Course', 'Appetizer', 'Dessert'];
const Filter = ({route}: Props) => {

  const [dataFilter, setDataFilter] = React.useState(dataFilterFood);
  
  const timeStamp = React.useMemo(() => {
    return (new Date().valueOf());
  }, []);
  
  const _timeStamp = new Date().valueOf();

  console.log('timeStamp', timeStamp, _timeStamp);
  
  const onChangeText = React.useCallback(
    debounce((text: string) => {
      console.log('text', text);
      let result = dataFilter.filter(e => e.includes(text));
      setDataFilter(result);
    }, 300),
    [],
  ); // cac tham so trong des khi thay doi => cap nhat useCallback
     // cac hook => memorize lai va cap nhat khi cac tham so trong des [] thay doi

  return (
    <View style={styles.spaceFlex}>
      <SafeAreaView style={{flex: 1}}>
        <Header />
        {/* view search */}
        <View style={styles.containerSearch}>
          <Image source={Assets.ic_search} />
          <TextInput
            style={styles.inputSearch}
            placeholder="What do you want to order?"
            placeholderTextColor="rgba(249,168,77,0.4)"
            
          />
        </View>
        {/* <Section title="Type" data={dataFilterType} />
        <Section title="Location" data={dataFilterLocation} /> */}
        <Section title="Food" data={dataFilterFood} />
        <View style={styles.spaceFlex} />
        <LinearGradient
          colors={['#53E88B', '#15BE77']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.linearButton}>
          <TouchableOpacity style={styles.btnSearch}>
            <Text style={styles.txtSearch}>Search</Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  containerSearch: {
    marginHorizontal: 25,
    height: 50,
    marginTop: 18,
    flexDirection: 'row',
    backgroundColor: 'rgba(249,168,77,0.1)',
    alignItems: 'center',
    paddingLeft: 18,
    borderRadius: 15,
    marginBottom: 20,
  },
  inputSearch: {
    fontSize: 12,
    color: 'rgba(249,168,77,1)',
    lineHeight: 14,
    marginLeft: 19,
  },
  txtTitleSection: {
    fontSize: 15,
    lineHeight: 20,
    color: '#09051C',
    fontWeight: '700',
    marginBottom: 20,
  },
  gridListSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(254, 173, 29, 0.1)',
    marginRight: 20,
    marginBottom: 20,
  },
  txtFilter: {
    fontSize: 12,
    lineHeight: 12,
    color: 'rgba(218, 99, 23, 1)',
  },
  linearButton: {
    marginHorizontal: 25,
    height: 57,
    borderRadius: 15,
    backgroundColor: 'red',
    marginBottom: 16,
  },
  btnSearch: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSearch: {
    color: '#FEFEFF',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '700',
  },
  spaceFlex: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
