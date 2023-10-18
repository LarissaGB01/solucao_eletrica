import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas
import Home from './screens/Home';
import Dimensionamento from './screens/Dimensionamento';
import FormCabeamento from './screens/FormCabeamento';
import Calculos from './screens/Calculos';

const Tab = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerBackButtonMenuEnabled: true, headerTintColor: '#D25719'}}>
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                <Tab.Screen name="FormCabeamento" component={FormCabeamento} options={{ title: "Form" }}/>
                <Tab.Screen name="DadosDimencionamento" component={Dimensionamento} options={{ title: "Resposta" }}/>
                <Tab.Screen name="Calculos" component={Calculos} options={{ title: "Passo a Passo" }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}