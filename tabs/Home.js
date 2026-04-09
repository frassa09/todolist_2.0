import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TaskItem from '../components/TaskItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import { taskClassification } from '../utils/tasks_classifications'

export default function Home( { db } ) {

  const [numeroTarefas, setNumeroTarefas] = useState(0)

  useEffect(() => {


  }, [])


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F0F1F2'}}>
      <View style={styles.header}>
        <Text style={[styles.main_title, styles.default_font]}>TaskCurator</Text>
      </View>

      <View style={styles.container_desc1}>
        <Text style={[styles.default_font, {fontSize: 40}]}>
          Tarefas Atuais
        </Text>
        <Text style={[styles.default_font, {fontSize: 20}]}>
          {numeroTarefas} tarefas pendentes
        </Text>
      </View>

      { }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main_title: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#6B95B6'
  },
  container_tasks: {
    alignItems: 'center'
  },
  default_font: {
    fontFamily: 'Main-Font'
  },
  header: {
    backgroundColor: '#E1E3E4',
    height: 70,
    justifyContent: 'center'
  },
  container_desc1: {
    margin: 30
  }
})