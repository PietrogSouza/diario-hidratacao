import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";


export default function MetaButtons({META, addMeta, remMeta}){
    return(
        <View>
            <Text>Ajusta Meta Diária</Text>
            <View>
                <Pressable onPress={() => remMeta(250)}><Text>-250 ml</Text></Pressable>
                <Text>{META} ml</Text>
                <Pressable onPress={() => addMeta(250)}><Text>+250 ml</Text></Pressable>
            </View>
        </View>
    )

}






