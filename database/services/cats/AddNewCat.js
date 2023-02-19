import { DatabaseConnection } from "../../database-connection";

const db = DatabaseConnection.getConnection()

export function addNewCat (obj) {
    return new Promise ((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'insert into cats (catName, catAge, catBreed, description) values (?,?,?,?)',
                [obj.catName, obj.catAge, obj.catBreed, obj.description],
                (txObj, resultSet) => {
                    if (resultSet.rowsAffected > 0) {
                        resolve(resultSet.insertId)
                    } else {
                        reject('Error while adding a new cat' + JSON.stringify(obj))
                    }
                },
                (txObj, error) => {
                    reject(error)
                }
            )
        })
    })
} 