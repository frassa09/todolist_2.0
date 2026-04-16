import AsyncStorage from "@react-native-async-storage/async-storage"
import { databaseKeys } from "../utils/database_keys"

export const idWasUsed = async (id) => {

    try {
        const ids = await AsyncStorage.getItem(databaseKeys.used_ids)

        const parsedIds = JSON.parse(ids)

        for(const actualId of parsedIds){

            if(actualId === id){
                return false
            }
        }

        return true
    }
    catch(e){
        console.log(e)
    }


}