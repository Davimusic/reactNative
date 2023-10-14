import { Dimensions, StyleSheet, Text, View, ImageBackground, Platform, TouchableOpacity } from 'react-native';
import store from '../funciones/redux/store';
import styles from '../funciones/styles.js/globalStyles';
import BackgroundImage from '../components/backgroundImage';
import Menu from '../components/menu';
import AudioPlayer from '../components/audio';
import Player from '../components/player';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';

export default function MusicPlayer(){
    
    return(
        <Provider store={store}>
            <View style={styles.app.containerApp}>
                {Platform.OS === 'web' ? (
                <BackgroundImage>
                    <Menu> 
                    <View style={styles.app.containApp}>
                        <StatusBar style="auto" />
                        {<AudioPlayer />}
                    </View>
                    {<Player/>}
                    </Menu>
                </BackgroundImage>
                ) : (
                <>
                    < BackgroundImage>
                        <Menu>
                            <View style={styles.app.containApp}>
                                <StatusBar style="auto" />
                                <AudioPlayer />
                            </View>
                            <Player/>
                        </Menu>
                    </BackgroundImage>
                    
                </>
                )}
            </View>
        </Provider>
    );
}