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
        <StatusBar barStyle={'auto'} />
        <View>

          <Header META={META} />
          <WaterProgress consumed={200} meta={META} />
          <ActionButtons setConsumed={setConsumed} />

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );

}


