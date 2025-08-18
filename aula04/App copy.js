import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';

import {AntDesign} from '@expo/vector-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olaaaaaaa oiii</Text>

      {/*Criando um botão simples*/}

      <Button title='Botão normal' 
      color={'green'} 
      width={20}
      onPress={()=>console.log("Clicou no botão!")}/>

      <TouchableOpacity style={styles.botaoComum}>
        <Text Style={styles.textoDoBotao}>Botão touchable simples</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoComum}>
        <AntDesign name='instagram' size={40} color={"#fff"} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoComum}>
        <View style={styles.botaoComTexto}>
           <AntDesign name='instagram' size={40} color={"#fff"} />
           <Text style={styles.textoDoBotao}>Siga @youuu</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  botaoComum: {
    backgroundColor: '#dadada',
    padding: 20,
    color: 'rgb(51, 51, 51)',
    borderRadius: 6,
    marginTop: 20
  },

  textoDoBotao: {
    color: '#fff',
    fontSize: 18,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12
  },
  botaoComTexto: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
