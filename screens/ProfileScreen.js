import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default function Profile({navigation}) {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://mwmfma.bn.files.1drv.com/y4mVd4F4BSIYUAsyVEj8eFJR6xhEOUUYhv5oaLW0THSwyxN0qERts98e_e26aVT1HIvF01p4JugOQT6w9JyJHE2CFFIS2ho6y4tbc-9r3FD34nGcl4SmLu722VK6GV-yBJEiZTHC8MW3FNz9lI3BUhBGLcsVJ-64q-EwZ8O5XgxTJQcYHuNZSqF7erf2JNnivTHlxJEXn-9SBMIdbgkZXiygw?width=972&height=1296&cropmode=none'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>André Vicente</Text>
              <Text style={styles.info}>Desenvolvimento e Inovação Tecnológica</Text>
              <Text style={styles.description}>• Responsável por implantar a primeira parceria entre a GitHub e uma instituição de ensino não superior no Brasil.</Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('FavsScreen')}>
                <Text>Minhas fotos Favoritas</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('FotografosScreen')}>
                <Text>Fotógrafos Favoritos</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});