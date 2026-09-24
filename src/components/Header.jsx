import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../constants/colors';

export default function Header({META}){
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>💧 Diário de Hidratação</Text>
            <Text style={Styles.subtitle}>Meta diária: {META}ml</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginBottom: 24,
    },

    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.textMain,
    },

    subtitle:{
        fontSize: 14,
        color: COLORS.textMuted,
        marginTop: 4,
    },
})
