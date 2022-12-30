import { View, Text, ScrollView, Image, Touchable } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { setRestaurant } from '../features/restaurantSlice';
import { useDispatch } from 'react-redux';

let restname = "";
let latitude = 0;
let longitude = 0;


const RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { 
        params: {
            id, 
            imgUrl,
            name,
            rating,
            genre,
            address,
            dishes,
            short_description,
            long, 
            lat,
        },
    } = useRoute();
    restname = name;
    latitude = lat;
    longitude = long;


    useEffect(() => {
        dispatch(setRestaurant({
            id, 
            imgUrl,
            name,
            rating,
            genre,
            address,
            dishes,
            short_description,
            long, 
            lat,
        })
    );
    }, [dispatch]);
    console.log(restname);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <>
    <BasketIcon />
    <ScrollView>
      <View className="relative">
        <Image 
            source={{
                uri: urlFor(imgUrl).url(),
            }}
            className='w-full h-56 bg-gray-300 p-4'
        />
        <TouchableOpacity 
            onPress={navigation.goBack} 
            className="absolute top-14 left-5 bg-gray-100 rounded-full">
            <ArrowLeftIcon size={20} color="#00CCBB"/>
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{name}</Text>
            <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                    <StarIcon color='green' opacity={0.5} size={22} />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500">{rating}</Text>{genre}
                    </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color='grey' opacity={0.5} size={22} />
                    <Text className="text-xs text-gray-500">Nearby - {address}</Text>
                </View>
            </View>
            <Text className="text-xs text-gray-500">Short Description: {short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={22}/>
            <Text className="pl-2 flex-1 text-md font-bold">
                Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCCB" />
        </TouchableOpacity>
        <View className="pb-36">
            <Text className="px-4 pt-5 mb-3 font-bold text-xl">Menu</Text>
            {/*Dish row*/}
            {dishes.map((dish) => (
                <DishRow
                    key={dish._id}
                    id={dish._id}
                    name={dish.name}
                    description={dish.short_description}
                    price={dish.price}
                    image={dish.image}
                />
            ))}

        </View>
      </View>
    </ScrollView>
    </>
  )
}

export function getName(){
    return restname;
}

export function getLong(){
    return longitude;
}

export function getLat(){
    return latitude;
}

export default RestaurantScreen