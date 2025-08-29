import {Text, View, StyleSheet, FlatList } from "react-native";

const DATA = [
    {id: 1, nome: "Maça"},
    {id: 2, nome:"Banana"},
    {id: 3, nome:"Abacaxi"}, 
    {id: 4, nome:"Laranja"}, 
    {id: 5, nome:"Maça"},
    {id: 6, nome:"Uva"}
    
];

export default function Home2(){
    rfeturn(
        <View style={Estilo.container}>
            <Text> Tudo ok!</Text>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Text>{item.nome}</Text>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})