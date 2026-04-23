import AsyncStorage from "@react-native-async-storage/async-storage"
import { getAllUsedIds, idWasUsed } from "../database/IdGeneratorRepositories"
import { databaseKeys } from "./database_keys"


export const generateId = async (tasks) => {

    try {

        let possibleId = tasks.length
        let idIsOccupied = true

        const usedIds = await getAllUsedIds()

        if (usedIds.length > 0) {
            while (idIsOccupied) {

                idIsOccupied = usedIds.includes(possibleId)

                if (idIsOccupied) {
                    possibleId += 1
                }
            }
        }

        usedIds.push(possibleId)

        await AsyncStorage.setItem(databaseKeys.used_ids, JSON.stringify(usedIds))

        return possibleId

    }
    catch (e) {
        console.log(e)
    }
}
