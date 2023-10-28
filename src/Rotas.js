import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas
import Home from './screens/Home';
import BaseTeorica from './screens/BaseTeorica';

import FormCabeamento from './screens/Forms/FormCabeamento';
import FormDisjuntores from './screens/Forms/FormDisjuntores';
import FormEletrodutos from './screens/Forms/FormEletrodutos';

import RespostaCabeamento from './screens/Respostas/RespostaCabeamento';
import RespostaDisjuntores from './screens/Respostas/RespostaDisjuntores';
import RespostaEletrodutos from './screens/Respostas/RespostaEletrodutos';

import Condutores from './screens/Calculos/Condutores';
import Disjuntores from './screens/Calculos/Disjuntores';
import Eletrodutos from './screens/Calculos/Eletrodutos';

const Tab = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerBackButtonMenuEnabled: true, headerTintColor: '#D25719'}}>
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                <Tab.Screen name="BaseTeorica" component={BaseTeorica} options={{ title: "Teoria" }}/>

                <Tab.Screen name="FormCabeamento" component={FormCabeamento} options={{ title: "Form" }}/>
                <Tab.Screen name="FormDisjuntores" component={FormDisjuntores} options={{ title: "Form" }}/>
                <Tab.Screen name="FormEletrodutos" component={FormEletrodutos} options={{ title: "Form" }}/>

                <Tab.Screen name="RespostaCabeamento" component={RespostaCabeamento} options={{ title: "Resposta" }}/>
                <Tab.Screen name="RespostaDisjuntores" component={RespostaDisjuntores} options={{ title: "Resposta" }}/>
                <Tab.Screen name="RespostaEletrodutos" component={RespostaEletrodutos} options={{ title: "Resposta" }}/>
                
                <Tab.Screen name="Condutores" component={Condutores} options={{ title: "Passo a Passo" }}/>
                <Tab.Screen name="Disjuntores" component={Disjuntores} options={{ title: "Passo a Passo" }}/>
                <Tab.Screen name="Eletrodutos" component={Eletrodutos} options={{ title: "Passo a Passo" }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}