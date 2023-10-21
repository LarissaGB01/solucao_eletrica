import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas
import Home from './screens/Home';
import Dimensionamento from './screens/Dimensionamento';
import FormCabeamento from './screens/FormCabeamento';
import Condutores from './screens/Calculos/Condutores';
import Disjuntores from './screens/Calculos/Disjuntores';
import Eletrodutos from './screens/Calculos/Eletrodutos';
import BaseTeorica from './screens/BaseTeorica';

const Tab = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerBackButtonMenuEnabled: true, headerTintColor: '#D25719'}}>
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                <Tab.Screen name="BaseTeorica" component={BaseTeorica} options={{ title: "Teoria" }}/>
                <Tab.Screen name="FormCabeamento" component={FormCabeamento} options={{ title: "Form" }}/>
                <Tab.Screen name="DadosDimencionamento" component={Dimensionamento} options={{ title: "Resposta" }}/>
                <Tab.Screen name="Condutores" component={Condutores} options={{ title: "Passo a Passo" }}/>
                <Tab.Screen name="Disjuntores" component={Disjuntores} options={{ title: "Passo a Passo" }}/>
                <Tab.Screen name="Eletrodutos" component={Eletrodutos} options={{ title: "Passo a Passo" }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}