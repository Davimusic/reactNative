import React, { Component, useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, Pressable, Image } from 'react-native';
import {Video} from 'expo-av'
import styles from '../funciones/styles.js/globalStyles';
import Menu from '../components/menu';
import { useSelector, useDispatch } from 'react-redux';
import { updateActualScreen } from '../funciones/redux/actions';
import store from '../funciones/redux/store';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default function Photos() {
    const [urlPhoto, setUrlPhoto] = useState('https://res.cloudinary.com/dplncudbq/image/upload/v1692978375/mias/f5_khcjl4.png');
    const [urlVideo, setUrlVideo] = useState('https://res.cloudinary.com/dplncudbq/video/upload/v1692931684/mias/v2_ceuddl.mp4');
    const [screen, setScreen] = useState('')

    let arrPhotos = ['https://res.cloudinary.com/dplncudbq/image/upload/v1696908670/h17_piclf3_1_11zon_y4l9uo.webp',
'https://res.cloudinary.com/dplncudbq/image/upload/v1696908666/h9_mjweif_3_11zon_if4xvg.webp',
'https://res.cloudinary.com/dplncudbq/image/upload/v1696908665/h1_j5kvru_4_11zon_mussck.webp',
'https://res.cloudinary.com/dplncudbq/image/upload/v1696908665/h18_pppjp9_2_11zon_bmc02p.webp',
'https://res.cloudinary.com/dplncudbq/image/upload/v1696908664/f6_kg2owd_8_11zon_qzgmse.webp',
'https://res.cloudinary.com/dplncudbq/image/upload/v1696908664/f5_khcjl4_9_11zon_ut4umb.webp',
'https://res.cloudinary.com/dplncudbq/image/upload/v1696908664/f4_a6b89j_7_11zon_y00zoz.webp',
'https://res.cloudinary.com/dplncudbq/image/upload/v1696908663/f3_w6ble7_6_11zon_r9zfj1.webp',
'https://res.cloudinary.com/dplncudbq/image/upload/v1696908662/f2_pm0tas_5_11zon_iuo7iq.webp'];

    let arrVideos = ['https://res.cloudinary.com/dplncudbq/video/upload/v1692931684/mias/v2_ceuddl.mp4',
                        'https://res.cloudinary.com/dplncudbq/video/upload/v1692931660/mias/v4_mhcssu.mp4'];

    const actualScreen = useSelector((state) => state.actualScreen); 
    const screenRef = useRef(screen);

    const handleVideoPress = (videoUrl) => {
        //setCurrentVideo(videoUrl);
    };

    useEffect(() => {
        setScreen(actualScreen);
        console.log(actualScreen);
    }, [actualScreen]);
    
    useEffect(() => {
        screenRef.current = screen;
        changeFontImage()
    }, [screen]);

    useEffect(() => {
        Promise.all(arrPhotos.map(url => Image.prefetch(url)))
            .then(() => alert('All images preloaded'))
            .catch(err => console.error('Error preloading images', err));
    }, []);


    function changeFontImage() {
        console.log(screenRef.current);
        if (screenRef.current === 'Photos') {
            const randomNum = Math.floor(Math.random() * (arrPhotos.length - 1)) + 1;
            console.log(randomNum);
            //const newLink = await getImageFileWithLowerQuality(arrPhotos[randomNum])
            setUrlPhoto(arrPhotos[randomNum]);
            setTimeout(changeFontImage, 2000);
        }
    }

    async function getImageFileWithLowerQuality(originalUrl) {       
        const fileUrl = originalUrl.split('https://res.cloudinary.com/dplncudbq/image/upload/')[1];
        return `https://res.cloudinary.com/dplncudbq/image/upload/q_50/${fileUrl}`;
    }

    
    
    return (
            <Menu>
                <View style={styles.photos.container}>
                    {/*<Video  no se deja redimenzionar
                        useNativeControls
                        source={{ uri: 'https://res.cloudinary.com/dplncudbq/video/upload/v1692931708/mias/v1_yedzgi.mp4' }}
                        controls={true}
                        style={{ overflow: 'visible', alignSelf: 'stretch', width: screenWidth, height: screenHeight }}
                        resizeMode="cover"
                    />*/}
                    <Pressable onPress={() => handleVideoPress(arrVideos[0])}>
                        <Image source={{ uri: urlPhoto }} style={styles.photos.photo} />
                    </Pressable>
                </View>
            </Menu>
    );
}

