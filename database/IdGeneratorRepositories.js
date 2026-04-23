import AsyncStorage from "@react-native-async-storage/async-storage"
import { databaseKeys } from "../utils/database_keys"

export const idWasUsed = async (id) => {

    try {
        const ids = await AsyncStorage.getItem(databaseKeys.used_ids)

        const parsedIds = JSON.parse(ids)

        if (parsedIds.length > 0) {
            return parsedIds.includes(id)
        }

        return false

        
    }
    catch (e) {
        console.log(e)
    }
}

export const getAllUsedIds = async () => {

    try {

        const data = await AsyncStorage.getItem(databaseKeys.used_ids)

        return JSON.parse(data)
    }
    catch(e){
        console.log(e)
        return e
    }
}