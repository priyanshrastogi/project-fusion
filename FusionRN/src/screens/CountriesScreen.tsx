import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/type";
import { RouteProp } from "@react-navigation/native";
import { Image, Text, XStack, YStack } from "tamagui";
import axios from "axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { FlatList } from "react-native";
import { useEffect, useState } from "react";

const fetchCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  }
  catch (error: any) {
    throw new Error(error);
  }
};


type CountriesScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CountriesScreen'>;
  route: RouteProp<RootStackParamList, 'CountriesScreen'>;
};

const CountriesScreen: React.FC<CountriesScreenProps> = ({ navigation }) => {
  const [countries, setCountries] = useState<any>([]);

  const countriesQuery = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    placeholderData: keepPreviousData
  });

  useEffect(() => {
    if(countriesQuery.data) {
      setCountries(countriesQuery.data);
    }
  }, countriesQuery.data);

  return (
    <YStack
      flex={1}
    >
      <Text textAlign="center" marginTop={32} marginBottom={32} fontSize={20} fontWeight={'500'}>Countries of the world</Text>
      <FlatList 
        data={countries}
        renderItem={({ item }) => (
          <XStack
            padding={10}
            borderBottomWidth={1}
            borderBottomColor="gray"
            onPress={() => navigation.navigate('CountryScreen', { country: item })}
            gap={10}
          >
            <Image source={[{uri: item.flags.png}]} height={40} width={80}/>
            <Text fontSize={16}>{item.name.common}</Text>
          </XStack>
        )}
      />
    </YStack>
  );
};

export default CountriesScreen;