import React from 'react';
import { View , Text,Button} from 'react-native';


import  styles  from './styles';

export function ScreenA({navigation}) {
    function OpenScreen(){
        navigation.navigate('screenB',{
            itemId:10,
            name:'Otávio',
        })
    }
  return (
    <View style={styles.screen}>
        <Text style={styles.text}>
            Tela A
        </Text>
        <Button
        title='Ir pra tela B'
        onPress={OpenScreen}
        style={styles.buttom}
        />
    </View>
  );
}