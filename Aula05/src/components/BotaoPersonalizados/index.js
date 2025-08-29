import { StyleSheet, Text, View, TouchableOpacity} from "react-native";



export default function BotaoPersonalizado({pressCallBack, texto = "Botão", cor = "#000"}){
    const handlePress = () => {
        console.log("FILHO: o botão foi pressionado! Avisando o pai");
        pressCallBack("Olá pai, vindo do filho");    
    }

    return(
        <View style={Estilo.container}>
            <TouchableOpacity
              style={[Estilo.button, {backgroundColor: cor}]}

              onPress={handlePress}
            >
                <Text style={Estilo.buttonLabel}>{texto}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        padding:10,
        backgroundColor: "#dadada",
    },

    button: {
        padding: 20,

    }
})

