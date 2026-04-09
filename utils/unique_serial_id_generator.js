import { idWasUsed } from "../database/IdGeneratorRepositories"


const generateId = (tasks) => {

    try {
        
        let possibleId = tasks.length
        let idIsOccupied = true

        while(idIsOccupied){

            idIsOccupied = verifyId(possibleId)

            if(idIsOccupied){
                possibleId += 1
            }
        }

        return possibleId

    }
    catch(e){
        console.log(e)
    }
}

const verifyId = async (possibleId) => {

    const idIsOccupied = await idWasUsed(possibleId)

    return idIsOccupied
}