import React from 'react';
import { Text, View } from 'react-native';


import styles  from './styles.js';

 export function ScreenA() {
  return (
    <View style={styles.screen} >
        <Text style={styles.text}>
        Tela A
        </Text>
    </View>
  );
}

