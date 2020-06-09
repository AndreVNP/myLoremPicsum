import React, { Component } from 'react';
import axios from "axios";

export function getAllFavPhotos(){

    axios.get('https://5edfe9f49ed06d001696d944.mockapi.io/favPhotos')
    .then( res => {
        console.log('Retorno: ', res.data)
          return res;
     })  
}