// ServiceDetails.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'ServiceDetails'>;

const ServiceDetails = ({route}: Props) => {
  const {service} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.serviceName}>{service.name}</Text>
      <Text style={styles.serviceDescription}>{service.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000435',
  },
  serviceName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  serviceDescription: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ServiceDetails;
