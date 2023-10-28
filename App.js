import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Rotas from './src/Rotas.js';

export default function App() {
  return ( 
    <SafeAreaView style={ estilos.safeArea }>
      <StatusBar hidden={ false } style={ "default" } />
      <Rotas />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
