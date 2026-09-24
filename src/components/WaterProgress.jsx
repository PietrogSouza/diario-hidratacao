import { Text, View, StyleSheet } from "react-native";
import { COLORS } from '../constants/colors';



export default function WaterProgress({consumed, meta}) {
     const porcentagem = Math.min(Math.round((consumed / meta) * 100), 100);


    return (
        <View style={styles.container}>
            <Text>Você bebeu {consumed}ml de água hoje.</Text>
            <Text>Você atingiu {porcentagem}% da meta diária</Text>
            <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: `${porcentagem}%`}]}></View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
  container: {
    width: '80%', 
    marginVertical: 20,
    alignItems: 'center',
  },
  
  progressBarBackground: {
    width: '100%',
    height: 14,
    backgroundColor: '#E0E0E0', 
    borderRadius: 7,
    overflow: 'hidden',
  },

  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.secondary, 
    borderRadius: 7,
  },
});
