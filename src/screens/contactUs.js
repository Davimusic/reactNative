import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Pressable } from 'react-native';
import { Icon } from 'react-native-vector-icons';
import styles from '../funciones/styles.js/globalStyles';
import Menu from '../components/menu';
import { useSelector, useDispatch } from 'react-redux';

export default function ContactUS() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = () => {
    // TODO: Send the contact form data to the server
  };

  console.log(useSelector((state) => state.actualScreen));
  
  return (
      <View>
        <Menu>
          <View style={[styles.contactUs.container]}>
            <View style={[styles.contactUs.containerChild, styles.generalStyles.fontColors.color4]}>
              <Text style={[styles.generalStyles.tittleText, styles.generalStyles.letterColors.color1]}>Contact Us</Text>
              <TextInput
                style={[styles.login.input, styles.generalStyles.letterColors.color1, styles.generalStyles.contentText]}
                placeholder="Name"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#ffffff"
              />
              <TextInput
                style={[styles.login.input, styles.generalStyles.letterColors.color1, styles.generalStyles.contentText]}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#ffffff"
              />
              <TextInput
                style={[styles.login.input, styles.generalStyles.letterColors.color1, styles.contactUs.inputMessage, styles.generalStyles.contentText]}
                placeholder="Message"
                value={message}
                multiline={true}
                numberOfLines={4}
                onChangeText={setMessage}
                placeholderTextColor="#ffffff"
              />
              <Pressable onPress={handleSubmit}>
                <Text style={[styles.generalStyles.tittleText, styles.generalStyles.letterColors.color1, styles.login.boton, styles.generalStyles.fontColors.color1]}>Send</Text>
              </Pressable>
            </View>
          </View>
        </Menu>
      </View>
  );
};

