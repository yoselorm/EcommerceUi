import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'nativewind';
const ProductCard = ({ product }) => {
    const [count, setCount] = useState(1)
    const { colorScheme, setColorScheme } = useColorScheme()

    return (
        <View className='w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5'>
            <View className='bg-white rounded-xl'>
                <Image source={{ uri: product.image }} className='w-full h-72'
                    style={{ resizeMode: "contain" }} />
            </View>
            <View className='mt-5'>
                <Text className='text-sm text-black/60 dark:text-white/60 font-semibold'>{product.category}</Text>
                <Text className='font-semibold text-lg dark:text-white'>{product.title}</Text>
                <View className='flex-row justify-between mt-5'>
                    <View className='flex-row gap-2 items-center'>
                        <TouchableOpacity onPress={() => setCount(count - 1)}>
                            <Text className='dark:bg-white'>
                                ➖
                            </Text>
                        </TouchableOpacity>
                        <Text className='dark:text-white'>{count}</Text>
                        <TouchableOpacity onPress={() => setCount(count + 1)}>
                            <Text className='dark:bg-white'>
                                ➕
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text className='dark:text-white font-extrabold text-xl'>${product.price * count}</Text>
                    </View>
                </View>

                <Text numberOfLines={2} className='text-sm dark:text-white/70'>{product.description}</Text>
                <TouchableOpacity className='bg-black dark:bg-white p-3 flex-row justify-center rounded-full w-10/12 self-center mt-5'>
                    <Text className=' text-white dark:text-black'>Add To Cart</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({})

export default ProductCard;
