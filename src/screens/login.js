import React, { useState, useEffect, useCallback, useRef  } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import store from '../funciones/redux/store';
import { updateActualScreen } from '../funciones/redux/actions';
import styles from '../funciones/styles.js/globalStyles';
import { play } from '../funciones/player/play';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [urlPhoto, setUrlPhoto] = useState('https://res.cloudinary.com/dplncudbq/image/upload/v1692978375/mias/f5_khcjl4.png');
  const [screen, setScreen] = useState('')
  const arrPhotos = [
    'https://res.cloudinary.com/dplncudbq/image/upload/v1696908662/f2_pm0tas_5_11zon_iuo7iq.webp',
    'https://res.cloudinary.com/dplncudbq/image/upload/v1696908663/f3_w6ble7_6_11zon_r9zfj1.webp',
    'https://res.cloudinary.com/dplncudbq/image/upload/v1696908664/f4_a6b89j_7_11zon_y00zoz.webp',
    'https://res.cloudinary.com/dplncudbq/image/upload/v1696908664/f6_kg2owd_8_11zon_qzgmse.webp',
    'https://res.cloudinary.com/dplncudbq/image/upload/v1696908665/h18_pppjp9_2_11zon_bmc02p.webp',
    'https://res.cloudinary.com/dplncudbq/image/upload/v1696994289/PhotoReal_awesome_city_4k_sun_shine_0_11zon_f6uqjp.webp',
  ];

  const bitRate = useSelector((state) => state.bitRate);
  useEffect(() => {
    play('', '', bitRate, 'preload')
  }, []);

  const actualScreen = useSelector((state) => state.actualScreen); 
  const screenRef = useRef(screen);

  useEffect(() => {
    setScreen(actualScreen);
    console.log(actualScreen);
  }, [actualScreen]);

  useEffect(() => {
    screenRef.current = screen;
    changeFontImage()
  }, [screen]);

  function changeFontImage() {
    console.log(screenRef.current);
    if (screenRef.current === 'Login') {
        const randomNum = Math.floor(Math.random() * (arrPhotos.length - 1)) + 1;
        console.log(randomNum);
        setUrlPhoto(arrPhotos[randomNum]);
        setTimeout(changeFontImage, 2000);
    }
  }

  const handleLogin = () => {
    store.dispatch(updateActualScreen('MusicPlayer'));
    navigation.navigate('MusicPlayer');
  };

  const screenWidth = Dimensions.get('window').width;
  let acc = screenWidth > 1200

  return (
    <View style={styles.app.containerApp}>
    <View style={styles.login.container}>
        <View style={[styles.login.content, styles.generalStyles.fontColors.color4]}>
          {acc ? (
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.login.loginBox, styles.generalStyles.fontColors.color1]}>
                <Text style={[styles.generalStyles.tittleText, styles.generalStyles.letterColors.color1]}>Login</Text>
                <TextInput
                  style={[styles.login.input, styles.generalStyles.letterColors.color1, styles.generalStyles.contentText]}
                  placeholder="User name"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholderTextColor="#ffffff"
                />
                <TextInput
                  style={[styles.login.input, styles.generalStyles.letterColors.color1, styles.generalStyles.contentText]}
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  placeholderTextColor="#ffffff"
                />
                <Pressable onPress={handleLogin}>
                  <Text style={[styles.generalStyles.tittleText, styles.generalStyles.letterColors.color1, styles.login.boton, styles.generalStyles.fontColors.color1,]}>Log in</Text>
                </Pressable>
                <Text style={[styles.generalStyles.letterColors.color1, styles.generalStyles.contentText, styles.generalStyles.contentText,]}>¿Did you forget your password?</Text>
              </View>
              <ImageBackground
                source={{ uri: urlPhoto }}
                style={[
                  styles.login.backgroundImageLogin,
                  {/*{ opacity: fadeInOpacity }*/},
                ]}
              />
            </View>
          ) : (
            <ImageBackground
              source={{ uri: urlPhoto }}
              style={[
                styles.login.backgroundImageLoginPhone,
                {/*{ opacity: fadeInOpacity }*/}
              ]}
              blurRadius={5}
            >
              <View style={[styles.login.loginBoxPhone, styles.generalStyles.fontColors.color1]}>
                <Text style={[styles.generalStyles.tittleText, styles.generalStyles.letterColors.color1]}>Login</Text>
                <TextInput
                  style={[styles.login.input, styles.generalStyles.letterColors.color1, styles.generalStyles.contentText,]}
                  placeholder="User name"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholderTextColor="#ffffff"
                />
                <TextInput
                  style={[styles.login.input, styles.generalStyles.letterColors.color1, styles.generalStyles.contentText,]}
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  placeholderTextColor="#ffffff"
                />
                <Pressable onPress={handleLogin} style={[]}>
                  <Text style={[styles.generalStyles.tittleText, styles.generalStyles.letterColors.color1, styles.login.boton, styles.generalStyles.fontColors.color1]}>Log in</Text>
                </Pressable>
                <Text style={[styles.generalStyles.letterColors.color1, styles.generalStyles.contentText]}>¿Did you forget your password?</Text>
              </View>
            </ImageBackground>
          )}
        </View>
    </View>
    </View>
  );
}







