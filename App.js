import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const [product, setProduct] = useState([])
  const url = 'https://fakestoreapi.com/products';

  console.log()

  useEffect(() => {
    axios.get(url).then((res) => {
      setProduct(res.data)
    })
  }, [])
  //console.log(product)
  return (
    <SafeAreaView className='bg-gray-100 flex-1 items-center justify-center dark:bg-black  ' >
      <View className='flex flex-row gap-2 w-full mt-20'>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
        <Text className='dark:text-white text-2xl font-bold'>New Collection</Text>
      </View>

      <View>
        <FlatList
          data={product}
          keyExtractor={(product) => product.id}
          renderItem={({ item }) => <ProductCard product={item} />}
          style={{ paddingHorizontal: 15 }}
        />


      </View>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </SafeAreaView>
  );
}

