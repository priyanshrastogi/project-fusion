import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';
import CountriesScreen from '../screens/CountriesScreen';
import CountryScreen from '../screens/CountryScreen';

const Root = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen
          name="CountriesScreen"
          component={CountriesScreen}
          options={{headerShown: false}}
        />
        <Root.Screen
          name="CountryScreen"
          component={CountryScreen}
          options={({route}) => ({title: route.params.country.name.common})}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
