import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/type";
import { RouteProp } from "@react-navigation/native";
import { Image, Text, View, YStack } from "tamagui";

type CountryScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CountryScreen'>;
  route: RouteProp<RootStackParamList, 'CountryScreen'>;
};

const CountryScreen: React.FC<CountryScreenProps> = ({ navigation, route }) => {
  const country = route.params.country;

  return (
    <YStack
      flex={1}
      padding={24}
      alignItems="center"
    >
      <Text margin={24} textAlign='center' fontSize={20} fontWeight={'500'}>{country.name.common}</Text>
      <Image source={[{uri: country.flags.png}]} height={80} width={160} marginBottom={24}/>
      <Text margin={6} fontSize={16}>Capital: {country.capital}</Text>
      <Text margin={6} fontSize={16}>Region: {country.region}</Text>
      <Text margin={6} fontSize={16}>Subregion: {country.subregion}</Text>
      <Text margin={6} fontSize={16}>Population: {country.population}</Text>
      <Text margin={6} fontSize={16}>Area: {country.area} km²</Text>
      <Text margin={6} fontSize={16}>Languages: {Object.values(country.languages)?.join(', ')}</Text>
      <Text margin={6} fontSize={16}>Currencies: {Object.values(country.currencies)?.map((currency: any) => currency.name).join(', ')}</Text>
      <Text margin={6} fontSize={16}>Top level domain: {country.tld?.join(', ')}</Text>
      <Text margin={6} fontSize={16}>Timezones: {country.timezones?.join(', ')}</Text>
      <Text margin={6} fontSize={16}>Borders: {country.borders?.join(', ')}</Text>
    </YStack>
  )
}

export default CountryScreen;