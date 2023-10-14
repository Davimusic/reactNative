import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { file } from '../funciones/dinamicFiles/dinamicFiles';
import styles from '../funciones/styles.js/globalStyles';

const BackgroundImage = ({ children }) => {
  const arrePa = file()
  const coor = useSelector((state) => state.coor); 
  let backgroundImage = coor === -1 ? arrePa[0].imagenAudio : arrePa[coor].imagenAudio;

  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={[styles.backgroundImage.backgroundImageStyle]}
      blurRadius={15}
    >
      {children}
    </ImageBackground>
  );
};

export default BackgroundImage;

