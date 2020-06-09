//import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, FlatList, View, Linking } from 'react-native';
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { ScrollView, } from 'react-native-gesture-handler';

//import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      favdata: []
    }
  } 

  loadPhotos() {
    axios.get("https://5edfe9f49ed06d001696d944.mockapi.io/favPhotos")
   .then( res => {
     if(res){
      this.setState ({
        data: res.data
      })
    }    
    console.log('Retorno favdata: ', this.state.data)
    })  
  }

  componentDidMount(){
    this.loadPhotos();
  }

  render(){
    return (
      <View style={styles.container}>
        <View>
            <Text style={styles.title}>Fotografos Favoritos</Text>
        </View>
        <FlatList 
        data={this.state.data}
        renderItem={({item}) => (
            <View styles={styles.line}>
              <View style={styles.info}>
                <View style={styles.author}>
                    <Text>{item.Author}</Text>
                        <TouchableOpacity>
                            <Icon name="heart" size={26} /> 
                        </TouchableOpacity>
                </View>
              </View>
              
                                 
            </View>          
        )}
          keyExtractor= {item => item.id}
          
        />
      
      </View>
    )
  }

}




HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: "100%",
    height: 300,
    resizeMode: 'contain',
    marginTop: 0,
    //marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },


  feed: {
    marginTop: 0,
    //backgroundcolor: 'black'  
  },
  post: {
    position: 'relative',
    marginVertical: 5,
    zIndex: -1,
    //backgroundcolor: 'green'
    },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  postOptions: {},
  postLike: {},
  userInfo: {},
  author: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  icon: {
    alignItems: 'flex-end'
  },
  picture_url: {
    width: '100%',
    height: 480,
    resizeMode: 'contain'
  },
  footer: {
    paddingHorizontal: 15
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  action: {
    marginRight: 8
  },
  leftActions: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    padding: '5%',
    color: 'rgba(26,44,67, 1)',
  },
});
