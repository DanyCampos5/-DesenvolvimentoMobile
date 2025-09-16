import { View } from "react-native-web";

export default function Profile({navigation}){
    return(
        <View style={Estilo.container}>
            <Text style={Estilo.textoPrincipal}> Perfil </Text>
            <Button title="Voltar para Home" onPress={()=> navigation.goBack()}/>
        </View>
    )
}

const Estilo = StyloSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textPrincipal: {
        fontSize: 14,
        
    }

})