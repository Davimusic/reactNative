import { StyleSheet, Dimensions, Window } from 'react-native';
import * as Font from 'expo-font';

Font.loadAsync({
  'NotoSansNKoUnjoined-SemiBold': require('../../../assets/fonts/NotoSansNKoUnjoined-SemiBold.ttf'),
  'Playfair2': require('../../../assets/fonts/Playfair2.ttf'),
  'Montserrat': require('../../../assets/fonts/Montserrat.ttf'),
});


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const { height } = Dimensions.get('window');
let imageTitulo, imageOpciones, titleText, padreConText, textContainer, widthPressableSlider , heightPlayer, heightObjectPlayers
let contText = 0

if(Dimensions.get('window').width > 1200){
    imageTitulo = 10, imageOpciones = 2.5, titleText = 2, contText = 1.5, padreConText= 60, textContainer = 80, widthPressableSlider = 40, heightPlayer = 100, heightObjectPlayers = 80
} else {
    imageTitulo = 40, imageOpciones = 10, titleText = 6,  contText = 4, padreConText = 30, textContainer = 35, widthPressableSlider = 20, heightPlayer = 60, heightObjectPlayers = 90
}



const styles = StyleSheet.create({
    audio: {
        container: {  // audio
            flex: 1,
            paddingTop: 20,
            position: 'sticky',
            zIndex: 30,
            bottom: 0, 
        },
        viewPadre: {
            borderRadius: 25
        },
        contentContainer: {
            flexDirection: 'row',
            margin: 20,
        },
        imageTitulo: {
            width: (screenWidth/100)* imageTitulo,
            height: (screenWidth/100)* imageTitulo,
            borderRadius: 25,
        },
        imageOpciones: {
            width: (screenWidth/100)* imageOpciones,
            height: (screenWidth/100)* imageOpciones,
        },
        textContainer: {
            padding: 10,
            width: (screenWidth/100) * textContainer
        },
        border:{
            borderRadius: 50
        }
    }, generalStyles: {
        fontColors: { // colores generales
            color1: {
            backgroundColor: '#00000080'
            }, 
            color2: {
                backgroundColor: '#00000000'
            }, 
            color3: {
                backgroundColor: '#ffffff'
            }, 
            color4: {
                backgroundColor: '#578A81'
            },
            color5: {
                backgroundColor: '#9236BD'
            }
        },
        letterColors: {
            color1: {
                color: '#ffffff'
            }, 
            color2: {
                color: 'black'
            }, 
            color3: {
        
            }
        },
        tittleText: {
            fontSize: (screenWidth/100)* titleText,
            fontWeight: 'bold',
            fontFamily: 'Montserrat'
        },
        contentText: {
            fontSize: ( screenWidth / 100 ) * contText,
            fontFamily: 'Montserrat'
        },
    }, backgroundImage: {
        backgroundImageStyle: {
            flex: 1,
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
        },
    }, slider: {
        slider: {  
            width: (screenWidth / 100) * widthPressableSlider,
            height: 40,
        }, pressable:{
            width: (screenWidth / 100) * widthPressableSlider,
            backgroundColor: 'rgba(0, 0, 0, 0)'
        },
    }, app: {
        containerApp: {  // app
            flex: 1,
            //backgroundColor: 'black',
        }, containApp: {
            height: (screenHeight / 100) * heightObjectPlayers,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            paddingTop: 40
        }
    }, audioPlayer: {
        contenedorPlayer: { // player
            position: 'sticky',
            //backgroundColor: 'black',
            bottom: 0,
            height: heightPlayer,
            paddingLeft: (screenWidth / 100)*10,
            paddingRight: (screenWidth / 100)*10,
        }, contenedoresPlayerHijos: {
            width: (screenWidth / 100) * 80,
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexWrap: 'wrap', 
        }, paddingBottomPlayer: {
            paddingTop: 20
        },
    }, menu: {
        containerMenu: {
            //flex: 1,
            paddingTop: 10,
            alignItems: 'center',
            position: 'relative'
            
        }, menuItemImage: {
            height: 50,
            width: 50,
        }, header: {
            position: 'absolute',
            top: 0,
            zIndex: 32,
            width: screenWidth,
            height: 70,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
        }, content: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }, paddingTop: {
            paddingTop: (screenHeight/100) * 5
        }, marginRight: {
            marginRight: 20,
        }, itemsContainer: {
            //paddingLeft: 600,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: screenWidth,
        }
    }, login: {
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            },
            content: {
            //backgroundColor: '#000000CC',
            //flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            },
            loginBox: {
            margin: 16,
            padding: 20,
            backgroundColor: '#000000CC',
            width: (screenWidth / 100) * 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
            },
            loginBoxPhone: {
                margin: 16,
            padding: 20,
            backgroundColor: '#000000CC',
            width: (screenWidth / 100) * 80,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
            },
            titleText: {
            fontSize: 24,
            marginBottom: 16,
            color: '#ffffff',
            },
            input: {
            width: '100%',
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: '#ffffff',
            paddingHorizontal: 8,
            marginTop: 16,
            marginBottom: 16,
            backgroundColor: 'transparent',
            },
            backgroundImageLogin: {
            width: (screenWidth / 100) * 30,
            height: (screenWidth / 100) * 30,
            // Otras propiedades de estilo para la imagen de fondo en pantallas grandes
            },
            backgroundImageLoginPhone: {
            width: screenWidth,
            height: screenHeight,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            blurRadius: 15,
            backgroundColor: '#000000CC'
            },
            boton: {
            padding: 10,
            marginTop: (screenHeight / 100) * 5,
            marginBottom: 16,
            borderRadius: 10
            },
    }, contactUs: {
        container: {
            //flex: 1,
            //justifyContent: 'center',
            //alignItems: 'center',
            //backgroundColor: 'gold',
            //position: 'fixed',
            top: (screenHeight / 100) * 10,
          },
          containerChild: {
            justifyContent: 'center',
            alignItems: 'center',
            width: (screenWidth / 100) * 80,
            height: (screenHeight / 100)* 70,
            borderRadius: 25,
            //margin: (screenHeight / 100) * 5,
            padding: (screenHeight / 100) * 5,
        },
          
          inputMessage: {
            width: '100%',
            textAlignVertical: "top",          
            borderBottomWidth: 1,
            borderColor: 'gray',
            borderWidth: 1,
            padding: (screenHeight / 100) * 10,
            margin: 10,
            borderRadius: 15,
            backgroundColor: '#00000080',
            overflow: 'hidden',
          },
    }, photos: {
        container: {
            width: screenWidth, 
            height: window.height,
            backgroundColor: 'gray'
        },
        photo: {
            /*flex: 1,
            //flex: 1,
            //alignSelf: 'stretch',
            //alignSelf: 'stretch',
            overflow: 'visible'*/
            position: 'absolute', 
            top: 0,
            width: (screenWidth / 100) * 100, 
            height: (screenHeight / 100) * 98.5,
        }
    }
});

export default styles;

/**
backgroundImage: {
        backgroundImageStyle: {
            flex: 1,
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
        },
        mirar:{
        paddingLeft: 10,
        paddingRight: 10
    }
 */
