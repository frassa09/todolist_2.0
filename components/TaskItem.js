import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
import { taskClassification } from '../utils/tasks_classifications'

export default function TaskItem({ tituloTarefa, urgencia, tipo }) {

  const [isChecked, setIsChecked] = useState(false)

  return (
    <View style={styles.container_tarefa}>
      <View>
        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', flex: 1 }}>
          <Checkbox value={isChecked} color={''} style={styles.checkbox_tarefa}></Checkbox>
          <Text style={styles.titulo_tarefa}>{tituloTarefa}</Text>
        </View>
        <Text>
          {taskClassification.normal.text}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  titulo_tarefa: {
    fontSize: 15,
  },
  container_tarefa: {
    borderWidth: 0.5,
    width: 400,
    height: 150,
    borderRadius: 10
  },
  checkbox_tarefa: {
    marginLeft: 10,
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
  }
})