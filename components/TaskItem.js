import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
import { taskClassification } from '../utils/tasks_classifications'
import Ionicons from '@react-native-vector-icons/ionicons'

export default function TaskItem({ tituloTarefa, urgencia, tipo, corTipo }) {

  const [isChecked, setIsChecked] = useState(false)


  return (
    <View style={styles.container_tarefa}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', flex: 1 }}>
            <Checkbox value={isChecked} color={''} style={styles.checkbox_tarefa}></Checkbox>
            <Text style={[styles.titulo_tarefa, styles.default_font]}>{tituloTarefa}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.task_classification, { backgroundColor: urgencia.color }, styles.default_font]}>
              {taskClassification.normal.text}
            </Text>
            <Text style={[styles.task_type, { backgroundColor: corTipo }, styles.default_font]}>
              {tipo}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{ justifyContent: 'center' }}>
          <Ionicons name='ellipsis-vertical' style={{ alignSelf: 'flex-end', justifyContent: 'center', marginRight: 10 }} size={24}></Ionicons>
        </TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  default_font: {
    fontFamily: 'Main-Font'
  },
  titulo_tarefa: {
    fontSize: 15,
  },
  container_tarefa: {
    width: 400,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 20,
    paddingHorizontal: 15,
  },
  checkbox_tarefa: {
    marginLeft: 10,
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
  },
  task_classification: {
    marginLeft: 40,
    borderRadius: 7,
    borderWidth: 1,
    paddingHorizontal: 4,
    height: 20,
    textAlign: 'center',
    width: 100,
    fontSize: 12,
    alignContent: 'center',
    marginTop: 3
  },
  task_type: {
    marginLeft: 5,
    borderRadius: 7,
    borderWidth: 1,
    paddingHorizontal: 4,
    height: 20,
    textAlign: 'center',
    width: 100,
    fontSize: 12,
    alignContent: 'center',
    marginTop: 3
  }
})