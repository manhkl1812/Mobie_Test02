
import Welcome from '@/components/GalleryApp'
import BikeCard from '@/components/BikeCard'
import BikeDetail from '@/components/BikeDetail'
import { NavigationContainer } from 'expo-router/build/react-navigation'
import { createNativeStackNavigator } from 'expo-router/build/react-navigation/native-stack'

export type RootStackParamLis={
  Home: undefined
  List: undefined
  Detail: {
    id: string
  }
}

const Stack= createNativeStackNavigator<RootStackParamLis>()



const index = () => {
  return (
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Home" component={Welcome}/>
        <Stack.Screen name="List" component={BikeCard}/>
        <Stack.Screen name="Detail" component={BikeDetail}/>
      </Stack.Navigator>
  )
}

export default index