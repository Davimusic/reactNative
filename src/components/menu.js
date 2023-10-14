import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Dimensions, StatusBar, Platform, Pressable, Animated   } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styles from '../funciones/styles.js/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { updateActualScreen } from '../funciones/redux/actions';
import store from '../funciones/redux/store';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Menu = ({ children }) => {
  const [isViewVisible, setViewVisible] = useState(false);
  const navigation = useNavigation();

  const actualScreen = useSelector((state) => state.actualScreen);

  const changeDimension = {
    width: screenWidth,
    height: screenHeight - 70,
    position: 'absolute',
    top: 0,
    zIndex: 31,
    alignItems: 'center',
    justifyContent: 'center',
    display: isViewVisible ? 'flex' : 'none',
    //opacity: new Animated.Value(1),
  };

  const toggleView = () => {
    setViewVisible(!isViewVisible);
  };

  const animateOpacity = (value, duration = 500) => {
    Animated.timing(value, {
      toValue: isViewVisible ? 1 : 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const menuAcc = () => {
    toggleView();
    //animateOpacity(changeDimension.opacity);
  };

  const arr = [
    { title: 'Inicio', route: 'Login', image: 'https://res.cloudinary.com/dplncudbq/image/upload/v1697071112/casa_qqdrbh_4_11zon_adezyh.webp' },
    { title: 'Contact', route: 'ContactUs', image: 'https://res.cloudinary.com/dplncudbq/image/upload/v1697071112/lupa_dyyko5_3_11zon_bmtwzx.webp' },
    { title: 'Music player', route: 'MusicPlayer', image: 'https://res.cloudinary.com/dplncudbq/image/upload/v1697071112/suma_lawjmq_2_11zon_wmtzs8.webp' },
    { title: 'Mis Favoritos', route: 'Photos', image: 'https://res.cloudinary.com/dplncudbq/image/upload/v1697071113/cora_l5a4yp_7_11zon_jcaoae.webp' },
    { title: 'Mis Más Reproducidos', route: 'link5', image: 'https://res.cloudinary.com/dplncudbq/image/upload/v1697071086/rellena_ax4iyl_1_11zon_aalbte.webp' },
  ];

  const link = (route) => {
    navigation.navigate(route);
    store.dispatch(updateActualScreen(route));
    toggleView()
  };

  const renderMenuItems = () => {
    return arr.map((item, index) => (
      <Pressable key={index} onPress={() => link(item.route)} style={[styles.menu.itemsContainer, styles.menu.paddingTop]}>
        <View style={{ flexDirection: 'row', width: (screenWidth / 100) * 40 }}>
          <Image source={{ uri: item.image }} style={[styles.menu.menuItemImage, styles.menu.marginRight]} />
          <Text style={[styles.generalStyles.tittleText, styles.generalStyles.letterColors.color2]}>
            {item.title}
          </Text>
        </View>
      </Pressable>
    ));
  };

  return (
    <SafeAreaView style={[styles.menu.containerMenu]}>
      <View style={[styles.menu.header, styles.generalStyles.fontColors.color3]}>
        <Image source={{uri: 'https://res.cloudinary.com/dplncudbq/image/upload/v1697071112/icon_efg3sf_5_11zon_no3hef.webp'}} style={styles.menu.menuItemImage} />
        <Pressable onPress={menuAcc}>
          <Image source={{uri: 'https://res.cloudinary.com/dplncudbq/image/upload/v1697071086/menu_quakfw_6_11zon_alqrty.webp'}} style={styles.menu.menuItemImage} />
        </Pressable>
      </View>
      
        <View style={[changeDimension, styles.generalStyles.fontColors.color3]}>
          {renderMenuItems()}
        </View>
        {children}
      
    </SafeAreaView>
  );
};

export default Menu;






