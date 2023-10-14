import { Audio } from 'expo-av';
import axios from 'axios';
import { file } from '../dinamicFiles/dinamicFiles';
import store from '../redux/store';
import { updateAudioCurrentTime, updateIsPlaying, updateCoor, updateSoundObject, updateAudioDuartion } from '../redux/actions';
import { preload } from './preload';
import { Platform } from 'react-native';

let useId = 0;
let localSoundObject;
let localIsplaying;
let localbitRate;
let soundObjects = []; // Define soundObjects here
//let nextSoundObject;

/**
32k  muy malo
128k normal
320k alto
 */
let nextSoundObject;

export async function play(coor, isplaying, bitRate, preload) {
    //alert(`llamado: coor: ${coor}, isplaying: ${isplaying}, bitRate: ${bitRate}`);
    localbitRate = bitRate
    localIsplaying = isplaying;
    const arrePa = file(); 

    async function getAudioFileWithLowerBitRate(originalUrl) {       
        const fileUrl = originalUrl.split('https://res.cloudinary.com/dplncudbq/video/upload/')[1];
        return `https://res.cloudinary.com/dplncudbq/video/upload/br_${bitRate}/${fileUrl}`;
    }

    if(preload === `preload`){
        for (let i = 0; i < arrePa.length; i++) {
            if (!soundObjects[i]) {
                const { sound } = await Audio.Sound.createAsync(
                    { uri: await getAudioFileWithLowerBitRate(arrePa[i].linkAudio),
                        shouldCorrectPitch: false, }
                );
                soundObjects[i] = sound;
            }
        }
    } else {    
        if (localIsplaying === 'true') {
            if (localSoundObject) {
                localSoundObject.pauseAsync();
            }
        } else {
            if (localSoundObject) {
                await localSoundObject.unloadAsync();
            }
            
            const { sound } = await Audio.Sound.createAsync(
                { uri: await getAudioFileWithLowerBitRate(arrePa[coor].linkAudio),
                    shouldCorrectPitch: false, },
                {},
                (status) => {
                    if (status.didJustFinish) {
                        play(useId+1, false, localbitRate, '')
                    }
                }
            );
            
            localSoundObject = sound;
            store.dispatch(updateSoundObject(localSoundObject));
            localSoundObject.playAsync();
            
            Platform.OS === 'web' ? hola() : null;
            useId = coor;
        }
    
        function hola() {
            console.log('hola');
            (localSoundObject._key && localSoundObject._key.currentTime != null) ? store.dispatch(updateAudioCurrentTime(localSoundObject._key.currentTime)) : 0;
            (localSoundObject._key && localSoundObject._key.duration != null) ? store.dispatch(updateAudioDuartion(localSoundObject._key.duration)) : 0;
            if (localIsplaying === 'false') {
                setTimeout(hola, 500);
            }
        }
    }
}


/*
Preload next audio
if (arrePa[coor + 1]) {
    if (nextSoundObject) {
        await nextSoundObject.unloadAsync();
    }
    const { sound } = await Audio.Sound.createAsync(
        { uri: await getAudioFileWithLowerBitRate(arrePa[coor + 1].linkAudio),
            shouldCorrectPitch: false, }
    );
    nextSoundObject = sound;
}

for (let i = 0; i < arrePa.length; i++) {
    if (!soundObjects[i]) {
        const { sound } = await Audio.Sound.createAsync(
            { uri: await getAudioFileWithLowerBitRate(arrePa[i].linkAudio),
                shouldCorrectPitch: false, }
        );
        soundObjects[i] = sound;
    }
}


import { Audio } from 'expo-av';
import {file} from '../dinamicFiles/dinamicFiles'
import store from '../redux/store';
import { updateAudioCurrentTime, updateIsPlaying, updateCoor, updateSoundObject, updateAudioDuartion } from '../redux/actions';
import { useSelector } from 'react-redux';


let useId = 0
let localSoundObject
let localIsplaying
export async function play(coor, isplaying){
    //console.log(`isplaying: ${isplaying}, coor: ${coor}`);
    
    localIsplaying = isplaying
    const arrePa =  file()
    if(useId === coor){
        if(localSoundObject){
            localSoundObject.pauseAsync();
        }
    } else {
        if(localSoundObject){
            localSoundObject.pauseAsync();
        }
        useId = coor

        // prueba
        const  { sound } = await Audio.Sound.createAsync(
            { uri: arrePa[coor].linkAudio,
                shouldCorrectPitch: false, }
        );
        localSoundObject = sound
        //await localSoundObject.setStatusAsync({ rate: 0.9749090909 })
        store.dispatch(updateSoundObject(sound));
        localSoundObject.playAsync();
        //hola()
    }

    /*if(isplaying === 'false'){
        const  { sound } = await Audio.Sound.createAsync(
            { uri: arrePa[coor].linkAudio,
                shouldCorrectPitch: false, }
        );
        localSoundObject = sound
        //await localSoundObject.setStatusAsync({ rate: 0.9749090909 })
        store.dispatch(updateSoundObject(sound));
        localSoundObject.playAsync();
        hola()
        return localSoundObject
    } /*else {
        if(localSoundObject){
            localSoundObject.pauseAsync();
        }
    }

    function hola(){
        //console.log(localSoundObject);
        //localSoundObject.setRateAsync(1) cambia velocidad audio sin cambiar tonalidad
        //console.log(localSoundObject._key.defaultPlaybackRate = 2);
        store.dispatch(updateAudioCurrentTime(localSoundObject._key.currentTime));
        store.dispatch(updateAudioDuartion(localSoundObject._key.duration));
        if(localIsplaying === 'false'){
            setTimeout(hola, 1000);
        }
    }
}*/





