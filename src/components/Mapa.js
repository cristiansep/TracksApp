import React from 'react';
import {Text, StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

const Mapa = () => {

    let points = [];

    for(let i = 0; i < 20; i++) {
        if(i % 2 === 0) {
             points.push({
                latitude: -40.5748842 + i * 0.01,
                longitude: -73.1347397 + i * 0.01
            })
        }else {
            points.push({
                latitude: -40.5748842 + i * 0.02,
                longitude: -73.1347397 + i * 0.01
            }) 
        }
       
    }


    return (
    
        <MapView 
        style={styles.map}
        initialRegion={{
            latitude: -40.5748842,
            longitude: -73.1347397,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        >
            <Polyline coordinates={points}/>
        </MapView>
    )
};


const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Mapa;
