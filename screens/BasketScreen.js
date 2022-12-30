import { View, Text, TouchableOpacity, Image, ScrollViewBase, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/outline';
import RestaurantScreen, { getName } from './RestaurantScreen'
import { urlFor } from '../sanity'
import Currency from "react-currency-formatter"

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();
    const basketTotal = useSelector(selectBasketTotal)

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
}, [items]);
console.log(groupedItemsInBasket);

    
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
            <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                <View>
                    <Text className="text-lg font-bold text-center">Basket</Text>
                    <Text className="text-center text-gray-400">{getName()}</Text>
                </View>
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="rounded-full bg-gray-100 absolute top-3 right-5">
                    <XCircleIcon color="#00CCBB" height={50} width={50}/>
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                <Image source={{
                    uri: "https://links.papareact.com/wru",
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <Text className="flex-1">Deliver in 50-75 Min</Text>
                <TouchableOpacity>
                    <Text className="text-[#00CCBB]">Change</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {Object.entries(groupedItemsInBasket).map(([key, items]) =>
                    <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                        <Text>{items.length} x</Text>
                        <Image
                            source={{uri: urlFor(items[0]?.image).url()}}
                            className="h-12 w-12 rounded-full"
                        />
                        <Text className="flex-1"> {items[0]?.name}</Text>
                        <Text>
                            <Currency quantity={items[0]?.price} currency="USD"/>
                        </Text>
                    </View>    
                )}
            </ScrollView>

            <View className="p-5 bg-white mt-5 space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Subtotal</Text>
                    <Text>
                        <Currency quantity={basketTotal} currency="USD" />
                    </Text>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Delivery Fee</Text>
                    <Text>
                        <Currency quantity={5.99} currency="USD" />
                    </Text>
                </View>

                <View className="flex-row justify-between">
                    <Text className="font-extrabold">Order Total</Text>
                    <Text>
                        <Currency quantity={basketTotal + 5.99} currency="USD" />
                    </Text>
                </View>

                <TouchableOpacity 
                        onPress={() => navigation.navigate("PreparingOrderScreen")}
                        className="rounded-lg bg-[#00CCBB] p-4">
                    <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                </TouchableOpacity>

            </View>
            
        </View>
      
    </SafeAreaView>
  );
};

export default BasketScreen;