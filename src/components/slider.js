import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native"; 
import Slider from '@react-native-community/slider';
import styles from "../funciones/styles.js/globalStyles";
import { Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import store from "../funciones/redux/store";
import { updateSoundObject } from "../funciones/redux/actions";

const Slide = ({ newValue }) => {
    const [value, setValue] = useState(newValue);

    const soundObject = useSelector((state) => state.soundObject); 
    const audioDuration = useSelector((state) => state.audioDuration);
    
    

    const handleValueChange = () => {
        console.log(newValue + ' la madre');
        console.log(typeof soundObject);
        if(typeof soundObject === 'object'){
            soundObject._key.currentTime = value
        }
    };

    const setNewValue = (newValue) => {
        setValue(newValue)
    };

    useEffect(() => {
        setValue(newValue);
        console.log(newValue);
    }, [newValue]);


    return (
        <Pressable onPress={handleValueChange} style={styles.slider.pressable} >
            <Slider
                value={value}
                onValueChange={setNewValue}
                style={[styles.slider.slider]} 
                minimumValue={0}
                maximumValue={isNaN(audioDuration) ? 0 : audioDuration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                thumbTintColor="transparent"
                thumbStyle={{ width: 0, height: 0 }}
            />
        </Pressable>    
    );
};

export default Slide;

/**
 * el ruido causado en el console.log es por Slider, partes internas que no puedo manejar
 * index.js:119  StyleSheet.compose(a, b) is deprecated; use array syntax, i.e., [a,b].
 */


