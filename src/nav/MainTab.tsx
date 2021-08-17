import * as React from 'react';
import {
  BottomTabBarOptions,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import CartScreen from '../screens/Cart';
import ChatScreen from '../screens/Chat';
import * as IconlyPack from 'react-native-iconly';
import Colors from '../config/Colors';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native'; 
import {getBottomSpace} from 'react-native-iphone-x-helper';

const widthScreen = Dimensions.get('window').width;

export type TMainTabParamList = {
  Home: undefined;
  Profile: undefined;
  Cart: undefined;
  Chat: undefined;
};

const Tab = createBottomTabNavigator<TMainTabParamList>();
const MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.primary5,
      }}
      tabBar={MyTab}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <IconlyPack.Home set="bold" color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => <IconlyPack.User set="bold" color={color} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => <IconlyPack.Buy set="bold" color={color} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({color}) => <IconlyPack.Chat set="bold" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

type TRouteName = keyof TMainTabParamList;

const MyTab = ({
  state,
  activeTintColor = Colors.primary,
  inactiveTintColor = Colors.primary5,
  navigation,
}: BottomTabBarProps<BottomTabBarOptions>) => {
  let routeNames = state.routeNames as TRouteName[];
  let currentIndex = state.index; //index tab dang focus
  const renderContent = (item: TRouteName, color: string) => {
    switch (item) {
      case 'Home':
        return <IconlyPack.Home set="bold" color={color} key={item} />;
      case 'Profile':
        return <IconlyPack.User set="bold" color={color} key={item} />;
      case 'Cart':
        return (
          <View>
            <IconlyPack.Buy set="bold" color={color} key={item} />
            <View style={styles.badge}>
              <Text style={styles.txtNumberCart}>7</Text>
            </View>
          </View>
        );
      case 'Chat':
        return (
          <View>
            <IconlyPack.Chat set="bold" color={color} key={item} />
            <View style={styles.badge} />
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <View style={styles.containerTab}>
      {routeNames.map((item, index) => {
        let color =
          currentIndex === index ? activeTintColor : inactiveTintColor;
        return (
          <TouchableOpacity
            style={styles.btnTab}
            onPress={() => navigation.navigate(item)}>
            {renderContent(item, color)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default MainTab;

const styles = StyleSheet.create({
  btnTab: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTab: {
    width: widthScreen - 32,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: getBottomSpace() ? getBottomSpace() + 10 : 16,
    left: 16,
    padding: 16,
    flexDirection: 'row',
    borderRadius: 22,
    shadowColor: 'rgb(90, 108, 234)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 3,
  },
  badge: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 7,
    minHeight: 14,
    minWidth: 14,
    alignItems: 'center',
    justifyContent: 'center',
    top: -3,
    right: -5,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  txtNumberCart: {
    fontSize: 9,
    lineHeight: 12,
    color: '#FFF',
  },
});
