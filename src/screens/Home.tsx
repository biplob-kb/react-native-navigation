import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import banner from '../assets/banner.jpeg';
import {services} from '../data/services';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={banner} style={styles.banner} />
      <Text style={styles.normalText}>
        Horizon Solutions is a software development platform. Build your software with us.
      </Text>

      <Text style={styles.headingText}>Our Services</Text>
      <View>
        <FlatList
          numColumns={2}
          data={services}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() => navigation.navigate('ServiceDetails', {service: item})}>
              <Text style={styles.serviceText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000435',
    padding: 10,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  headingText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 45,
    alignSelf: 'center',
    marginBottom: 10,
  },
  normalText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  serviceItem: {
    backgroundColor: '#000750',
    height: 90,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;
