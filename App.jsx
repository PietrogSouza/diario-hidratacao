import { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


// CORREÇÃO DOS CAMINHOS: Removido o "./src" duplicado, pois os arquivos já estão a partir da raiz
import { COLORS } from './src/constants/colors';
import Header from './src/components/Header';
import WaterProgress from './src/components/WaterProgress';
import ActionButtons from './src/components/ActionButtons';

export default function App() {
  const META = 2000; // Meta diária em ml
  const [consumed, setConsumed] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <View style={styles.container}>
          <Header META={META} />
          <WaterProgress consumed={consumed} meta={META} />
          <ActionButtons setConsumed={setConsumed} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
