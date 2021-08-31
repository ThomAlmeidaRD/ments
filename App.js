import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import img from './assets/img/totodile.gif'
export default function App() {

  return (
    <View style={styles.container}>

      <View style={styles.borderView}>

        <View style={styles.marksArea}>
          <Text style={styles.marks}>1/3</Text>
        </View>

        <Text style={styles.titulo}>Conte sobre como você está hoje? ☕</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity onPress={() => alert('Hello')} style={styles.btn}>
            <Text style={styles.btnTxt}>
              😁
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>
              😐
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>
              😔
            </Text>
          </TouchableOpacity>

        </View>

        <StatusBar style="auto" />
      </View>

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
    borderRadius:100,
    textAlign: 'center',
    backgroundColor: 'rgba(238, 238, 238, 0.1)'
  },

});
