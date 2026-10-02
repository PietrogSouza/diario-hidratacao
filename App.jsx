import { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


// CORREÇÃO DOS CAMINHOS: Removido o "./src" duplicado, pois os arquivos já estão a partir da raiz
import { COLORS } from './src/constants/colors';
import Header from './src/components/Header';
import WaterProgress from './src/components/WaterProgress';
import ActionButtons from './src/components/ActionButtons';
import MetaButtons from './src/components/MetaButtons';

export default function App() {
  const [consumed, setConsumed] = useState(0);
  const [meta, setMeta] = useState(2000);

  const handleAddWater = (amount) => {
    setConsumed(consumed + amount)
  }

  const handleReset = () => {
    setConsumed(0)
  }

  const handleAddMeta = (amount) => {
    setMeta(meta + amount)
  }

  const handleRemMeta = (amount) => {
    setMeta(Math.max(0, meta - amount))
  }



  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'auto'} />
        <View>

          <Header META={meta} />
          <MetaButtons 
          META = {meta}
          addMeta={handleAddMeta}
          remMeta={handleRemMeta} />
          <WaterProgress consumed={consumed} meta={meta} />
          <ActionButtons
          onAdd={handleAddWater} 
          onReset={handleReset}
          />

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});

