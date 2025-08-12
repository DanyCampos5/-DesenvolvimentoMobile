import {StyleSheet, Text, View} from "react-native"


export default () => (
    <View style={Estilo.conatainer}>
        <Text>Secundária</Text>
    </View>
)

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContente: 'center',
        alignItems: 'center'
    }
})