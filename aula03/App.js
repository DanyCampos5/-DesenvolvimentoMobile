import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,//Ocupa a tela com todo o espaço disponivel
   backgroundColor: '#f2f2f2', //Cor de fundo do container
   flexDirection: 'row', //Eixo principal
   justifyContent: 'flex-end', //Alinhamento do eixo principal
   alignItems: 'flex-end', //Alinhamento do eixo secundário
   marginBotoom: 80
  
  },
  box1:  {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    margin:80,
    marginBotoom: 80,
    marginRight:30
  },
  
  box2:  {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    margin: 5,
    marginBotoom: 80,
    marginRight:30
  },
  
  box3:  {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    margin: 5,
    marginBotoom: 80,
    marginRight:30
  }


});
