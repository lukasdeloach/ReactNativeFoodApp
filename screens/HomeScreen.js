import { View, Text, SafeAreaView, Image, TextInput, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    ArrowDownCircleIcon,
    AdjustmentsVerticalIcon
    
}from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

 const HomeScreen = ()  => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image 
                source={{
                    uri: "https://links.papareact.com/wru"
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
                <Text className="font-bold text-gray-400 tex-xs">Deliver Now! </Text>
                <Text className="font-bold text-xl">Current Location
                    <ChevronDownIcon size={20} color ="00CCBB"/>
                </Text>
            </View>
                <UserIcon size={35} color="00CCBB" />
        </View>

        { /* Search Here! */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-1 bg-gray-200 p-3" >
                <MagnifyingGlassIcon color="gray" size={20} />
                <TextInput placeholder='Restaurants and cuisines'
                keyboardType='default' />
            </View>
            <AdjustmentsVerticalIcon color="00CCBB"/>
        </View>

        { /* Body Here! */}
        <ScrollView className="bg-gray-100"
            contentContainerStyle={{
                paddingBottom: 100,
            }}
        >

            {/* Categories */}
            <Categories />

            {/* Featured Rows Here! */}
            <FeaturedRow
                id="123"
                title="Featured"
                description="Paid placements from our partners"
            />

            {/*Offers near you */}
            <FeaturedRow
                id="123"
                title="Tasty Discounts"
                description="Everyone's been enjoying these juicy discounts!"
                faturedCategory="featured"
            />

        </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;