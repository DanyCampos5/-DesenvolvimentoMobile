import { View, Text, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); //Instaciar um objeto do tipo stack Navigator

function HomeScreen({navigation}){
    return(
        <View style={{flex:1, justifyContent: "center", alignItems: "center", backgroundColor: "green"}}>
            <Text style={{fontSize: 18}}>Pagina Home!</Text>
            <Button title="Ïr para detalhes" onPress={ () => navigation.navigate('Detalhes')} />
        </View>
    )
}

function DetailsScreen({navigation}){
    return(
        <View style={{flex:1, justifyContent: "center", alignItems: "center", backgroundColor: "blue"}}>
            <Text style={{fontSize: 16}}> Tela de Detalhes </Text>
            <Button title="Voltar"onPress={ () => navigation.goBack()} />
        </View>
    )
}


export default function Inicio(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{title: "Tela inicial"}}/>
                <Stack.Screen name="Detalhes"component={DetailsScreen} options={{headerBackVisible: false, headerLeft: ()=> null}}/>
             </Stack.Navigator>
        </NavigationContainer>
    )
}