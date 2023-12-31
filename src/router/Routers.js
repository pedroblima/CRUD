
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'



import StackPessoas from '../screens/ListaPessoas/StackPessoa'
import StackAsync from '../screens/PessoaAsync/StackAsync'

import ListaCarAsync from '../screens/ListaCarro/ListaCarAsync'


const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='StackPessoa'>
            <Drawer.Screen name="Lista de Pessoa" component={StackPessoas} />
            <Drawer.Screen name="Lista com Async" component={StackAsync} />
            <Drawer.Screen name="Lista tarefas" component={ListaCarAsync} />
        </Drawer.Navigator>

    )
} 