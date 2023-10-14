/*import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { View, Text, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Player from '../components/player';
import { Audio } from 'expo-av';

export default function routes() {
  const navigation = useNavigation();

  const handleNavigation = (text) => {
    navigation.navigate(text);
  };

  return (
    <View>
      <Pressable onPress={() => handleNavigation('Routes')}>
        <Text>routes</Text>
      </Pressable>
      <Pressable onPress={() => handleNavigation('Login')}>
        <Text>Login</Text> {/* Usa el componente correctamente }
      </Pressable>
      <Pressable onPress={() => handleNavigation('ContacUS')}>
        <Text>ContactUS</Text> {/* Usa el componente correctamente }
      </Pressable>
      
    </View>
  );
}*/


/*/import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Hello2() {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.openDrawer(); // Abre el menú deslizable
  };

  return (
    <View>
      <Text>Hello2 Screen</Text>
      <Button title="Open Menu" onPress={handleNavigation} />
    </View>
  );
}*/