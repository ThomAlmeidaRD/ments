import { StatusBar } from 'expo-status-bar';
import { func } from 'prop-types';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import img from './assets/img/totodile.gif'
export default function App(props) {

  const [count, setCount] = useState("...");
  const [txt, settxt] = useState("title");


  var ct = 1;
  var txtQuest = function () {

    if (ct == 1) {

      alert('Dormiu bem?')
      ct = 2

    } else if (ct == 2) {

      alert('Fez Caminhada?')
      ct = 3

    } else if (ct == 3) {

      alert('Bateu o ponto?')
      ct = 1

    }

  };

  const btnFine = () => setCount(prevFine => 'Sim 😄');
  const btnMedium = () => setCount(prevMedium => 'Não 😓');
  const btnBad = () => setCount(prevBad => 'Inderente 😶');

  return (

    <View style={styles.container}>

      <View style={styles.borderView}>

        <View style={styles.marksArea}>
          <Text style={styles.marks}>1/3</Text>
        </View>

        <Text style={styles.titulo}>{txt}</Text>


        <Text style={styles.titulo}>Resposta: {count}</Text>


        <View style={styles.btnArea}>
          <TouchableOpacity onPress={btnFine} style={styles.btn}>
            <Text style={styles.btnTxt}>
              ✅
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={btnMedium} style={styles.btn}>
            <Text style={styles.btnTxt}>
              ❌
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={btnBad} style={styles.btn}>
            <Text style={styles.btnTxt}>
              ⭐
            </Text>
          </TouchableOpacity>

        </View>

        <StatusBar style="light" />
      </View>


      <TouchableOpacity onPress={txtQuest} style={styles.btn2}>
        <Text style={styles.btnTxt2}>
          Próximo
        </Text>
      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1D28',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 200
  },

  titulo: {
    color: 'mediumpurple',
    fontSize: 26,
    width: 320,
    margin: 20,
    textAlign: 'center',
    fontFamily: 'monospace'
  },

  btn: {
    padding: 20,
    margin: 10,
    color: 'mediumpurple',
    borderColor: '#343142',
    borderWidth: 3,
    width: 100,
    textAlign: 'left',
    borderRadius: 8

  },


  btn2: {
    padding: 20,
    margin: 10,
    borderColor: 'springgreen',
    borderWidth: 3,
    width: 400,
    textAlign: 'left',
    borderRadius: 8

  },

  btnArea: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnTxt: {
    color: 'mediumpurple',
    fontSize: 40,
    textAlign: 'center'
  },

  btnTxt2: {
    fontFamily: 'monospace',
    color: 'springgreen',
    fontSize: 25,
    textAlign: 'center',
  },

  borderView: {
    padding: 15,
    margin: 5,
    borderColor: '#343142',
    borderWidth: 3,
    borderRadius: 10
  },

  marksArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  marks: {
    color: 'mediumpurple',
    width: 50,
    borderRadius: 100,
    textAlign: 'center',
    backgroundColor: 'rgba(238, 238, 238, 0.1)'
  },

});
