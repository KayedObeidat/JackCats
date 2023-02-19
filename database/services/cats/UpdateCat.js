import { DatabaseConnection } from "../../database-connection";

const db = DatabaseConnection.getConnection()

export function updateCat (obj) {
    return new Promise ((resolve, reject) => {
        db.transaction(tx =>{ 
            tx.executeSql(
                'update cats set catName = ?, catAge = ?, catBreed = ?, description = ? where catID = ?',
                [obj.catName, obj.catAge, obj.catBreed, obj.description, obj.catID],
                (txObj, resultSet) => {
                    if (resultSet.rowsAffected > 0) {
                        resolve(resultSet.rowsAffected)
                    } else {
                        reject('Error while updating cat' + JSON.stringify(obj))
                    }
                },
                (txObj, error) => {
                    reject(error)
                }
            )
        })
    })
}