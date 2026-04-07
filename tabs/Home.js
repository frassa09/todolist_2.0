import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskItem from '../components/TaskItem'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.main_title}>TaskCurator</Text>
      </View>

      <View>
        <TaskItem tituloTarefa={'slassla'}></TaskItem>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main_title: {
    fontSize: 30,
    alignSelf: 'center'
  }
})