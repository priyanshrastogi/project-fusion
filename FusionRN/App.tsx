import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

type Screen1Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Screen1'>;
  route: RouteProp<RootStackParamList, 'Screen1'>;
};

type Screen2Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Screen2'>;
  route: RouteProp<RootStackParamList, 'Screen2'>;
};

const Root = createNativeStackNavigator<RootStackParamList>();

const Screen1: React.FC<Screen1Props> = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 1</Text>
    <Button
      title="Go to Screen 2"
      onPress={() => {
        navigation.push('Screen2');
      }}
    />
  </View>
);

const Screen2: React.FC<Screen2Props> = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 2</Text>
    <Button
      title="Go back"
      onPress={() => {
        navigation.pop();
      }}
    />
  </View>
);

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={
          {
            headerShown: false,
          }
        }
      >
        <Root.Screen name="Screen1" component={Screen1} />
        <Root.Screen name="Screen2" component={Screen2} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
});

export default App;