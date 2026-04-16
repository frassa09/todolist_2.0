import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Modal, SafeAreaView, TextInput } from 'react-native-web'
import Ionicons from '@react-native-vector-icons/ionicons'

export default function TaskInput({ closeModal }) {

    
    return (
        <Modal transparent={true} onDismiss={true} style={styles.main_container}>
            <View style={styles.main_container}>
                <View style={{ marginBottom: 40, marginLeft: 10 }}>
                    <TouchableOpacity onPress={closeModal}>
                        <Ionicons name='close' size={30}></Ionicons>
                    </TouchableOpacity>
                </View>

                <View style={{ gap: 10, marginBottom: 60 }}>
                    <Text style={{textAlign: 'center'}}>
                        Insira o título da sua tarefa
                    </Text>
                    <TextInput style={styles.input_title_task} multiline={true}></TextInput>
                    <Text style={{ textAlign: 'center' }}>
                        Insira a descrição da sua tarefa
                    </Text>
                    <TextInput style={styles.input_desc_task} multiline={true}></TextInput>

                    <TouchableOpacity style={[{ justifyContent: 'center', alignSelf: 'center', backgroundColor: '#90aab6ff', height: 30, width: 100, borderRadius: 10, alignItems: 'center'}]}>
                        <Text>
                            Criar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 250,
        backgroundColor: '#aac0caff',
        height: 400,
        width: 700,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10
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