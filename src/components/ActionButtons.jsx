import { View, Text, Pressable } from 'react-native';


export default function ActionButtons(){
    return(
      <View>
        <Text>Adicionar consumo:</Text>

        <Pressable><Text>+200 ml</Text></Pressable>

        <Pressable><Text>+350 ml</Text></Pressable>

        <Pressable><Text>+500 ml</Text></Pressable>
        
      </View>
    )
}