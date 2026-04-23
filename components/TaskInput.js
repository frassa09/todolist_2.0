import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ScrollView, View } from 'moti'
import React, { useState } from 'react'

import { Modal, TextInput } from 'react-native'
import Ionicons from '@react-native-vector-icons/ionicons'
import { SelectList } from 'react-native-dropdown-select-list'
import { taskClassification } from '../utils/tasks_classifications'
import { saveTask } from '../database/TasksRepositories'

export default function TaskInput({ closeModal }) {

    const [titulo, setTitulo] = useState(undefined)
    const [descricao, setDescricao] = useState(undefined)
    const [prioridade, setPrioridade] = useState(undefined)

    const data = [
        { key: '1', value: 'Normal' },
        { key: '2', value: 'Urgente' },
        { key: '3', value: 'Não-Urgente' }
    ]

    const salvarTarefa = async () => {

        console.log('funcao chamada')

        if (!titulo || !descricao || !prioridade) {
            return alert('Preencha todos os campos corretamente para criar uma tarefa')
        }

        let prioridadeEscolhida

        switch (prioridade) {
            case '1': prioridadeEscolhida = taskClassification.normal
                break
            case '2': prioridadeEscolhida = taskClassification.urgente
                break
            case '3': prioridadeEscolhida = taskClassification.nao_urgente
        }

        const tarefa = {
            titulo,
            descricao,
            prioridadeEscolhida
        }

        await saveTask(tarefa)
        closeModal()
    }


    return (
        <View style={styles.main_container} from={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: 'timing', duration: 300 }} exit={{ opacity: 0, scale: 0.9 }}>
            <View style={{ marginBottom: 20, marginLeft: 10 }}>
                <TouchableOpacity onPress={closeModal}>
                    <Ionicons name='close' size={30}></Ionicons>
                </TouchableOpacity>
            </View>

            <View style={{ gap: 10, marginBottom: 40 }}>
                <Text style={{ textAlign: 'center' }}>
                    Insira o título da sua tarefa
                </Text>
                <TextInput style={styles.input_title_task} multiline={true} value={titulo} onChangeText={(text) => setTitulo(text)}></TextInput>
                <Text style={{ textAlign: 'center' }}>
                    Insira a descrição da sua tarefa
                </Text>
                <TextInput style={styles.input_desc_task} multiline={true} value={descricao} onChangeText={(text) => setDescricao(text)}></TextInput>

                <SelectList data={data} placeholder='Selecione a prioridade' searchPlaceholder='Buscar' setSelected={(val) => {
                    setPrioridade(val)
                    console.log(val)
                }} boxStyles={{ width: 400, alignSelf: 'center', marginTop: 10 }} dropdownStyles={{ width: 400, alignSelf: 'center', marginTop: 10 }}></SelectList>

                <TouchableOpacity style={[{ justifyContent: 'center', alignSelf: 'center', backgroundColor: '#90aab6ff', height: 30, width: 100, borderRadius: 10, alignItems: 'center', marginTop: 10 }]} onPress={() => salvarTarefa()}>
                    <Text>
                        Criar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: '#aac0caff',
        minHeight: 400,
        width: 700,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 50
    },
    input_title_task: {
        backgroundColor: '#90aab6ff',
        width: 500,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        paddingHorizontal: 10

    },
    input_desc_task: {
        backgroundColor: '#90aab6ff',
        width: 500,
        height: 100,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        paddingHorizontal: 10
    }
})