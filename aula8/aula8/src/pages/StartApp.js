import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


export default function StartApp(){
    return(
        <NavigationContainer  initialRouteName="Home">
            <Stack.Navigator>
               
                
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Perfil" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}