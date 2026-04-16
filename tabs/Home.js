import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TaskItem from '../components/TaskItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import { taskClassification } from '../utils/tasks_classifications'
import { getAllTasks } from '../database/TasksRepositories'
import TaskInput from '../components/TaskInput'

export default function Home() {

  const [numeroTarefas, setNumeroTarefas] = useState(0)
  const [tasks, setTasks] = useState([])
  const [modalInputTaskIsVisible, setModalInputTaksIsVisible] = useState(false)


  useEffect(() => {

    const loadTasks = async () => {

      const tasks = await getAllTasks()

      setTasks(tasks)
      setNumeroTarefas(tasks.length)
    }

    loadTasks()

  }, [])

  const setModalFalse = () => {
    setModalInputTaksIsVisible(false)
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F1F2' }}>
        <View style={styles.header}>
          <Text style={[styles.main_title, styles.default_font]}>TaskCurator</Text>
        </View>

        <View style={styles.container_desc1}>
          <Text style={[styles.default_font, { fontSize: 40 }]}>
            Tarefas Atuais
          </Text>
          <Text style={[styles.default_font, { fontSize: 20 }]}>
            {numeroTarefas} tarefas pendentes
          </Text>
        </View>

        {!modalInputTaskIsVisible ?

          <View style={styles.container_tasks}>

            {tasks.length == 0 ?
              <View style={{ marginBottom: 200 }}>
                <Text style={[{ textAlign: 'center' }]}>
                  Você ainda não tem nenhuma tarefa
                </Text>
                <TouchableOpacity style={[styles.btn_create_task]} onPress={() => setModalInputTaksIsVisible(true)}>
                  <Text style={[styles.default_font]}>
                    Crie uma nova tarefa clicando aqui!
                  </Text>
                </TouchableOpacity>
              </View>
              : <View>
                {tasks.map((task) => {
                  return
                })}
              </View>}
          </View> :

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TaskInput closeModal={setModalFalse}></TaskInput>
          </View>}



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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  btn_create_task: {
    marginTop: 20,
    height: 30,
    backgroundColor: '#6B95B6',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    borderRadius: 10
  }
})