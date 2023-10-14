import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, FlatList, Pressable  } from 'react-native';
import { useSelector } from 'react-redux';
import { play } from '../funciones/player/play';
import store from '../funciones/redux/store';
import { updateAudioCurrentTime, updateIsPlaying, updateCoor } from '../funciones/redux/actions';
import {file} from '../funciones/dinamicFiles/dinamicFiles'
import  Slide  from './slider';
import styles from '../funciones/styles.js/globalStyles';
import { seconToMinute } from '../funciones/time/seconToMinute';
import { Platform } from 'react-native';

let localAudioCoor = 0
let onceFlag = 0
const Player = () => {
    //const [meGustasColeccion, setMeGustasColeccion] = useState();
    const [screen, setScreen] = useState('')
    const arrePa = file()
    
    const audioCurrentTime = useSelector((state) => state.audioCurrentTime);
    const audioDuration = useSelector((state) => state.audioDuration);
    const isplaying = useSelector((state) => state.isPlaying); 
    const bitRate = useSelector((state) => state.bitRate);
    const coor = useSelector((state) => state.coor);
    
    
    const screenRef = useRef(screen);

    useEffect(() => {
      setScreen(audioCurrentTime);
      console.log(audioCurrentTime);
    }, [audioCurrentTime]);

    useEffect(() => {
      screenRef.current = screen;
    }, [screen]);

    

    function accionMeGustaColeccion(){
        alert(isplaying)
    }

    const dicc = {'false': 'true', 'true': 'false'}
    function playActualAudio(){
      if(onceFlag === 0){
        //alert('primer')
        onceFlag = 1
        play(coor == -1 ? 0 : coor, 'false', bitRate, '')
        store.dispatch(updateIsPlaying('false'));
      } else {
        play(coor == -1 ? 0 : coor, dicc[isplaying], bitRate, '')
        store.dispatch(updateIsPlaying(dicc[isplaying]));
      }
      coor == -1 ? store.dispatch(updateCoor(0)) : null;
    }

    function nextAudio(){
      localAudioCoor = (arrePa.length > coor + 1) ? coor + 1 : 0;
      //console.log(`localAudioCoor next: ${localAudioCoor}`);
      store.dispatch(updateIsPlaying('false'));
      store.dispatch(updateCoor(localAudioCoor));
      play(coor, 'false', bitRate, '')
    }

    function previousAudio(){
      localAudioCoor = (0 <= coor-1) ? coor-1: arrePa.length - 1; 
      //console.log(`localAudioCoor previus: ${localAudioCoor}`);
      store.dispatch(updateIsPlaying('false'));
      store.dispatch(updateCoor(localAudioCoor));
      play(coor, 'false', bitRate, '')
    }

  const imageUrl = isplaying === 'true'
  ? 'https://res.cloudinary.com/dplncudbq/image/upload/v1697071086/play_qqpavo_11_11zon_thomtc.webp'
  : 'https://res.cloudinary.com/dplncudbq/image/upload/v1697071086/pause_vae5ou_10_11zon_dr8qjm.webp';

  const screenWidth = Dimensions.get('window').width;
  const styleImagesPlayer = { height: 40, width: 40, backgroundColor: 'trasnparent' }//screenWidth >= 1200 ? { height: 40, width: 40 } : { height: 40, width: 40 }; 

  return (
    <View style={styles.audioPlayer.contenedorPlayer}>
      <View style={styles.audioPlayer.contenedoresPlayerHijos}>
        <Pressable onPress={accionMeGustaColeccion}>
          <Image style={styleImagesPlayer} source={{ uri: 'https://res.cloudinary.com/dplncudbq/image/upload/v1697071113/cora_l5a4yp_7_11zon_jcaoae.webp' }}/>
        </Pressable>
        <Pressable onPress={previousAudio}>
          <Image style={styleImagesPlayer} source={{ uri: 'https://res.cloudinary.com/dplncudbq/image/upload/v1697071087/atras_lfyntg_8_11zon_q2iuij.webp' }}/>
        </Pressable>
        <Pressable onPress={playActualAudio}>
          <Image style={styleImagesPlayer} source={{uri: imageUrl}} />
        </Pressable>
        <Pressable onPress={nextAudio}>
          <Image style={styleImagesPlayer} source={{ uri: 'https://res.cloudinary.com/dplncudbq/image/upload/v1697071086/adelante_ztqvpx_9_11zon_wtrpxv.webp' }}/>
        </Pressable>
        <Pressable onPress={accionMeGustaColeccion}>
          <Image style={styleImagesPlayer} source={{ uri: 'https://res.cloudinary.com/dplncudbq/image/upload/v1693363915/flecha_cjzjxx.png' }}/>
        </Pressable>
      </View>
      {Platform.OS === 'web' && (
        <View style={[styles.audioPlayer.contenedoresPlayerHijos, styles.audioPlayer.paddingBottomPlayer]}>
          <Text style={[styles.generalStyles.letterColors.color1, styles.generalStyles.contentText,]}>{audioCurrentTime !== null && !isNaN(audioCurrentTime) ? seconToMinute(audioCurrentTime) : '00:00'} min.</Text>
          <Slide newValue={audioCurrentTime} /> 
          <Text style={[styles.generalStyles.letterColors.color1, styles.generalStyles.contentText, ]}>{audioDuration !== null && isNaN(audioDuration) ? 0 : seconToMinute(audioDuration)} min.</Text>
        </View>
      )}
    </View>
  );
};//{audioCurrentTime !== null && !isNaN(audioCurrentTime) ? seconToMinute(audioCurrentTime) : '00:00'}

export default Player;