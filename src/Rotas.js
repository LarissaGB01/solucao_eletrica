import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas
import Home from './screens/Home';
import Dimensionamento from './screens/Dimensionamento';

const Tab = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="DadosDimencionamento" component={Dimensionamento} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}