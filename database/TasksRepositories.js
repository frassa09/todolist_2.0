import AsyncStorage from "@react-native-async-storage/async-storage"


const getAllTasks = async () => {

    try {

        const tasks = await AsyncStorage.getItem('tasks')

        console.log(tasks)
        return tasks
    }
    catch(e){

        console.log(e)
    }
}


const saveTask = async (task) => {

    try {

        const tasks = await getAllTasks()
    }
}