import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/outline';
import * as Progress from "react-native-progress";
import { getLat, getLong, getName } from './RestaurantScreen';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);


  return (
    <View className="bg-[#00CCBB] flex-1">
        <SafeAreaView className="z-50">
            <View className="flex-row justify-between items-center p-5">
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <XMarkIcon color="white" size={30}/>
                </TouchableOpacity>
                <Text className="font-light text-white text-lg">Order Help</Text>
            </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text>Your order at {getName()} is being prepared</Text>
        </View>
        </SafeAreaView>
        <MapView 
          initialRegion={{
            latitude: 39.71721818096248,
            longitude: -75.11254488087602,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          className="flex-1 -mt-10 z-0"
          mapType='mutedStandard'
          >
           <Marker
              coordinate={{
                latitude: 39.71721818096248,
                longitude: -75.11254488087602,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              title="McDonalds"
              description='Burgers'
              identifier='origin'
              pinColor='#00CCBB'
            /> 
        </MapView>
        <SafeAreaView className="bg-white flex-row items-center space-x-5" h-28>
          <Image
              source={{
                uri: "https://links.papareact.com/wru",
              }}
              className="h-12 w-12 bg-gray p-4 rounded-full ml-5"
              />
              <View>
                <Text className="text-lg text-bold">Lukas DeLoach</Text>
                <Text className="text-md text-gray-400">Your Rider</Text>
              </View>
        </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen