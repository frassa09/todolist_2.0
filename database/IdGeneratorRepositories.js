import AsyncStorage from "@react-native-async-storage/async-storage"

export const idWasUsed = async (id) => {

    try {
        const ids = await AsyncStorage.getItem('used_ids')

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