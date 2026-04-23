import AsyncStorage from "@react-native-async-storage/async-storage"
import { databaseKeys } from "../utils/database_keys"
import { generateId } from "../utils/unique_serial_id_generator"


export const initializeDatabase = async () => {

    try {
        const tasksDatabase = await AsyncStorage.getItem(databaseKeys.tasks)
        const idsDatabase = await AsyncStorage.getItem(databaseKeys.used_ids)
        
        if(!tasksDatabase || !idsDatabase){
            if(!tasksDatabase){
                await AsyncStorage.setItem(databaseKeys.tasks, JSON.stringify([]))
            }
            if(!idsDatabase){
                await AsyncStorage.setItem(databaseKeys.used_ids, JSON.stringify([]))
            }
        }
    }
    catch(e){
        console.log(e)
    }
}


export const getAllTasks = async () => {

    try {

        const tasks = await AsyncStorage.getItem(databaseKeys.tasks)

        console.log(`array retornado: ${tasks}`)
        return JSON.parse(tasks)
    }
    catch (e) {

        console.log(e)
    }
}


export const saveTask = async (task) => {

    try {

        const tasks = await getAllTasks()

        console.log(tasks)

        const idTask = await generateId(tasks)

        task.id = idTask

        tasks.push(task)

        await AsyncStorage.setItem(databaseKeys.tasks, JSON.stringify(tasks))

        
    }
    catch (e) {

    }
}