import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ItemCart from './components/ItemCart';

export interface IProduct {
  name: string;
  des: string | undefined;
  quantity: number;
  id: string;
  price: string;
}

const initDataCart: IProduct[] = [
  {
    id: '0',
    name: 'Spacy fresh crab',
    des: 'Waroenk kita',
    quantity: 1,
    price: '$ 35',
  },
  {
    id: '1',
    name: 'Spacy fresh crab',
    des: 'Waroenk kita',
    quantity: 1,
    price: '$ 35',
  },
  {
    id: '2',
    name: 'Spacy fresh crab',
    des: 'Waroenk kita',
    quantity: 1,
    price: '$ 35',
  },
  {
    id: '3',
    name: 'Spacy fresh crab',
    des: 'Waroenk kita',
    quantity: 1,
    price: '$ 35',
  },
  {
    id: '4',
    name: 'Spacy fresh crab',
    des: 'Waroenk kita',
    quantity: 1,
    price: '$ 35',
  },
  {
    id: '5',
    name: 'Spacy fresh crab',
    des: 'Waroenk kita',
    quantity: 1,
    price: '$ 35',
  },
];

const Cart = () => {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [dataCart, setDataCart] = React.useState<IProduct[]>(initDataCart);
  const [isLoadmore, setIsLoadmore] = React.useState<boolean>(false);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Order details</Text>
        <FlatList
          data={dataCart}
          renderItem={({item}) => <ItemCart item={item} />}
          keyExtractor={(item, index) => index.toString()}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            //do call api 2s
            setTimeout(() => {
              //update data
              setDataCart(initDataCart);
              setRefreshing(false);
            }, 2000);
          }}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            setIsLoadmore(true);
            setTimeout(() => {
              //update data
              setDataCart(prev => prev.concat(initDataCart));
              setIsLoadmore(false);
            }, 500);
          }}
          ListFooterComponent={() => {
            return (
              <View style={styles.footerList}>
                {!!isLoadmore && <ActivityIndicator color="#15BE77" />}
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  footerList: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    color: '#09051C',
    fontWeight: '700',
    marginLeft: 10,
    marginVertical: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
